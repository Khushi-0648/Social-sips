import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Shield, Settings, Info, ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export default function CookiesPolicyPage() {
  const lastUpdated = 'September 18, 2026';

  const cookieTypes = [
    {
      title: '1. Strictly Necessary & Essential Cookies',
      desc: 'These cookies are essential for our website to function securely and properly. They enable basic features like page navigation, session management, and accessing secure areas. The website cannot function properly without these cookies.',
      examples: 'Security verification, session authentication, load balancing, CSRF protection.',
      duration: 'Session / 30 Days'
    },
    {
      title: '2. Preference & Functionality Cookies',
      desc: 'These cookies allow our website to remember choices you make (such as your preferred dark theme preference, reservation draft fields, or dietary filters on our menu showcase) to provide a more personalized, fluid experience.',
      examples: 'Obsidian theme preference, dietary filter selections, audio/video mute states.',
      duration: 'Up to 1 Year'
    },
    {
      title: '3. Performance & Analytics Cookies',
      desc: 'These cookies collect anonymous, aggregated data about how visitors interact with our website. This helps us measure page load times, identify broken links, and optimize mobile responsiveness across different smartphones and laptops.',
      examples: 'Aggregated page view counts, visitor flow, error telemetry.',
      duration: 'Up to 2 Years'
    },
    {
      title: '4. Third-Party Embeds & Integrations',
      desc: 'Some pages of our website may feature embedded content such as Google Maps (for Clearwater directions) or Instagram community feeds. These third-party providers may set their own tracking cookies in accordance with their respective privacy policies.',
      examples: 'Google Maps location tiles, web font delivery networks.',
      duration: 'Set by third parties'
    }
  ];

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
            <span>Browser & Data Transparency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cookies Policy
          </h1>
          <p className="text-xs text-[#B8ADA5]">
            Effective Date: {lastUpdated} • Social Sips Cafe & Bar (Clearwater, Florida)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#0A0807]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="bg-[#120F0D] rounded-3xl p-6 sm:p-10 border border-[#2C221B] space-y-8 text-sm sm:text-base text-[#B8ADA5] leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#F0C070]" />
                <span>What Are Cookies?</span>
              </h2>
              <p>
                Cookies are small text files placed on your computer, smartphone, or tablet when you visit websites. They are widely used to make websites work more efficiently, provide a smoother browsing experience, and furnish anonymous telemetry to site owners.
              </p>
              <p>
                At <strong>Social Sips Cafe & Bar</strong>, we believe in complete transparency. We use cookies responsibly to ensure fast page loads, maintain your preferences, and keep our online reservation systems secure.
              </p>
            </section>

            <section className="space-y-6 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#F0C070]" />
                <span>Categories of Cookies We Use</span>
              </h2>

              <div className="space-y-4">
                {cookieTypes.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#181310] border border-[#2C221B] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-serif text-base font-bold text-white">{c.title}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#241C16] text-[#F0C070] border border-[#3D2D22] w-fit">
                        {c.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#B8ADA5]">{c.desc}</p>
                    <p className="text-[11px] text-[#7A6D63] font-medium pt-1">
                      <strong className="text-[#B8ADA5]">Common Examples:</strong> {c.examples}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#F0C070]" />
                <span>How to Manage & Disable Cookies</span>
              </h2>
              <p>
                Most modern web browsers allow you to control cookies through their browser settings. You can set your browser to alert you when a cookie is placed, delete existing cookies, or block cookies entirely.
              </p>
              <p className="text-xs sm:text-sm">
                Please note that blocking essential cookies may affect the functionality of our online reservation modal, contact forms, or media playback.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
                <li><strong className="text-white">Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies</li>
                <li><strong className="text-white">Apple Safari:</strong> Settings → Safari → Privacy & Security → Block All Cookies</li>
                <li><strong className="text-white">Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection</li>
                <li><strong className="text-white">Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#2C221B]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Contact Us
              </h2>
              <p>If you have any questions regarding our use of cookies or browser storage technologies, feel free to reach out to us at:</p>
              <p className="text-xs font-bold text-[#F0C070]">SocialSipsCafe@gmail.com • +1 (727) 240-1811</p>
            </section>

          </div>

        </div>
      </section>

    </div>
  );
}
