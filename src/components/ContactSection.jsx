import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  MessageCircle,
  Coffee
} from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Question',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();
    if (trimmedName && trimmedEmail && trimmedMessage) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#050404] text-[#B8ADA5] relative overflow-hidden border-t border-[#2C221B]">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#F0C070]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1F1A16] text-[#F0C070] text-xs font-bold tracking-wider uppercase border border-[#3D2D22]">
            Clearwater, Florida
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Visit Our Cafe & Bar
          </h2>
          <p className="text-base sm:text-lg text-[#B8ADA5] leading-relaxed">
            Stop by for your daily caffeine ritual, artisan gelato scoops, handcrafted boba, or chat with our friendly crew.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Schedule */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Contact Cards */}
            <div className="bg-[#120F0D] rounded-3xl p-6 sm:p-8 border border-[#2C221B] shadow-2xl space-y-6">
              <div className="border-b border-[#2C221B] pb-5">
                <span className="text-xs uppercase tracking-wider text-[#F0C070] font-bold">Local Clearwater Hub</span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Social Sips Cafe & Bar
                </h3>
                <p className="text-xs text-[#B8ADA5] mt-1">
                  Local Coffee • Artisan Gelato • Handcrafted Boba Tea
                </p>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7F75]">Phone & Call Orders</p>
                  <a
                    href="tel:+17272401811"
                    className="text-base sm:text-lg font-bold text-white hover:text-[#F0C070] transition-colors block mt-0.5"
                  >
                    +1 (727) 240-1811
                  </a>
                  <p className="text-xs text-[#8C7F75]">Tap to call for curbside pickup & table inquiries</p>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#F0C070]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7F75]">Official Email</p>
                  <a
                    href="mailto:SocialSipsCafe@gmail.com"
                    className="text-sm sm:text-base font-bold text-white hover:text-[#F0C070] transition-colors block mt-0.5 break-all"
                  >
                    SocialSipsCafe@gmail.com
                  </a>
                  <p className="text-xs text-[#8C7F75]">Direct response within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7F75]">Location & Area</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                    Clearwater, FL
                  </p>
                  <p className="text-xs text-[#8C7F75]">Close to Gulf to Bay & Clearwater Beach</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href="tel:+17272401811"
                  className="py-3 px-4 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#050404]" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => {
                    const mapEl = document.getElementById('clearwater-map-card');
                    if (mapEl) {
                      mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="py-3 px-4 rounded-xl bg-[#181310] hover:bg-[#221B16] text-white text-xs font-bold text-center border border-[#2C221B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F0C070]" />
                  <span>View Map Below</span>
                </button>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#120F0D] text-white rounded-3xl p-6 sm:p-8 border border-[#2C221B] shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#2C221B] pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F0C070]" />
                  <h4 className="font-serif text-lg font-bold">Cafe & Bar Hours</h4>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 font-semibold border border-emerald-500/30">
                  Open 7 Days
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-[#B8ADA5]">
                  <span className="font-medium text-white">Monday – Thursday:</span>
                  <span>7:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-[#B8ADA5] bg-[#181310] p-2.5 rounded-xl border border-[#2C221B]">
                  <span className="font-medium text-[#F0C070]">Friday – Saturday (Social Hours):</span>
                  <span className="font-bold text-white">7:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-[#B8ADA5]">
                  <span className="font-medium text-white">Sunday:</span>
                  <span>8:00 AM – 9:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8C7F75] pt-1">
                <Coffee className="w-3.5 h-3.5 text-[#F0C070] shrink-0" />
                <span>Coffee served all day • Gelato & Boba freshly prepared daily from open to close.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Contact Message Form */}
            <div className="bg-[#120F0D] rounded-3xl p-6 sm:p-8 border border-[#2C221B] shadow-2xl">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#B8ADA5] mt-1">
                  Have a question about our menu, special dietary options, boba party catering, or private events? Drop us a note!
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Message Received!
                  </h4>
                  <p className="text-sm text-emerald-200/90 max-w-md mx-auto">
                    Thank you for reaching out, <strong className="font-semibold text-white">{formState.name}</strong>! The Social Sips team in Clearwater will reply to your email at <span className="font-medium underline text-white">{formState.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', phone: '', inquiryType: 'General Question', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#FAF5F0] mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        maxLength={80}
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#FAF5F0] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        maxLength={25}
                        placeholder="+1 (727) 000-0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#FAF5F0] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        maxLength={100}
                        placeholder="yourname@gmail.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#FAF5F0] mb-1.5">Inquiry Topic</label>
                      <select
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] text-white transition-colors"
                      >
                        <option className="bg-[#181310] text-white">General Question</option>
                        <option className="bg-[#181310] text-white">Boba or Gelato Catering</option>
                        <option className="bg-[#181310] text-white">Table Reservation</option>
                        <option className="bg-[#181310] text-white">Private Event Booking</option>
                        <option className="bg-[#181310] text-white">Feedback & Compliments</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#FAF5F0] mb-1.5">Your Message *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows="4"
                      placeholder="How can our cafe crew assist you today?"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#050404]" />
                    <span>Send Message to Social Sips</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map Container Card */}
            <div id="clearwater-map-card" className="bg-[#120F0D] rounded-3xl p-4 sm:p-5 border border-[#2C221B] shadow-2xl scroll-mt-24">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F0C070]" />
                  <span className="text-xs font-bold text-white">Map & Clearwater Vicinity</span>
                </div>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Guest Parking</span>
                </span>
              </div>
              
              {/* Responsive Embedded Map for Clearwater, FL */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#2C221B] bg-[#181310]">
                <iframe
                  title="Clearwater Florida Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112932.18898160273!2d-82.84656608779929!3d27.96585329864273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f10645cbf92b%3A0x6b772274431e6790!2sClearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
