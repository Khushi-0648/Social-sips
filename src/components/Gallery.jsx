import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 scroll-mt-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cafe-100 text-cafe-800 text-xs font-semibold tracking-wider uppercase border border-cafe-200">
            <span>Visual Cafe Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cafe-950 tracking-tight">
            The Aesthetic Experience
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Take a look inside our sun-drenched Clearwater cafe. From intricate latte art to marble-swirled gelato and sunset social bar evenings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-2 max-w-full sm:flex-wrap sm:justify-center mb-8 sm:mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cafe-900 text-white shadow-warm-sm border border-cafe-800'
                  : 'bg-white text-cafe-700 border border-cafe-200 hover:bg-cafe-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Slider on Mobile, 2/3-Col Grid on Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="w-[80vw] max-w-[320px] sm:w-auto shrink-0 snap-start group relative rounded-3xl overflow-hidden bg-cafe-900 cursor-pointer shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 h-72 sm:h-80 select-none"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Details Overlay: Displays gracefully on mobile, reveals on hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-950/95 via-cafe-950/35 to-transparent flex flex-col justify-between p-4 sm:p-5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
                
                {/* Top Bar: Tag badge & Expand icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-amberGold border border-amberGold/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:bg-amberGold group-hover:text-cafe-950 transition-colors shadow-2xs">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Bottom Info: Title & Concise Description */}
                <div className="translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cafe-200 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center gap-2 pt-3 text-[11px] font-mono text-cafe-500">
          <span>← Swipe to explore gallery photos ({filteredItems.length}) →</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-cafe-950/90 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 shadow-md"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 shadow-md"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 shadow-md"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col bg-cafe-900 rounded-3xl overflow-hidden border border-cafe-700 shadow-2xl">
            <div className="flex-1 min-h-0 overflow-hidden bg-black flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                loading="lazy"
                decoding="async"
                className="max-h-[50vh] sm:max-h-[65vh] w-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 lg:p-8 bg-cafe-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shrink-0 border-t border-cafe-800">
              <div className="space-y-1">
                <span className="text-[11px] sm:text-xs font-semibold text-amberGold uppercase tracking-wider">{currentItem.tag}</span>
                <h3 className="font-serif text-lg sm:text-2xl font-bold leading-tight">{currentItem.title}</h3>
                <p className="text-xs sm:text-sm text-cafe-300 max-w-xl leading-relaxed">{currentItem.description}</p>
              </div>
              <span className="text-[11px] sm:text-xs text-cafe-400 bg-cafe-800 px-3 py-1.5 rounded-lg shrink-0 self-end sm:self-auto border border-cafe-700">
                Photo {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
