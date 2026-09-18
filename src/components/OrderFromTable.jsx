import React, { useState } from 'react';
import { 
  QrCode, 
  Smartphone, 
  Coffee, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

export default function OrderFromTable({ onOpenReservation }) {
  const [selectedTable, setSelectedTable] = useState('4');

  const steps = [
    {
      number: '01',
      icon: QrCode,
      badge: 'Step 1',
      title: 'Scan Your Table QR',
      description: 'Point your phone camera at the QR code stand located on your table.',
      highlight: 'Instant Menu Access'
    },
    {
      number: '02',
      icon: Coffee,
      badge: 'Step 2',
      title: 'Customize Your Drinks',
      description: 'Select your coffee roast, milk choice, sweetness, and artisan gelato scoops.',
      highlight: 'Made to Order'
    },
    {
      number: '03',
      icon: Sparkles,
      badge: 'Step 3',
      title: 'Direct Table Delivery',
      description: 'Our baristas hand-prepare your order and bring it straight to your seat.',
      highlight: 'Zero Counter Lines'
    }
  ];

  const popularTables = [
    { id: '2', name: 'Table 2', zone: 'Espresso Bar' },
    { id: '4', name: 'Table 4', zone: 'Patio Garden' },
    { id: '7', name: 'Table 7', zone: 'Quiet Work Lounge' },
    { id: '11', name: 'Table 11', zone: 'Cozy Window Booth' }
  ];

  const handleOrderClick = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="table-order" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-amber-700" />
            <span>Contactless Dine-In</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Order From Your Table
          </h2>
          <p className="text-sm sm:text-base text-cafe-600 leading-relaxed">
            Relax at your seat. Scan your table QR code or choose your table below to order fresh drinks and gelato delivered to you.
          </p>
        </div>

        {/* 3 Steps Bento Grid (Horizontal Scroll on Mobile, 3 Columns on Tablet/Desktop) */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-10 sm:mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="w-[270px] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-3xl p-5 sm:p-7 border border-cafe-200/90 shadow-warm-sm hover:shadow-warm-md hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Metadata: Icon, Number, Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200/60 group-hover:bg-cafe-900 group-hover:text-amberGold transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-cafe-100 text-cafe-800 text-[10px] font-bold border border-cafe-200">
                        {step.badge}
                      </span>
                      <span className="font-serif text-2xl font-extrabold text-cafe-300">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cafe-950 mb-2 leading-snug group-hover:text-amber-900 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-4 mt-4 border-t border-cafe-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Table Ordering Action Box */}
        <div className="bg-cafe-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-cafe-800 shadow-warm-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* Left: Table Status & Info */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amberGold text-xs font-mono border border-white/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Table Ordering Active</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Seated Now? Select Your Table
              </h3>
              <p className="text-xs sm:text-sm text-cafe-300 max-w-xl leading-relaxed">
                Choose your table number to browse the live kitchen menu with contactless payment via Apple Pay, Google Pay, or card.
              </p>

              {/* Quick Table Selection Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {popularTables.map((tbl) => {
                  const isSelected = selectedTable === tbl.id;
                  return (
                    <button
                      key={tbl.id}
                      onClick={() => setSelectedTable(tbl.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-amberGold text-cafe-950 border-amberGold font-bold shadow-xs'
                          : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{tbl.name}</span>
                      <span className="opacity-60 text-[10px] ml-1">({tbl.zone})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Quick Action Button & Guarantees */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={handleOrderClick}
                className="w-full sm:w-auto lg:w-64 px-6 py-3.5 rounded-2xl bg-amberGold hover:bg-amber-400 text-cafe-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-warm-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Order for Table #{selectedTable}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-cafe-400 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amberGold" />
                  <span>~4 Min Delivery</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contactless Pay</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
