import React, { useState } from 'react';
import { Camera, Sparkles, Heart, Instagram, Filter, ArrowRight } from 'lucide-react';
import SocialFeed from '../components/SocialFeed';

const galleryItems = [
  {
    id: 1,
    title: 'Artisan Spanish Honey Latte & Microfoam',
    category: 'coffee',
    image: '/images/coffee-latte.jpg',
    tag: 'Signature Pour',
    desc: 'Velvety espresso paired with organic Florida blossom honey and cinnamon dusting.'
  },
  {
    id: 2,
    title: 'Authentic Sicilian Pistachio Gelato',
    category: 'gelato',
    image: '/images/gelato-pistachio.jpg',
    tag: 'Slow-Churned',
    desc: 'Crafted with imported Bronte pistachios and organic whole milk.'
  },
  {
    id: 3,
    title: 'Tiger Brown Sugar Milk Tea with Fresh Tapioca',
    category: 'boba',
    image: '/images/boba-tiger.jpg',
    tag: 'Boba Favorite',
    desc: 'Hand-swirled Muscovado brown sugar tiger stripes with warm chewy pearls.'
  },
  {
    id: 4,
    title: 'Main Espresso & Brew Counter Ambience',
    category: 'atmosphere',
    image: '/images/cafe-interior-main.jpg',
    tag: 'Cafe Interior',
    desc: 'Custom terrazzo counters, warm brass accents, and ambient acoustic warmth.'
  },
  {
    id: 5,
    title: '18-Hour Nitrogen-Infused Cold Brew',
    category: 'coffee',
    image: '/images/coffee-coldbrew.jpg',
    tag: 'Single Origin',
    desc: 'Steeped overnight for an exceptionally smooth, chocolaty finish without bitterness.'
  },
  {
    id: 6,
    title: 'Ceremonial Uji Matcha Cloud Boba',
    category: 'boba',
    image: '/images/boba-matcha.jpg',
    tag: 'Organic Matcha',
    desc: 'First-harvest Kyoto ceremonial matcha layered over velvety house sweet milk.'
  },
  {
    id: 7,
    title: 'Evening Cocktail & Espresso Lounge',
    category: 'atmosphere',
    image: '/images/bar-vibe.jpg',
    tag: 'Evening Vibes',
    desc: 'Transitioning to warm dim lighting, craft espresso martinis, and relaxing tunes.'
  },
  {
    id: 8,
    title: 'Wild Strawberry & Lemon Sorbettos',
    category: 'gelato',
    image: '/images/gelato-strawberry.jpg',
    tag: 'Dairy-Free',
    desc: 'Pure sun-ripened fruit churned into refreshing, naturally sweet gelato.'
  },
  {
    id: 9,
    title: 'Sunny Outdoor Coastal Palm Patio',
    category: 'atmosphere',
    image: '/images/patio-vibe.jpg',
    tag: 'Coastal Terrace',
    desc: 'Bask in the gentle Clearwater sea breeze under shaded linen umbrellas.'
  },
  {
    id: 10,
    title: 'European Cultured Butter Croissants',
    category: 'coffee',
    image: '/images/croissant.jpg',
    tag: 'Morning Bakery',
    desc: 'Flaky 27-layer laminated French pastry baked fresh every dawn.'
  },
  {
    id: 11,
    title: 'Clearwater Signature Espresso Martini',
    category: 'atmosphere',
    image: '/images/bar-espresso-martini.jpg',
    tag: 'Craft Bar',
    desc: 'Freshly pulled espresso shot shaken over ice with premium spirits and cocoa dust.'
  },
  {
    id: 12,
    title: 'Mango Jasmine Sparkling Refresher',
    category: 'boba',
    image: '/images/boba-mango.jpg',
    tag: 'Iced Refresher',
    desc: 'Real Alphonso mango puree with aromatic silver needle jasmine green tea.'
  }
];

export default function GalleryPage({ onOpenReservation }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider">
              <span>Visual Cafe Gallery</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Moments, Moods <br />
              <span className="italic font-normal text-[#F0C070]">& Handcrafted Sips.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B8ADA5] leading-relaxed">
              Step into the visual story of Social Sips Clearwater. From morning microfoam art to afternoon boba colors and candlelit evening lounge vibes.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-[#0A0807] border-b border-[#2C221B] sticky top-20 z-30 backdrop-blur-xl bg-[#0A0807]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'All Moments' },
              { id: 'coffee', label: 'Artisan Coffee' },
              { id: 'boba', label: 'Handcrafted Boba' },
              { id: 'gelato', label: 'Italian Gelato' },
              { id: 'atmosphere', label: 'Lounge Ambience' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#F0C070] text-[#050404] shadow-md'
                    : 'bg-[#120F0D] text-[#B8ADA5] border border-[#2C221B] hover:text-white hover:border-[#3D2D22]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#050404] border-b border-[#2C221B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-[#120F0D] rounded-3xl overflow-hidden border border-[#2C221B] hover:border-[#F0C070]/50 transition-all duration-500 shadow-xl group flex flex-col justify-between"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#181310]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-[#050404]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#120F0D]/90 backdrop-blur-md text-[#F0C070] text-[10px] font-bold uppercase tracking-wider border border-[#2C221B]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#F0C070] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B8ADA5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram & Social Feed Integration */}
      <div className="border-b border-[#2C221B]">
        <SocialFeed />
      </div>

      {/* Bottom Photo Invitation */}
      <section className="py-16 bg-[#050404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070]">
            <Camera className="w-3.5 h-3.5" />
            <span>Tag us at @SocialSipsCafe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Capture Your Social Sips Moment
          </h2>
          <p className="text-xs sm:text-sm text-[#B8ADA5] max-w-lg mx-auto">
            Share your photos on Instagram or TikTok with #SocialSipsClearwater to be featured on our digital wall and receive a surprise treat on your next visit!
          </p>
        </div>
      </section>

    </div>
  );
}
