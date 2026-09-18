import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Droplet, 
  Flame, 
  Thermometer, 
  Award, 
  CheckCircle,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HygieneSafety() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const standards = [
    {
      id: 'water',
      icon: Droplet,
      shortTitle: 'Water',
      title: 'Medical-Grade Water Purification',
      badge: '99.9% Pure',
      description: 'Triple-stage reverse osmosis and UV filtration removing all minerals and impurities.'
    },
    {
      id: 'steam',
      icon: Flame,
      shortTitle: 'Steam',
      title: '212°F Thermal Steam Sterilization',
      badge: 'Heat Shield',
      description: 'Espresso wands and gelato churners sanitized daily with high-heat pressurized steam.'
    },
    {
      id: 'gloves',
      icon: ShieldCheck,
      shortTitle: 'Gloves',
      title: 'Touchless Glove & Tongs Protocol',
      badge: 'Zero Touch',
      description: 'Single-use sterile food safety gloves and sanitized tongs for all food prep.'
    },
    {
      id: 'storage',
      icon: Thermometer,
      shortTitle: 'Storage',
      title: '24/7 Digital Cold-Chain Tracking',
      badge: '-14°C to 4°C',
      description: 'Continuous digital sensors track dairy and gelato freezers at strict European temps.'
    },
    {
      id: 'kitchen',
      icon: Eye,
      shortTitle: 'Kitchen',
      title: 'Spotless Open-Concept Transparency',
      badge: '100% Open',
      description: 'Completely visible barista bar and boba prep stations open for guest viewing.'
    },
    {
      id: 'certified',
      icon: Award,
      shortTitle: 'Certified',
      title: 'Grade-A Health Inspection Rating',
      badge: 'Top Tier',
      description: 'Maintains top sanitary ratings under Florida Department of Health inspections.'
    }
  ];

  // Responsive cards per view: 1 on mobile (<640px), 2 on tablet (<1024px), 3 on desktop (>=1024px)
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const maxIndex = Math.max(0, standards.length - cardsPerPage);

  // Keep currentIndex within bounds if window resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section id="hygiene" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300 shadow-xs">
            <span>Health, Hygiene & Food Safety</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Our Cleanliness & Purity Commitment
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Your health and trust are our top priorities. From triple-filtered water to hospital-grade sterilization and touchless prep, we hold ourselves to the highest hygiene standards in Clearwater.
          </p>
        </div>

        {/* Manual Slider Container */}
        <div 
          className="overflow-hidden select-none -mx-2 px-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out py-2"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` 
            }}
          >
            {standards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <div className="h-full bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-cafe-200/90 hover:border-emerald-500/60 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      {/* Top Metadata: Icon, Standard Number & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center bg-emerald-50 text-emerald-700 border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            {item.badge}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-cafe-500 bg-cafe-100 px-2 py-0.5 rounded-md">
                            0{idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-cafe-950 mb-2 leading-snug group-hover:text-emerald-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Verification Status */}
                    <div className="pt-4 mt-4 border-t border-cafe-100 flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Inspected Daily</span>
                      </span>
                      <span className="text-[10.5px] font-medium text-cafe-400">
                        Safety Protocol
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Centered Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-10">
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous standard"
              className="w-10 h-10 rounded-2xl bg-white border border-cafe-200 hover:border-emerald-600 hover:bg-emerald-800 hover:text-white text-cafe-800 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 px-1">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-emerald-700'
                      : 'w-2.5 bg-cafe-300 hover:bg-cafe-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next standard"
              className="w-10 h-10 rounded-2xl bg-white border border-cafe-200 hover:border-emerald-600 hover:bg-emerald-800 hover:text-white text-cafe-800 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
