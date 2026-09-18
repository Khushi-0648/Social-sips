import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Gallery from '../components/Gallery';
import AmbienceZones from '../components/AmbienceZones';
import CraftProcess from '../components/CraftProcess';
import StatsCounter from '../components/StatsCounter';
import AboutUs from '../components/AboutUs';
import MenuServices from '../components/MenuServices';
import OrderFromTable from '../components/OrderFromTable';
import BulkOrders from '../components/BulkOrders';
import RetailShop from '../components/RetailShop';
import Testimonials from '../components/Testimonials';
import SocialFeed from '../components/SocialFeed';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenReservation }) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner */}
      <section id="home">
        <HeroBanner onOpenReservation={onOpenReservation} />
      </section>

      {/* 2. The Aesthetic Experience (Visual Cafe Gallery) */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* 3. Discover Your Favorite Corner (Four Ambience Zones) */}
      <section id="atmosphere">
        <AmbienceZones onOpenReservation={onOpenReservation} />
      </section>

      {/* 4. How We Craft Your Sips (Behind The Counter Artisan Journey) */}
      <section id="craft">
        <CraftProcess />
      </section>

      {/* 5. A Gathering Place Loved by Thousands (Stats Counter Banner) */}
      <section id="stats">
        <StatsCounter />
      </section>

      {/* 7. Crafted for Connection (About Us Story) */}
      <section id="about">
        <AboutUs />
      </section>

      {/* 8. Services & Curated Menu Showcase */}
      <section id="menu">
        <MenuServices onOpenReservation={onOpenReservation} />
      </section>

      {/* 9. Order From Your Table: Contactless Dining */}
      <section id="table-order">
        <OrderFromTable onOpenReservation={onOpenReservation} />
      </section>

      {/* 10. Bulk Orders & Office Catering Showcase */}
      <section id="bulk-orders">
        <BulkOrders />
      </section>

      {/* 11. At-Home Retail: Whole Beans, Ceramic Mugs & Boba Kits */}
      <div>
        <RetailShop />
      </div>

      {/* 14. Customer Reviews & Community Feedback (Interactive Slider) */}
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
    </div>
  );
}
