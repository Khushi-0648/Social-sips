import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  IceCream, 
  CupSoda, 
  Wine, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Users
} from 'lucide-react';

const carouselSlides = [
  {
    id: 'coffee',
    tagline: 'Locally Roasted • Single-Origin Craft',
    title: 'Where Clearwater Awakes with Specialty Coffee',
    subtitle: 'Locally roasted in Florida. Savor velvety Spanish Honey Lattes, precision cortados, and 18-hour cold brew in a sun-drenched coastal cafe.',
    image: '/images/hero-coffee.jpg',
    icon: Coffee
  },
  {
    id: 'gelato',
    tagline: 'Authentic Italian Heritage • 24 Daily Flavors',
    title: 'Small-Batch Silk-Churned Artisan Gelato',
    subtitle: 'Crafted fresh daily with whole Florida dairy, pure Bronte Sicilian pistachios, and dairy-free ripe fruit sorbettos churned to creamy perfection.',
    image: '/images/hero-gelato.jpg',
    icon: IceCream
  },
  {
    id: 'boba',
    tagline: 'Warm Brown Sugar Pearls • Zero Powders',
    title: 'Handcrafted Boba Teas & Ceremonial Matcha',
    subtitle: 'Freshly simmered Taiwanese tapioca pearls, ceremonial Uji matcha clouds, and fragrant high-mountain jasmine fruit teas shaken fresh to order.',
    image: '/images/hero-boba.jpg',
    icon: CupSoda
  },
  {
    id: 'bar',
    tagline: 'Twilight Hours • Espresso Martinis & Bites',
    title: 'Clearwater’s Day-to-Night Social Lounge & Bar',
    subtitle: 'As twilight falls, transition into our relaxed evening lounge. Featuring our signature Clearwater Espresso Martini, craft botanical spritzes, and artisan bites.',
    image: '/images/hero-bar.jpg',
    icon: Wine
  }
];

export default function HeroBanner({ onOpenReservation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

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
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[90vh] sm:min-h-[94vh] flex items-center justify-center overflow-hidden bg-neutral-900 text-white"
    >
      {/* Background Image Carousel with Smooth Crossfade */}
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

        {/* Lighter, balanced cinematic overlay (Dark effect reduced as requested) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Centered Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center justify-center space-y-6">
        
        {/* Top Micro Badges - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/50 border border-amberGold/60 text-amberGold text-xs font-bold backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amberGold" />
            <span>{slide.tagline}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 border border-emerald-400/50 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Clearwater, FL • Open Daily 7 AM – 10 PM</span>
          </span>
        </div>

        {/* Centered Headline with subtle crisp text drop shadow */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
            {slide.title}
          </h1>
          <p className="text-sm sm:text-lg text-white font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mx-auto">
            {slide.subtitle}
          </p>
        </div>

        {/* Centered 4 Pillar Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-bold text-white">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/25 shadow-sm">
            <Coffee className="w-4 h-4 text-amberGold" />
            <span>Specialty Coffee</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/25 shadow-sm">
            <IceCream className="w-4 h-4 text-amber-300" />
            <span>Artisan Gelato</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/25 shadow-sm">
            <CupSoda className="w-4 h-4 text-emerald-400" />
            <span>Fresh Boba Tea</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/25 shadow-sm">
            <Wine className="w-4 h-4 text-rose-300" />
            <span>Social Bar</span>
          </div>
        </div>

        {/* Centered Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('menu');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amberGold via-[#E09843] to-[#C27E2B] hover:from-[#e8a350] hover:to-amberGold text-black font-extrabold text-sm sm:text-base shadow-warm-glow hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('bulk-orders');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="px-7 py-4 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
          >
            <Users className="w-4 h-4 text-amberGold" />
            <span>Bulk / Catering</span>
          </button>

          <a
            href="tel:+17272401811"
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-black/50 hover:bg-black/70 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-colors"
            title="Call Social Sips Cafe"
          >
            <Phone className="w-4 h-4 text-amberGold" />
            <span>(727) 240-1811</span>
          </a>
        </div>

        {/* Centered Social Trust Line */}
        <div className="pt-1 flex items-center justify-center gap-3 text-xs text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-bold text-white">4.9 / 5.0</span>
          <span className="text-white/60">•</span>
          <span>Loved by 1,280+ verified reviews in Clearwater, FL</span>
        </div>

      </div>

      {/* Carousel Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all cursor-pointer hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all cursor-pointer hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Carousel Navigation Tabs / Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3">
          {carouselSlides.map((s, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`group flex items-center gap-2 py-2 px-3 sm:px-4 rounded-xl text-xs font-semibold backdrop-blur-md transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-amberGold text-black font-bold shadow-lg scale-105'
                    : 'bg-black/45 text-white/90 hover:bg-black/70 border border-white/15'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-white/60'}`} />
                <span className="hidden sm:inline">{s.tagline.split('•')[0].trim()}</span>
                <span className="sm:hidden">0{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
