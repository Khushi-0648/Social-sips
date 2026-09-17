import React from 'react';
import { 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  Coffee, 
  IceCream, 
  CupSoda,
  ArrowRight
} from 'lucide-react';

export default function CraftProcess() {
  const steps = [
    {
      number: '01',
      icon: Coffee,
      title: 'Ethical Roasting & Micro Extraction',
      subtitle: 'From High-Altitude Farms to Your Cup',
      description: 'We source direct-trade single-origin specialty green beans from family farms in Ethiopia, Colombia, and Guatemala. Roasted weekly right here in Florida to unlock nuanced flavor notes of dark cocoa, citrus, and toasted hazelnut.',
      image: '/images/coffee-cortado.jpg',
      badge: 'Locally Roasted'
    },
    {
      number: '02',
      icon: IceCream,
      title: 'Old-World Italian Gelato Churning',
      subtitle: 'Slow, Dense & Naturally Rich',
      description: 'Unlike commercial ice cream loaded with air and artificial emulsifiers, our gelato is churned at higher temperatures with authentic DOP Sicilian Bronte pistachios, Madagascar bourbon vanilla, and fresh Florida dairy.',
      image: '/images/gelato-pistachio.jpg',
      badge: 'Authentic Recipe'
    },
    {
      number: '03',
      icon: CupSoda,
      title: 'Slow-Simmered Boba & Loose Leaf Tea',
      subtitle: 'Chewy Warm Pearls & Organic Infusions',
      description: 'Our tapioca pearls are boiled in small batches every 3 hours and simmered in authentic Taiwanese brown sugar until warm, caramel-rich, and soft. Paired with certified ceremonial Uji matcha and cold-steeped jasmine green tea.',
      image: '/images/boba-tiger.jpg',
      badge: 'Zero Powders'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amberGold" />
            <span>Behind The Counter</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            How We Craft Your Sips
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            We believe extraordinary drinks and desserts come from unwavering respect for raw ingredients and artisanal techniques.
          </p>
        </div>

        {/* 3 Steps Horizontal / Vertical Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                {/* Visual Image */}
                <div className="relative h-52 overflow-hidden bg-cafe-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-cafe-950/80 text-amberGold text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-amberGold/30">
                    {step.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 font-serif text-4xl font-extrabold text-white/90 drop-shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-amberGold uppercase tracking-wider block">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-cafe-950 mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-cafe-100 flex items-center gap-2 text-xs font-semibold text-cafe-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Quality Guaranteed Every Cup</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
