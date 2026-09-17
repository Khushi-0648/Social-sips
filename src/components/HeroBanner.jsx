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
      className="relative min-h-[88vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden bg-cafe-900 text-white pt-24 sm:pt-28 pb-10 sm:pb-8 px-4 sm:px-8 lg:px-14 select-none"
    >
      {/* Background Motion Video: Luminous Iced Coffee with Ice Cubes & Pour in Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] saturate-[1.12]"
        >
          <source src="/videos/iced-coffee-pour.mp4" type="video/mp4" />
          <source src="/videos/iced-coffee-ice-drop.mp4" type="video/mp4" />
          <source src="/videos/coffee-drop.webm" type="video/webm" />
        </video>

        {/* Warm Luminous Lighting Overlays - Inviting, Not Dark or Muddy */}
        <div className="absolute -top-20 -left-20 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/25 via-amber-600/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-500/20 via-orange-950/15 to-transparent blur-3xl" />

        {/* Soft Contrast Gradients (Keeps Video High-Visibility While Ensuring Crisp Text Legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Top Editorial Row: BREATHE (Top-Left) & THE (Top-Right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 pt-1">
        
        {/* Headline Left: BREATHE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            BREATHE
          </span>
          <div className="flex items-center gap-2 mt-2 text-[11px] font-mono tracking-widest text-amberGold uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>Social Sips • Clearwater Micro Roastery</span>
          </div>
        </motion.div>

        {/* Headline Right: THE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:items-end gap-1.5"
        >
          <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amberGold/95 tracking-wider sm:text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            the
          </span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono text-white/90 shadow-md">
            <Coffee className="w-3.5 h-3.5 text-amberGold" />
            <span>Artisanal Pour-Over & Gelato</span>
          </div>
        </motion.div>

      </div>

      {/* Middle Space is Open & Uncluttered: Center Video Flows Cleanly */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-2 sm:my-4 flex items-center justify-center pointer-events-none min-h-[40px] max-h-[80px]">
        {/* Subtle Ambient Light Ray Ring */}
        <div className="w-64 h-32 sm:w-96 sm:h-48 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* Bottom Editorial Row: Subtext (Lower-Left) & ROAST (Bottom-Right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-2">
        
        {/* Lower-Left: Subtext & Clean Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3.5 max-w-md"
        >
          {/* Monospace Editorial Subtext */}
          <p className="font-mono text-xs sm:text-sm text-neutral-100 tracking-wide uppercase leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Pure mountain shade-grown beans. Bottled fresh for your daily clarity.
          </p>

          <p className="text-[11px] font-mono text-amber-200/90 tracking-wider">
            27.9659° N, 82.8001° W • Clearwater, FL • Open Daily 7 AM – 10 PM
          </p>

          {/* Minimal Action Controls (No video pause or sound controls) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => scrollToSection('menu')}
              className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amberGold to-[#B87326] hover:from-[#E29A44] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+17272401811"
              className="px-5 py-3.5 rounded-2xl bg-black/50 hover:bg-black/70 border border-white/25 text-white font-mono text-xs sm:text-sm tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold"
              title="Call Social Sips Cafe"
            >
              <Phone className="w-3.5 h-3.5 text-amberGold" />
              <span>(727) 240-1811</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="px-5 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amberGold" />
              <span>Reserve Table</span>
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
          <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            ROAST
          </span>
          <div className="flex items-center justify-end gap-2 mt-2 text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
            <span>Scroll To Explore</span>
            <ArrowDown className="w-3 h-3 text-amberGold animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

