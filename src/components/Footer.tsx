import React, { useState } from 'react';
import { VeyraconLogo } from './VeyraconLogo';
import { Instagram, MessageCircle, ArrowUpRight, X, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08080A] border-t border-[#191A22] text-[#A8A8AD] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block focus:outline-none"
            >
              <VeyraconLogo size="md" />
            </a>

            <p className="text-xs sm:text-sm text-[#A8A8AD] leading-relaxed max-w-sm">
              Modern websites crafted for businesses, brands, and entrepreneurs.
            </p>

            <div className="text-xs font-semibold text-[#E2C27D] tracking-wide pt-1">
              Websites. Crafted for Business.
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/923453088393"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111216] border border-[#232530] hover:border-[#25D366]/50 flex items-center justify-center text-[#25D366] hover:bg-[#16171E] transition-colors"
                title="WhatsApp +92 345 3088393"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/veyraconwebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111216] border border-[#232530] hover:border-[#C8A96B]/50 flex items-center justify-center text-[#E2C27D] hover:bg-[#16171E] transition-colors"
                title="Instagram @veyraconwebstudio"
              >
                <Instagram className="w-4 h-4 text-[#C8A96B]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-widest text-[#F5F4F0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Websites', href: '#websites' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#E2C27D] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-widest text-[#F5F4F0]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Web Design',
                'Web Development',
                'Ready-Made Websites',
                'Landing Pages',
                'Website Redesign',
                'Custom Websites',
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-[#E2C27D] transition-colors"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-widest text-[#F5F4F0]">
              Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#6C6E7D] block mb-0.5">Direct WhatsApp:</span>
                <a
                  href="https://wa.me/923453088393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-mono hover:underline flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  +92 345 3088393
                </a>
              </div>

              <div>
                <span className="text-[#6C6E7D] block mb-0.5">Instagram:</span>
                <a
                  href="https://www.instagram.com/veyraconwebstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2C27D] font-mono hover:underline flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C8A96B]" />
                  @veyraconwebstudio
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#C8A96B] hover:text-[#E2C27D]"
                >
                  Order a Website
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#161720] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737582]">
          <div>
            © {currentYear} Veyracon Web Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#F5F4F0] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#F5F4F0] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111216] border border-[#232530] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-[#1E2028] pb-4">
              <div className="flex items-center gap-2.5">
                {activeModal === 'privacy' ? (
                  <Shield className="w-5 h-5 text-[#C8A96B]" />
                ) : (
                  <FileText className="w-5 h-5 text-[#C8A96B]" />
                )}
                <h3 className="text-lg font-bold font-heading text-[#F5F4F0]">
                  {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-[#A8A8AD] hover:text-white hover:bg-[#1E2028]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#A8A8AD] leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    At Veyracon Web Studio, client privacy and data integrity are central to our professional practice. Information provided through our project intake form, email, or direct WhatsApp inquiries is used solely for the purpose of communicating about your project, scoping requirements, and delivering website design services.
                  </p>
                  <p>
                    We do not sell, distribute, or share client information, contact lists, or commercial briefs with third parties without your explicit authorization.
                  </p>
                  <p>
                    For inquiries regarding data retention or to request deletion of your project correspondence, contact us via WhatsApp at +92 345 3088393 or email.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All website projects undertaken by Veyracon Web Studio are customized based on client-approved briefs. Final pricing and production timelines depend on the specific features, page counts, copywriting requirements, and integrations agreed upon in the project quote.
                  </p>
                  <p>
                    Third-party platform fees—including domain registration, cloud hosting, payment gateway subscriptions, or custom API accounts—are the responsibility of the client, though Veyracon will provide guidance and technical setup support.
                  </p>
                  <p>
                    Upon completion and final payment settlement, all customized frontend files, design assets, and deployment access are delivered to the client.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-[#1E2028] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-[#1E2028] text-xs font-semibold text-[#F5F4F0] hover:bg-[#282B37] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
