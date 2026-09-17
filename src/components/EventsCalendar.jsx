import React from 'react';
import { 
  Calendar, 
  Clock, 
  Music, 
  Laptop, 
  Wine, 
  Sparkles, 
  ArrowRight,
  MapPin
} from 'lucide-react';

export default function EventsCalendar({ onOpenReservation }) {
  const events = [
    {
      id: 1,
      day: 'Mon – Fri',
      time: '7:00 AM – 12:00 PM',
      title: 'Morning Co-Working & Coffee Club',
      tag: 'Remote Work Sanctuary',
      icon: Laptop,
      description: 'Ultra-fast gigabit Wi-Fi, power outlets at every booth, plenty of sunlit seating, and complimentary refills on our batch drip coffee.',
      image: '/images/lounge-vibe.jpg',
    },
    {
      id: 2,
      day: 'Thu – Sat',
      time: '5:00 PM – 11:00 PM',
      title: 'Twilight Sips & Social Bar Hours',
      tag: 'Evening Vibes',
      icon: Wine,
      description: 'Our cafe transitions into Clearwater’s chic evening lounge with freshly shaken espresso martinis, craft mocktails, and artisan charcuterie.',
      image: '/images/bar-espresso-martini.jpg',
    },
    {
      id: 3,
      day: 'Every Saturday',
      time: '10:00 AM – 1:00 PM',
      title: 'Weekend Acoustic Patio Sessions',
      tag: 'Live Music & Sips',
      icon: Music,
      description: 'Breezy Florida morning tunes by local Tampa Bay & Clearwater acoustic musicians on our sunny, pet-friendly outdoor patio.',
      image: '/images/patio-vibe.jpg',
    },
    {
      id: 4,
      day: 'Every Sunday',
      time: '1:00 PM – 6:00 PM',
      title: 'Boba & Artisan Gelato Tasting Flights',
      tag: 'Taste Showcase',
      icon: Sparkles,
      description: 'Can’t choose one flavor? Try our signature flight board with 4 mini handcrafted boba teas or 4 scoops of fresh Italian gelato.',
      image: '/images/gelato-strawberry.jpg',
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-amberGold" />
            <span>Community Gatherings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Weekly Socials & Cafe Hours
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            From focused weekday work mornings to sunset social bar vibes and weekend live music under the Florida sun.
          </p>
        </div>

        {/* 4 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((evt) => {
            const Icon = evt.icon;
            return (
              <div
                key={evt.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-cafe-200 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col sm:flex-row gap-6 group"
              >
                {/* Visual Thumbnail */}
                <div className="w-full sm:w-44 h-48 rounded-2xl overflow-hidden shrink-0 relative bg-cafe-100">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-cafe-950/80 text-amberGold text-[10px] font-bold backdrop-blur-md">
                    {evt.day}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-cafe-500 mb-1.5">
                      <Clock className="w-3.5 h-3.5 text-amberGold" />
                      <span>{evt.time}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-cafe-950 mb-2 group-hover:text-amberGold transition-colors">
                      {evt.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-cafe-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-cafe-800 bg-cafe-50 px-3 py-1 rounded-lg border border-cafe-200">
                      {evt.tag}
                    </span>
                    <button
                      onClick={onOpenReservation}
                      className="text-xs font-bold text-amberGold hover:text-cafe-900 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Join In</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private Event CTA Banner */}
        <div className="mt-14 rounded-3xl bg-white border-2 border-cafe-200/90 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-amberGold font-bold">Clearwater Private Gatherings</span>
            <h4 className="font-serif text-2xl font-bold text-cafe-950">
              Host your birthday, book club or office party with us!
            </h4>
            <p className="text-xs sm:text-sm text-cafe-600 max-w-xl">
              We offer exclusive patio reservations, custom gelato bars, boba stations, and barista service in Clearwater, FL.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            Inquire About Private Events
          </button>
        </div>

      </div>
    </section>
  );
}
