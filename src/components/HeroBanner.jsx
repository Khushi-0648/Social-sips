import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Coffee,
  Sparkles,
  GlassWater
} from 'lucide-react';

export default function HeroBanner({ onOpenReservation }) {
  const bgVideoRef = useRef(null);

  useEffect(() => {
    if (bgVideoRef.current) bgVideoRef.current.playbackRate = 0.72;
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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
      {/* Cinematic full-bleed: coffee and ice cream */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050404]">
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12] saturate-[1.08] scale-105"
        >
          <source src="/videos/gelato-cones.mp4" type="video/mp4" />
          <source src="/videos/gelato-craft.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/62 to-black/28 pointer-events-none" />
        <div className="sm:hidden absolute inset-0 bg-black/48 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/88 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050404] via-black/50 to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 72% 38%, rgba(180, 220, 255, 0.12) 0%, transparent 42%), radial-gradient(circle at 28% 70%, rgba(240, 192, 112, 0.10) 0%, transparent 46%)'
          }}
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start space-y-4 sm:space-y-6 order-2 lg:order-1"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-[#F0C070]/40 shadow-lg text-[10.5px] sm:text-xs font-mono tracking-widest text-amberGold uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-300 inline-block shrink-0 shadow-[0_0_8px_rgba(125,211,252,0.8)]" />
              <span>• SOCIAL SIPS • COFFEE & GELATO</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="font-syne font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.75rem] tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              BREW{' '}
              <span className="font-serif italic font-normal text-sky-200/95 lowercase tracking-normal">
                the
              </span>{' '}
              <span className="block sm:inline font-syne font-black text-amber-100 sm:text-white">
                Perfect
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-mono text-xs sm:text-sm md:text-base text-neutral-200/95 tracking-wide leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Artisan coffee meets creamy gelato — a perfect blend of warmth and chill in every cup.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4C7BD]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
              <Coffee className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Fresh Coffee</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Artisan Ice Cream</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
              <GlassWater className="w-3.5 h-3.5 text-sky-300" />
              <span>Cinematic Blend</span>
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2 sm:pt-4 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('menu')}
                className="group px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amberGold via-[#E0983A] to-[#B87326] hover:from-[#EAA64A] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transform hover:-translate-y-0.5"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenReservation}
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 hover:border-amberGold text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-amberGold" />
                <span>Reserve Table</span>
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-1 text-[10.5px] font-mono text-amber-200/80">
            <span>Clearwater, FL • Open Daily: 7:00 AM – 10:00 PM</span>
          </motion.div>
        </motion.div>

        {/* Hero image: coffee product */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative select-none w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative group"
            >
              <div
                className="absolute -inset-3 sm:-inset-6 lg:-inset-8 rounded-full pointer-events-none filter blur-xl lg:blur-2xl opacity-50 lg:opacity-60"
                style={{
                  background: 'radial-gradient(circle at 50% 42%, rgba(186, 230, 253, 0.22) 0%, rgba(240, 192, 112, 0.16) 38%, transparent 70%)'
                }}
              />
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 w-2/3 sm:w-3/4 lg:w-4/5 h-6 sm:h-8 lg:h-10 bg-black/80 blur-lg lg:blur-xl rounded-full pointer-events-none" />

              <div className="relative z-10 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 sm:p-1.5 lg:p-2 bg-gradient-to-b from-white/20 via-white/5 to-black/60 backdrop-blur-xl border border-white/25 shadow-[0_12px_30px_sm:0_16px_40px_lg:0_20px_50px_rgba(0,0,0,0.85)]">
                <motion.img
                  src="/images/story/hero-cold-brew-product.jpg"
                  alt="Artisan Cold Brew"
                  className="w-full h-auto object-contain rounded-lg sm:rounded-xl lg:rounded-2xl filter brightness-105 contrast-[1.06]"
                  loading="eager"
                  animate={{
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
