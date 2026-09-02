import React, { useState } from 'react';
import { PageTab, MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { AboutPage } from './components/AboutPage';
import { GalleryPage } from './components/GalleryPage';
import { LocationPage } from './components/LocationPage';
import { ReservationsPage } from './components/ReservationsPage';
import { OrderDrawer } from './components/OrderDrawer';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO } from './data/restaurantData';
import { ShoppingBag, CalendarDays, Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (dish: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) => 
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleTabChange = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-[#e5e7eb] font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        cartCount={cartTotalCount}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={handleTabChange}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'menu' && (
          <MenuPage onAddToCart={handleAddToCart} />
        )}

        {activeTab === 'about' && (
          <AboutPage setActiveTab={handleTabChange} />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage />
        )}

        {activeTab === 'location' && (
          <LocationPage />
        )}

        {activeTab === 'reserve' && (
          <ReservationsPage />
        )}
      </main>

      {/* Order / Cart Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Quick Action on Mobile */}
      <div className="lg:hidden fixed bottom-4 inset-x-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 py-3 px-4 rounded-xl bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-2xl transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Tray ({cartTotalCount})</span>
        </button>

        <button
          onClick={() => handleTabChange('reserve')}
          className="py-3 px-4 rounded-xl bg-[#141414]/95 backdrop-blur-md hover:bg-white hover:text-black text-white font-medium text-[11px] uppercase tracking-[0.2em] border border-white/20 flex items-center justify-center gap-1.5 shadow-xl transition-all"
        >
          <CalendarDays className="w-4 h-4 text-[#c5a059]" />
          <span>Reserve</span>
        </button>

        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="p-3 rounded-xl bg-[#141414]/95 backdrop-blur-md hover:bg-white hover:text-black text-[#c5a059] border border-white/20 shadow-xl transition-all"
          aria-label="Call Restaurant"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
