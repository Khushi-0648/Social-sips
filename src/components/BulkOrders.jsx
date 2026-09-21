import React, { useState } from 'react';
import { 
  Users, 
  Coffee, 
  CupSoda, 
  IceCream, 
  Package, 
  Phone, 
  CheckCircle, 
  Clock, 
  Send
} from 'lucide-react';

const bulkPackages = [
  {
    id: 'coffee-box',
    name: 'Office Coffee Traveler (96oz)',
    serves: 'Serves 10–14 Guests',
    image: '/images/coffee-coldbrew.jpg',
    icon: Coffee,
    badge: 'Office Favorite',
    description: 'Insulated carrier of single-origin brew with 12 cups, dairy, and natural sweeteners.',
    turnaround: 'Ready in 30 mins'
  },
  {
    id: 'boba-crate',
    name: 'Handcrafted Boba Party Pack',
    serves: '12 to 50+ Servings',
    image: '/images/boba-tiger.jpg',
    icon: CupSoda,
    badge: 'Party Hit',
    description: 'Individually sealed boba cups in assorted popular flavors with jumbo straws included.',
    turnaround: '2-hour advance notice'
  },
  {
    id: 'gelato-tub',
    name: 'Artisan Gelato Catering Tubs',
    serves: '25 to 100+ Servings',
    image: '/images/gelato-pistachio.jpg',
    icon: IceCream,
    badge: 'Celebrations',
    description: 'Insulated 5-liter tubs of authentic Italian gelato with fresh waffle cones and scoops.',
    turnaround: '24-hour advance notice'
  },
  {
    id: 'pastry-platter',
    name: 'Fresh Bakery & Toast Platter',
    serves: 'Serves 15–20 Guests',
    image: '/images/croissant.jpg',
    icon: Package,
    badge: 'Brunch Hit',
    description: 'Artisan butter croissants, pain au chocolat, and sourdough with house berry jam.',
    turnaround: '24-hour advance notice'
  }
];

function BulkPackageCard({ pkg }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = pkg.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full"
    >
      {/* Glare spotlight layer following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 141, 59, 0.14), transparent 75%)`
        }}
      />

      <div>
        {/* Package Preview Image - Clean without overlay text */}
        <div className="relative h-40 sm:h-48 overflow-hidden bg-cafe-100">
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3 min-w-0">
            <span className="text-xs font-bold text-amberGold flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-amberGold shrink-0" />
              <span>{pkg.serves}</span>
            </span>
            <span className="text-[10px] sm:text-[10.5px] font-semibold text-cafe-700 bg-cafe-100 px-2 py-0.5 rounded-full border border-cafe-200 shrink-0">
              {pkg.badge}
            </span>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-cafe-950 mb-1.5 sm:mb-2 leading-snug">
            {pkg.name}
          </h3>
          <p className="text-xs text-cafe-600 leading-relaxed">
            {pkg.description}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-5 pb-5 pt-0">
        <div className="pt-3 border-t border-cafe-100 flex items-center justify-between text-[11px] text-cafe-500 font-semibold mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amberGold" />
            <span>{pkg.turnaround}</span>
          </span>
          <span className="text-emerald-700 font-bold">100% Sealed</span>
        </div>

        <a
          href="tel:+17272401811"
          className="w-full py-2.5 rounded-xl bg-cafe-50 hover:bg-cafe-900 hover:text-white text-cafe-950 text-xs font-bold transition-all border border-cafe-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-amberGold" />
          <span>Call to Order Package</span>
        </a>
      </div>
    </div>
  );
}

export default function BulkOrders() {
  return (
    <section id="bulk-orders" className="py-14 sm:py-20 lg:py-24 scroll-mt-28 bg-[#F5EFEB] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <span>Group Catering & Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Bulk Orders & Office Catering
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Planning a team breakfast, beach party, birthday, or corporate gathering in Clearwater? Let Social Sips handle your drinks and artisan desserts with seamless bulk packaging.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mb-3 text-[11px] font-semibold text-cafe-500 flex items-center justify-center gap-1.5">
          <span>← Swipe to explore catering packages →</span>
        </div>

        {/* 4 Packages - Horizontal Snap Carousel on Mobile, Grid on Tablet/Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {bulkPackages.map((pkg) => (
            <div key={pkg.id} className="w-[280px] sm:w-auto shrink-0 snap-start flex flex-col">
              <BulkPackageCard pkg={pkg} />
            </div>
          ))}
        </div>

        {/* Quick Contact Hotline Bar */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-cafe-600 mb-3 font-medium">
            Need a custom mix or bulk pickup in Clearwater? Call or email our team directly.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+17272401811"
              className="px-6 py-3 rounded-2xl bg-cafe-900 hover:bg-cafe-800 text-white text-xs sm:text-sm font-bold transition-all shadow-warm-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amberGold" />
              <span>Call +1 (727) 240-1811</span>
            </a>
            <a
              href="mailto:SocialSipsCafe@gmail.com?subject=Clearwater%20Group%20Catering"
              className="px-6 py-3 rounded-2xl bg-white hover:bg-cafe-100 text-cafe-950 text-xs sm:text-sm font-bold border border-cafe-300 transition-all flex items-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4 text-amberGold" />
              <span>Email Catering</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
