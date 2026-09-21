import React from 'react';
import { 
  Heart, 
  Coffee, 
  CupSoda, 
  Wifi, 
  Dog, 
  Sun, 
  Award, 
  Check,
  ArrowRight
} from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    {
      icon: Coffee,
      title: 'Ethical Small-Batch Roasting',
      description: 'Partnered with sustainable micro-farms, roasted fresh weekly in Florida.'
    },
    {
      icon: Award,
      title: 'Artisan Gelato Churned Daily',
      description: 'Slow-churned with real fruit purees and rich Sicilian pistachios.'
    },
    {
      icon: CupSoda,
      title: 'Pure Brewed Organic Boba',
      description: 'Hand-shaken loose leaf teas with slow-simmered brown sugar tapioca.'
    },
    {
      icon: Sun,
      title: 'Day-to-Night Coastal Lounge',
      description: 'From morning cold brew on the patio to evening espresso martinis.'
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-cream relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cafe-100 text-cafe-800 text-xs font-semibold tracking-wider uppercase border border-cafe-200">
            Our Clearwater Story
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cafe-950 tracking-tight">
            Crafted for Connection. <br />
            <span className="italic font-normal text-cafe-700">Brewed with Coastal Heart.</span>
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Welcome to <span className="font-semibold text-cafe-900">Social Sips Cafe & Bar</span>, Clearwater’s vibrant gathering spot where morning espresso rituals, afternoon boba tea cravings, and evening dessert lounges seamlessly harmonize.
          </p>
        </div>

        {/* 2-Column Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Aesthetic Photo Collage with Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border-4 border-white">
                <img
                  src="/images/cafe-interior-main.jpg"
                  alt="Social Sips spacious interior cafe seating and gathering area in Clearwater"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-8 -right-2 sm:-right-6 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/images/coffee-latte.jpg"
                  alt="Barista pouring latte art"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-100 border border-cafe-200 text-xs font-semibold text-cafe-800">
                <span className="w-2 h-2 rounded-full bg-amberGold"></span>
                <span>Clearwater Proud • Locally Owned & Operated</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cafe-900 leading-snug">
                More than just a cafe — <br className="hidden sm:inline" />
                it’s your everyday sanctuary.
              </h3>
              <p className="text-sm sm:text-base text-cafe-700 leading-relaxed">
                Whether you're grabbing a silky Spanish Honey Latte before heading to Clearwater Beach, catching up with friends over handcrafted boba and freshly churned gelato, or setting up with your laptop under our breezy patio umbrellas, Social Sips is designed to feel like your second home.
              </p>
            </div>

            {/* Grid of 4 Key Pillars - Horizontal Slider on Mobile, 2-Col on Desktop */}
            <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar gap-2.5 sm:gap-4 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="w-[68vw] max-w-[240px] sm:w-auto shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl bg-white border border-cafe-200/80 shadow-warm-sm hover:border-amberGold/50 transition-colors flex flex-col justify-between select-none">
                    <div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cafe-100 text-cafe-800 flex items-center justify-center mb-2 sm:mb-3">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amberGold" />
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm text-cafe-900 mb-0.5 sm:mb-1">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-cafe-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Amenity Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-cafe-800 font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-cafe-200">
                <Wifi className="w-4 h-4 text-emerald-600" />
                <span>Gigabit WiFi for Remote Work</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-cafe-200">
                <Dog className="w-4 h-4 text-amber-600" />
                <span>Dog-Friendly Outdoor Patio</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-cafe-200">
                <Sun className="w-4 h-4 text-amberGold" />
                <span>Minutes from Clearwater Beach</span>
              </span>
            </div>

            {/* Quick Link to Menu */}
            <div className="pt-3">
              <button
                onClick={() => {
                  const el = document.getElementById('menu');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 text-cafe-900 font-bold text-sm hover:text-amberGold transition-colors group cursor-pointer"
              >
                <span>Discover our full drink & dessert menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
