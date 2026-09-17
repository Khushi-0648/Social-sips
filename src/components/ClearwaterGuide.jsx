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
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200 shadow-xs">
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span>Clearwater Beach Companion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Minutes from Sun, Sand & Water
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Conveniently situated in Clearwater, FL. Whether you’re fueling up before hitting the beach or unwinding after a day on the Gulf coast.
          </p>
        </div>

        {/* 3 Coastal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nearbySpots.map((spot, idx) => {
            const Icon = spot.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-cafe-200 shadow-warm-sm hover:shadow-warm-md hover:border-amberGold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cafe-50 text-cafe-800 text-xs font-bold border border-cafe-200">
                      {spot.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-cafe-950 mb-2">
                    {spot.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                    {spot.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 rounded-2xl bg-cafe-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amberGold/20 text-amberGold flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold">Heading toward the water?</h4>
              <p className="text-xs text-cafe-300">Call ahead at +1 (727) 240-1811 and your iced drinks & gelato will be packed and ready in 10 minutes.</p>
            </div>
          </div>
          <a
            href="tel:+17272401811"
            className="shrink-0 px-6 py-3 rounded-xl bg-amberGold hover:bg-amberGold-hover text-cafe-950 font-bold text-xs sm:text-sm transition-all"
          >
            Call Ahead: (727) 240-1811
          </a>
        </div>

      </div>
    </section>
  );
}
