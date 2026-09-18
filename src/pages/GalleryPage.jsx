import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Heart, Instagram, Filter, ArrowRight, ArrowDown, Image as ImageIcon } from 'lucide-react';
import SocialFeed from '../components/SocialFeed';

const galleryItems = [
  {
    id: 1,
    title: 'Spanish Honey Latte',
    category: 'coffee',
    image: '/images/coffee-latte.jpg',
    tag: 'Signature Pour',
    desc: 'Espresso with raw Florida honey and Ceylon cinnamon.'
  },
  {
    id: 2,
    title: 'Sicilian Pistachio Gelato',
    category: 'gelato',
    image: '/images/gelato-pistachio.jpg',
    tag: 'Slow-Churned',
    desc: 'Authentic Bronte pistachios with organic whole milk.'
  },
  {
    id: 3,
    title: 'Tiger Brown Sugar Boba',
    category: 'boba',
    image: '/images/boba-tiger.jpg',
    tag: '3-Hour Stew',
    desc: 'Black tea with warm slow-stewed Muscovado pearls.'
  },
  {
    id: 4,
    title: 'Nitro Cold Brew',
    category: 'coffee',
    image: '/images/coffee-coldbrew.jpg',
    tag: 'Cold Steep',
    desc: '18-hour Colombian steep with velvety nitro microfoam.'
  },
  {
    id: 5,
    title: 'Espresso Affogato',
    category: 'gelato',
    image: '/images/affogato.jpg',
    tag: 'Italian Classic',
    desc: 'Hot double espresso over Madagascar vanilla gelato.'
  },
  {
    id: 6,
    title: 'Ceremonial Matcha Cloud',
    category: 'boba',
    image: '/images/boba-matcha.jpg',
    tag: 'Kyoto Harvest',
    desc: 'Ceremonial Uji matcha over sea-salt cream milk.'
  },
  {
    id: 7,
    title: 'Evening Cocktail Lounge',
    category: 'atmosphere',
    image: '/images/bar-vibe.jpg',
    tag: 'Evening Vibes',
    desc: 'Craft espresso cocktails with ambient coastal lounge tunes.'
  },
  {
    id: 8,
    title: 'Wild Strawberry Sorbetto',
    category: 'gelato',
    image: '/images/gelato-strawberry.jpg',
    tag: 'Dairy-Free',
    desc: 'Sun-ripened berries churned into naturally sweet sorbet.'
  },
  {
    id: 9,
    title: 'Coastal Garden Patio',
    category: 'atmosphere',
    image: '/images/patio-vibe.jpg',
    tag: 'Outdoor Patio',
    desc: 'Breezy shaded umbrellas with dog-friendly outdoor seating.'
  },
  {
    id: 10,
    title: 'French Butter Croissant',
    category: 'coffee',
    image: '/images/croissant.jpg',
    tag: 'Baked Fresh',
    desc: '27-layer flaky laminated French pastry baked daily.'
  },
  {
    id: 11,
    title: 'Espresso Martini',
    category: 'atmosphere',
    image: '/images/bar-espresso-martini.jpg',
    tag: 'Craft Bar',
    desc: 'Fresh pulled espresso shaken over ice with dark cocoa.'
  },
  {
    id: 12,
    title: 'Mango Jasmine Refresher',
    category: 'boba',
    image: '/images/boba-mango.jpg',
    tag: 'Iced Tea',
    desc: 'Alphonso mango puree with aromatic jasmine green tea.'
  }
];

