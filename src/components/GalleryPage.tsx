import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Camera,
  Layers
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Special Rolls",
    "Aburi Oshi",
    "Sashimi & Nigiri",
    "Hot Kitchen",
    "Restaurant & Bar"
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
  };

  const showPrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const showNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  const currentItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-white/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em]">
          <Camera className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>ORIGINAL RESTAURANT PHOTOGRAPHY</span>
        </div>
        <h1 className="font-serif-artistic text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Visual <span className="italic text-[#c5a059]">Feast</span>
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto my-2"></div>
        <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
          A collection of authentic photographs showcasing our signature sushi platters, flame-seared aburi oshi, fresh sashimi cuts, and our Quadra Village dining ambiance.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap cursor-pointer border ${
              selectedCategory === cat
                ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold shadow-md'
                : 'bg-[#141414] text-neutral-400 hover:text-white border-white/10 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden bg-[#141414] border border-white/10 hover:border-[#c5a059]/50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0d0d0d]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Category Tag */}
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0d0d0d]/90 text-[#c5a059] font-mono text-[9px] uppercase tracking-[0.2em] border border-white/10">
                {item.category}
              </span>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 p-2 bg-[#0d0d0d]/90 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
              </div>

              {/* Title & Subtitle */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                <h3 className="font-serif-artistic text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div 
            className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#1a1a1a] text-[#c5a059] font-mono text-[10px] uppercase tracking-[0.2em] border border-white/10">
                {currentItem.category}
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {activeItemIndex! + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 bg-[#141414] hover:bg-white hover:text-black text-neutral-200 border border-white/10 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image with navigation */}
          <div 
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto my-4 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[70vh] max-w-full object-contain shadow-2xl border border-white/10"
            />

            {/* Left Button */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 bg-[#141414]/90 hover:bg-[#c5a059] hover:text-black text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 bg-[#141414]/90 hover:bg-[#c5a059] hover:text-black text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div 
            className="text-center max-w-xl mx-auto space-y-1 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif-artistic text-2xl font-bold text-white">
              {currentItem.title}
            </h2>
            <p className="text-xs text-neutral-400 font-light">
              {currentItem.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
