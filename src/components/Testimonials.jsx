import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Award } from 'lucide-react';
import { reviews } from '../data/reviewsData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cream-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cafe-100 text-cafe-800 text-xs font-semibold tracking-wider uppercase border border-cafe-200">
            <Award className="w-3.5 h-3.5 text-amberGold" />
            Verified Customer Reviews
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cafe-950 tracking-tight">
            Why Clearwater Loves Social Sips
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            From sunrise coffee runs to evening artisan gelato and boba dates, here is what our guests have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-cafe-200/90 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <MessageSquareQuote className="w-10 h-10 text-cafe-200 absolute top-6 right-6 pointer-events-none group-hover:text-amberGold/30 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-cafe-600 ml-2">5.0 Star Experience</span>
                </div>

                {/* Review Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-cafe-900 mb-3">
                  "{rev.title}"
                </h3>

                {/* Comment */}
                <p className="text-sm text-cafe-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-cafe-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-cafe-200"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-cafe-900">{rev.name}</h4>
                    <p className="text-xs text-cafe-500">{rev.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    {rev.badge}
                  </span>
                  <p className="text-[10px] text-cafe-400 mt-1">{rev.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Review aggregator banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-cafe-200 shadow-warm-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-amberGold/15 text-amberGold flex items-center justify-center font-bold text-lg font-serif">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-cafe-900 mt-0.5">Top-Rated Cafe & Boba in Clearwater</p>
              <p className="text-[11px] text-cafe-500">Based on 1,280+ reviews across Google, Yelp & Facebook</p>
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-medium text-xs transition-colors shrink-0 cursor-pointer"
          >
            Leave a Review
          </button>
        </div>

      </div>
    </section>
  );
}
