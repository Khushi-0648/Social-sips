import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  Heart, 
  Award, 
  Sun, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Users, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import MeetTheTeam from '../components/MeetTheTeam';
import HygieneSafety from '../components/HygieneSafety';

export default function AboutPage({ onOpenReservation }) {
  const pillars = [
    {
      icon: Coffee,
      title: 'Ethical Direct-Trade Roasting',
      description: 'We partner directly with family-owned micro-lots in Huila (Colombia) and Yirgacheffe (Ethiopia), paying well above fair-trade premiums for peak-season specialty beans roasted in small 12kg batches right here in Florida.'
    },
    {
      icon: Sparkles,
      title: 'Artisan Gelato Tradition',
      description: 'Our gelato is slow-churned daily using time-honored Italian methods. Real Sicilian Bronte pistachios, Piedmont hazelnuts, and organic Florida dairy create an extraordinarily dense, silky texture unmatched by commercial ice creams.'
    },
    {
      icon: Award,
      title: 'Handcrafted Authentic Boba',
      description: 'Say goodbye to chemical drink powders and preservative-laden syrups. We steep whole-leaf loose teas every 4 hours and slow-simmer Taiwanese Grade-A tapioca pearls in rich Muscovado brown sugar.'
    },
    {
      icon: Sun,
      title: 'A True Third-Place Sanctuary',
      description: 'Designed as a welcoming sanctuary between home and work. High-speed gigabit Wi-Fi for remote creatives, cozy reading nooks, an open-air coastal patio, and ambient evening cocktail lounge vibes.'
    }
  ];

  const milestones = [
    { year: '2021', title: 'The Coastal Dream', desc: 'Social Sips started as a weekend pop-up coffee cart at the Clearwater Beach sunset market.' },
    { year: '2022', title: 'Flagship Roastery Opens', desc: 'Opened our permanent doors on Clearwater waterfront with custom Slayer espresso machines.' },
    { year: '2023', title: 'Gelato & Boba Integration', desc: 'Introduced in-house authentic Italian gelato and Taiwanese handcrafted loose-leaf boba.' },
    { year: '2024+', title: 'Voted Best of the Bay', desc: 'Awarded #1 Specialty Cafe & Gathering Space in Pinellas County by local community vote.' }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      
      {/* Page Hero Header */}
      <section className="py-16 sm:py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider">
              <span>Our Heritage & Craft</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Crafted for Connection. <br />
              <span className="italic font-normal text-[#F0C070]">Brewed with Coastal Heart.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B8ADA5] leading-relaxed">
              Welcome to Social Sips Cafe & Bar — Clearwater's vibrant gathering spot where morning specialty espresso rituals, afternoon boba tea cravings, and evening artisan dessert lounges seamlessly harmonize.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy 2-Column Section */}
      <section className="py-20 bg-[#0A0807] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F0C070]">
                <span>The Story of Social Sips</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                We believe coffee, boba, and gelato are better when shared together.
              </h2>
              <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
                Social Sips was born from a simple observation: Clearwater loved good coffee, but the city lacked a true day-to-night artisan haven where you could savor a world-class cortado at 8 AM, catch up over a brown sugar boba at 2 PM, and indulge in pistachio affogato after dinner.
              </p>
              <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
                We built our cafe from reclaimed cypress wood, natural Florida sand-toned stoneware, and hand-poured terrazzo counters. Every detail was curated to inspire calm, conversation, and community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#120F0D] border border-[#2C221B]">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F0C070]">100%</div>
                  <div className="text-xs text-[#B8ADA5] mt-1 font-medium">Single-Origin Roasts</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#120F0D] border border-[#2C221B]">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F0C070]">18 Hours</div>
                  <div className="text-xs text-[#B8ADA5] mt-1 font-medium">Slow Cold Extraction</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2C221B] shadow-2xl">
                <img 
                  src="/images/interior.jpg" 
                  alt="Social Sips Cafe Clearwater Interior" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050404]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#120F0D]/90 backdrop-blur-md border border-[#2C221B]">
                  <p className="text-xs text-white font-medium italic">
                    "Our counter is where strangers become regulars, and regulars become lifelong friends."
                  </p>
                  <p className="text-[11px] text-[#F0C070] font-bold mt-1">— The Social Sips Family</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Four Pillars Grid */}
      <section className="py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1F1A16] text-[#F0C070] text-xs font-bold uppercase tracking-wider border border-[#3D2D22]">
              <span>Our Core Values</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Uncompromising Standards in Every Pour
            </h2>
            <p className="text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
              We never cut corners. From water filtration and bean harvest dates to authentic Italian machinery, we obsess over the details so you can simply enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#120F0D] rounded-3xl p-8 border border-[#2C221B] hover:border-[#F0C070]/50 transition-all duration-300 shadow-xl space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8ADA5] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-20 bg-[#0A0807] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Journey Through the Years
            </h2>
            <p className="text-sm text-[#B8ADA5]">From a sunny beachside cart to Clearwater's favorite coffee sanctuary.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-[#120F0D] rounded-3xl p-6 border border-[#2C221B] space-y-3">
                <span className="font-mono text-2xl font-extrabold text-[#F0C070]">{m.year}</span>
                <h4 className="font-serif text-lg font-bold text-white">{m.title}</h4>
                <p className="text-xs text-[#B8ADA5] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <div className="border-b border-[#2C221B]">
        <MeetTheTeam />
      </div>

      {/* Hygiene & Quality Standards */}
      <div className="border-b border-[#2C221B]">
        <HygieneSafety />
      </div>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#050404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-12 border border-[#2C221B] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Experience Social Sips in Person
              </h3>
              <p className="text-xs sm:text-sm text-[#B8ADA5] max-w-xl">
                Whether you need a quiet morning corner with high-speed Wi-Fi, an afternoon boba pick-me-up, or a reserved table for your team, we would love to welcome you.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-all"
              >
                Reserve a Table
              </button>
              <Link
                to="/services"
                className="px-6 py-3 rounded-xl bg-[#181310] hover:bg-[#251D18] text-white border border-[#2C221B] text-xs sm:text-sm font-bold transition-all"
              >
                Explore Menu & Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
