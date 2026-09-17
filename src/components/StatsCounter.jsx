import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Star, 
  Heart, 
  Coffee, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
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
    <section id="stats" className="py-14 lg:py-18 bg-[#F4ECE1] relative overflow-hidden border-y border-cafe-200">
      
      {/* Decorative Warm Accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amberGold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Title & Live Status Indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-cafe-300/70 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 border border-cafe-300 text-xs font-bold shadow-xs mb-3">
              <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              <span className="tracking-wide">COMMUNITY STATS BANNER • CLEARWATER, FL</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cafe-950 tracking-tight">
              A Gathering Place Loved by Thousands
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-cafe-700 bg-white/80 px-4 py-2 rounded-xl border border-cafe-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">Real-time smiles & community verified count</span>
          </div>
        </div>

        {/* 4 Large Clean Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id}
                className="relative rounded-3xl bg-white border border-cafe-200/90 p-6 shadow-warm-sm hover:shadow-warm-md hover:border-amberGold/60 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Micro Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.iconBg} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cafe-50 text-cafe-700 border border-cafe-200">
                    {stat.badge}
                  </span>
                </div>

                {/* Number */}
                <div className="space-y-1 mb-2">
                  <div className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-cafe-950 group-hover:text-amberGold transition-colors flex items-center">
                    <span>{stat.value}</span>
                    {stat.isRating && (
                      <Star className="w-6 h-6 ml-1.5 text-amber-500 fill-amber-500" />
                    )}
                  </div>
                  <div className="text-sm font-bold text-cafe-800">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-cafe-600 leading-relaxed">
                  {stat.detail}
                </p>

                {/* Accent Bar */}
                <div className="mt-4 pt-3 border-t border-cafe-100 flex items-center justify-between text-[11px] text-cafe-500">
                  <span className="flex items-center gap-1 text-amberGold font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Real Community</span>
                  </span>
                  <span>Clearwater, FL</span>
                </div>
              </div>
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
