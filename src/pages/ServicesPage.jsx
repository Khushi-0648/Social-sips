import React from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';
import MenuServices from '../components/MenuServices';
import BulkOrders from '../components/BulkOrders';
import RetailShop from '../components/RetailShop';

export default function ServicesPage({ onOpenReservation }) {
  const serviceCards = [
    {
      title: 'Artisan Coffee & Espresso Bar',
      subtitle: 'Single-Origin Extraction & Micro-Lots',
      desc: 'Featuring custom Slayer espresso machines, hand-poured V60 pour-overs, nitro cold brew taps, and seasonal house syrups (real vanilla bean, spiced cardamom, lavender honey).',
      badge: 'Daily 7 AM – 10 PM',
      icon: Coffee
    },
    {
      title: 'Slow-Brewed Handcrafted Boba',
      subtitle: 'Taiwanese Loose Leaf & Real Brown Sugar',
      desc: 'Whole-leaf organic teas (High Mountain Oolong, Ceremonial Uji Matcha, Roasted Hojicha) shaken with fresh milk or oat milk, paired with slow-stewed warm tapioca pearls.',
      badge: 'Hand-Shaken to Order',
      icon: CupSoda
    },
    {
      title: 'Small-Batch Italian Gelato',
      subtitle: 'Authentic Churn with Sicilian Pistachio',
      desc: 'Dense, silky European-style gelato made daily. Enjoy freshly baked cinnamon waffle cones, espresso affogatos, and dairy-free seasonal fruit sorbettos.',
      badge: 'Made Fresh Every Morning',
      icon: IceCream
    },
    {
      title: 'Office Catering & Group Delivery',
      subtitle: 'Insulated Carry Boxes & Sealed Crates',
      desc: 'Planning a team breakfast or coastal event? We provide 96oz hot coffee travelers, sealed boba crates, gelato tubs, and European butter pastry platters.',
      badge: 'Advance Orders Welcome',
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
    <div className="pt-24 sm:pt-28 pb-20">
      
      {/* 1. Page Hero Banner with Background Image & Ambient Obsidian Overlay */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center border-b border-[#2C221B] overflow-hidden">
        {/* Background Image Container with Multi-layer Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/hero-bar.jpg" 
            alt="Social Sips Bar & Services Atmosphere" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050404] via-[#050404]/90 to-[#050404]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-transparent to-[#050404]/80" />
          <div className="absolute inset-0 bg-[#050404]/40" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-3xl space-y-5">
            
            {/* Breadcrumb & Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Link 
                to="/" 
                className="text-xs text-[#B8ADA5] hover:text-[#F0C070] transition-colors"
              >
                Home
              </Link>
              <span className="text-[#5C4D41] text-xs">•</span>
              <span className="text-xs text-[#F0C070] font-semibold">Services & Menu</span>
              <span className="text-[#5C4D41] text-xs">•</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1A16]/90 border border-[#3D2D22] text-[11px] font-bold text-[#F0C070] uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-[#F0C070]" />
                <span>Offerings & Hospitality</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Curated Sips, Artisan Bites <br />
              <span className="italic font-normal text-[#F0C070]">& Group Catering.</span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-[#D4C7BD] leading-relaxed max-w-2xl">
              Explore our complete spectrum of cafe craft: single-origin espresso extractions, loose-leaf boba teas, daily churned Italian gelato, office catering, and retail roastery beans.
            </p>

            {/* Quick Navigation Shortcuts */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={() => scrollToSection('in-cafe-menu')}
                className="px-4 py-2 rounded-xl bg-[#120F0D]/90 hover:bg-[#1A1512] border border-[#2C221B] hover:border-[#F0C070]/50 text-xs font-semibold text-white flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
              >
                <Coffee className="w-3.5 h-3.5 text-[#F0C070]" />
                <span>In-Cafe Menu</span>
              </button>
              <button
                onClick={() => scrollToSection('catering')}
                className="px-4 py-2 rounded-xl bg-[#120F0D]/90 hover:bg-[#1A1512] border border-[#2C221B] hover:border-[#F0C070]/50 text-xs font-semibold text-white flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-[#F0C070]" />
                <span>Group Catering</span>
              </button>
              <button
                onClick={() => scrollToSection('retail-shop')}
                className="px-4 py-2 rounded-xl bg-[#120F0D]/90 hover:bg-[#1A1512] border border-[#2C221B] hover:border-[#F0C070]/50 text-xs font-semibold text-white flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#F0C070]" />
                <span>At-Home Retail</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4 Core Pillars Overview */}
      <section className="py-16 bg-[#0A0807] border-b border-[#2C221B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-[#120F0D] rounded-3xl p-6 border border-[#2C221B] hover:border-[#F0C070]/50 transition-all shadow-xl flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22]">
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-xs text-[#F0C070] font-semibold mb-2">{s.subtitle}</p>
                    <p className="text-xs text-[#B8ADA5] leading-relaxed">{s.desc}</p>
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

      {/* 5. At-Home Retail Counter Goods */}
      <div className="border-b border-[#2C221B]" id="retail-shop">
        <RetailShop />
      </div>

      {/* 6. Private Event Booking Callout */}
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
