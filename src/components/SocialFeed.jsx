import React from 'react';
import { 
  Instagram, 
  Heart, 
  MessageCircle, 
  Camera 
} from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    image: '/images/coffee-latte.jpg',
    handle: '@clearwater_coffee_lover',
    likes: '482',
    caption: 'Nothing compares to the Spanish Honey Latte here. Perfect start to my Friday!'
  },
  {
    id: 2,
    image: '/images/boba-tiger.jpg',
    handle: '@tampabay_foodies',
    likes: '891',
    caption: 'Warm brown sugar boba combined with cold sea-salt cream creates absolute perfection.'
  },
  {
    id: 3,
    image: '/images/gelato-pistachio.jpg',
    handle: '@gelato_addict_fl',
    likes: '624',
    caption: 'Real Bronte Sicilian pistachio gelato right here in Clearwater. Authentic Italian craftsmanship.'
  },
  {
    id: 4,
    image: '/images/lounge-vibe.jpg',
    handle: '@remotework_florida',
    likes: '350',
    caption: 'My remote work sanctuary. Gigabit Wi-Fi, endless natural coastal light, and top-tier cortados.'
  },
  {
    id: 5,
    image: '/images/bar-espresso-martini.jpg',
    handle: '@sunset_cocktails_cw',
    likes: '715',
    caption: 'Clearwater Espresso Martini out on the evening patio. The ultimate day-to-night gathering spot.'
  },
  {
    id: 6,
    image: '/images/bar-avocado-toast.jpg',
    handle: '@sunshine_brunch',
    likes: '512',
    caption: 'Avocado sourdough tartine with pickled red onions and fresh slow-steeped cold brew.'
  }
];

export default function SocialFeed() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-amberGold" />
            <span>@SocialSipsClearwater</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Follow The Coastal Vibe
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Tag us in your morning coffee snaps, boba swirls, and sunset gelato moments to be featured on our community board.
          </p>
        </div>

        {/* 6 Grid Photos with Interactive Hover Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-3xl overflow-hidden aspect-square bg-cafe-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.handle}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Ambient Overlay on Hover */}
              <div className="absolute inset-0 bg-cafe-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amberGold truncate">{post.handle}</span>
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                </div>

                <p className="text-[11px] text-cafe-200 line-clamp-3 leading-relaxed">
                  "{post.caption}"
                </p>

                <div className="flex items-center gap-3 text-[11px] text-cafe-300 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>Reply</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-cafe-950 font-bold text-xs sm:text-sm border border-cafe-300 shadow-sm">
            <Camera className="w-4 h-4 text-amberGold" />
            <span>Tag #SocialSipsClearwater on Your Social Stories</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </section>
  );
}
