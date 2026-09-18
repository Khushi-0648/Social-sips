import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function Header({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gallery', targetId: 'gallery' },
    { name: 'Atmosphere', targetId: 'atmosphere' },
    { name: 'Craft', targetId: 'craft' },
    { name: 'Events', targetId: 'events' },
    { name: 'Menu', targetId: 'menu' },
    { name: 'Catering', targetId: 'bulk-orders' },
    { name: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Information Bar */}
      <div className="bg-cafe-950 text-cafe-200 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-cafe-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs min-w-0">
            <span className="flex items-center gap-1.5 text-amberGold font-semibold whitespace-nowrap shrink-0">
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amberGold shrink-0" />
              <span>Clearwater, FL • Near Beach</span>
            </span>
            <span className="hidden md:inline text-cafe-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-cafe-300 whitespace-nowrap shrink-0">
              <Clock className="w-3.5 h-3.5 text-amberGold shrink-0" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs shrink-0">
            <a 
              href="tel:+17272401811" 
              className="flex items-center gap-1 sm:gap-1.5 text-white hover:text-amberGold transition-colors font-semibold whitespace-nowrap shrink-0"
              title="Call Social Sips Cafe"
            >
              <Phone className="w-3 h-3 text-amberGold shrink-0" />
              <span>(727) 240-1811</span>
            </a>
            <span className="text-cafe-700 hidden lg:inline">|</span>
            <a 
              href="mailto:SocialSipsCafe@gmail.com" 
              className="hidden lg:flex items-center gap-1.5 text-cafe-300 hover:text-amberGold transition-colors whitespace-nowrap shrink-0"
              title="Email Social Sips Cafe"
            >
              <Mail className="w-3 h-3 text-amberGold shrink-0" />
              <span>SocialSipsCafe@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Streamlined Navigation Bar - Bright, Warm & Clean */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-md shadow-warm-md py-2.5 border-b border-cafe-200/90 text-cafe-900' 
            : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-cafe-200/70 shadow-xs text-cafe-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Boutique Brand Identity */}
          <button 
            onClick={handleLogoClick} 
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-cafe-900 flex items-center justify-center text-amberGold shadow-sm group-hover:scale-105 transition-transform duration-300 border border-amberGold/30 shrink-0">
              <Coffee className="w-5 h-5 text-amberGold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-cafe-950 group-hover:text-amberGold transition-colors whitespace-nowrap">
                  Social Sips
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest bg-cafe-100 text-cafe-800 border border-cafe-300/80 whitespace-nowrap">
                  Cafe & Bar
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-cafe-600 hidden sm:block lg:hidden xl:block whitespace-nowrap">
                Clearwater, FL • Coffee • Gelato • Boba
              </p>
            </div>
          </button>

          {/* Desktop Streamlined Nav Links - Active on Large Laptop & Desktop */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className="text-xs xl:text-sm font-bold text-cafe-800 hover:text-amberGold transition-colors cursor-pointer py-1 relative whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amberGold hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href="tel:+17272401811"
              className="hidden xl:flex px-3.5 py-2 rounded-xl border border-cafe-300 bg-white hover:bg-cafe-50 text-cafe-900 text-xs font-bold transition-all shadow-xs items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amberGold shrink-0" />
              <span>(727) 240-1811</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="px-3.5 xl:px-4 py-2 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-bold text-xs shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex items-center gap-1.5 group cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-amberGold shrink-0" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile & Tablet Action Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              onClick={onOpenReservation}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-bold text-xs shadow-warm-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amberGold shrink-0" />
              <span>Reserve Table</span>
            </button>



            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-cafe-900 hover:bg-cafe-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cafe-900" /> : <MenuIcon className="w-6 h-6 text-cafe-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cafe-200/90 bg-cream/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-warm-lg">
            <div className="flex flex-col gap-1.5 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-cafe-950 font-bold text-sm hover:bg-cafe-100 transition-colors text-left"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-cafe-400" />
                </button>
              ))}
              
              <div className="mt-3 pt-3 border-t border-cafe-200 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-cafe-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-warm-md"
                >
                  <Calendar className="w-4 h-4 text-amberGold" />
                  <span>Reserve Table or Group Catering</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <a
                    href="tel:+17272401811"
                    className="py-2.5 px-3 rounded-xl bg-white text-cafe-900 font-bold flex items-center justify-center gap-1.5 border border-cafe-200 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-amberGold" />
                    <span>Call Counter</span>
                  </a>
                  <a
                    href="mailto:SocialSipsCafe@gmail.com"
                    className="py-2.5 px-3 rounded-xl bg-white text-cafe-900 font-bold flex items-center justify-center gap-1.5 border border-cafe-200 shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-amberGold" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
