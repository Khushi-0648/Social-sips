import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  Heart, 
  Award, 
  Sun, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Users, 
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Flame,
  Star,
  ShoppingBag,
  Calendar
} from 'lucide-react';
import MeetTheTeam from '../components/MeetTheTeam';
import HygieneSafety from '../components/HygieneSafety';

// Signature craft products for the About Page slider
const signatureProducts = [
  {
    id: 1,
    name: 'Spanish Wildflower Honey Latte',
    category: 'Espresso Bar',
    tag: 'Signature Pour',
    price: '$6.50',
    description: 'Double ristretto pulled over local Florida wildflower honey, steamed oat milk, and a dusting of organic Ceylon cinnamon.',
    tastingNotes: ['Wildflower Honey', 'Ceylon Cinnamon', 'Dark Cocoa Crema'],
    image: '/images/coffee-latte.jpg'
  },
  {
    id: 2,
    name: 'Sicilian Bronte Pistachio Gelato',
    category: 'Artisan Gelato',
    tag: 'Slow-Churned',
    price: '$7.00',
    description: 'Imported pure Bronte pistachios slow-churned with organic Florida whole milk into an extraordinarily dense, creamy European masterpiece.',
    tastingNotes: ['Toasted Pistachio', 'Silky Whole Milk', 'Bronte PDO Certified'],
    image: '/images/gelato-pistachio.jpg'
  },
  {
    id: 3,
    name: 'Tiger Brown Sugar Amber Boba',
    category: 'Handcrafted Boba',
    tag: 'Counter Favorite',
    price: '$6.75',
    description: 'Taiwanese Grade-A tapioca pearls slow-stewed in rich Muscovado brown sugar for 3 hours, marbled with cold fresh organic milk.',
    tastingNotes: ['Warm Chewy Pearls', 'Smoky Caramel', 'Velvety Milk'],
    image: '/images/boba-tiger.jpg'
  },
  {
    id: 4,
    name: 'Ceremonial Uji Matcha Cloud',
    category: 'Handcrafted Boba',
    tag: 'Kyoto First Harvest',
    price: '$7.25',
    description: 'Stone-ground ceremonial matcha from Kyoto, layered over house vanilla bean milk and crowned with sea-salt sweet cream foam.',
    tastingNotes: ['Grassy Umami', 'Sea Salt Foam', 'Vibrant Jade'],
    image: '/images/boba-matcha.jpg'
  },
  {
    id: 5,
    name: '18-Hour Slow-Drip Nitro Cold Brew',
    category: 'Cold Brew Craft',
    tag: 'Zero Bitterness',
    price: '$5.75',
    description: 'Single-origin Huila Colombian beans steeped in cold spring water for 18 hours, nitrogen-infused for a creamy cascading microfoam.',
    tastingNotes: ['Black Cherry', 'Dark Cocoa', 'Creamy Nitro Head'],
    image: '/images/coffee-coldbrew.jpg'
  },
  {
    id: 6,
    name: 'Clearwater Signature Espresso Martini',
    category: 'Evening Sips',
    tag: 'Sunset Lounge',
    price: '$12.00',
    description: 'Freshly pulled espresso shot shaken vigorously over ice with Madagascar vanilla bean syrup, craft coffee liqueur, and dark cocoa dust.',
    tastingNotes: ['Bold Espresso Crema', 'Madagascar Vanilla', 'Rich Cacao'],
    image: '/images/bar-espresso-martini.jpg'
  },
  {
    id: 7,
    name: 'Artisan Sourdough Avocado Tartine',
    category: 'Bakery & Bites',
    tag: 'Morning Fresh',
    price: '$9.50',
    description: 'Locally baked 48-hour fermented sourdough, fresh Hass avocado mash, pickled shallots, watermelon radish, and toasted everything crunch.',
    tastingNotes: ['Crusty Fermented Bread', 'Hass Avocado', 'Pink Sea Salt'],
    image: '/images/bar-avocado-toast.jpg'
  },
  {
    id: 8,
    name: 'Ethiopia Yirgacheffe Beans (12oz)',
    category: 'Retail Roastery',
    tag: 'Direct-Trade Micro-Lot',
    price: '$19.50',
    description: 'Hand-picked heirloom Arabica beans from Yirgacheffe, roasted weekly in small 12kg batches right here on the Florida coast.',
    tastingNotes: ['Bergamot Blossom', 'Ripe Peach', 'Honey Clean Finish'],
    image: '/images/coffee-ethiopia.jpg'
  }
];

