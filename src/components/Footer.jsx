import React, { useState } from 'react';
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

  const handleFooterNav = (e, targetId) => {
    e.preventDefault();
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

  return (
    <footer className="relative bg-cafe-950 text-cafe-200 pt-16 pb-10 border-t border-cafe-850 overflow-hidden">
      {/* Background Image with Warm Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/footer-bg.jpg" 
          alt="Social Sips Cafe Lounge Atmosphere" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-950 via-cafe-950/95 to-cafe-950/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & VIP Club Banner */}
        <div className="bg-cafe-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-cafe-700/70 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-800 text-amberGold text-xs font-semibold uppercase tracking-wider border border-amberGold/30">
              <Coffee className="w-3.5 h-3.5" />
              <span>Clearwater Sip Club VIP</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Get 15% Off Your First Coffee, Boba or Gelato
            </h3>
            <p className="text-xs sm:text-sm text-cafe-300 max-w-lg">
              Subscribe for secret seasonal menu drops, exclusive Clearwater event invites, and weekend perks.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-sm font-semibold">
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
                  className="px-4 py-3 rounded-xl bg-cafe-950/80 border border-cafe-700 text-white placeholder-cafe-400 text-xs sm:text-sm focus:outline-none focus:border-amberGold transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amberGold hover:bg-amberGold-hover text-cafe-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Join VIP</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cafe-800/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cafe-900 flex items-center justify-center text-amberGold border border-amberGold/30">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">Social Sips</span>
                <span className="text-[11px] block text-amberGold font-medium tracking-wide">Cafe & Bar • Clearwater</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cafe-400 leading-relaxed">
              Clearwater's destination for specialty ethically roasted coffee, authentic Italian small-batch gelato, handcrafted fruit & milk boba teas, and relaxing evening sips.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-cafe-300 font-medium">
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
              <li><button onClick={(e) => handleFooterNav(e, 'home')} className="hover:text-amberGold transition-colors cursor-pointer text-left">Home</button></li>
              <li><button onClick={(e) => handleFooterNav(e, 'about')} className="hover:text-amberGold transition-colors cursor-pointer text-left">About Us</button></li>
              <li><button onClick={(e) => handleFooterNav(e, 'menu')} className="hover:text-amberGold transition-colors cursor-pointer text-left">Curated Menu</button></li>
              <li><button onClick={(e) => handleFooterNav(e, 'atmosphere')} className="hover:text-amberGold transition-colors cursor-pointer text-left">Atmosphere</button></li>
              <li><button onClick={(e) => handleFooterNav(e, 'bulk-orders')} className="hover:text-amberGold transition-colors cursor-pointer text-left">Group Catering</button></li>
              <li><button onClick={(e) => handleFooterNav(e, 'contact')} className="hover:text-amberGold transition-colors cursor-pointer text-left">Contact & Map</button></li>
            </ul>
          </div>

          {/* Menu Highlights Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Artisan Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-cafe-300">
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amberGold shrink-0" />
                <span>Single-Origin Cold Brews & Cortados</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amberGold shrink-0" />
                <span>Authentic Sicilian Pistachio Gelato</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amberGold shrink-0" />
                <span>Tiger Brown Sugar Milk Tea</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amberGold shrink-0" />
                <span>Ceremonial Matcha Cloud Boba</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amberGold shrink-0" />
                <span>Clearwater Espresso Martinis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amberGold shrink-0" />
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
                <MapPin className="w-4 h-4 text-amberGold shrink-0" />
                <span className="text-white font-medium">Clearwater, FL</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amberGold shrink-0" />
                <a href="tel:+17272401811" className="text-white hover:text-amberGold transition-colors font-medium">
                  +1 (727) 240-1811
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amberGold shrink-0" />
                <a href="mailto:SocialSipsCafe@gmail.com" className="text-white hover:text-amberGold transition-colors break-all">
                  SocialSipsCafe@gmail.com
                </a>
              </li>
              <li className="pt-2 text-[11px] text-cafe-400 border-t border-cafe-800">
                Mon–Thu: 7:00 AM – 9:00 PM <br />
                Fri–Sat: 7:00 AM – 11:00 PM <br />
                Sun: 8:00 AM – 9:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cafe-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Social Sips Cafe & Bar. All rights reserved.</span>
            <span className="hidden md:inline">• Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 hidden md:inline" />
            <span className="hidden md:inline">in Clearwater, Florida</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-cafe-200 text-xs border border-cafe-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amberGold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
