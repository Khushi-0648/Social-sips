import React, { useState } from 'react';
import { Eye, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section id="gallery" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cafe-100 text-cafe-800 text-xs font-semibold tracking-wider uppercase border border-cafe-200">
            <Eye className="w-3.5 h-3.5 text-amberGold" />
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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cafe-900 text-white shadow-warm-sm border border-cafe-800'
                  : 'bg-white text-cafe-700 border border-cafe-200 hover:bg-cafe-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid of Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-cafe-900 cursor-pointer shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-950/90 via-cafe-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Action icon pinned top right */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom text info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-cafe-200 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cafe-950/90 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="max-w-4xl w-full bg-cafe-900 rounded-3xl overflow-hidden border border-cafe-700 shadow-2xl">
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                loading="lazy"
                decoding="async"
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
            <div className="p-6 sm:p-8 bg-cafe-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amberGold uppercase tracking-wider">{currentItem.tag}</span>
                <h3 className="font-serif text-2xl font-bold mt-1">{currentItem.title}</h3>
                <p className="text-sm text-cafe-300 mt-1 max-w-xl">{currentItem.description}</p>
              </div>
              <span className="text-xs text-cafe-400 bg-cafe-800 px-3 py-1.5 rounded-lg shrink-0">
                Photo {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