export default function AboutPage({ onOpenReservation }) {
  // Slider state
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const checkScrollability = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const cardWidth = 320; // approximate card width with gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveSlide(Math.min(Math.max(0, index), signatureProducts.length - 1));
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollability);
      checkScrollability();
      return () => slider.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      icon: Coffee,
      title: 'Ethical Direct-Trade Roasting',
      description: 'We partner directly with family-owned micro-lots in Huila (Colombia) and Yirgacheffe (Ethiopia), paying well above fair-trade premiums for peak-season specialty beans roasted in small 12kg batches right here in Florida.'
    },
    {
      icon: Sparkles,
      title: 'Artisan Gelato Tradition',
      description: 'Our gelato is slow-churned daily using time-honored Italian methods. Real Sicilian Bronte pistachios, Piedmont hazelnuts, and organic Florida dairy create an extraordinarily dense, silky texture unmatched by commercial ice creams.'
    },
    {
      icon: Award,
      title: 'Handcrafted Authentic Boba',
      description: 'Say goodbye to chemical drink powders and preservative-laden syrups. We steep whole-leaf loose teas every 4 hours and slow-simmer Taiwanese Grade-A tapioca pearls in rich Muscovado brown sugar.'
    },
    {
      icon: Sun,
      title: 'A True Third-Place Sanctuary',
      description: 'Designed as a welcoming sanctuary between home and work. High-speed gigabit Wi-Fi for remote creatives, cozy reading nooks, an open-air coastal patio, and ambient evening cocktail lounge vibes.'
    }
  ];

  const milestones = [
    { year: '2021', title: 'The Coastal Dream', desc: 'Social Sips started as a weekend pop-up coffee cart at the Clearwater Beach sunset market.' },
    { year: '2022', title: 'Flagship Roastery Opens', desc: 'Opened our permanent doors on Clearwater waterfront with custom Slayer espresso machines.' },
    { year: '2023', title: 'Gelato & Boba Integration', desc: 'Introduced in-house authentic Italian gelato and Taiwanese handcrafted loose-leaf boba.' },
    { year: '2024+', title: 'Voted Best of the Bay', desc: 'Awarded #1 Specialty Cafe & Gathering Space in Pinellas County by local community vote.' }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20">
      
      {/* 1. Page Hero Banner: Editorial 4-Corner Split Layout with Motion Video Backdrop */}
      <section 
        id="about-hero"
        className="relative min-h-[82vh] sm:min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-cafe-950 text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 px-4 sm:px-8 lg:px-14 select-none border-b border-[#2C221B]"
      >
        {/* Background Motion Video: Clear, Bright, High-Aesthetic */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/cafe-interior-main.jpg"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02] saturate-[1.1]"
          >
            <source src="/videos/coffee-craft.webm" type="video/webm" />
            <source src="/videos/iced-coffee-13764.mp4" type="video/mp4" />
          </video>

          {/* Light Subtle Edge Transitions */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050404] to-transparent pointer-events-none" />
        </div>

        {/* Top Editorial Row: ORIGIN (Top-Left) & THE STORY (Top-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-3 pt-2 sm:pt-4">
          
          {/* Headline Left: ORIGIN */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-w-0"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              ORIGIN
            </span>
            <div className="flex items-center gap-1.5 mt-1 sm:mt-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-amberGold uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="hidden sm:inline">Social Sips • </span>
              <span>Clearwater Heritage</span>
            </div>
          </motion.div>

          {/* Headline Right: THE STORY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-1 shrink-0"
          >
            <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amberGold/95 tracking-wider text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              the story
            </span>
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-mono text-white/90 shadow-md">
              <span className="hidden sm:inline">Artisanal Craft & Coastal Roots</span>
              <span className="sm:hidden">Craft & Heritage</span>
            </div>
          </motion.div>

        </div>

        {/* Middle Space is Open: Video Flows Pure & Visible */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-2 sm:py-6 flex items-center justify-center pointer-events-none" />

        {/* Bottom Editorial Row: Subtext & Action Controls (Lower-Left) & HERITAGE (Bottom-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-4 sm:gap-6 pt-2">
          
          {/* Lower-Left: Subtext & Clean Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 sm:space-y-3.5 max-w-lg bg-black/35 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-0 shadow-lg sm:shadow-none"
          >
            {/* Monospace Editorial Subtext */}
            <p className="font-mono text-[11px] sm:text-sm text-neutral-100 tracking-wide uppercase leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Born on the Florida coast. Crafting authentic human connections over direct-trade extractions and slow-churned gelato.
            </p>

            <p className="text-[10px] sm:text-[11px] font-mono text-amber-200/90 tracking-wider">
              <span className="hidden sm:inline">27.9659° N, 82.8001° W • </span>
              <span>4.9★ Community Voted • Clearwater Beach</span>
            </p>

            {/* Minimal Action Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
              <button
                onClick={() => scrollToSection('taste-craft')}
                className="group px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amberGold to-[#B87326] hover:from-[#E29A44] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore Craft</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('our-heritage')}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-black/55 hover:bg-black/75 border border-white/25 text-white font-mono text-xs sm:text-sm tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amberGold" />
                <span>Our Heritage</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amberGold" />
                <span>Reserve</span>
              </button>
            </div>
          </motion.div>

          {/* Lower-Right: HERITAGE Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="self-end md:self-auto text-right"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              HERITAGE
            </span>
            <div className="flex items-center justify-end gap-2 mt-1 sm:mt-2 text-[10px] font-mono text-neutral-200 uppercase tracking-widest">
              <span>Scroll To Explore</span>
              <ArrowDown className="w-3 h-3 text-amberGold animate-bounce" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. NEW: Signature Products Interactive Slider / Carousel */}
      <section id="taste-craft" className="py-20 bg-[#0A0807] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header & Slider Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-[#F0C070]" />
                <span>Taste Our Craft</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Signature Roastery & Bar Creations
              </h2>
              <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
                From micro-lot beans roasted on-site to authentic Italian gelato and Taiwan-steeped boba, explore our handcrafted icons that Clearwater locals celebrate daily.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={slideLeft}
                disabled={!canScrollLeft}
                aria-label="Previous signature product"
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? 'bg-[#181310] border-[#3D2D22] text-[#F0C070] hover:bg-[#241C16] hover:border-[#F0C070] shadow-lg'
                    : 'bg-[#100D0B] border-[#221B16] text-[#55473E] opacity-50 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={slideRight}
                disabled={!canScrollRight}
                aria-label="Next signature product"
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? 'bg-[#181310] border-[#3D2D22] text-[#F0C070] hover:bg-[#241C16] hover:border-[#F0C070] shadow-lg'
                    : 'bg-[#100D0B] border-[#221B16] text-[#55473E] opacity-50 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Horizontal Track */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {signatureProducts.map((product) => (
              <div
                key={product.id}
                className="w-[290px] sm:w-[330px] lg:w-[350px] shrink-0 snap-start bg-[#120F0D] rounded-3xl overflow-hidden border border-[#2C221B] hover:border-[#F0C070]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Product Image with Zoom & Badges */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-[#181310]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-transparent to-black/30" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#050404]/80 backdrop-blur-md text-[#F0C070] text-[11px] font-bold border border-[#3D2D22]">
                        {product.category}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-2.5 py-1 rounded-full bg-[#F0C070] text-[#050404] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        {product.tag}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3.5">
                      <span className="font-serif text-lg font-bold text-white bg-[#050404]/85 backdrop-blur-md px-3 py-1 rounded-xl border border-[#2C221B]">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F0C070] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8ADA5] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Tasting Notes */}
                    <div className="pt-2 border-t border-[#221B16]">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C7F75] font-bold block mb-1.5">
                        Tasting Profile
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.tastingNotes.map((note, idx) => (
                          <span 
                            key={idx}
                            className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#181310] text-[#E8DED6] border border-[#2C221B]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    to="/services"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#181310] hover:bg-[#F0C070] text-white hover:text-[#050404] border border-[#2C221B] hover:border-[#F0C070] text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 pt-8">
            {signatureProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({ left: idx * 340, behavior: 'smooth' });
                  }
                }}
                aria-label={`Jump to product ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx 
                    ? 'w-8 bg-[#F0C070]' 
                    : 'w-2 bg-[#2C221B] hover:bg-[#5C4D41]'
                }`}
              />
            ))}
          </div>

        </div>
      </section>


      {/* 3. Story & Philosophy 2-Column Section */}
      <section id="our-heritage" className="py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider">
                <span>The Story of Social Sips</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
                We believe coffee, boba, and gelato are better when shared together.
              </h2>
              <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
                Social Sips was born from a simple observation: Clearwater loved good coffee, but the city lacked a true day-to-night artisan haven where you could savor a world-class cortado at 8 AM, catch up over a brown sugar boba at 2 PM, and indulge in pistachio affogato after dinner.
              </p>
              <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
                We built our cafe from reclaimed Florida cypress wood, natural sand-toned stoneware, and hand-poured terrazzo counters. Every detail was curated to inspire calm, conversation, and community.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#120F0D] border border-[#2C221B]">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F0C070]">100%</div>
                  <div className="text-xs text-[#B8ADA5] mt-1 font-medium">Single-Origin Roasts</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#120F0D] border border-[#2C221B]">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F0C070]">18 Hours</div>
                  <div className="text-xs text-[#B8ADA5] mt-1 font-medium">Slow Cold Extraction</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#120F0D] border border-[#2C221B] col-span-2 sm:col-span-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F0C070]">4.9 ★</div>
                  <div className="text-xs text-[#B8ADA5] mt-1 font-medium">Community Rating</div>
                </div>
              </div>
            </div>

            {/* Visual Collage with Verified Images */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2C221B] shadow-2xl">
                <img 
                  src="/images/cafe-interior-main.jpg" 
                  alt="Social Sips Cafe Clearwater Interior Counter" 
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050404]/90 via-transparent to-transparent" />
                
                {/* Floating Quote Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#120F0D]/95 backdrop-blur-md border border-[#2C221B] shadow-2xl">
                  <p className="text-xs sm:text-sm text-white font-medium italic leading-relaxed">
                    "Our counter is where strangers become regulars, and regulars become lifelong friends."
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#221B16]">
                    <span className="text-xs text-[#F0C070] font-bold">— The Social Sips Family</span>
                    <span className="text-[11px] text-[#8C7F75]">Clearwater, FL</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. Four Pillars Grid */}
      <section className="py-20 bg-[#0A0807] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1F1A16] text-[#F0C070] text-xs font-bold uppercase tracking-wider border border-[#3D2D22]">
              <span>Our Core Standards</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Uncompromising Standards in Every Pour
            </h2>
            <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
              We never cut corners. From triple-reverse osmosis water filtration and bean harvest dates to authentic Italian machinery, we obsess over the details so you can simply enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#120F0D] rounded-3xl p-8 border border-[#2C221B] hover:border-[#F0C070]/50 transition-all duration-300 shadow-xl space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8ADA5] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 5. Timeline Milestones */}
      <section className="py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1F1A16] text-[#F0C070] text-xs font-bold uppercase tracking-wider border border-[#3D2D22]">
              <span>Milestone Timeline</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Journey Through the Years
            </h2>
            <p className="text-sm text-[#B8ADA5]">From a sunny beachside cart to Clearwater's favorite coffee sanctuary.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-[#120F0D] rounded-3xl p-6 border border-[#2C221B] hover:border-[#F0C070]/40 transition-all space-y-3">
                <span className="font-mono text-2xl font-extrabold text-[#F0C070]">{m.year}</span>
                <h4 className="font-serif text-lg font-bold text-white">{m.title}</h4>
                <p className="text-xs text-[#B8ADA5] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team Showcase */}
      <div className="border-b border-[#2C221B]">
        <MeetTheTeam />
      </div>

      {/* 7. Hygiene & Quality Standards */}
      <div className="border-b border-[#2C221B]">
        <HygieneSafety />
      </div>

      {/* 8. Bottom CTA Banner */}
      <section className="py-20 bg-[#050404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-14 border border-[#2C221B] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 text-center md:text-left relative z-10">
              <span className="text-xs uppercase tracking-wider text-[#F0C070] font-bold">Clearwater Destination</span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Experience Social Sips in Person
              </h3>
              <p className="text-xs sm:text-sm text-[#B8ADA5] max-w-xl leading-relaxed">
                Whether you need a quiet morning corner with gigabit Wi-Fi, an afternoon boba pick-me-up, or a reserved table for your team, we would love to welcome you.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] text-xs sm:text-sm font-bold shadow-lg cursor-pointer transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#050404]" />
                <span>Reserve a Table</span>
              </button>
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-[#181310] hover:bg-[#251D18] text-white border border-[#2C221B] text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#F0C070]" />
                <span>Explore Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
