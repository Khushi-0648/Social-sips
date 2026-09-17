import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  Music, 
  Laptop, 
  Wine, 
  IceCream, 
  ArrowRight,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

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
    icon: IceCream,
    description: 'Can’t choose one flavor? Try our signature flight board with 4 mini handcrafted boba teas or 4 scoops of fresh Italian gelato.',
    image: '/images/gelato-strawberry.jpg',
  }
];

export default function EventsCalendar({ onOpenReservation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const maxIndex = Math.max(0, events.length - cardsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  return (
    <section id="events" className="py-20 lg:py-28 scroll-mt-24 bg-[#FAF6F0] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Linear Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <span>Community Gatherings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Weekly Socials & Cafe Hours
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            There’s always something happening at Social Sips. Explore our weekly Clearwater happenings and save a table in advance.
          </p>
        </div>

        {/* Linear Horizontal Events Slider */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
            }}
          >
            {events.map((evt) => {
              const Icon = evt.icon;
              return (
                <div
                  key={evt.id}
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-cafe-200 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col sm:flex-row gap-5 h-full group">
                    {/* Visual Thumbnail */}
                    <div className="w-full sm:w-44 h-48 sm:h-auto rounded-2xl overflow-hidden shrink-0 relative bg-cafe-100">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-cafe-500 mb-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold">
                            {evt.day}
                          </span>
                          <Clock className="w-3.5 h-3.5 text-amberGold" />
                          <span>{evt.time}</span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-bold text-cafe-950 mb-2 group-hover:text-amberGold transition-colors leading-snug">
                          {evt.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                          {evt.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-cafe-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-cafe-800 bg-cafe-50 px-2.5 py-1 rounded-lg border border-cafe-200">
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Centered Slider Navigation Controls: Prev, Dots, Next in one linear line */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            aria-label="Previous event"
            className="w-10 h-10 rounded-2xl bg-white border border-cafe-200 hover:border-amberGold hover:bg-cafe-900 hover:text-amberGold text-cafe-800 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to event slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  currentIndex === idx
                    ? 'w-8 bg-amberGold'
                    : 'w-2.5 bg-cafe-300 hover:bg-cafe-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next event"
            className="w-10 h-10 rounded-2xl bg-white border border-cafe-200 hover:border-amberGold hover:bg-cafe-900 hover:text-amberGold text-cafe-800 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
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
