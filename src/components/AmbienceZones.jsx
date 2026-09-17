import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Armchair, 
  Laptop, 
  Wine, 
  Check, 
  MapPin, 
  Volume2, 
  Wifi,
  ChevronRight
} from 'lucide-react';

const zones = [
  {
    id: 'patio',
    name: 'The Sunshine Coastal Patio',
    tag: 'Pet-Friendly & Breezy',
    icon: Sun,
    image: '/images/patio-vibe.jpg',
    headline: 'Breezy Florida Sun & Shaded Palms',
    description: 'Surrounded by lush greenery and shaded umbrellas, our outdoor patio is the ultimate Clearwater spot to sip iced boba, enjoy gelato cones, and relax with your dog.',
    features: [
      'Complimentary pup cups & water station',
      'Shaded umbrellas & string lights at twilight',
      'Acoustic live music on Saturday mornings',
      'Gentle coastal Florida gulf breeze'
    ],
    vibe: 'Sunny, Social & Pet-Friendly'
  },
  {
    id: 'lounge',
    name: 'The Velvet & Leather Lounge',
    tag: 'Cozy & Relaxed',
    icon: Armchair,
    image: '/images/lounge-vibe.jpg',
    headline: 'Warm Lighting & Deep Leather Comfort',
    description: 'Designed for quiet afternoon reading, heartfelt catch-ups, or romantic dessert dates. Soft jazz plays while the scent of roasted beans fills the room.',
    features: [
      'Plush velvet armchairs & vintage leather booths',
      'Warm amber Edison lighting & acoustic panels',
      'Curated books & design magazines to flip through',
      'Intimate two-person corner tables'
    ],
    vibe: 'Warm, Intimate & Aesthetic'
  },
  {
    id: 'workspace',
    name: 'The Barista Work Lab',
    tag: 'Gigabit Wi-Fi & Outlets',
    icon: Laptop,
    image: '/images/workspace-vibe.jpg',
    headline: 'Ergonomic Productivity Sanctuary',
    description: 'Clearwater’s favorite remote-work hub. Powered by commercial-grade fiber Wi-Fi, plenty of 120V and USB-C outlets, and natural northern daylight.',
    features: [
      'High-speed 1,000 Mbps gigabit Wi-Fi network',
      'Dedicated AC & USB-C plugs at every seat',
      'Bottomless fresh batch brew drip refills',
      'Large solid walnut communal work table'
    ],
    vibe: 'Focused, Creative & Energizing'
  },
  {
    id: 'bar',
    name: 'The Evening Marble Bar',
    tag: 'Sunset Social Sips',
    icon: Wine,
    image: '/images/bar-vibe.jpg',
    headline: 'Twilight Elegance & Hand-Shaken Drinks',
    description: 'When 5:00 PM hits, our counter dims to reveal a chic Italian marble social bar serving espresso martinis, natural wines, and artisan charcuterie boards.',
    features: [
      'Handcrafted cocktail & zero-proof mocktail menu',
      'Imported Italian marble bar top with brass stools',
      'Artisan charcuterie & warm sourdough bites',
      'Open until 11:00 PM on Friday & Saturday'
    ],
    vibe: 'Chic, Vibrant & Twilight'
  }
];

export default function AmbienceZones({ onOpenReservation }) {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const activeZone = zones[activeZoneIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amberGold" />
            <span>Atmosphere & Space</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Discover Your Favorite Corner
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Four uniquely crafted zones designed for your morning coffee run, focused workday, sunny outdoor hangout, or evening social drink.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {zones.map((zone, idx) => {
            const Icon = zone.icon;
            const isActive = activeZoneIndex === idx;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneIndex(idx)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cafe-900 text-white shadow-warm-md scale-105 border border-cafe-800'
                    : 'bg-white text-cafe-800 border border-cafe-200 hover:bg-cafe-100 hover:border-cafe-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amberGold' : 'text-cafe-500'}`} />
                <span>{zone.name}</span>
              </button>
            );
          })}
        </div>

        {/* Big Interactive Showcase Box with Smooth Motion Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeZone.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-white rounded-3xl lg:rounded-[36px] overflow-hidden border border-cafe-200 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              
              {/* Left: Atmospheric Photography - Clean without text overlay */}
              <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden bg-cafe-950 group">
                <img
                  src={activeZone.image}
                  alt={activeZone.name}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Right: Narrative, Features & Reservation Action */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-100 text-cafe-800 text-xs font-semibold">
                    <MapPin className="w-3 h-3 text-amberGold" />
                    <span>{activeZone.vibe} • {activeZone.tag}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-cafe-950 leading-snug">
                    {activeZone.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                    {activeZone.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="pt-2 space-y-2.5">
                    {activeZone.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-cafe-800">
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-amber-800 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-cafe-100 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenReservation}
                    className="px-6 py-3.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-bold text-xs sm:text-sm transition-all shadow-warm-sm flex items-center gap-2 cursor-pointer hover:shadow-warm-md hover:-translate-y-0.5"
                  >
                    <span>Reserve a Table in This Zone</span>
                    <ChevronRight className="w-4 h-4 text-amberGold" />
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className="px-4 py-3.5 rounded-xl text-xs font-bold text-cafe-700 hover:text-cafe-950 transition-colors cursor-pointer"
                  >
                    View Floor Hours →
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
