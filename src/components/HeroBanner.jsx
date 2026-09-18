import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  ArrowRight, 
  Phone, 
  Calendar,
  ArrowDown
} from 'lucide-react';

export default function HeroBanner({ onOpenReservation }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[94vh] sm:min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between overflow-hidden bg-cafe-950 text-white pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-8 px-4 sm:px-8 lg:px-14 select-none"
    >
      {/* Background Motion Video: Bright, Vivid & Clear with Zero Heavy Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-cafe-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02] saturate-[1.1]"
        >
          <source src="/videos/iced-coffee-pour.mp4" type="video/mp4" />
          <source src="/videos/iced-coffee-13764.mp4" type="video/mp4" />
          <source src="/videos/iced-coffee-ice-drop.mp4" type="video/mp4" />
        </video>

        {/* Very Light Subtle Edge Transitions */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Editorial Row: BREATHE (Top-Left) & THE (Top-Right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-3 pt-2 sm:pt-4">
        
        {/* Headline Left: BREATHE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
            BREATHE
          </span>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-amberGold uppercase">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span className="hidden sm:inline">Social Sips • </span>
            <span>Clearwater Roastery</span>
          </div>
        </motion.div>

        {/* Headline Right: THE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-end gap-1"
        >
          <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amberGold/95 tracking-wider text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            the
          </span>
          <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-mono text-white/90 shadow-md">
            <span className="hidden sm:inline">Artisanal Pour-Over & Gelato</span>
            <span className="sm:hidden">Pour-Over & Gelato</span>
          </div>
        </motion.div>

      </div>

      {/* Middle Space is Open: Video Flows Pure & Visible */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-2 sm:py-6 flex items-center justify-center pointer-events-none" />

      {/* Bottom Editorial Row: Subtext & Action Controls (Lower-Left) & ROAST (Bottom-Right) */}
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
            Pure mountain shade-grown beans. Bottled fresh for your daily clarity.
          </p>

          <p className="text-[10px] sm:text-[11px] font-mono text-amber-200/90 tracking-wider">
            <span className="hidden sm:inline">27.9659° N, 82.8001° W • </span>
            <span>Clearwater, FL • Open Daily 7 AM – 10 PM</span>
          </p>

          {/* Minimal Action Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
            <button
              onClick={() => scrollToSection('menu')}
              className="group px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amberGold to-[#B87326] hover:from-[#E29A44] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+17272401811"
              className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-black/55 hover:bg-black/75 border border-white/25 text-white font-mono text-xs sm:text-sm tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold"
              title="Call Social Sips Cafe"
            >
              <Phone className="w-3.5 h-3.5 text-amberGold" />
              <span className="hidden sm:inline">(727) 240-1811</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amberGold" />
              <span>Reserve</span>
            </button>
          </div>
        </motion.div>

        {/* Lower-Right: ROAST Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="self-end md:self-auto text-right"
        >
          <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
            ROAST
          </span>
          <div className="flex items-center justify-end gap-2 mt-1 sm:mt-2 text-[10px] font-mono text-neutral-200 uppercase tracking-widest">
            <span>Scroll To Explore</span>
            <ArrowDown className="w-3 h-3 text-amberGold animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

