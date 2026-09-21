import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar,
  Sparkles,
  Leaf
} from 'lucide-react';

export default function HeroBanner({ onOpenReservation }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Staggered reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] sm:min-h-[94vh] lg:min-h-[98vh] flex items-center justify-center overflow-hidden bg-cafe-950 text-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-12 px-4 sm:px-8 lg:px-14 select-none"
    >
      {/* 1. Background Layer: Full-bleed video/image of lush green plantation hills with dark gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-cafe-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/story/plantation-hills-bg.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04] saturate-[1.12] transition-opacity duration-1000"
        >
          <source src="/videos/plantation-hills-loop.webm" type="video/webm" />
          <source src="/videos/gemini-user-video-3.webm" type="video/webm" />
        </video>

        {/* Subtle dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35 pointer-events-none" />
        <div className="sm:hidden absolute inset-0 bg-black/45 pointer-events-none" />

        {/* Top and Bottom edge vignettes */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        {/* Ambient warm morning sunlight glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 75% 25%, rgba(240, 192, 112, 0.16) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* 2. Motion & VFX: 4 Drifting Green Leaf Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Leaf 1: Top-Left floating gently down and across */}
        <div 
          className="absolute w-8 h-8 sm:w-11 sm:h-11 text-emerald-400/75 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-drift-leaf-1"
          style={{ top: '14%', left: '6%' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform -rotate-12">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>

        {/* Leaf 2: Center-Right floating down towards hero product */}
        <div 
          className="absolute w-7 h-7 sm:w-10 sm:h-10 text-emerald-500/65 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-drift-leaf-2"
          style={{ top: '32%', right: '10%' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform rotate-45">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>

        {/* Leaf 3: Bottom-Left floating upwards */}
        <div 
          className="absolute w-6 h-6 sm:w-9 sm:h-9 text-emerald-300/70 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-drift-leaf-3"
          style={{ bottom: '20%', left: '16%' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform rotate-180">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>

        {/* Leaf 4: Bottom-Right drifting near the wooden coaster */}
        <div 
          className="absolute w-8 h-8 sm:w-12 sm:h-12 text-emerald-400/60 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-drift-leaf-4"
          style={{ bottom: '14%', right: '20%' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform -rotate-45">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>
      </div>

      {/* 3. Main Content Container: Staggered Fade-Up Reveal */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left / Center Column: Typography & Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6"
        >
          {/* Small pill badge: • SOCIAL SIPS • TREE-TO-CUP ROASTERY */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-[#F0C070]/40 shadow-lg text-[10.5px] sm:text-xs font-mono tracking-widest text-amberGold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shrink-0 shadow-xs" />
              <span>• SOCIAL SIPS • TREE-TO-CUP ROASTERY</span>
            </div>
          </motion.div>

          {/* Large vintage bold headline: BREATHE the Nature Harvest */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="font-syne font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.75rem] tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              BREATHE{' '}
              <span className="font-serif italic font-normal text-amberGold/95 lowercase tracking-normal">
                the
              </span>{' '}
              <span className="block sm:inline font-syne font-black text-amber-100 sm:text-white">
                Nature Harvest
              </span>
            </h1>
          </motion.div>

          {/* Subhead */}
          <motion.div variants={itemVariants}>
            <p className="font-mono text-xs sm:text-sm md:text-base text-neutral-200/95 tracking-wide leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              From hand-picked shade-grown cherries to artisanal roasts and organic teas.
            </p>
          </motion.div>

          {/* Editorial Specs Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4C7BD]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
              <Leaf className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Shade-Grown Cherries</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Artisanal Roasts</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Organic Teas</span>
            </span>
          </motion.div>

          {/* Dual CTA buttons: [Explore Menu →] and [Reserve Table] */}
          <motion.div variants={itemVariants} className="pt-2 sm:pt-4 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              {/* Primary Warm Amber Button */}
              <button
                onClick={() => scrollToSection('menu')}
                className="group px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amberGold via-[#E0983A] to-[#B87326] hover:from-[#EAA64A] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transform hover:-translate-y-0.5"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Frosted Glass Outline Button */}
              <button
                onClick={onOpenReservation}
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 hover:border-amberGold text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-amberGold" />
                <span>Reserve Table</span>
              </button>
            </div>
          </motion.div>

          {/* Location & Hours Micro-tag */}
          <motion.div variants={itemVariants} className="pt-1 text-[10.5px] font-mono text-amber-200/80">
            <span>Clearwater, FL • Open Daily: 7:00 AM – 10:00 PM</span>
          </motion.div>
        </motion.div>

        {/* 4. Centerpiece Layer: Animated hero product with gentle floating idle animation */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.90, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative select-none"
          >
            {/* Gentle Floating Idle Animation */}
            <motion.div
              animate={{ 
                y: [0, -14, 0],
                rotate: [0, 0.6, 0, -0.6, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="relative group"
            >
              {/* Warm Golden Sunlight Backlight Aura */}
              <div 
                className="absolute -inset-6 sm:-inset-10 rounded-full pointer-events-none filter blur-2xl opacity-60 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(240, 192, 112, 0.35) 0%, rgba(184, 115, 38, 0.15) 50%, transparent 70%)'
                }}
              />

              {/* Floating Shadow Underneath */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/80 blur-xl rounded-full pointer-events-none" />

              {/* Hero Product Frame: Frosted Glass of Artisan Cold Brew on Rustic Wood Base */}
              <div className="relative z-10 overflow-hidden rounded-3xl p-2 bg-gradient-to-b from-white/20 via-white/5 to-black/60 backdrop-blur-xl border border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                <img
                  src="/images/story/hero-cold-brew-product.jpg"
                  alt="Artisan Cold Brew on Rustic Wooden Base"
                  className="w-56 sm:w-68 md:w-76 lg:w-80 xl:w-[22rem] h-auto object-cover rounded-2xl filter brightness-105 contrast-[1.06]"
                  loading="eager"
                />

                {/* Glassmorphic Live Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-xl border border-[#F0C070]/40 text-[10px] font-mono text-amberGold shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span>Artisan Cold Brew</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 text-[10px] font-mono text-white/90 shadow-lg">
                  <Sparkles className="w-3 h-3 text-amberGold" />
                  <span>Rustic Wood Base</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
