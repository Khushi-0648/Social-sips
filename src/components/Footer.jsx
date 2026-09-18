import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  Check, 
  ArrowRight,
  ArrowUp,
  ShieldCheck,
  Send
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050404] text-[#B8ADA5] pt-16 pb-10 border-t border-[#2C221B] overflow-hidden">
      {/* Background Image with Warm Ambient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/footer-bg.jpg" 
          alt="Social Sips Cafe Lounge Atmosphere" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-[#050404]/95 to-[#050404]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & VIP Club Banner */}
        <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-10 border border-[#2C221B] mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1F1A16] text-[#F0C070] text-xs font-bold uppercase tracking-wider border border-[#3D2D22]">
              <span>Clearwater Sip Club VIP</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Get 15% Off Your First Coffee, Boba or Gelato
            </h3>
            <p className="text-xs sm:text-sm text-[#B8ADA5] max-w-lg">
              Subscribe for secret seasonal menu drops, exclusive Clearwater event invites, and weekend perks.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm font-semibold">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're in! Check your email for your 15% VIP promo code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white placeholder-[#7A6D63] text-xs sm:text-sm focus:outline-none focus:border-[#F0C070] transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Join VIP</span>
                  <Send className="w-3.5 h-3.5 text-[#050404]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C221B]">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#181310] flex items-center justify-center text-[#F0C070] border border-[#3D2D22]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">Social Sips</span>
                <span className="text-[11px] block text-[#F0C070] font-semibold tracking-wide">Cafe & Bar • Clearwater</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B8ADA5] leading-relaxed">
              Clearwater's destination for specialty ethically roasted coffee, authentic Italian small-batch gelato, handcrafted fruit & milk boba teas, and relaxing evening sips.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#C7B7AB] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              <span>Serving Clearwater, FL • Open 7 Days</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#F0C070] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#F0C070] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#F0C070] transition-colors">Services & Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-[#F0C070] transition-colors">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#F0C070] transition-colors">Contact & Map</Link></li>
            </ul>
          </div>

          {/* Menu Highlights Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Artisan Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B8ADA5]">
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#F0C070] shrink-0" />
                <span>Single-Origin Cold Brews & Cortados</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#F0C070] shrink-0" />
                <span>Authentic Sicilian Pistachio Gelato</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#F0C070] shrink-0" />
                <span>Tiger Brown Sugar Milk Tea</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#F0C070] shrink-0" />
                <span>Ceremonial Matcha Cloud Boba</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#F0C070] shrink-0" />
                <span>Clearwater Espresso Martinis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-[#F0C070] shrink-0" />
                <span>Artisan Avocado Sourdough Tartines</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Visit & Connect
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F0C070] shrink-0" />
                <span className="text-white font-medium">Clearwater, FL</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F0C070] shrink-0" />
                <a href="tel:+17272401811" className="text-white hover:text-[#F0C070] transition-colors font-medium">
                  +1 (727) 240-1811
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F0C070] shrink-0" />
                <a href="mailto:SocialSipsCafe@gmail.com" className="text-white hover:text-[#F0C070] transition-colors break-all">
                  SocialSipsCafe@gmail.com
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#8C7F75] border-t border-[#2C221B]">
                Mon–Thu: 7:00 AM – 9:00 PM <br />
                Fri–Sat: 7:00 AM – 11:00 PM <br />
                Sun: 8:00 AM – 9:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row & Legal Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7F75]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Social Sips Cafe & Bar. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <Link to="/privacy-policy" className="hover:text-[#F0C070] transition-colors underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/cookies-policy" className="hover:text-[#F0C070] transition-colors underline-offset-2 hover:underline">
              Cookies Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#181310] hover:bg-[#221B16] text-[#FAF5F0] hover:text-[#F0C070] text-xs border border-[#2C221B] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F0C070]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
