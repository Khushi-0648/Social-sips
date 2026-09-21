import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Package, 
  Check, 
  Phone, 
  Star,
  Coffee,
  Heart
} from 'lucide-react';

const products = [
  {
    id: 'p1',
    name: 'Coastal Sunrise Blend',
    type: 'Whole Bean • 12oz',
    badge: 'House Favorite',
    tastingNotes: 'Notes: Honey, Milk Chocolate & Toasted Hazelnut',
    image: '/images/coffee-blend.jpg',
    details: 'Flagship medium roast, smooth and sweet for espresso or drip.'
  },
  {
    id: 'p2',
    name: 'Single-Origin Ethiopian',
    type: 'Light Roast • 12oz',
    badge: 'Barista Choice',
    tastingNotes: 'Notes: Jasmine Flower, Blueberry & Meyer Lemon',
    image: '/images/coffee-ethiopia.jpg',
    details: 'Naturally processed heirloom varietal with floral elegance.'
  },
  {
    id: 'p3',
    name: 'Speckled Ceramic Mug',
    type: 'Artisan Ware • 12oz',
    badge: 'Handmade Craft',
    tastingNotes: 'Features debossed seal • Microwave & Dishwasher safe',
    image: '/images/ceramic-mug.jpg',
    details: 'Hand-thrown in Florida with sand-clay glaze and ergonomic grip.'
  },
  {
    id: 'p4',
    name: 'At-Home Boba DIY Kit',
    type: 'Kit • 8 Servings',
    badge: 'Popular Gift',
    tastingNotes: 'Includes: Boba, Loose Tea, Brown Sugar & Wide Straws',
    image: '/images/boba-kit.jpg',
    details: 'Everything needed to brew authentic milk tea at home in 20 mins.'
  }
];

export default function RetailShop() {
  const [heldProduct, setHeldProduct] = useState(null);

  return (
    <section id="shop" className="py-14 sm:py-20 lg:py-24 bg-[#F5EFEB] relative overflow-hidden border-b border-cafe-200 scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
              <span>At-Home Retail & Goods</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
              Bring Social Sips Home
            </h2>
            <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
              Freshly roasted whole beans in nitrogen-flushed bags, hand-thrown ceramic mugs, and DIY boba kits. Available at our counter.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+17272401811"
              className="px-5 py-3 rounded-2xl bg-cafe-900 hover:bg-cafe-800 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-xs whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amberGold shrink-0" />
              <span>Call to Reserve Items for Pickup</span>
            </a>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mb-3 text-[11px] font-semibold text-cafe-500 flex items-center justify-center gap-1.5">
          <span>← Swipe to explore retail products →</span>
        </div>

        {/* 4 Retail Products - Horizontal Snap Track on Mobile, Grid on Tablet/Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-[260px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Image - Clean without overlay text */}
                <div className="relative h-44 sm:h-64 overflow-hidden bg-cafe-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <span className="text-[11px] sm:text-xs font-semibold text-cafe-600">
                      {item.type}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cafe-100 text-cafe-900 text-[10px] sm:text-[10.5px] font-bold border border-cafe-300 shrink-0 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-cafe-950 group-hover:text-amberGold transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-amberGold font-semibold">
                    {item.tastingNotes}
                  </p>
                  <p className="text-xs text-cafe-600 leading-relaxed pt-0.5">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 sm:p-5 pt-0">
                <a
                  href="tel:+17272401811"
                  className="w-full py-2.5 rounded-xl bg-cafe-50 hover:bg-cafe-900 hover:text-white text-cafe-950 text-xs font-bold transition-colors border border-cafe-200 flex items-center justify-center gap-1.5"
                >
                  <Package className="w-3.5 h-3.5 text-amberGold" />
                  <span>Call to Hold</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
