import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AmbienceZones from './components/AmbienceZones';
import AboutUs from './components/AboutUs';
import CraftProcess from './components/CraftProcess';
import MenuServices from './components/MenuServices';
import BulkOrders from './components/BulkOrders';
import { Phone, Calendar, MapPin, Users } from 'lucide-react';

// Code-split downstream sections & modals for lightning-fast initial load & 0 render-blocking
const HygieneSafety = lazy(() => import('./components/HygieneSafety'));
const StatsCounter = lazy(() => import('./components/StatsCounter'));
const MeetTheTeam = lazy(() => import('./components/MeetTheTeam'));
const EventsCalendar = lazy(() => import('./components/EventsCalendar'));
const Gallery = lazy(() => import('./components/Gallery'));
const ClearwaterGuide = lazy(() => import('./components/ClearwaterGuide'));
const RetailShop = lazy(() => import('./components/RetailShop'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const SocialFeed = lazy(() => import('./components/SocialFeed'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));
const ReservationModal = lazy(() => import('./components/ReservationModal'));

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col selection:bg-amberGold selection:text-cafe-950">
      {/* Top Header & Sticky Navigation */}
      <Header onOpenReservation={() => setIsReservationOpen(true)} />

      <main className="flex-1 pb-20 md:pb-0">
        {/* 1. Hero Banner with Background Image Carousel (Centered & Lightened) */}
        <section id="home">
          <HeroBanner onOpenReservation={() => setIsReservationOpen(true)} />
        </section>

        {/* 2. Four Ambience Zones: Discover Your Favorite Corner */}
        <section id="atmosphere">
          <AmbienceZones onOpenReservation={() => setIsReservationOpen(true)} />
        </section>

        {/* 3. About Us: Crafted for Connection */}
        <section id="about">
          <AboutUs />
        </section>

        {/* 4. Behind The Counter: 3-Step Artisan Crafting Journey */}
        <section id="craft">
          <CraftProcess />
        </section>

        {/* 5. Services & Curated Menu Showcase */}
        <section id="menu">
          <MenuServices onOpenReservation={() => setIsReservationOpen(true)} />
        </section>

        {/* 6. Bulk Orders & Office Catering Showcase */}
        <section id="bulk-orders">
          <BulkOrders />
        </section>

        {/* 7-17. Lazy-loaded Downstream Interactive Sections & Modals */}
        <Suspense fallback={<div className="min-h-[60px]" />}>
          {/* 7. Hygiene, Cleanliness & Food Safety Standards */}
          <section id="hygiene">
            <HygieneSafety />
          </section>

          {/* 8. [MIDDLE SECTION] A Gathering Place Loved by Thousands (Stats Counter Banner) */}
          <section id="stats">
            <StatsCounter />
          </section>

          {/* 9. Meet The Team: Passionate Baristas & Italian Gelatieri */}
          <section id="team">
            <MeetTheTeam />
          </section>

          {/* 10. Weekly Socials & Cafe Hours Calendar */}
          <section id="events">
            <EventsCalendar onOpenReservation={() => setIsReservationOpen(true)} />
          </section>

          {/* 11. Visual Aesthetic Photo Gallery */}
          <section id="gallery">
            <Gallery />
          </section>

          {/* 12. Clearwater Beach Companion Guide */}
          <section id="guide">
            <ClearwaterGuide />
          </section>

          {/* 13. At-Home Retail: Whole Beans, Ceramic Mugs & Boba Kits */}
          <section id="shop">
            <RetailShop />
          </section>

          {/* 14. Customer Reviews & Community Feedback */}
          <section id="reviews">
            <Testimonials />
          </section>

          {/* 15. Instagram & TikTok Community Moments Feed */}
          <section id="social">
            <SocialFeed />
          </section>

          {/* 16. Frequently Asked Questions Accordion */}
          <section id="faq">
            <FAQSection />
          </section>

          {/* 17. Contact Us, Clearwater Map & Hours */}
          <section id="contact">
            <ContactSection />
          </section>
        </Suspense>
      </main>

      {/* Aesthetic Footer & Modal with Suspense */}
      <Suspense fallback={null}>
        <Footer />
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />
      </Suspense>

      {/* Floating Quick Action Bar on Mobile Screens */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <div className="bg-neutral-950/95 backdrop-blur-xl border border-amberGold/30 rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2">
          <a
            href="tel:+17272401811"
            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-800"
          >
            <Phone className="w-3.5 h-3.5 text-amberGold" />
            <span>Call</span>
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('bulk-orders');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amberGold to-amber-600 text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-black" />
            <span>Bulk</span>
          </button>
          <button
            onClick={() => setIsReservationOpen(true)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-800"
          >
            <Calendar className="w-3.5 h-3.5 text-amberGold" />
            <span>Reserve</span>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-800"
          >
            <MapPin className="w-3.5 h-3.5 text-amberGold" />
            <span>Map</span>
          </button>
        </div>
      </div>
    </div>
  );
}
