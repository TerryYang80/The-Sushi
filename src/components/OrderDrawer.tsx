import React, { useState } from 'react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Phone,
  Sparkles
} from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'dinein'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  const handleSimulateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `CS-${Math.floor(100 + Math.random() * 900)}`;
    setOrderCode(code);
    setOrderPlaced(true);
  };

  const handleReset = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0d0d0d]/85 backdrop-blur-md animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#141414] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-4 h-4 text-[#c5a059]" />
              <h2 className="font-serif-artistic text-xl font-bold text-white">Your Selection</h2>
              <span className="text-[10px] px-2.5 py-0.5 bg-[#0d0d0d] text-[#c5a059] font-mono border border-white/10 uppercase tracking-wider">
                {cart.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderPlaced ? (
              <div className="py-8 text-center space-y-5 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-[#1a1a1a] border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-[0.25em]">
                    ORDER RECEIVED
                  </span>
                  <h3 className="font-serif-artistic text-2xl font-bold text-white mt-1">
                    Pickup Order #{orderCode}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-2">
                    Estimated ready time: <strong className="text-[#c5a059]">20-25 minutes</strong> at 2630 Quadra Street.
                  </p>
                </div>

                <div className="p-5 bg-[#0d0d0d] border border-white/10 text-left text-xs space-y-2.5 font-light">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Customer:</span>
                    <span className="text-white font-medium">{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Contact:</span>
                    <span className="text-white font-medium">{customerPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Amount Due:</span>
                    <span className="text-[#c5a059] font-mono font-bold">${total.toFixed(2)} CAD</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10">
                    <span className="text-neutral-500">Payment:</span>
                    <span className="text-neutral-300">Pay upon pickup (Debit/Credit/Cash)</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-[#0d0d0d] border border-white/10 text-neutral-500 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif-artistic text-lg text-white font-medium">Your tray is empty</p>
                  <p className="text-xs text-neutral-400 font-light">
                    Browse our menu and add rolls, sashimi, and hot appetizers.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#1a1a1a] border border-white/10 text-[#c5a059] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Return to Menu
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 p-1 bg-[#0d0d0d] border border-white/10 text-[10px] uppercase tracking-wider font-semibold">
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 transition-colors cursor-pointer ${
                      orderType === 'pickup' ? 'bg-[#c5a059] text-black font-bold shadow-sm' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Takeout Pickup
                  </button>
                  <button
                    onClick={() => setOrderType('dinein')}
                    className={`py-2 transition-colors cursor-pointer ${
                      orderType === 'dinein' ? 'bg-[#c5a059] text-black font-bold shadow-sm' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Dine-In Tray
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3 divide-y divide-white/10">
                  {cart.map((item) => (
                    <div key={item.dish.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif-artistic text-base font-bold text-white truncate">
                          {item.dish.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                          <span className="font-mono text-[#c5a059]">
                            ${(item.dish.price * item.quantity).toFixed(2)}
                          </span>
                          <span>•</span>
                          <span className="text-[11px] text-neutral-500 font-mono">
                            ${item.dish.price.toFixed(2)} ea
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-1.5 bg-[#0d0d0d] p-1 border border-white/10">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, -1)}
                          className="p-1 text-neutral-400 hover:text-white hover:bg-white/10 cursor-pointer"
                        >
                          {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-rose-400" /> : <Minus className="w-3.5 h-3.5" />}
                        </button>
                        <span className="text-xs font-mono font-bold text-white px-2 min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, 1)}
                          className="p-1 text-neutral-400 hover:text-white hover:bg-white/10 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Qooway Online Ordering Option */}
                <div className="p-4 bg-[#0d0d0d] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Official Chiba Online Portal
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                    You can also order directly on our official Qooway store for integrated credit card processing and immediate kitchen dispatch.
                  </p>
                  <a
                    href={RESTAURANT_INFO.onlineOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#c5a059] hover:text-[#d6b26c] font-medium"
                  >
                    <span>Open Chiba Qooway Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Quick Pickup Form */}
                <form id="pickup-order-form" onSubmit={handleSimulateOrder} className="space-y-3 pt-2">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                    Quick Pickup Details
                  </span>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Phone Number for Ready SMS"
                    className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                </form>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#0d0d0d] space-y-4">
              <div className="space-y-1.5 text-xs text-neutral-400 font-light">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span className="text-white font-mono">${gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span>Estimated Total (CAD)</span>
                  <span className="text-[#c5a059] font-mono text-base font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  form="pickup-order-form"
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Clock className="w-4 h-4" />
                  <span>Place Quick Pickup Order (${total.toFixed(2)})</span>
                </button>

                <a
                  href={RESTAURANT_INFO.onlineOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#141414] hover:bg-white hover:text-black text-neutral-300 text-[10px] uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                >
                  <span>Or Order with Qooway</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
