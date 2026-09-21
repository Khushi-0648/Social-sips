import React from 'react';
import { 
  Coffee, 
  IceCream, 
  CupSoda
} from 'lucide-react';

export default function CraftProcess() {

  const steps = [
    {
      number: '01',
      icon: Coffee,
      title: 'Ethical Roasting & Micro Extraction',
      subtitle: 'Direct-Trade Coffee Beans',
      description: 'Ethically sourced single-origin beans, micro-roasted weekly in Florida to unlock rich cocoa and citrus notes.',
      image: '/images/coffee-cortado.jpg',
      badge: 'Locally Roasted'
    },
    {
      number: '02',
      icon: IceCream,
      title: 'Old-World Italian Gelato Churning',
      subtitle: 'Authentic Italian Churning',
      description: 'Slow-churned with DOP Sicilian Bronte pistachios and organic dairy for dense, silky, all-natural texture.',
      image: '/images/gelato-pistachio.jpg',
      badge: 'Authentic Recipe'
    },
    {
      number: '03',
      icon: CupSoda,
      title: 'Slow-Simmered Boba & Loose Leaf Tea',
      subtitle: 'Warm Slow-Simmered Pearls',
      description: 'Taiwanese tapioca pearls simmered in Muscovado sugar every 3 hours, paired with fresh organic tea infusions.',
      image: '/images/boba-tiger.jpg',
      badge: 'Zero Powders'
    }
  ];

  return (
    <section id="craft" className="py-14 sm:py-20 lg:py-24 scroll-mt-24 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <span>Behind The Counter</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            How We Craft Your Sips
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            We believe extraordinary drinks and desserts come from unwavering respect for raw ingredients and artisanal techniques.
          </p>
        </div>
        {/* 3 Steps - Horizontal Snap Carousel on Mobile, 3-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="w-[78vw] max-w-[310px] md:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group justify-between select-none"
              >
                <div>
                  {/* Visual Image */}
                  <div className="relative h-40 sm:h-52 overflow-hidden bg-cafe-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-7 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cafe-100 text-cafe-800 text-[10px] font-bold border border-cafe-200">
                          {step.badge}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-extrabold text-cafe-300">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-amberGold uppercase tracking-wider block">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-base sm:text-xl font-bold text-cafe-950 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 pt-2 text-[11px] font-mono text-cafe-500">
          <span>← Swipe to explore craft steps ({steps.length}) →</span>
        </div>

      </div>
    </section>
  );
}
