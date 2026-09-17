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
    name: 'Clearwater Coastal Sunrise Blend',
    type: 'Whole Bean Coffee (12oz)',
    badge: 'House Favorite',
    tastingNotes: 'Tasting Notes: Orange Blossom Honey, Milk Chocolate, Toasted Hazelnut',
    image: '/images/coffee-blend.jpg',
    details: 'Our flagship medium roast. Smooth, sweet, and extraordinarily balanced whether brewed as espresso, pour-over, or drip.'
  },
  {
    id: 'p2',
    name: 'Single-Origin Ethiopian Yirgacheffe',
    type: 'Specialty Light Roast (12oz)',
    badge: 'Barista Choice',
    tastingNotes: 'Tasting Notes: Jasmine Flower, Ripe Blueberry, Meyer Lemon',
    image: '/images/coffee-ethiopia.jpg',
    details: 'Naturally processed heirloom varietals from the Gedeo zone. Bursting with aromatic berries and delicate tea-like elegance.'
  },
  {
    id: 'p3',
    name: 'Hand-Thrown Speckled Ceramic Mug',
    type: 'Artisan Stoneware (12oz)',
    badge: 'Handmade Craft',
    tastingNotes: 'Features debossed Social Sips seal • Microwave & Dishwasher safe',
    image: '/images/ceramic-mug.jpg',
    details: 'Crafted exclusively for Social Sips by a local Florida ceramist. Ergonomic handle and natural sand-clay speckled glaze.'
  },
  {
    id: 'p4',
    name: 'At-Home DIY Handcrafted Boba Kit',
    type: 'Complete Kit (Makes 8 Drinks)',
    badge: 'Popular Gift',
    tastingNotes: 'Includes Taiwanese tapioca, loose-leaf tea, brown sugar & wide straw',
    image: '/images/boba-kit.jpg',
    details: 'Everything you need to brew authentic milk tea at home in under 20 minutes. Makes a wonderful gift for boba lovers!'
  }
];

export default function RetailShop() {
  const [heldProduct, setHeldProduct] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F5EFEB] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
              className="px-5 py-3 rounded-2xl bg-cafe-900 hover:bg-cafe-800 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amberGold" />
              <span>Call to Reserve Items for Pickup</span>
            </a>
          </div>
        </div>

        {/* 4 Retail Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Image - Clean without overlay text */}
                <div className="relative h-64 overflow-hidden bg-cafe-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-cafe-500 whitespace-nowrap">
                      {item.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cafe-100 text-cafe-800 text-[10px] sm:text-[11px] font-semibold border border-cafe-200 whitespace-nowrap shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-cafe-950 group-hover:text-amberGold transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-amberGold font-semibold">
                    {item.tastingNotes}
                  </p>
                  <p className="text-xs text-cafe-600 leading-relaxed pt-1">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <a
                  href="tel:+17272401811"
                  className="w-full py-2.5 rounded-xl bg-cafe-50 hover:bg-cafe-900 hover:text-white text-cafe-900 text-xs font-bold transition-colors border border-cafe-200 flex items-center justify-center gap-1.5"
                >
                  <Package className="w-3.5 h-3.5 text-amberGold" />
                  <span>Call to Hold at Counter</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
