import React from 'react';
import { 
  Sun, 
  MapPin, 
  Navigation, 
  Compass, 
  Waves, 
  Coffee
} from 'lucide-react';

export default function ClearwaterGuide() {
  const nearbySpots = [
    {
      title: 'Clearwater Beach & Pier 60',
      time: '6 mins away',
      tip: 'Grab an iced Spanish Honey Latte in spill-proof cups before Gulf sunset views.',
      icon: Waves,
    },
    {
      title: 'Coachman Park Waterfront',
      time: '4 mins away',
      tip: 'Enjoy a scenic waterfront stroll with our smooth 18-hour slow cold brew.',
      icon: Compass,
    },
    {
      title: 'Pinellas Trail Cycling Route',
      time: '2 mins away',
      tip: 'Stop by for refreshing tropical iced teas and electrolyte hydration on your ride.',
      icon: Navigation,
    }
  ];

  return (
    <section id="guide" className="py-20 lg:py-24 bg-[#050404] relative overflow-hidden border-b border-[#2C221B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#26180F] text-[#F0C070] text-xs font-bold uppercase tracking-wider border border-[#442B1D] shadow-xs">
            <span>Clearwater Beach Companion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Minutes from Sun, Sand & Water
          </h2>
          <p className="text-base sm:text-lg text-[#C7B7AB] leading-relaxed">
            Conveniently situated in Clearwater, FL. Whether you’re fueling up before hitting the beach or unwinding after a day on the Gulf coast.
          </p>
        </div>

        {/* 3 Coastal Cards - Horizontal Snap Track on Mobile, 3-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {nearbySpots.map((spot, idx) => {
            const Icon = spot.icon;
            return (
              <div
                key={idx}
                className="w-[270px] sm:w-[320px] md:w-auto shrink-0 snap-start bg-[#1C130D] hover:bg-[#251911] rounded-3xl p-5 sm:p-7 border border-[#3B261A] hover:border-[#F0C070]/60 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#2A1B12] text-[#F0C070] border border-[#472E20] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#26180F] text-[#F0C070] text-[10px] sm:text-xs font-bold border border-[#442B1D] shadow-2xs">
                      {spot.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#F0C070] transition-colors">
                    {spot.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C7B7AB] leading-relaxed">
                    {spot.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip (Rich Brown Surface) */}
        <div className="mt-12 rounded-2xl bg-[#1C130D] text-white p-6 sm:p-8 border border-[#3B261A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2A1B12] text-[#F0C070] border border-[#472E20] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">Heading toward the water?</h4>
              <p className="text-xs text-[#C7B7AB]">Call ahead at +1 (727) 240-1811 and your iced drinks & gelato will be packed and ready in 10 minutes.</p>
            </div>
          </div>
          <a
            href="tel:+17272401811"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-xs sm:text-sm transition-all shadow-md"
          >
            Call Ahead: (727) 240-1811
          </a>
        </div>

      </div>
    </section>

  );
}
