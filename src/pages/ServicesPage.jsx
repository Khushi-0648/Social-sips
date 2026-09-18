import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  IceCream, 
  CupSoda, 
  Users, 
  Sparkles, 
  Calendar, 
  Phone, 
  Check, 
  Clock, 
  Package, 
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import MenuServices from '../components/MenuServices';
import BulkOrders from '../components/BulkOrders';
import EventsCalendar from '../components/EventsCalendar';
import RetailShop from '../components/RetailShop';

export default function ServicesPage({ onOpenReservation }) {
  const serviceCards = [
    {
      title: 'Artisan Coffee & Espresso',
      subtitle: 'Single-Origin Extraction',
      desc: 'Custom Slayer espresso, V60 pour-overs, nitro cold brew taps, and house syrups.',
      badge: 'Open Daily',
      icon: Coffee
    },
    {
      title: 'Slow-Brewed Boba',
      subtitle: 'Taiwanese Loose Leaf',
      desc: 'Whole-leaf organic teas shaken fresh with warm brown sugar tapioca pearls.',
      badge: 'Hand-Shaken',
      icon: CupSoda
    },
    {
      title: 'Small-Batch Gelato',
      subtitle: 'Authentic Italian Churn',
      desc: 'Slow-churned Italian gelato, freshly baked cinnamon waffle cones, and sorbettos.',
      badge: 'Churned Daily',
      icon: IceCream
    },
    {
      title: 'Office & Event Catering',
      subtitle: 'Insulated Carry Boxes',
      desc: 'Insulated 96oz coffee travelers, sealed boba crates, and fresh pastry platters.',
      badge: 'Advance Orders',
      icon: Users
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20">
      
      {/* 1. Page Hero Banner: Editorial 4-Corner Split Layout with Motion Video Backdrop */}
      <section 
        id="services-hero"
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
            <source src="/videos/iced-coffee-13764.mp4" type="video/mp4" />
            <source src="/videos/iced-coffee-ice-drop.mp4" type="video/mp4" />
          </video>

          {/* Light Subtle Edge Transitions */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050404] to-transparent pointer-events-none" />
        </div>

        {/* Top Editorial Row: CURATE (Top-Left) & THE MENU (Top-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-3 pt-2 sm:pt-4">
          
          {/* Headline Left: CURATE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-w-0"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              CURATE
            </span>
            <div className="flex items-center gap-1.5 mt-1 sm:mt-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-amberGold uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="hidden sm:inline">Social Sips • </span>
              <span>Artisan Bar & Kitchen</span>
            </div>
          </motion.div>

          {/* Headline Right: THE MENU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-1 shrink-0"
          >
            <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amberGold/95 tracking-wider text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              the menu
            </span>
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-mono text-white/90 shadow-md">
              <span className="hidden sm:inline">Espresso • Gelato • Boba • Catering</span>
              <span className="sm:hidden">Menu & Catering</span>
            </div>
          </motion.div>

        </div>

        {/* Middle Space is Open: Video Flows Pure & Visible */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-2 sm:py-6 flex items-center justify-center pointer-events-none" />

        {/* Bottom Editorial Row: Subtext & Action Controls (Lower-Left) & FLAVOR (Bottom-Right) */}
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
              Meticulously crafted single-origin beans, slow-churned Bronte gelato, artisan boba, and full-service group catering.
            </p>

            <p className="text-[10px] sm:text-[11px] font-mono text-amber-200/90 tracking-wider">
              <span className="hidden sm:inline">Clearwater, FL • </span>
              <span>Open Daily 7 AM – 10 PM • In-House & Takeaway</span>
            </p>

            {/* Minimal Action Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
              <button
                onClick={() => scrollToSection('in-cafe-menu')}
                className="group px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amberGold to-[#B87326] hover:from-[#E29A44] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>In-Cafe Menu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('catering')}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-black/55 hover:bg-black/75 border border-white/25 text-white font-mono text-xs sm:text-sm tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-amberGold" />
                <span>Group Catering</span>
              </button>

              <button
                onClick={() => scrollToSection('weekly-events')}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-black/55 hover:bg-black/75 border border-white/25 text-white font-mono text-xs sm:text-sm tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amberGold" />
                <span>Weekly Socials</span>
              </button>

              <button
                onClick={() => scrollToSection('retail-shop')}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amberGold" />
                <span>Retail Beans</span>
              </button>
            </div>
          </motion.div>

          {/* Lower-Right: FLAVOR Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="self-end md:self-auto text-right"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              FLAVOR
            </span>
            <div className="flex items-center justify-end gap-2 mt-1 sm:mt-2 text-[10px] font-mono text-neutral-200 uppercase tracking-widest">
              <span>Explore Offerings</span>
              <ArrowDown className="w-3 h-3 text-amberGold animate-bounce" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. 4 Core Pillars Overview - 2x2 Bento on Mobile, 4-Col on Desktop */}
      <section className="py-12 sm:py-16 bg-[#0A0807] border-b border-[#2C221B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {serviceCards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-[#120F0D] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-[#2C221B] hover:border-[#F0C070]/50 transition-all shadow-xl flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4 gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22]">
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-xs sm:text-lg font-bold text-white mb-0.5 sm:mb-1">{s.title}</h3>
                    <p className="text-[10.5px] sm:text-xs text-[#F0C070] font-semibold mb-1 sm:mb-2">{s.subtitle}</p>
                    <p className="text-[11px] sm:text-xs text-[#B8ADA5] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. In-Cafe Curated Menu Section */}
      <div className="border-b border-[#2C221B]" id="in-cafe-menu">
        <MenuServices onOpenReservation={onOpenReservation} />
      </div>

      {/* 4. Office & Group Catering Section */}
      <div className="border-b border-[#2C221B]" id="catering">
        <BulkOrders />
      </div>

      {/* 5. Weekly Socials & Cafe Hours Section */}
      <div className="border-b border-[#2C221B]" id="weekly-events">
        <EventsCalendar onOpenReservation={onOpenReservation} hidePrivateBanner={true} />
      </div>

      {/* 6. At-Home Retail Counter Goods */}
      <div className="border-b border-[#2C221B]" id="retail-shop">
        <RetailShop />
      </div>

      {/* 7. Private Event Booking Callout */}
      <section className="py-20 bg-[#050404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-14 border border-[#2C221B] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left relative z-10">
              <span className="text-xs font-bold text-[#F0C070] uppercase tracking-wider">Private Venue Hire</span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Host Your Private Celebration or Corporate Mixer
              </h3>
              <p className="text-xs sm:text-sm text-[#B8ADA5] max-w-xl leading-relaxed">
                Looking for an exclusive evening venue? Rent our full cafe lounge or outdoor coastal patio with dedicated barista service, custom cocktail flights, and artisan dessert stations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
              <a
                href="tel:+17272401811"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#050404]" />
                <span>Call Catering: (727) 240-1811</span>
              </a>
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#181310] hover:bg-[#251D18] text-white border border-[#2C221B] text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
