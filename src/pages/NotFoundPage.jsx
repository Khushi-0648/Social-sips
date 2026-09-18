import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Home, Utensils, MapPin, ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="pt-28 pb-24 min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[#050404]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#F0C070]/10 via-[#F0C070]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        
        {/* Stylized Badge & 404 Graphic */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#120F0D] border border-[#3D2D22] flex items-center justify-center text-[#F0C070] shadow-2xl">
              <Coffee className="w-12 h-12 sm:w-14 sm:h-14 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[#F0C070] text-[#050404] font-black text-xs shadow-lg">
              404
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider">
            <span>Page Not Found</span>
          </div>
        </div>

        {/* Headings & Friendly Explanation */}
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Looks Like This Cup Has Gone Missing
          </h1>
          <p className="text-sm sm:text-base text-[#B8ADA5] max-w-lg mx-auto leading-relaxed">
            The brew you are looking for isn't on our bar counter. It might have been moved, renamed, or enjoyed before you arrived.
          </p>
        </div>

        {/* Action Shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-6 py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-sm transition-all shadow-lg flex items-center gap-2 group"
          >
            <Home className="w-4 h-4 text-[#050404]" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="px-6 py-3.5 rounded-xl bg-[#120F0D] hover:bg-[#1A1512] text-white border border-[#2C221B] hover:border-[#F0C070]/50 font-bold text-sm transition-all flex items-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#F0C070]" />
            <span>Explore Curated Menu</span>
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-[#120F0D] hover:bg-[#1A1512] text-white border border-[#2C221B] hover:border-[#F0C070]/50 font-bold text-sm transition-all flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#F0C070]" />
            <span>Visit Clearwater Counter</span>
          </Link>
        </div>

        {/* Quick Links Footer */}
        <div className="pt-6 border-t border-[#2C221B] max-w-md mx-auto flex items-center justify-center gap-6 text-xs text-[#8C7F75]">
          <Link to="/about" className="hover:text-[#F0C070] transition-colors">About Us</Link>
          <span>•</span>
          <Link to="/gallery" className="hover:text-[#F0C070] transition-colors">Visual Gallery</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#F0C070] transition-colors">Operating Hours</Link>
        </div>
      </div>
    </div>
  );
}
