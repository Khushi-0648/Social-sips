import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coffee, 
  IceCream, 
  CupSoda, 
  Wine, 
  ArrowRight, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Users
} from 'lucide-react';

const carouselSlides = [
  {
    id: 'coffee',
    tagline: 'Locally Roasted in Florida • Single-Origin Craft',
    title: 'Where Clearwater Awakes with Specialty Coffee',
    highlightWord: 'Specialty Coffee',
    subtitle: 'Savor velvety Spanish Honey Lattes, precision cortados, and 18-hour cold brew in our sun-drenched coastal sanctuary.',
    image: '/images/hero-coffee.jpg',
    icon: Coffee,
    label: 'Specialty Coffee'
  },
  {
    id: 'gelato',
    tagline: 'Authentic Italian Heritage • 24 Daily Flavors',
    title: 'Small-Batch Silk-Churned Artisan Gelato',
    highlightWord: 'Artisan Gelato',
    subtitle: 'Crafted fresh daily with whole Florida dairy, pure Sicilian pistachios, and dairy-free ripe fruit sorbettos.',
    image: '/images/hero-gelato.jpg',
    icon: IceCream,
    label: 'Artisan Gelato'
  },
  {
    id: 'boba',
    tagline: 'Warm Brown Sugar Pearls • Zero Powders',
    title: 'Handcrafted Boba Teas & Ceremonial Matcha',
    highlightWord: 'Handcrafted Boba',
    subtitle: 'Freshly simmered Taiwanese tapioca pearls, ceremonial Uji matcha clouds, and fragrant mountain jasmine fruit teas.',
    image: '/images/hero-boba.jpg',
    icon: CupSoda,
    label: 'Fresh Boba Tea'
  },
  {
    id: 'bar',
    tagline: 'Twilight Hours • Espresso Martinis & Bites',
    title: 'Clearwater’s Day-to-Night Social Lounge & Bar',
    highlightWord: 'Social Lounge',
    subtitle: 'As twilight falls, transition into our relaxed evening lounge featuring our signature Espresso Martini and artisan bites.',
    image: '/images/hero-bar.jpg',
    icon: Wine,
    label: 'Social Bar'
  }
];

export default function HeroBanner({ onOpenReservation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const slide = carouselSlides[currentSlide];

  return (
    <section 
      id="home"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovered(false);
      }}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] sm:min-h-[96vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background Image Carousel with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        {carouselSlides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                currentSlide === idx ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Elegant Cinematic Gradients: Clean and appetizing without muddy haze */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/35" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      {/* Aceternity / Animmaster Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-500 hidden sm:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 141, 59, 0.20), transparent 75%)`
        }}
      />

      {/* Main Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 text-center flex flex-col items-center justify-center space-y-6">
        
        {/* Top Micro Pill: Cafe Coffee Icon & Live Clearwater Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/55 backdrop-blur-md border border-amberGold/40 text-amberGold text-xs font-bold shadow-lg transition-transform hover:scale-105">
          <Coffee className="w-4 h-4 text-amberGold shrink-0" />
          <span className="text-white/90">{slide.tagline}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse ml-1" />
          <span className="text-emerald-300 font-semibold hidden sm:inline">Open Daily 7 AM – 10 PM</span>
        </div>

        {/* Hero Headline with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {slide.title}
            </h1>
            <p className="text-base sm:text-xl text-white/90 font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mx-auto">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons with Aceternity Shimmer & Glassmorphic Styling */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('menu');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-amberGold via-[#E09843] to-[#C27E2B] hover:from-[#e8a350] hover:to-amberGold text-black font-extrabold text-sm sm:text-base shadow-warm-glow hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
          >
            {/* Aceternity Shimmer Beam Light Ray */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10">Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('bulk-orders');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer hover:-translate-y-0.5"
          >
            <Users className="w-4 h-4 text-amberGold" />
            <span>Bulk / Catering</span>
          </button>

          <a
            href="tel:+17272401811"
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-black/60 hover:bg-black/80 text-white font-bold text-sm border border-white/25 backdrop-blur-md transition-all hover:-translate-y-0.5"
            title="Call Social Sips Cafe"
          >
            <Phone className="w-4 h-4 text-amberGold" />
            <span>(727) 240-1811</span>
          </a>
        </div>

        {/* Social Proof Line */}
        <div className="pt-1 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-extrabold text-white">4.9 / 5.0</span>
          <span className="text-white/50">•</span>
          <span>1,280+ verified reviews in Clearwater, FL</span>
        </div>

      </div>

      {/* Carousel Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-110 hover:border-amberGold"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-110 hover:border-amberGold"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modern Interactive Cafe Feature Dock (Inspired by 21st.dev & MotionSites AI) */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 sm:p-2 shadow-2xl flex items-center justify-between gap-1.5 sm:gap-2">
            {carouselSlides.map((s, idx) => {
              const Icon = s.icon;
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-2 sm:px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-amberGold text-black shadow-lg scale-[1.02] border border-amber-300'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-amberGold'}`} />
                  <span className="hidden sm:inline whitespace-nowrap">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

