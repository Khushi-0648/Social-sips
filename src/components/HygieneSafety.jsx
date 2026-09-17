import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Droplet, 
  Flame, 
  Thermometer, 
  Award, 
  CheckCircle,
  Eye
} from 'lucide-react';

export default function HygieneSafety() {
  const standards = [
    {
      icon: Droplet,
      title: 'Triple UV & Reverse-Osmosis Water Purification',
      description: 'Every drop of water used for our espresso extraction, loose-leaf tea steeping, and ice cubes passes through commercial medical-grade reverse osmosis and UV filtration, eliminating 99.9% of minerals and impurities.'
    },
    {
      icon: Flame,
      title: '212°F Daily Steam Machine Sterilization',
      description: 'Espresso portafilters, steam wands, and Italian gelato batch churners undergo automated 212°F thermal steam sterilization every morning and evening to eliminate bacterial cross-contamination.'
    },
    {
      icon: ShieldCheck,
      title: '100% Food-Grade Glove & Tongs Protocol',
      description: 'All gelato cones, butter croissants, and fresh boba toppings are handled using sterile single-use food safety gloves and sanitized stainless steel tongs. Zero bare-hand food contact is our ironclad rule.'
    },
    {
      icon: Thermometer,
      title: 'Digital Continuous Cold-Chain Temperature Logs',
      description: 'Our organic Florida dairy, fresh fruit purées, and artisan gelato display freezers are monitored 24/7 by continuous digital sensors to ensure exact -14°C to 4°C European storage standards.'
    },
    {
      icon: Eye,
      title: 'Spotless Open-Concept Transparency',
      description: 'We have nothing to hide. Our entire barista workspace, boba tea cooking station, and gelato churner counter are completely open and visible so you can watch your treats prepared in spotless view.'
    },
    {
      icon: Award,
      title: 'Certified Grade-A Health Inspection Rating',
      description: 'Social Sips Cafe & Bar maintains the highest sanitary inspection grade in Clearwater, FL, following rigorous Pinellas County and Florida Department of Health food safety protocols.'
    }
  ];

  return (
    <section id="hygiene" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Health, Hygiene & Food Safety</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Our Cleanliness & Purity Commitment
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Your health and trust are our top priorities. From triple-filtered water to hospital-grade sterilization and touchless prep, we hold ourselves to the highest hygiene standards in Clearwater.
          </p>
        </div>

        {/* 6 Hygiene Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-cafe-200 shadow-warm-sm hover:shadow-warm-md hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cafe-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-cafe-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Inspected Daily</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
