import React, { useState } from 'react';
import { 
  Award, 
  Coffee, 
  IceCream, 
  CupSoda, 
  Wine 
} from 'lucide-react';

const team = [
  {
    id: 'coffee',
    name: 'Mateo Alvarez',
    role: 'Head Roaster',
    specialty: 'Single-Origin',
    image: '/images/team-1.jpg',
    icon: Coffee,
    bio: 'Micro-roasts direct-trade single-origin beans in Florida.',
    fav: 'Spanish Honey Latte'
  },
  {
    id: 'gelato',
    name: 'Sofia Bianchi',
    role: 'Master Gelatiere',
    specialty: 'Italian Churning',
    image: '/images/team-2.jpg',
    icon: IceCream,
    bio: 'Slow-churns authentic gelato with Sicilian Bronte pistachios.',
    fav: 'Sicilian Pistachio'
  },
  {
    id: 'boba',
    name: 'Kenji Lin',
    role: 'Tea Specialist',
    specialty: 'Matcha & Boba',
    image: '/images/team-3.jpg',
    icon: CupSoda,
    bio: 'Brews ceremonial matcha and simmers brown sugar boba.',
    fav: 'Matcha Cloud'
  },
  {
    id: 'bar',
    name: 'Chloe Davis',
    role: 'Bar Director',
    specialty: 'Craft Cocktails',
    image: '/images/team-4.jpg',
    icon: Wine,
    bio: 'Crafts botanical spritzes and evening espresso martinis.',
    fav: 'Espresso Martini'
  }
];

const filterTabs = [
  { id: 'all', label: 'All', icon: Award },
  { id: 'coffee', label: 'Coffee', icon: Coffee },
  { id: 'gelato', label: 'Gelato', icon: IceCream },
  { id: 'boba', label: 'Boba', icon: CupSoda },
  { id: 'bar', label: 'Bar', icon: Wine }
];

export default function MeetTheTeam() {
  const [activeFilter, setActiveFilter] = useState('all');

  const displayedTeam = activeFilter === 'all' 
    ? team 
    : team.filter(m => m.id === activeFilter);

  return (
    <section id="makers" className="py-16 lg:py-24 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <span>Passionate Artisans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Meet the Makers
          </h2>
          <p className="text-sm sm:text-base text-cafe-600 leading-relaxed">
            The dedicated baristas, Italian gelatieri, and tea specialists who pour their craft and heart into every single visit.
          </p>
        </div>

        {/* Small Height Tabs with Minimum Text */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 overflow-x-auto no-scrollbar py-1">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-xl text-xs font-bold transition-all border shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-cafe-900 text-amberGold border-cafe-900 shadow-2xs'
                    : 'bg-white text-cafe-700 border-cafe-200 hover:bg-cafe-50 hover:text-cafe-950'
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-amberGold' : 'text-cafe-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Team Members - Compact Height Cards with Minimum Text */}
        <div className={`flex ${displayedTeam.length === 1 ? 'sm:flex sm:justify-center' : 'sm:grid sm:grid-cols-2 xl:grid-cols-4'} gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0`}>
          {displayedTeam.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className="w-[280px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container - Full Portrait Visibility */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-cafe-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-amberGold border border-white/80 shadow-2xs">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Body Info - Minimum Text */}
                  <div className="p-4 space-y-2">
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-cafe-950 group-hover:text-amberGold transition-colors leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-amberGold mt-0.5">
                        {member.role} • {member.specialty}
                      </p>
                    </div>

                    <p className="text-xs text-cafe-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Bottom Favorite Bar - Compact Minimum Text */}
                <div className="px-4 pb-3.5 pt-0">
                  <div className="pt-2.5 border-t border-cafe-100 flex items-center justify-between text-[11px]">
                    <span className="text-cafe-500 font-medium">Favorite:</span>
                    <span className="font-semibold text-cafe-900">{member.fav}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
