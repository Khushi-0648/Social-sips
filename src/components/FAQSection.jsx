import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Phone, 
  Mail 
} from 'lucide-react';

const faqs = [
  {
    question: 'Where are you located in Clearwater and what are your hours?',
    answer: 'We are located in beautiful Clearwater, FL, just minutes away from Clearwater Beach. We are open Monday through Thursday from 7:00 AM to 9:00 PM, Friday and Saturday from 7:00 AM to 11:00 PM for late-night social hours, and Sunday from 8:00 AM to 9:00 PM.'
  },
  {
    question: 'Do you offer dairy-free, vegan and gluten-free options?',
    answer: 'Yes, absolutely! We provide creamy Barista Oat Milk and Vanilla Almond Milk for all coffees and boba teas. For gelato lovers, we churn 100% vegan, dairy-free fruit sorbettos daily (such as Amalfi Lemon and Wild Strawberry). Most of our gelato and drinks are naturally gluten-free.'
  },
  {
    question: 'Is your outdoor patio dog and pet-friendly?',
    answer: 'Yes! Our outdoor patio is completely pet-friendly with shaded umbrellas, fresh water bowls, and complimentary barista-made "pup cups" (whipped cream with a tiny dog biscuit).'
  },
  {
    question: 'Can I study or work remotely with a laptop at Social Sips?',
    answer: 'We love remote workers and students! We offer free ultra-high-speed gigabit Wi-Fi, conveniently placed power outlets throughout our indoor lounge booths, and plenty of natural daylight.'
  },
  {
    question: 'How do catering and private event reservations work?',
    answer: 'We offer portable cold brew growlers, custom boba tea party bars, and artisan gelato cart setups for weddings, birthdays, and corporate gatherings in Clearwater. You can call us directly at +1 (727) 240-1811 or use the reservation form on this site.'
  },
  {
    question: 'What happens during your evening Social Bar hours?',
    answer: 'Starting every Thursday through Saturday at 5:00 PM, we dim the lights and transition into our evening lounge vibe, serving our famous Clearwater Espresso Martini, craft botanical spritzes, fine wines, and artisanal cheese & charcuterie boards.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F4ECE1] relative overflow-hidden border-b border-cafe-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-cafe-900 text-xs font-bold uppercase tracking-wider border border-cafe-300 shadow-xs">
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cafe-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Everything you need to know before visiting our Clearwater cafe, boba bar, and gelato lounge.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-cafe-200 shadow-warm-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-cafe-50/70 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-cafe-950">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-cafe-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amberGold text-white' : 'text-cafe-700'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-cafe-700 leading-relaxed border-t border-cafe-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-cafe-200 shadow-warm-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-bold text-cafe-950">Still have questions for our baristas?</h4>
            <p className="text-xs text-cafe-600">Give us a quick call or drop us an email anytime.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+17272401811"
              className="px-4 py-2.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amberGold" />
              <span>(727) 240-1811</span>
            </a>
            <a
              href="mailto:SocialSipsCafe@gmail.com"
              className="px-4 py-2.5 rounded-xl bg-cafe-100 hover:bg-cafe-200 text-cafe-900 font-bold text-xs transition-colors border border-cafe-200 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amberGold" />
              <span>Email Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
