import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import { Phone, Calendar, MapPin, Utensils } from 'lucide-react';

const ReservationModal = lazy(() => import('./components/ReservationModal'));

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="theme-obsidian min-h-screen bg-[#050404] text-white selection:bg-[#F0C070] selection:text-[#050404] font-sans flex flex-col relative">
        {/* Top Sticky Obsidian & Gold Header */}
        <Header onOpenReservation={openReservation} />

        {/* Dynamic Route View */}
        <main className="flex-1 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage onOpenReservation={openReservation} />} />
            <Route path="/about" element={<AboutPage onOpenReservation={openReservation} />} />
            <Route path="/services" element={<ServicesPage onOpenReservation={openReservation} />} />
            <Route path="/menu" element={<ServicesPage onOpenReservation={openReservation} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage onOpenReservation={openReservation} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Obsidian & Gold Footer */}
        <Footer />

        {/* Reservation & Group Booking Modal */}
        <Suspense fallback={null}>
          <ReservationModal
            isOpen={isReservationOpen}
            onClose={closeReservation}
          />
        </Suspense>

        {/* Floating Quick Action Bar on Mobile Screens */}
        <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
          <div className="bg-[#120F0D]/95 backdrop-blur-xl border border-[#F0C070]/30 rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2">
            <a
              href="tel:+17272401811"
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#181310] text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-[#2C221B]"
            >
              <Phone className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Call</span>
            </a>
            <Link
              to="/services"
              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F0C070] to-[#D4A359] text-[#050404] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Utensils className="w-3.5 h-3.5 text-[#050404]" />
              <span>Menu</span>
            </Link>
            <button
              onClick={openReservation}
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#181310] text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-[#2C221B]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Reserve</span>
            </button>
            <Link
              to="/contact"
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#181310] text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-[#2C221B]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F0C070]" />
              <span>Map</span>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
