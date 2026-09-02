import React, { useState, useEffect } from 'react';
import { PageTab, MenuItem } from '../types';
import { RESTAURANT_INFO, HERO_SLIDES, MENU_ITEMS, TESTIMONIALS } from '../data/restaurantData';
import { 
  Award, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Phone, 
  Flame, 
  Fish, 
  HeartHandshake, 
  Utensils, 
  Plus, 
  Check,
  Star,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onAddToCart: (dish: MenuItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onAddToCart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [addedItemIds, setAddedItemIds] = useState<string[]>([]);

  // 9 Authentic slides available in /public/images/slides/
  const slides = [
    {
      src: "/images/slides/slide_01.jpg",
      title: "Victoria's Best Sushi",
      subtitle: "Crafted with passion, fresh Pacific seafood, and genuine Japanese hospitality.",
      tag: "Award Winning Taste"
    },
    {
      src: "/images/slides/slide_02.jpg",
      title: "Flame-Seared Aburi Oshi",
      subtitle: "Savory wild sockeye salmon pressed sushi kissed with open flame and chef's artisan glaze.",
      tag: "House Signature"
    },
    {
      src: "/images/slides/slide_03.jpg",
      title: "Pristine Pacific Sashimi",
      subtitle: "Thick, melt-in-your-mouth cuts of ocean-fresh tuna, salmon, hamachi and scallop.",
      tag: "Fresh Daily"
    },
    {
      src: "/images/slides/slide_04.jpg",
      title: "Handcrafted Specialty Rolls",
      subtitle: "From our renowned Jackie Roll and Chiba Roll to crispy sushi pizza and dynamite maki.",
      tag: "Artisanal Maki"
    },
    {
      src: "/images/slides/slide_05.jpg",
      title: "Warm Izakaya & Teppan Entrees",
      subtitle: "Sizzling beef short ribs, broiled black cod miso, hot dashi udon, and golden tempura.",
      tag: "Comfort Cuisine"
    },
    {
      src: "/images/slides/slide_06.jpg",
      title: "A Quadra Village Favorite",
      subtitle: "Serving loyal Victoria locals and visitors delicious Japanese meals since 2007.",
      tag: "Local Heritage"
    },
    {
      src: "/images/slides/slide_07.jpg",
      title: "Artful Presentation",
      subtitle: "Every platter is balanced with precision, color, and culinary harmony.",
      tag: "Culinary Art"
    },
    {
      src: "/images/slides/slide_08.jpg",
      title: "Generous Portions, Fair Prices",
      subtitle: "We believe exceptional sushi should be accessible, plentiful, and satisfying.",
      tag: "Value & Quality"
    },
    {
      src: "/images/slides/slide_09.jpg",
      title: "Dine-In, Takeout & Catering",
      subtitle: "Enjoy a relaxed evening at our sushi bar or take home Victoria's top-rated sushi.",
      tag: "Your Dining Destination"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleQuickAdd = (dish: MenuItem) => {
    onAddToCart(dish);
    setAddedItemIds((prev) => [...prev, dish.id]);
    setTimeout(() => {
      setAddedItemIds((prev) => prev.filter((id) => id !== dish.id));
    }, 1500);
  };

  const signatureDishes = MENU_ITEMS.filter((item) => 
    ["r1", "o1", "r2", "s1", "t1", "a5"].includes(item.id)
  );

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Slideshow Section */}
      <section className="relative overflow-hidden bg-[#0d0d0d] border-b border-white/10">
        <div className="relative h-[560px] sm:h-[640px] lg:h-[720px] w-full">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              {/* Image Background */}
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12] scale-105 transition-transform duration-[8000ms]"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent"></div>

              {/* Watermark Japanese Kanji */}
              <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 font-serif font-bold text-[180px] text-white/[0.02] select-none pointer-events-none tracking-widest">
                千葉
              </div>

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1a1a1a]/80 border border-white/15 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{slide.tag}</span>
                    </div>

                    <h1 className="font-serif-artistic text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                      {slide.title.split(' ')[0]}{' '}
                      <span className="italic font-normal text-[#c5a059]">
                        {slide.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h1>

                    <p className="text-sm sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        id="hero-view-menu-btn"
                        onClick={() => setActiveTab('menu')}
                        className="px-7 py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-lg transition-all hover:scale-105 cursor-pointer"
                      >
                        <Utensils className="w-4 h-4" />
                        <span>Explore Menu</span>
                      </button>

                      <a
                        id="hero-order-online-btn"
                        href={RESTAURANT_INFO.onlineOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-3.5 bg-[#141414]/90 hover:bg-white hover:text-black text-white font-medium text-[11px] uppercase tracking-[0.2em] border border-white/20 backdrop-blur-sm flex items-center gap-2.5 transition-all hover:scale-105"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>Order Online</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>

                      <button
                        id="hero-reserve-btn"
                        onClick={() => setActiveTab('reserve')}
                        className="px-5 py-3.5 text-neutral-300 hover:text-[#c5a059] font-medium text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer"
                      >
                        <span>Reserve a Table</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            id="carousel-prev-btn"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#141414]/80 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/15 transition-all hover:scale-110 cursor-pointer hidden sm:block"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="carousel-next-btn"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#141414]/80 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/15 transition-all hover:scale-110 cursor-pointer hidden sm:block"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-[#0d0d0d]/80 backdrop-blur-md px-4 py-2 border border-white/10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all cursor-pointer ${
                  idx === currentSlide ? 'w-8 bg-[#c5a059]' : 'w-2 bg-neutral-600 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Award Badge Section - High Contrast Editorial block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#141414] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Subtle gold corner border accent */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="relative shrink-0">
                <img 
                  src="/images/award-2023.png" 
                  alt="Quality Business Award 2023 Best Sushi in Victoria, BC" 
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_4px_16px_rgba(197,160,89,0.25)]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute -top-1 -right-1 bg-[#c5a059] text-black text-[10px] font-black px-1.5 py-0.5 uppercase tracking-widest">
                  #1
                </div>
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a059] ml-2">Top Rated Dining</span>
                </div>
                <h2 className="font-serif-artistic text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  The Best Sushi Restaurant in Victoria, BC
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-light leading-relaxed">
                  Selected by the <strong className="text-[#c5a059] font-medium">Quality Business Awards 2023</strong> for outstanding culinary craftsmanship, fresh Pacific fish quality, and exceptional customer satisfaction.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                id="award-view-story-btn"
                onClick={() => setActiveTab('about')}
                className="px-5 py-3 border border-white/20 hover:bg-white hover:text-black text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer"
              >
                Read Our Story
              </button>
              <button
                id="award-view-gallery-btn"
                onClick={() => setActiveTab('gallery')}
                className="px-5 py-3 bg-[#c5a059] hover:bg-[#d6b26c] text-black text-[10px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Pillars Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
            THE CHIBA TRADITION
          </span>
          <h2 className="font-serif-artistic text-3xl sm:text-5xl font-bold text-white">
            Modern Japanese <span className="italic text-[#c5a059]">Craftsmanship</span>
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto my-2"></div>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            From our beginnings in 2007 to our Quadra Village home, we fuse classical Japanese preparation with the rich abundance of British Columbia's coastline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 bg-[#141414] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center border border-white/10 group-hover:border-[#c5a059] transition-colors">
              <Fish className="w-5 h-5" />
            </div>
            <h3 className="font-serif-artistic text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
              Wild BC Pacific Salmon & Tuna
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              We hand-select local British Columbia wild sockeye salmon, rich albacore tuna, and seasonal ocean delicacies fresh every morning for pure, clean flavor.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-[#141414] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center border border-white/10 group-hover:border-[#c5a059] transition-colors">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif-artistic text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
              Flame-Seared Aburi Technique
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Our master sushi chefs torch-sear pressed Oshi sushi to gently caramelize the natural fish fats, infusing each piece with savory smoky complexity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-[#141414] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center border border-white/10 group-hover:border-[#c5a059] transition-colors">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif-artistic text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
              Warm Community & Great Value
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Experience honest, generous portions and warm friendly hospitality in Quadra Village. Quality dining that keeps Victoria regulars coming back.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Signatures with Order Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
              CHEF'S SIGNATURE CREATIONS
            </span>
            <h2 className="font-serif-artistic text-3xl sm:text-5xl font-bold text-white mt-1">
              Guest <span className="italic text-[#c5a059]">Favorites</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
              The dishes that established Chiba Sushi as Victoria's favorite sushi destination.
            </p>
          </div>

          <button
            id="view-all-menu-btn"
            onClick={() => setActiveTab('menu')}
            className="inline-flex items-center gap-2 text-[#c5a059] hover:text-white font-medium text-xs uppercase tracking-[0.2em] group cursor-pointer"
          >
            <span>View Complete Menu (45+ Dishes)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureDishes.map((dish) => {
            const isAdded = addedItemIds.includes(dish.id);
            return (
              <div
                key={dish.id}
                id={`featured-dish-${dish.id}`}
                className="group flex flex-col justify-between bg-[#141414] border border-white/10 hover:border-[#c5a059]/50 overflow-hidden transition-all duration-300 shadow-lg"
              >
                {/* Dish Image */}
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

                {/* Dish Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif-artistic text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                          {dish.name}
                        </h3>
                        {dish.japaneseName && (
                          <span className="font-jp text-xs text-neutral-500 tracking-wider">
                            {dish.japaneseName}
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-[#c5a059] font-mono">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed line-clamp-3 font-light">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
                      {dish.category}
                    </span>

                    <button
                      onClick={() => handleQuickAdd(dish)}
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
      </section>
      {/* Atmospheric Gallery Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
                QUADRA VILLAGE DINING
              </span>
              <h2 className="font-serif-artistic text-3xl sm:text-4xl font-bold text-white leading-tight">
                Authentic Japanese Dining in <span className="italic text-[#c5a059]">Victoria</span>
              </h2>
              <div className="w-12 h-px bg-[#c5a059]"></div>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                Whether you're looking for a cozy sushi bar seat to watch the chef craft your nigiri, or a relaxed dinner table with family and friends, Chiba Sushi offers a warm atmosphere and uncompromised quality.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="px-6 py-3 border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore 15+ Photos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveTab('location')}
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#d6b26c] text-black text-[10px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
                >
                  <span>Find Us in Quadra</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 sm:p-4 bg-[#0d0d0d]">
              <img
                src="/images/gallery/01_IMG_8341.jpg"
                alt="Chiba Sushi Victoria"
                className="w-full h-44 sm:h-52 object-cover filter brightness-90 hover:brightness-100 transition-all"
              />
              <img
                src="/images/gallery/02_IMG_8320.jpg"
                alt="Flame Seared Aburi"
                className="w-full h-44 sm:h-52 object-cover filter brightness-90 hover:brightness-100 transition-all"
              />
              <img
                src="/images/gallery/03_IMG_8343.jpg"
                alt="Fresh Sashimi"
                className="w-full h-44 sm:h-52 object-cover filter brightness-90 hover:brightness-100 transition-all hidden sm:block"
              />
              <img
                src="/images/gallery/07_IMG_8346.jpg"
                alt="Interior Dining"
                className="w-full h-44 sm:h-52 object-cover filter brightness-90 hover:brightness-100 transition-all"
              />
              <img
                src="/images/gallery/05_IMG_8318.jpg"
                alt="Jackie Roll"
                className="w-full h-44 sm:h-52 object-cover filter brightness-90 hover:brightness-100 transition-all"
              />
              <img
                src="/images/gallery/10_IMG_8323.jpg"
                alt="Teppanyaki Entree"
                className="w-full h-44 sm:h-52 object-cover filter brightness-90 hover:brightness-100 transition-all hidden sm:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-serif-artistic text-3xl sm:text-4xl font-bold text-white">
            Loved by Victoria <span className="italic text-[#c5a059]">Diners</span>
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto my-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#141414] border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-[#c5a059]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm font-serif-artistic italic leading-relaxed text-base">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-white tracking-wider text-[11px] uppercase">{t.author}</span>
                <span className="text-neutral-500 font-mono text-[10px]">{t.source}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Action & Contact Banner - High Contrast Editorial Styling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative bg-[#141414] border border-white/10 p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle antique gold vertical accent */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#c5a059]/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]"></div>

          <div className="max-w-2xl space-y-5 relative z-10">
            <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10">
              Reserve Today
            </span>
            <h2 className="font-serif-artistic text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready for an Unforgettable <span className="italic text-[#c5a059]">Sushi Evening?</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Book a table online in seconds or order ahead for quick pickup at 2630 Quadra Street. We look forward to serving you!
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="cta-reserve-btn"
                onClick={() => setActiveTab('reserve')}
                className="px-7 py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                Reserve a Table Online
              </button>
              <a
                id="cta-call-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="px-7 py-3.5 border border-white/20 hover:bg-white hover:text-black text-white font-medium text-[11px] uppercase tracking-[0.2em] transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
