import React from 'react';
import { PageTab } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  ExternalLink,
  Heart,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-neutral-400 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#141414] flex items-center justify-center text-[#c5a059] font-bold text-lg border border-[#c5a059]/40">
                <span className="font-jp font-black">千葉</span>
              </div>
              <div>
                <span className="font-serif-artistic text-2xl font-bold tracking-widest text-white block">
                  CHIBA SUSHI
                </span>
                <span className="text-[10px] text-[#c5a059] uppercase tracking-[0.25em] font-medium">
                  Japanese Restaurant Seafood & Steak
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Victoria's award-winning Japanese destination. Fresh Pacific wild salmon, flame-seared aburi oshi, and authentic sushi crafted with warmth and care since 2007 in Quadra Village.
            </p>

            {/* Award Badge Pill */}
            <div className="inline-flex items-center gap-2.5 p-2.5 pr-4 bg-[#141414] border border-white/10 text-xs shadow-md">
              <img 
                src="./images/award-2023.png" 
                alt="2023 Best Sushi Victoria" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="font-bold text-[#c5a059] block text-xs">Quality Business Awards 2023</span>
                <span className="text-[10px] text-neutral-400 font-light">The Best Sushi Restaurant in Victoria, BC</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif-artistic text-xs font-bold text-white uppercase tracking-[0.25em]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {[
                { tab: 'home' as PageTab, label: 'Home Page' },
                { tab: 'menu' as PageTab, label: 'Full Menu & Specials' },
                { tab: 'about' as PageTab, label: 'Our Story & History' },
                { tab: 'gallery' as PageTab, label: 'Photo Gallery' },
                { tab: 'location' as PageTab, label: 'Hours & Location' },
                { tab: 'reserve' as PageTab, label: 'Table Reservations' },
              ].map((link) => (
                <li key={link.tab}>
                  <button
                    onClick={() => {
                      setActiveTab(link.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-[#c5a059]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Hours */}
          <div className="space-y-3">
            <h4 className="font-serif-artistic text-xs font-bold text-white uppercase tracking-[0.25em]">
              Operating Hours
            </h4>
            <div className="space-y-2.5 text-xs font-light">
              <div>
                <span className="text-white font-medium block">Wed – Fri Lunch</span>
                <span className="text-neutral-400 font-mono">11:30 AM – 2:00 PM</span>
              </div>
              <div>
                <span className="text-white font-medium block">Mon – Fri Dinner</span>
                <span className="text-neutral-400 font-mono">4:30 PM – 9:00 PM</span>
              </div>
              <div>
                <span className="text-white font-medium block">Sat – Sun Dinner</span>
                <span className="text-neutral-400 font-mono">4:00 PM – 9:30 PM</span>
              </div>
            </div>
          </div>

          {/* Connect & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif-artistic text-xs font-bold text-white uppercase tracking-[0.25em]">
              Visit & Contact
            </h4>
            <div className="space-y-2.5 text-xs font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>2630 Quadra St, Victoria, BC V8T 4E4</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#c5a059] font-mono font-medium text-white">
                  (250) 383-9886
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#141414] hover:bg-white hover:text-black text-[10px] uppercase tracking-wider font-medium text-neutral-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#141414] hover:bg-white hover:text-black text-[10px] uppercase tracking-wider font-medium text-neutral-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>
            © {new Date().getFullYear()} Chiba Sushi Japanese Restaurant. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>2630 Quadra Village, Victoria, BC</span>
            <span>•</span>
            <a 
              href={RESTAURANT_INFO.onlineOrderUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#c5a059] hover:underline uppercase tracking-wider text-[11px]"
            >
              Order Online (Qooway)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
