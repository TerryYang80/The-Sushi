import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { 
  Search, 
  Sparkles, 
  ExternalLink, 
  Plus, 
  Check, 
  Filter, 
  X, 
  Info, 
  Flame, 
  Leaf, 
  Fish,
  Utensils
} from 'lucide-react';

interface MenuPageProps {
  onAddToCart: (dish: MenuItem) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const handleAdd = (dish: MenuItem) => {
    onAddToCart(dish);
    setAddedIds((prev) => [...prev, dish.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== dish.id));
    }, 1500);
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchCat = selectedCategory === "All" || item.category === selectedCategory;

      // Query match
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        item.name.toLowerCase().includes(query) ||
        (item.japaneseName && item.japaneseName.includes(query)) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      // Filter tags
      let matchFilter = true;
      if (selectedFilter === "chef") matchFilter = item.badge === 'Chef Choice' || item.badge === 'Award Winner';
      if (selectedFilter === "popular") matchFilter = item.badge === 'Popular';
      if (selectedFilter === "veg") matchFilter = item.badge === 'Vegetarian';
      if (selectedFilter === "wild") matchFilter = item.badge === 'Local BC Wild';
      if (selectedFilter === "spicy") matchFilter = item.badge === 'Spicy';

      return matchCat && matchQuery && matchFilter;
    });
  }, [selectedCategory, searchQuery, selectedFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header Banner */}
      <div className="relative bg-[#141414] border border-white/10 p-8 sm:p-14 overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
          <img 
            src="./images/slides/slide_01.jpg" 
            alt="Sushi" 
            className="w-full h-full object-cover filter contrast-125" 
          />
        </div>

        {/* Subtle gold corner accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]"></div>

        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-white/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em]">
            <Utensils className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>AUTHENTIC JAPANESE DINING</span>
          </div>

          <h1 className="font-serif-artistic text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Culinary <span className="italic text-[#c5a059]">Menu</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Freshly prepared using wild Pacific fish, house-made marinades, and classical Japanese traditions. Browse our offerings below or order ahead for quick pickup.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              id="menu-qooway-order-btn"
              href={RESTAURANT_INFO.onlineOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] shadow-md transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Order Online on Qooway</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>

            <a
              id="menu-doordash-btn"
              href={RESTAURANT_INFO.doorDashUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:bg-white hover:text-black text-white font-medium text-[11px] uppercase tracking-[0.2em] transition-all"
            >
              <span>DoorDash Delivery</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              id="menu-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rolls, sashimi, tempura, udon..."
              className="w-full pl-10 pr-10 py-3 bg-[#141414] border border-white/10 text-neutral-100 placeholder-neutral-500 text-xs uppercase tracking-wider focus:outline-none focus:border-[#c5a059] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-[11px]">
            <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-[#c5a059]" /> Tag:
            </span>
            {[
              { id: 'all', label: 'All' },
              { id: 'chef', label: "Chef's Picks" },
              { id: 'popular', label: 'Popular' },
              { id: 'wild', label: 'BC Wild Salmon' },
              { id: 'spicy', label: 'Spicy' },
              { id: 'veg', label: 'Vegetarian' }
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedFilter(tag.id)}
                className={`px-3 py-1.5 whitespace-nowrap text-[10px] uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer border ${
                  selectedFilter === tag.id
                    ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold'
                    : 'bg-[#141414] text-neutral-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-white/10 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] whitespace-nowrap font-medium transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold shadow-sm'
                  : 'bg-[#141414] text-neutral-400 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Item Count */}
      <div className="flex items-center justify-between text-xs text-neutral-400">
        <span>
          Showing <strong className="text-white">{filteredItems.length}</strong> dishes in{' '}
          <strong className="text-[#c5a059] uppercase tracking-wider">{selectedCategory}</strong>
        </span>
        <span className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
          <Info className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>All dishes prepared fresh to order</span>
        </span>
      </div>

      {/* Menu Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center bg-[#141414] border border-white/10 space-y-4">
          <p className="text-neutral-400 text-sm font-light">
            No dishes found matching "<span className="text-white">{searchQuery}</span>".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedFilter("all");
            }}
            className="px-5 py-2.5 bg-[#1a1a1a] border border-white/20 text-[#c5a059] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dish) => {
            const isAdded = addedIds.includes(dish.id);
            return (
              <div
                key={dish.id}
                id={`menu-item-${dish.id}`}
                className="group flex flex-col justify-between bg-[#141414] border border-white/10 hover:border-[#c5a059]/50 overflow-hidden transition-all duration-300 shadow-md"
              >
                {/* Image if available */}
                {dish.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-[#0d0d0d]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {dish.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#c5a059] text-black font-bold text-[10px] uppercase tracking-widest">
                        {dish.badge}
                      </span>
                    )}
                    {dish.pieces && (
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#0d0d0d]/90 text-neutral-300 text-xs font-mono border border-white/10">
                        {dish.pieces}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {!dish.image && dish.badge && (
                          <span className="inline-block mb-2 px-2 py-0.5 text-[9px] uppercase font-bold tracking-[0.2em] bg-[#1a1a1a] text-[#c5a059] border border-[#c5a059]/30">
                            {dish.badge}
                          </span>
                        )}
                        <h3 className="font-serif-artistic text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                          {dish.name}
                        </h3>
                        {dish.japaneseName && (
                          <span className="font-jp text-xs text-neutral-500 tracking-wider">
                            {dish.japaneseName}
                          </span>
                        )}
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-lg font-bold text-[#c5a059] font-mono">
                          ${dish.price.toFixed(2)}
                        </span>
                        {dish.pieces && !dish.image && (
                          <p className="text-[11px] text-neutral-500">{dish.pieces}</p>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
                      {dish.category}
                    </span>

                    <button
                      id={`add-btn-${dish.id}`}
                      onClick={() => handleAdd(dish)}
                      className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.15em] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#c5a059] hover:bg-[#d6b26c] text-black'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Menu Notes & Allergy Warning */}
      <div className="p-6 bg-[#141414] border border-white/10 text-xs text-neutral-400 space-y-2">
        <div className="flex items-center gap-2 text-[#c5a059] font-semibold text-[11px] uppercase tracking-wider">
          <Info className="w-4 h-4" />
          <span>Important Dining & Allergy Notes:</span>
        </div>
        <p className="font-light leading-relaxed">
          If you or anyone in your party has any food allergies or dietary restrictions, please advise our staff in advance when placing your order. Prices and seasonal seafood selections may change without prior notice.
        </p>
      </div>
    </div>
  );
};
