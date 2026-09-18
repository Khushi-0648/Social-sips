import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowDown
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20">
      
      {/* 1. Page Hero Banner: Editorial 4-Corner Split Layout with Motion Video Backdrop */}
      <section 
        id="contact-hero"
        className="relative min-h-[82vh] sm:min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-cafe-950 text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 px-4 sm:px-8 lg:px-14 select-none border-b border-[#2C221B]"
      >
        {/* Background Motion Video: Clear, Bright, High-Aesthetic */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-cafe-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02] saturate-[1.1]"
          >
            <source src="/videos/iced-coffee-88010.mp4" type="video/mp4" />
            <source src="/videos/iced-coffee-13764.mp4" type="video/mp4" />
          </video>

          {/* Light Subtle Edge Transitions */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050404] to-transparent pointer-events-none" />
        </div>

        {/* Top Editorial Row: SANCTUARY (Top-Left) & THE GATEWAY (Top-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-3 pt-2 sm:pt-4">
          
          {/* Headline Left: SANCTUARY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-w-0"
          >
            <span className="font-syne font-extrabold uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              SANCTUARY
            </span>
            <div className="flex items-center gap-1.5 mt-1 sm:mt-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-amberGold uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="hidden sm:inline">Social Sips • </span>
              <span>Clearwater Waterfront</span>
            </div>
          </motion.div>

          {/* Headline Right: THE HAVEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-1 shrink-0"
          >
            <span className="font-serif italic font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amberGold/95 tracking-wider text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              the haven
            </span>
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-mono text-white/90 shadow-md">
              <span className="hidden sm:inline">Minutes From Pier 60 • Free Parking</span>
              <span className="sm:hidden">Pier 60 Waterfront</span>
            </div>
          </motion.div>

        </div>

        {/* Middle Space is Open: Video Flows Pure & Visible */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-auto py-2 sm:py-6 flex items-center justify-center pointer-events-none" />

        {/* Bottom Editorial Row: Subtext & Action Controls (Lower-Left) & CONNECT (Bottom-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-4 sm:gap-6 pt-2">
          
          {/* Lower-Left: Subtext & Clean Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 sm:space-y-3.5 max-w-lg bg-black/35 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-0 shadow-lg sm:shadow-none"
          >
            {/* Monospace Editorial Subtext */}
            <p className="font-mono text-[11px] sm:text-sm text-neutral-100 tracking-wide uppercase leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Your coastal gathering haven in downtown Clearwater. Fuel up before the Gulf beaches or unwind under sunset skies.
            </p>

            <p className="text-[10px] sm:text-[11px] font-mono text-amber-200/90 tracking-wider">
              <span className="hidden sm:inline">27.9659° N, 82.8001° W • </span>
              <span>Open Daily 7 AM – 10 PM • Clearwater, FL</span>
            </p>

            {/* Minimal Action Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
              <button
                onClick={() => scrollToSection('contact-info')}
                className="group px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amberGold to-[#B87326] hover:from-[#E29A44] hover:to-amberGold text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+17272401811"
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-black/55 hover:bg-black/75 border border-white/25 text-white font-mono text-xs sm:text-sm tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold"
              >
                <Phone className="w-3.5 h-3.5 text-amberGold" />
                <span>(727) 240-1811</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:border-amberGold cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amberGold" />
                <span>Reserve</span>
              </button>
            </div>
          </motion.div>

          {/* Lower-Right: CONNECT Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="self-end md:self-auto text-right"
          >
            <span className="font-syne font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-white leading-tight block drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              CONNECT
            </span>
            <div className="flex items-center justify-end gap-2 mt-1 sm:mt-2 text-[10px] font-mono text-neutral-200 uppercase tracking-widest">
              <span>Find Us Below</span>
              <ArrowDown className="w-3 h-3 text-amberGold animate-bounce" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Main 2-Column Section: Contact Cards & Form */}
      <section id="contact-info" className="py-20 bg-[#0A0807] border-b border-[#2C221B]">
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
                      <li><strong className="text-white">Mon–Thu:</strong> 7:00 AM – 9:00 PM</li>
                      <li><strong className="text-white">Fri–Sat:</strong> 7:00 AM – 11:00 PM</li>
                      <li><strong className="text-white">Sunday:</strong> 8:00 AM – 9:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reserve CTA */}
              <div className="p-6 rounded-2xl bg-[#120F0D] border border-[#2C221B] space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F0C070]" />
                  <span>Planning a Table or Event?</span>
                </h4>
                <p className="text-xs text-[#B8ADA5]">
                  Guarantee seating for study groups, meetings, or celebrations with our easy instant reservation.
                </p>
                <button
                  onClick={onOpenReservation}
                  className="w-full py-2.5 rounded-xl bg-[#181310] hover:bg-[#F0C070] text-[#FAF5F0] hover:text-[#050404] font-bold text-xs border border-[#2C221B] hover:border-[#F0C070] transition-colors cursor-pointer"
                >
                  Open Table Reservation
                </button>
              </div>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-10 border border-[#2C221B] shadow-2xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#F0C070] uppercase tracking-wider">Fast Response</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Send an Inquiry or Feedback
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8ADA5]">
                    Fill out the form below and our Clearwater management team will get back to you within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-white">Message Received!</h4>
                    <p className="text-xs text-emerald-200/90 max-w-sm mx-auto">
                      Thank you for reaching out to Social Sips Cafe. We will get back to you shortly.
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
                        <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          placeholder="(727) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white placeholder-[#7A6D63] text-xs focus:outline-none focus:border-[#F0C070] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#FAF5F0] mb-1.5">Inquiry Subject</label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#181310] border border-[#33271F] text-white text-xs focus:outline-none focus:border-[#F0C070] transition-colors"
                        >
                          <option value="general">General Question</option>
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

      {/* 3. Clearwater Guide Component */}
      <div className="border-b border-[#2C221B]">
        <ClearwaterGuide />
      </div>

      {/* 4. Frequently Asked Questions */}
      <div className="border-b border-[#2C221B]">
        <FAQSection />
      </div>

    </div>
  );
}
