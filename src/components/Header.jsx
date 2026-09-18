import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Information Bar */}
      <div className="bg-[#050404] text-[#B8ADA5] text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#1E1611]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs min-w-0">
            <span className="flex items-center gap-1.5 text-[#F0C070] font-semibold whitespace-nowrap shrink-0">
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#F0C070] shrink-0" />
              <span>Clearwater, FL • Near Beach</span>
            </span>
            <span className="hidden md:inline text-[#3D2D22]">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#B8ADA5] whitespace-nowrap shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#F0C070] shrink-0" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs shrink-0">
            <a 
              href="tel:+17272401811" 
              className="flex items-center gap-1 sm:gap-1.5 text-white hover:text-[#F0C070] transition-colors font-semibold whitespace-nowrap shrink-0"
              title="Call Social Sips Cafe"
            >
              <Phone className="w-3 h-3 text-[#F0C070] shrink-0" />
              <span>(727) 240-1811</span>
            </a>
            <span className="text-[#3D2D22] hidden lg:inline">|</span>
            <a 
              href="mailto:SocialSipsCafe@gmail.com" 
              className="hidden lg:flex items-center gap-1.5 text-[#B8ADA5] hover:text-[#F0C070] transition-colors whitespace-nowrap shrink-0"
              title="Email Social Sips Cafe"
            >
              <Mail className="w-3 h-3 text-[#F0C070] shrink-0" />
              <span>SocialSipsCafe@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Streamlined Navigation Bar - Pure Obsidian & Gold */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#050404]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-[#2C221B]' 
            : 'bg-[#050404]/85 backdrop-blur-md py-3.5 border-b border-[#2C221B]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Boutique Brand Identity */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#120F0D] flex items-center justify-center text-[#F0C070] shadow-sm group-hover:scale-105 transition-transform duration-300 border border-[#3D2D22] shrink-0">
              <Coffee className="w-5 h-5 text-[#F0C070]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#F0C070] transition-colors whitespace-nowrap">
                  Social Sips
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] whitespace-nowrap">
                  Cafe & Bar
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-[#B8ADA5] hidden sm:block lg:hidden xl:block whitespace-nowrap">
                Clearwater, FL • Coffee • Gelato • Boba
              </p>
            </div>
          </Link>

          {/* Desktop Streamlined Nav Links */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-xs xl:text-sm font-bold transition-all cursor-pointer py-1 relative whitespace-nowrap ${
                    isActive 
                      ? 'text-[#F0C070] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F0C070]' 
                      : 'text-[#E8DED6] hover:text-[#F0C070] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F0C070] hover:after:w-full after:transition-all after:duration-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href="tel:+17272401811"
              className="hidden xl:flex px-3.5 py-2 rounded-xl border border-[#2C221B] bg-[#120F0D] hover:bg-[#1A1512] text-white text-xs font-bold transition-all shadow-xs items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#F0C070] shrink-0" />
              <span>(727) 240-1811</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="px-3.5 xl:px-4 py-2 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-xs shadow-lg transition-all duration-300 flex items-center gap-1.5 group cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#050404] shrink-0" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile & Tablet Action Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              onClick={onOpenReservation}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-xs shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#050404] shrink-0" />
              <span>Reserve</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-[#181310] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#2C221B] bg-[#0A0807]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl">
            <div className="flex flex-col gap-1.5 pt-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-colors text-left ${
                      isActive 
                        ? 'bg-[#181310] text-[#F0C070] border border-[#3D2D22]' 
                        : 'text-white hover:bg-[#120F0D]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#7A6D63]" />
                </NavLink>
              ))}
              
              <div className="mt-3 pt-3 border-t border-[#2C221B] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#F0C070] text-[#050404] font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-[#050404]" />
                  <span>Reserve Table or Group Catering</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <a
                    href="tel:+17272401811"
                    className="py-2.5 px-3 rounded-xl bg-[#120F0D] text-white font-bold flex items-center justify-center gap-1.5 border border-[#2C221B] shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F0C070]" />
                    <span>Call Counter</span>
                  </a>
                  <a
                    href="mailto:SocialSipsCafe@gmail.com"
                    className="py-2.5 px-3 rounded-xl bg-[#120F0D] text-white font-bold flex items-center justify-center gap-1.5 border border-[#2C221B] shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#F0C070]" />
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
