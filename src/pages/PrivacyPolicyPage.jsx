import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 18, 2026';

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#050404] border-b border-[#2C221B] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[#F0C070] font-semibold hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F1A16] border border-[#3D2D22] text-xs font-bold text-[#F0C070] uppercase tracking-wider block w-fit">
            <span>Legal Documentation</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#B8ADA5]">
            Effective Date: {lastUpdated} • Social Sips Cafe & Bar (Clearwater, Florida)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#0A0807]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#120F0D] rounded-3xl p-6 sm:p-10 border border-[#2C221B] space-y-8 text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F0C070]" />
                <span>1. Introduction & Commitment to Your Privacy</span>
              </h2>
              <p>
                At <strong>Social Sips Cafe & Bar</strong> ("Social Sips", "we", "us", or "our"), located in Clearwater, Florida, we respect your privacy and are committed to protecting the personal information you share with us through our website, in-store ordering, table reservation systems, catering requests, and VIP newsletter communications.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or interact with our services.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#F0C070]" />
                <span>2. Information We Collect</span>
              </h2>
              <p>We may collect information directly from you when you:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
                <li><strong className="text-white">Reserve a Table:</strong> Name, phone number, email address, party size, date/time, and special dietary requests.</li>
                <li><strong className="text-white">Inquire About Bulk Catering:</strong> Name, organization/company, contact number, event date, guest count, and menu selections.</li>
                <li><strong className="text-white">Join our VIP Club / Newsletter:</strong> Email address for exclusive discounts, seasonal menu previews, and event announcements.</li>
                <li><strong className="text-white">Contact Us:</strong> Any comments, inquiries, or feedback submitted through our contact forms or email communications.</li>
                <li><strong className="text-white">Website Usage Data:</strong> Anonymized technical telemetry such as browser type, operating system, pages viewed, and referral sources to optimize website speed and mobile responsiveness.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#F0C070]" />
                <span>3. How We Use Your Information</span>
              </h2>
              <p>We use the information we collect solely for legitimate hospitality and business purposes, including:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
                <li>Confirming, managing, and updating your table reservations and catering bookings.</li>
                <li>Preparing custom coffee travelers, boba crates, or gelato orders according to your specifications.</li>
                <li>Responding promptly to your customer inquiries, dietary questions, or feedback.</li>
                <li>Sending periodic promotional emails regarding seasonal drinks, new roasts, and cafe socials (only if you have opted in).</li>
                <li>Improving our cafe services, menu offerings, and digital website experience.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#F0C070]" />
                <span>4. We Never Sell Your Personal Information</span>
              </h2>
              <p>
                <strong className="text-white">We do not sell, rent, lease, or trade your personal information to third parties or data brokers.</strong> Your contact details are strictly used for Social Sips Cafe operations and communications.
              </p>
              <p className="text-xs sm:text-sm">
                We may share information only with trusted service providers who assist us in operating our website, processing transactions, or managing email dispatch (such as reservation management or secure email providers), each bound by strict confidentiality agreements.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                5. Data Security & Payment Protection
              </h2>
              <p>
                We implement industry-standard administrative, technical, and physical security measures to protect your personal information against unauthorized access, loss, or alteration. All in-store and online payments are handled directly by PCI-DSS compliant payment gateways; Social Sips does not store credit card numbers on our local servers.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                6. Your Rights & Choices
              </h2>
              <p>You have the right at any time to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
                <li><strong className="text-white">Unsubscribe from Marketing:</strong> Click the "unsubscribe" link in any promotional email to immediately remove yourself from our newsletter list.</li>
                <li><strong className="text-white">Access or Update Information:</strong> Contact us to review, update, or correct the personal data we hold about you.</li>
                <li><strong className="text-white">Request Deletion:</strong> Request that we delete your contact records from our reservation and marketing databases.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                7. Contact Us Regarding Your Privacy
              </h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us directly:</p>
              <div className="p-4 rounded-2xl bg-[#181310] border border-[#2C221B] space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-white">Social Sips Cafe & Bar</p>
                <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#F0C070]" /> Clearwater, FL • United States</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#F0C070]" /> +1 (727) 240-1811</p>
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#F0C070]" /> SocialSipsCafe@gmail.com</p>
              </div>
            </section>

          </div>

        </div>
      </section>

    </div>
  );
}