export default function GalleryPage({ onOpenReservation }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <div className="pb-20">
      
      {/* 1. Page Hero Banner: Editorial 4-Corner Split Layout with Motion Video Backdrop */}
      <section 
        id="gallery-hero"
        className="relative min-h-[82vh] sm:min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-cafe-950 text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 px-4 sm:px-8 lg:px-14 select-none border-b border-[#2C221B]"
      >
        {/* Background Motion Video: Clear, Bright, High-Aesthetic */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-cafe-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02] saturate-[1.1]"
          >
            <source src="/videos/gallery-latte-art.mp4" type="video/mp4" />
            <source src="/videos/coffee-craft.webm" type="video/webm" />
          </video>

          {/* Light Subtle Edge Transitions */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050404] to-transparent pointer-events-none" />
        </div>

        {/* Top Editorial Row: CAPTURED (Top-Left) & THE VISUAL (Top-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-3 pt-2 sm:pt-4">
          
          {/* Headline Left: CAPTURED */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              CAPTURED
            </span>
            <div className="flex items-center gap-1.5 mt-1 sm:mt-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-amberGold uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="hidden sm:inline">Social Sips • </span>
              <span>Visual Cafe Archive</span>
            </div>
          </motion.div>

          {/* Headline Right: THE VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-1"
          >
            <span className="font-serif italic font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amberGold/95 tracking-wider text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              the visual
            </span>
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-mono text-white/90 shadow-md">
              <span className="hidden sm:inline">Daylight Patio • Evening Lounge</span>
              <span className="sm:hidden">Cafe Moments</span>
            </div>
          </motion.div>

        </div>

        {/* Middle Space is Open: Video Flows Pure & Visible */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-2 sm:py-6 flex items-center justify-center pointer-events-none" />

        {/* Bottom Editorial Row: Subtext & Action Controls (Lower-Left) & VISION (Bottom-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-4 sm:gap-6 pt-2">
          
          {/* Lower-Left: Subtext & Quick Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 sm:space-y-3.5 max-w-lg bg-black/35 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-0 shadow-lg sm:shadow-none"
          >
            {/* Monospace Editorial Subtext */}
            <p className="font-mono text-[11px] sm:text-sm text-neutral-100 tracking-wide uppercase leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Immersive snapshots of sunlit patio mornings, artisan pours, and dusk cocktail lounge lights.
            </p>

            <p className="text-[10px] sm:text-[11px] font-mono text-amber-200/90 tracking-wider">
              <span className="hidden sm:inline">Clearwater Beach Waterfront • </span>
              <span>Community Tag @SocialSipsCafe</span>
            </p>

            {/* Quick Filter Shortcut Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-0.5 sm:pt-1">
              {[
                { id: 'all', label: 'All Frames' },
                { id: 'coffee', label: 'Artisan Coffee' },
                { id: 'gelato', label: 'Gelato & Boba' },
                { id: 'atmosphere', label: 'Ambience' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id);
                    const el = document.getElementById('gallery-grid');
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.pageYOffset - 110;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer backdrop-blur-md ${
                    activeFilter === cat.id
                      ? 'bg-gradient-to-r from-amberGold to-[#B87326] text-black font-extrabold shadow-lg'
                      : 'bg-black/55 hover:bg-black/75 border border-white/25 text-white/90 hover:border-amberGold'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Lower-Right: VISION Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="self-end md:self-auto text-right"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              VISION
            </span>
            <div className="flex items-center justify-end gap-2 mt-1 sm:mt-2 text-[10px] font-mono text-neutral-200 uppercase tracking-widest">
              <span>Browse Gallery</span>
              <ArrowDown className="w-3 h-3 text-amberGold animate-bounce" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="py-8 bg-[#0A0807] border-b border-[#2C221B] sticky top-20 z-30 backdrop-blur-xl bg-[#0A0807]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'All Moments' },
              { id: 'coffee', label: 'Artisan Coffee' },
              { id: 'boba', label: 'Handcrafted Boba' },
              { id: 'gelato', label: 'Italian Gelato' },
              { id: 'atmosphere', label: 'Lounge Ambience' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#F0C070] text-[#050404] shadow-md'
                    : 'bg-[#120F0D] text-[#B8ADA5] border border-[#2C221B] hover:text-white hover:border-[#3D2D22]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Gallery Grid */}
      <section id="gallery-grid" className="py-16 bg-[#050404] border-b border-[#2C221B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive 2-Col Grid on Mobile, 3-Col on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-[#120F0D] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2C221B] hover:border-[#F0C070]/50 transition-all duration-500 shadow-xl group flex flex-col justify-between"
              >
                {/* Image Container - Clean without overlay text */}
                <div className="relative h-40 sm:h-72 lg:h-80 overflow-hidden bg-[#181310]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-3.5 sm:p-6 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1F1A16] text-[#F0C070] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#3D2D22]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#F0C070] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#B8ADA5] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Instagram & Social Feed Integration */}
      <div className="border-b border-[#2C221B]">
        <SocialFeed />
      </div>

      {/* 5. Bottom Photo Invitation */}
      <section className="py-20 bg-[#050404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070]">
            <Camera className="w-3.5 h-3.5" />
            <span>Tag us at @SocialSipsCafe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Capture Your Social Sips Moment
          </h2>
          <p className="text-xs sm:text-sm text-[#B8ADA5] max-w-lg mx-auto leading-relaxed">
            Share your photos on Instagram or TikTok with #SocialSipsClearwater to be featured on our digital wall and receive a surprise treat on your next visit!
          </p>
        </div>
      </section>

    </div>
  );
}
