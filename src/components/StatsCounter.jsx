import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  Heart, 
  Coffee, 
  Award, 
  CheckCircle2, 
  Smile,
  Flame
} from 'lucide-react';

export default function StatsCounter() {
  const [guestsCount, setGuestsCount] = useState(28450);
  const [reviewsCount, setReviewsCount] = useState(1280);
  const [bobaCupsCount, setBobaCupsCount] = useState(19720);

  // Subtle live increment effect to simulate real-time guest arrivals in Clearwater
  useEffect(() => {
    const interval = setInterval(() => {
      setGuestsCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 8000);

    const bobaInterval = setInterval(() => {
      setBobaCupsCount(prev => prev + 1);
    }, 11000);

    return () => {
      clearInterval(interval);
      clearInterval(bobaInterval);
    };
  }, []);

  const stats = [
    {
      id: 'happy-guests',
      icon: Users,
      value: guestsCount.toLocaleString() + '+',
      label: 'Happy Guests Served',
      detail: 'Clearwater residents, workers & Florida coast beach visitors',
      badge: 'Live Counter',
      iconBg: 'bg-amber-100 text-amber-800',
      borderColor: 'border-amber-200'
    },
    {
      id: 'rating',
      icon: Star,
      value: '4.9',
      isRating: true,
      label: 'Average Guest Rating',
      detail: `${reviewsCount.toLocaleString()}+ verified 5-star ratings on Google & Yelp`,
      badge: 'Verified 5-Star',
      iconBg: 'bg-amber-100 text-amber-600',
      borderColor: 'border-amber-200'
    },
    {
      id: 'boba-gelato',
      icon: Heart,
      value: bobaCupsCount.toLocaleString() + '+',
      label: 'Boba Teas & Gelato Scoops',
      detail: 'Made from scratch daily with zero artificial syrups',
      badge: 'Handcrafted',
      iconBg: 'bg-rose-100 text-rose-700',
      borderColor: 'border-rose-200'
    },
    {
      id: 'quality',
      icon: Award,
      value: '100%',
      label: 'Ethically Sourced Beans',
      detail: 'Direct-trade coffee beans roasted fresh in Florida weekly',
      badge: 'Boutique Craft',
      iconBg: 'bg-emerald-100 text-emerald-800',
      borderColor: 'border-emerald-200'
    }
  ];

  return (
    <section id="stats" className="py-20 lg:py-28 scroll-mt-24 bg-[#F4ECE1] relative overflow-hidden border-y border-cafe-200">
      
      {/* Aceternity Style Ambient Radiant Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amberGold/15 via-orange-200/20 to-amber-100/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amberGold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Linear Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-cafe-900 border border-cafe-300 text-xs font-bold shadow-xs">
            <span>COMMUNITY STATS • CLEARWATER, FL</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            A Gathering Place Loved by Thousands
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            From sunrise cold brews to evening espresso martini dates, join thousands of smiling guests in Clearwater, FL.
          </p>
        </div>

        {/* 4 Clean Stats Cards - 2x2 Bento Grid on Mobile, 4 Cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative rounded-2xl sm:rounded-3xl bg-white border border-cafe-200/90 p-3.5 sm:p-6 shadow-warm-sm hover:shadow-warm-md hover:border-amberGold/60 transition-colors duration-300 group flex flex-col justify-between"
              >
                {/* Micro Icon & Badge */}
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center ${stat.iconBg} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cafe-50 text-cafe-700 border border-cafe-200">
                    {stat.badge}
                  </span>
                </div>

                {/* Number & Label */}
                <div className="space-y-0.5 sm:space-y-1 mb-1 sm:mb-2">
                  <div className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight text-cafe-950 group-hover:text-amberGold transition-colors flex items-center">
                    <span>{stat.value}</span>
                    {stat.isRating && (
                      <Star className="w-4 h-4 sm:w-6 sm:h-6 ml-1 text-amber-500 fill-amber-500" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-cafe-800 leading-snug">
                    {stat.label}
                  </div>
                </div>

                {/* Detailed description - clean on desktop, compact on mobile */}
                <p className="hidden sm:block text-xs text-cafe-600 leading-relaxed">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Live Customer Highlight Strip */}
        <div className="mt-8 rounded-2xl bg-white border border-cafe-300/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-warm-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-cafe-950">
                "Clearwater's ultimate third-place sanctuary."
              </p>
              <p className="text-xs text-cafe-600">
                Over 98% of visitors rate our specialty coffee, boba tea and gelato as their favorite in Pinellas County.
              </p>
            </div>
          </div>

          <button 
            onClick={() => {
              const el = document.getElementById('reviews');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Read Customer Reviews</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
