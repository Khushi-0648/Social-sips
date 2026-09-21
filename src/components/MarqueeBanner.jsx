import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    'Single-Origin Colombian Espresso',
    'Slow-Churned Sicilian Gelato',
    'Muscovado Brown Sugar Boba',
    'Sun-Drenched Clearwater Patio',
    'Nitro Cold Brew On Tap',
    'Artisanal Hand-Poured Latte Art',
    'Evening Social Lounge & Sips',
    'Minutes From Clearwater Beach'
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0807] border-y border-[#F0C070]/20 py-3 sm:py-3.5 select-none z-20">
      {/* Edge gradient masks for seamless visual fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050404] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050404] to-transparent z-10" />

      {/* Infinite scrolling marquee track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="inline-flex items-center gap-3.5 mx-4 sm:mx-6 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#F0C070]" />
            <span className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D4C7BD] hover:text-[#F0C070] transition-colors">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
