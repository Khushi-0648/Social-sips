import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Check, 
  Navigation, 
  MessageSquare, 
  Car, 
  Calendar 
} from 'lucide-react';
import ClearwaterGuide from '../components/ClearwaterGuide';
import FAQSection from '../components/FAQSection';

export default function ContactPage({ onOpenReservation }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', topic: 'general', message: '' });
      }, 6000);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider">
              <span>Location & Inquiries</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              We'd Love to Hear <br />
              <span className="italic font-normal text-[#F0C070]">From You.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#B8ADA5] leading-relaxed">
              Have a question about our roasting origins, bulk office catering, or reserving our lounge for a private gathering? Reach out or stop by our counter in Clearwater, FL.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section: Contact Cards & Form */}
      <section className="py-20 bg-[#0A0807] border-b border-[#2C221B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Channels & Location Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Visit Social Sips
                </h2>
                <p className="text-xs sm:text-sm text-[#B8ADA5] leading-relaxed">
                  Conveniently situated in downtown Clearwater, just minutes from the crystal white sands of Clearwater Beach and the scenic Coachman Park waterfront.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#120F0D] border border-[#2C221B] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Location</h4>
                    <p className="text-xs text-[#B8ADA5] mt-0.5">Clearwater, FL • Minutes from Pier 60</p>
                    <p className="text-[11px] text-[#F0C070] mt-1 font-semibold">Free Customer Parking in Rear</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#120F0D] border border-[#2C221B] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Phone & Orders</h4>
                    <p className="text-xs text-[#B8ADA5] mt-0.5">Call ahead for quick takeaway or bulk pickup:</p>
                    <a href="tel:+17272401811" className="text-xs font-bold text-[#F0C070] hover:underline block mt-1">
                      +1 (727) 240-1811
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#120F0D] border border-[#2C221B] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email Inquiries</h4>
                    <p className="text-xs text-[#B8ADA5] mt-0.5">For corporate orders, press, or feedback:</p>
                    <a href="mailto:SocialSipsCafe@gmail.com" className="text-xs font-bold text-[#F0C070] hover:underline block mt-1">
                      SocialSipsCafe@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#120F0D] border border-[#2C221B] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1A16] text-[#F0C070] border border-[#3D2D22] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Cafe Hours</h4>
                    <ul className="text-xs text-[#B8ADA5] mt-1 space-y-1">
                      <li><strong className="text-white">Mon – Thu:</strong> 7:00 AM – 9:00 PM</li>
                      <li><strong className="text-white">Fri – Sat:</strong> 7:00 AM – 11:00 PM (Late Lounge)</li>
                      <li><strong className="text-white">Sunday:</strong> 8:00 AM – 9:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-10 border border-[#2C221B] shadow-2xl space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Send an Inquiry or Feedback
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8ADA5] mt-1">
                    Fill out the form below and our Clearwater management team will get back to you within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-sm space-y-2">
                    <div className="flex items-center gap-2 font-bold text-emerald-300">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span>Message Received!</span>
                    </div>
                    <p className="text-xs leading-relaxed text-emerald-200/90">
                      Thank you for contacting Social Sips Cafe. A member of our team will review your inquiry and reach back out shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white placeholder-[#7A6D63] text-xs focus:outline-none focus:border-[#F0C070] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white placeholder-[#7A6D63] text-xs focus:outline-none focus:border-[#F0C070] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (727) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white placeholder-[#7A6D63] text-xs focus:outline-none focus:border-[#F0C070] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">What is this regarding?</label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white text-xs focus:outline-none focus:border-[#F0C070] transition-colors"
                        >
                          <option value="general">General Inquiries</option>
                          <option value="catering">Office Catering & Bulk Orders</option>
                          <option value="event">Private Lounge & Event Rental</option>
                          <option value="feedback">Guest Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">Your Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white placeholder-[#7A6D63] text-xs focus:outline-none focus:border-[#F0C070] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#050404]" />
                      <span>Send Message to Social Sips</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clearwater Guide Component */}
      <div className="border-b border-[#2C221B]">
        <ClearwaterGuide />
      </div>

      {/* Frequently Asked Questions */}
      <div className="border-b border-[#2C221B]">
        <FAQSection />
      </div>

    </div>
  );
}
