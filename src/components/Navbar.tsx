import React, { useState, useEffect } from 'react';
import { VeyraconLogo } from './VeyraconLogo';
import { UserAccount } from '../types';
import { Menu, X, Instagram, ArrowUpRight, MessageCircle, User, Shield } from 'lucide-react';

interface NavbarProps {
  currentUser: UserAccount | null;
  onOpenAuth: (mode?: 'login' | 'signup' | 'admin') => void;
  onOpenPortal: () => void;
  orderCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  onOpenAuth,
  onOpenPortal,
  orderCount = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Websites', href: '#websites' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#1E2028] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group transition-transform focus:outline-none"
            aria-label="Veyracon Web Studio Home"
          >
            <VeyraconLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-[#A8A8AD] hover:text-[#F5F4F0] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#C8A96B] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Instagram Social Link */}
            <a
              href="https://www.instagram.com/veyraconwebstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#A8A8AD] hover:text-[#E2C27D] hover:bg-[#16171E] border border-transparent hover:border-[#1F2129] transition-all"
              aria-label="Follow Veyracon Web Studio on Instagram"
              title="Instagram @veyraconwebstudio"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href="https://wa.me/923453088393"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#A8A8AD] hover:text-[#25D366] hover:bg-[#16171E] border border-transparent hover:border-[#1F2129] transition-all"
              aria-label="WhatsApp Contact"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* User / Owner Portal Trigger */}
            {currentUser ? (
              <button
                onClick={onOpenPortal}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  currentUser.role === 'admin'
                    ? 'bg-[#C8A96B]/15 text-[#E2C27D] border border-[#C8A96B]/40 hover:bg-[#C8A96B]/25'
                    : 'bg-[#16171E] text-[#F5F4F0] border border-[#232530] hover:border-[#C8A96B]/50'
                }`}
              >
                {currentUser.role === 'admin' ? (
                  <>
                    <Shield className="w-3.5 h-3.5 text-[#C8A96B]" />
                    Owner Orders
                    {orderCount > 0 && (
                      <span className="w-4 h-4 rounded-full bg-[#C8A96B] text-black text-[10px] font-bold flex items-center justify-center">
                        {orderCount}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5 text-[#C8A96B]" />
                    My Account
                  </>
                )}
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A8A8AD] hover:text-[#F5F4F0] hover:bg-[#16171E] transition-colors cursor-pointer"
                >
                  Client Login
                </button>
                <button
                  onClick={() => onOpenAuth('admin')}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#E2C27D] bg-[#16171E] border border-[#C8A96B]/30 hover:border-[#C8A96B] transition-colors flex items-center gap-1 cursor-pointer"
                  title="Owner / Admin Login"
                >
                  <Shield className="w-3 h-3 text-[#C8A96B]" />
                  Owner
                </button>
              </div>
            )}

            {/* Gold-outline CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#E2C27D] border border-[#C8A96B]/50 hover:border-[#E2C27D] bg-[#C8A96B]/5 hover:bg-[#C8A96B]/15 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(200,169,107,0.2)]"
            >
              Get Your Website
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            {currentUser ? (
              <button
                onClick={onOpenPortal}
                className="px-2.5 py-1.5 rounded text-[11px] font-semibold text-[#E2C27D] border border-[#C8A96B]/40 bg-[#C8A96B]/10"
              >
                {currentUser.role === 'admin' ? 'Owner' : 'Account'}
              </button>
            ) : (
              <button
                onClick={() => onOpenAuth('login')}
                className="px-2 py-1 rounded text-[11px] text-[#A8A8AD] border border-[#232530]"
              >
                Login
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5F4F0] hover:bg-[#16171E] border border-[#1E2028] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8A96B]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E2C27D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0B0B0D]/98 border-b border-[#1E2028] shadow-2xl backdrop-blur-xl px-6 py-6 transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 text-base font-medium text-[#F5F4F0] border-b border-[#181920] flex items-center justify-between active:text-[#E2C27D]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C8A96B]/60 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}

            {/* Mobile Auth Options */}
            <div className="pt-2 border-b border-[#181920] pb-4 flex items-center justify-between gap-3">
              {currentUser ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#16171E] border border-[#C8A96B]/40 text-[#E2C27D] flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4 text-[#C8A96B]" />
                  Open {currentUser.role === 'admin' ? 'Owner Dashboard' : 'Client Orders'}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth('login');
                    }}
                    className="flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#16171E] border border-[#232530] text-[#F5F4F0] text-center"
                  >
                    User Login
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth('admin');
                    }}
                    className="flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#C8A96B]/10 border border-[#C8A96B]/40 text-[#E2C27D] text-center"
                  >
                    Owner Login
                  </button>
                </>
              )}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-colors"
              >
                Get Your Website
              </a>

              <div className="flex items-center justify-center gap-6 pt-2">
                <a
                  href="https://wa.me/923453088393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#A8A8AD] hover:text-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/veyraconwebstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#A8A8AD] hover:text-[#E2C27D]"
                >
                  <Instagram className="w-4 h-4 text-[#C8A96B]" />
                  @veyraconwebstudio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;

