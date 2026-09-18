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
      tip: 'Grab an iced Spanish Honey Latte or Tiger Boba in our spill-proof cups before watching world-famous Gulf sunsets.',
      icon: Waves,
    },
    {
      title: 'Coachman Park & Downtown Waterfront',
      time: '4 mins away',
      tip: 'The ideal scenic walking route with an iced cold brew and flaky butter croissants.',
      icon: Compass,
    },
    {
      title: 'Pinellas Trail Cycling Route',
      time: '2 mins away',
      tip: 'Stop in for refreshing tropical passionfruit jasmine tea and quick cold hydration on your ride.',
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

        {/* 3 Coastal Cards Grid (Brown Background Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nearbySpots.map((spot, idx) => {
            const Icon = spot.icon;
            return (
              <div
                key={idx}
                className="bg-[#1C130D] hover:bg-[#251911] rounded-3xl p-7 border border-[#3B261A] hover:border-[#F0C070]/60 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#2A1B12] text-[#F0C070] border border-[#472E20] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#26180F] text-[#F0C070] text-xs font-bold border border-[#442B1D] shadow-2xs">
                      {spot.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#F0C070] transition-colors">
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
