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
  Sparkles,
  Send
} from 'lucide-react';

const bulkPackages = [
  {
    id: 'coffee-box',
    name: 'Office Coffee Traveler Box (96oz)',
    serves: 'Serves 10–14 Guests',
    image: '/images/coffee-coldbrew.jpg',
    icon: Coffee,
    badge: 'Popular for Meetings',
    description: 'Freshly brewed single-origin drip coffee or 18-hour chilled cold brew in an insulated carry box. Includes 12 cups, lids, sleeves, organic oat & whole milk, and cane sugar.',
    turnaround: 'Ready in 30 mins'
  },
  {
    id: 'boba-crate',
    name: 'Handcrafted Boba Party Pack',
    serves: '12 to 50+ Cups',
    image: '/images/boba-tiger.jpg',
    icon: CupSoda,
    badge: 'Party & Birthday Hit',
    description: 'Assorted custom sealed boba cups with assorted flavors: Brown Sugar Tiger Milk Tea, Ceremonial Matcha Cloud, Mango Jasmine Refresher, and Taro Brulee. Includes fat boba straws.',
    turnaround: '2-hour advance notice'
  },
  {
    id: 'gelato-tub',
    name: 'Artisan Gelato Catering Tubs & Cart',
    serves: '25 to 100+ Servings',
    image: '/images/gelato-pistachio.jpg',
    icon: IceCream,
    badge: 'Weddings & Celebrations',
    description: 'Insulated 5-liter party tubs of authentic Italian gelato (Sicilian Pistachio, Stracciatella, Wild Strawberry Sorbet) with freshly baked cinnamon waffle cones and wooden scoops.',
    turnaround: '24-hour advance notice'
  },
  {
    id: 'pastry-platter',
    name: 'Fresh Morning Bakery & Toast Platter',
    serves: 'Serves 15–20 Guests',
    image: '/images/croissant.jpg',
    icon: Package,
    badge: 'Breakfast & Brunch',
    description: 'European cultured butter croissants, pain au chocolat, sliced sourdough with mashed avocado, heirloom cherry tomatoes, and house-made espresso strawberry jam.',
    turnaround: '24-hour advance notice'
  }
];

export default function BulkOrders() {
  return (
    <section id="bulk-orders" className="py-20 lg:py-28 bg-[#F5EFEB] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <Users className="w-3.5 h-3.5 text-amberGold" />
            <span>Group Catering & Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Bulk Orders & Office Catering
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Planning a team breakfast, beach party, birthday, or corporate gathering in Clearwater? Let Social Sips handle your drinks and artisan desserts with seamless bulk packaging.
          </p>
        </div>

        {/* 4 Packages Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bulkPackages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Package Preview Image */}
                  <div className="relative h-48 overflow-hidden bg-cafe-100">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cafe-950/85 text-amberGold backdrop-blur-md border border-amberGold/30 shadow-xs">
                        {pkg.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-amberGold">
                        {pkg.serves}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-cafe-950 mb-2 leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-cafe-600 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-cafe-100 flex items-center justify-between text-[11px] text-cafe-500 font-semibold mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amberGold" />
                      <span>{pkg.turnaround}</span>
                    </span>
                    <span className="text-emerald-700 font-bold">100% Sealed</span>
                  </div>

                  <a
                    href="tel:+17272401811"
                    className="w-full py-2.5 rounded-xl bg-cafe-50 hover:bg-cafe-900 hover:text-white text-cafe-950 text-xs font-bold transition-colors border border-cafe-200 flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amberGold" />
                    <span>Call to Order Package</span>
                  </a>
                </div>
              </div>
            );
          })}
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
