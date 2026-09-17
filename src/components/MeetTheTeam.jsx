import React from 'react';
import { 
  Award, 
  Coffee, 
  IceCream, 
  CupSoda, 
  Wine, 
  Heart, 
  Quote
} from 'lucide-react';

const team = [
  {
    name: 'Mateo Alvarez',
    role: 'Head Coffee Roaster & Lead Barista',
    specialty: 'Single-Origin Extraction & Latte Art',
    image: '/images/team-1.jpg',
    icon: Coffee,
    bio: 'Dedicated to the science of extraction. Mateo sources green beans directly from micro-farms in Latin America and dials in each morning roast with millimeter precision.',
    tip: 'Mateo’s Pick: "Ask for an 8oz Spanish Honey Latte with oat milk — balanced and sweet without syrup overpower."'
  },
  {
    name: 'Sofia Bianchi',
    role: 'Master Gelatiere & Pastry Chef',
    specialty: 'Traditional Italian Churning & Sorbets',
    image: '/images/team-2.jpg',
    icon: IceCream,
    bio: 'Trained in Bologna, Italy, Sofia brought her family recipes to Clearwater. She insists on genuine Bronte pistachios, organic milk, and sun-ripened Florida citrus.',
    tip: 'Sofia’s Pick: "Double scoop of Sicilian Pistachio paired with Wild Strawberry Sorbetto — pure balance."'
  },
  {
    name: 'Kenji Lin',
    role: 'Tea Sommelier & Boba Specialist',
    specialty: 'Brown Sugar Tapioca & Ceremonial Matcha',
    image: '/images/team-3.jpg',
    icon: CupSoda,
    bio: 'Kenji spent years studying tea harvesting in Taiwan and Kyoto. He brews whole-leaf teas at tailored temperatures and slow-simmers warm brown sugar boba every 3 hours.',
    tip: 'Kenji’s Pick: "The Ceremonial Matcha Cloud with 25% sweetness allows the grassy, umami matcha notes to sing."'
  },
  {
    name: 'Chloe Davis',
    role: 'Evening Bar Director & Mixologist',
    specialty: 'Espresso Cocktails & Zero-Proof Sips',
    image: '/images/team-4.jpg',
    icon: Wine,
    bio: 'Chloe leads our 5:00 PM twilight transition, crafting craft cocktail syrups, botanical shrubs, and curating natural wines that pair seamlessly with artisan cheeses.',
    tip: 'Chloe’s Pick: "Clearwater Espresso Martini on our patio at sunset — hands down the best way to close the week."'
  }
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Passionate Artisans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Meet the Makers
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            The dedicated baristas, Italian gelatieri, and tea specialists who pour their craft and heart into every single visit.
          </p>
        </div>

        {/* 4 Team Member Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 overflow-hidden bg-cafe-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-amberGold shadow-md border border-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-cafe-950 group-hover:text-amberGold transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-amberGold mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-[11px] text-cafe-500 mt-0.5">
                        {member.specialty}
                      </p>
                    </div>

                    <p className="text-xs text-cafe-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Barista Insider Tip */}
                <div className="p-4 mx-6 mb-6 rounded-2xl bg-cafe-50 border border-cafe-200/80 text-[11px] text-cafe-700 italic">
                  <p>{member.tip}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
