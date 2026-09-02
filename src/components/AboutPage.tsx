import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PageTab } from '../types';
import { Award, Clock, MapPin, Heart, ShieldCheck, Sparkles, Utensils, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
          OUR STORY & PHILOSOPHY
        </span>
        <h1 className="font-serif-artistic text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          The Heart of <span className="italic text-[#c5a059]">Chiba Sushi</span>
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto my-2"></div>
        <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
          Bringing authentic Japanese culinary art, fresh Pacific fish, and warm neighborhood hospitality to Victoria, British Columbia since 2007.
        </p>
      </div>

      {/* Main Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
          <div className="p-6 bg-[#141414] border-l-2 border-[#c5a059] border-y border-r border-white/10 text-neutral-200">
            <p className="font-serif-artistic italic text-lg text-neutral-200 leading-relaxed">
              "Enter the world of Chiba Sushi and find friendly staff and the best place in Victoria to get reasonably priced, top-quality sashimi, sushi, and hot cooked dishes."
            </p>
          </div>

          <p>
            Sushi has been a culinary staple since the second century. Initially, sushi was an ancient preservation technique where fresh fish was packed in fermented rice. By the 14th century, Japanese artisans began incorporating seasoned rice vinegar to enhance flavor, texture, and preservation.
          </p>

          <p>
            Today, sushi has blossomed into a globally celebrated culinary tradition. While vinegared sushi rice remains sacred, modern sushi embraces a vibrant spectrum of ocean treasures: wild British Columbia sockeye salmon, tender albacore tuna, sweet botan ebi, fresh Dungeness crab, Hokkaido scallops, and rich sea urchin.
          </p>

          <p>
            Operating under dedicated chef and ownership since <strong className="text-white font-semibold">2007</strong>, Chiba Sushi proudly moved from downtown Victoria to our charming home in <strong className="text-[#c5a059] font-semibold">Quadra Village</strong> in June 2021 (at 2630 Quadra St, near Hillside).
          </p>

          <p className="font-medium text-white">
            Whether it's your very first trip to our sushi bar or a cherished weekly tradition, our promise to you remains unchanged: every visit to Chiba Sushi is crafted to be a delicious, warm, and memorable experience.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => setActiveTab('reserve')}
              className="px-7 py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] shadow-md transition-all cursor-pointer"
            >
              Book a Table
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className="px-7 py-3.5 border border-white/20 hover:bg-white hover:text-black text-white font-medium text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Explore Our Menu
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="border border-white/10 shadow-xl bg-[#141414]">
              <img
                src="./images/img_2_IMG_8341.jpg"
                alt="Chiba Sushi Victoria Exterior & Platter"
                className="w-full h-56 object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <div className="p-3.5 bg-[#0d0d0d] text-[11px] text-neutral-400 font-serif-artistic tracking-wide">
                Chiba Sushi Restaurant, Victoria BC
              </div>
            </div>

            <div className="border border-white/10 shadow-xl bg-[#141414]">
              <img
                src="./images/gallery/07_IMG_8346.jpg"
                alt="Dining Room Ambiance"
                className="w-full h-44 object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <div className="p-3.5 bg-[#0d0d0d] text-[11px] text-neutral-400 font-serif-artistic tracking-wide">
                Warm Quadra Village Dining Room
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="border border-white/10 shadow-xl bg-[#141414]">
              <img
                src="./images/img_4.jpg"
                alt="Chiba Sushi Quadra Village Entrance"
                className="w-full h-44 object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <div className="p-3.5 bg-[#0d0d0d] text-[11px] text-neutral-400 font-serif-artistic tracking-wide">
                2630 Quadra St near Hillside
              </div>
            </div>

            <div className="border border-white/10 shadow-xl bg-[#141414]">
              <img
                src="./images/gallery/02_IMG_8320.jpg"
                alt="Aburi Oshi Sushi"
                className="w-full h-56 object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <div className="p-3.5 bg-[#0d0d0d] text-[11px] text-neutral-400 font-serif-artistic tracking-wide">
                Flame-Seared Wild Salmon Oshi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Award Feature */}
      <div className="bg-[#141414] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]"></div>

        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <img
            src="./images/award-2023.png"
            alt="Quality Business Award"
            className="w-28 h-28 object-contain shrink-0 filter drop-shadow-md"
          />
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
              OFFICIAL RECOGNITION
            </span>
            <h2 className="font-serif-artistic text-2xl sm:text-3xl font-bold text-white">
              Voted Best Sushi Restaurant in Victoria, BC (2023)
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              We are honored to be named the <strong className="text-[#c5a059] font-medium">#1 Best Sushi Restaurant</strong> by the Quality Business Award platform. This honor reflects our culinary team's unwavering commitment to seafood freshness, customer satisfaction, generous portions, and accessible prices.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Highlights */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
            OUR JOURNEY
          </span>
          <h2 className="font-serif-artistic text-3xl sm:text-4xl font-bold text-white">
            Milestones of <span className="italic text-[#c5a059]">Flavor</span>
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto my-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#141414] border border-white/10 space-y-3">
            <span className="font-serif-artistic text-3xl font-bold text-[#c5a059]">2007</span>
            <h3 className="font-serif-artistic text-xl font-bold text-white">New Ownership & Vision</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Established with an emphasis on authentic Edo techniques, fresh Pacific Northwest ingredients, and friendly neighborhood service in Victoria.
            </p>
          </div>

          <div className="p-8 bg-[#141414] border border-white/10 space-y-3">
            <span className="font-serif-artistic text-3xl font-bold text-[#c5a059]">2021</span>
            <h3 className="font-serif-artistic text-xl font-bold text-white">Move to Quadra Village</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Relocated to 2630 Quadra Street (near Hillside), featuring a comfortable dining room, dedicated sushi bar, and convenient parking for takeout guests.
            </p>
          </div>

          <div className="p-8 bg-[#141414] border border-white/10 space-y-3">
            <span className="font-serif-artistic text-3xl font-bold text-[#c5a059]">2023 - Today</span>
            <h3 className="font-serif-artistic text-xl font-bold text-white">Best Sushi in Victoria</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Awarded Best Sushi Restaurant in Victoria by the Quality Business Awards, continuing to serve both long-time regulars and new sushi lovers daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
