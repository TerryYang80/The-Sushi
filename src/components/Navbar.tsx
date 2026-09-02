import React from 'react';
import { PageTab } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Award, 
  CalendarDays, 
  UtensilsCrossed, 
  Menu as MenuIcon, 
  X,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  cartCount: number;
  openCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Check if currently within operating hours
  const checkIsOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sun, 1 is Mon... 6 is Sat
    const hour = now.getHours();
    const minute = now.getMinutes();
    const curTime = hour + minute / 60;

    // Wed (3), Thu (4), Fri (5) lunch: 11.5 to 14.0
    if ((day === 3 || day === 4 || day === 5) && curTime >= 11.5 && curTime < 14.0) {
      return { open: true, message: "Open for Lunch" };
    }
    // Mon-Fri dinner: 16.5 to 21.0
    if (day >= 1 && day <= 5 && curTime >= 16.5 && curTime < 21.0) {
      return { open: true, message: "Open for Dinner" };
    }
    // Sat-Sun dinner: 16.0 to 21.5
    if ((day === 0 || day === 6) && curTime >= 16.0 && curTime < 21.5) {
      return { open: true, message: "Open for Dinner" };
    }
    return { open: false, message: "Opens at 4:30 PM" };
  };

  const status = checkIsOpen();

  const navItems: { tab: PageTab; label: string; icon?: React.ReactNode }[] = [
    { tab: 'home', label: 'Home' },
    { tab: 'menu', label: 'Menu & Specials' },
    { tab: 'about', label: 'About Us' },
    { tab: 'gallery', label: 'Gallery' },
    { tab: 'location', label: 'Hours & Location' },
    { tab: 'reserve', label: 'Reservations' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#121212] text-neutral-300 text-[11px] py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.open ? 'bg-emerald-400' : 'bg-[#c5a059]'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${status.open ? 'bg-emerald-500' : 'bg-[#c5a059]'}`}></span>
            </span>
            <span className="font-medium text-white tracking-wider text-[11px]">
              {status.open ? 'OPEN NOW' : 'CURRENTLY CLOSED'}: <span className="text-neutral-400">{status.message}</span>
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-neutral-400 hidden sm:inline tracking-wider">2630 Quadra St, Victoria, BC</span>
          </div>
          
          <div className="flex items-center gap-5 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#c5a059]">
              <Award className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="tracking-wider uppercase text-[10px] font-semibold">Best Sushi in Victoria 2023</span>
            </div>
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`} 
              className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 text-neutral-300 font-mono tracking-wider"
            >
              <Phone className="w-3 h-3 text-[#c5a059]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-sm bg-[#1a1a1a] border border-white/20 flex items-center justify-center shadow-lg text-[#c5a059] font-bold group-hover:border-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all">
              <span className="font-jp text-base font-black tracking-tighter">千葉</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-artistic text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#c5a059] transition-colors">
                  CHIBA
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a059] font-semibold">
                  Sushi & Craft
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em]">
                Victoria, BC • Est. 2007
              </p>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            {navItems.map((item) => (
              <button
                key={item.tab}
                id={`nav-link-${item.tab}`}
                onClick={() => setActiveTab(item.tab)}
                className={`py-1 transition-all cursor-pointer ${
                  activeTab === item.tab
                    ? 'text-[#c5a059] border-b border-[#c5a059] font-bold'
                    : 'text-neutral-300 hover:text-[#c5a059]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Quick Order Online Button */}
            <a
              id="header-order-online-btn"
              href={RESTAURANT_INFO.onlineOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Order Online</span>
            </a>

            {/* Cart Drawer Trigger */}
            <button
              id="header-cart-btn"
              onClick={openCart}
              className="relative p-2.5 rounded-sm bg-[#141414] hover:bg-white hover:text-black text-neutral-200 border border-white/10 transition-all cursor-pointer group"
              title="View Order"
            >
              <ShoppingBag className="w-5 h-5 text-[#c5a059] group-hover:text-black transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#c5a059] text-black font-black text-[10px] h-4 w-4 rounded-full flex items-center justify-center ring-2 ring-[#0d0d0d]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-sm lg:hidden bg-[#141414] text-neutral-300 hover:text-white border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0d0d0d]/98 backdrop-blur-xl px-6 pt-4 pb-8 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                activeTab === item.tab
                  ? 'text-[#c5a059] bg-[#1a1a1a] border-l-2 border-[#c5a059]'
                  : 'text-neutral-300 hover:text-[#c5a059] hover:bg-[#141414]'
              }`}
            >
              <span>{item.label}</span>
              {activeTab === item.tab && <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>}
            </button>
          ))}

          <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={RESTAURANT_INFO.onlineOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-[0.2em] text-center"
            >
              <Sparkles className="w-4 h-4" />
              <span>Order Online via Qooway</span>
            </a>
            <button
              onClick={() => {
                setActiveTab('reserve');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              <CalendarDays className="w-4 h-4 text-[#c5a059]" />
              <span>Book Table Reservation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
