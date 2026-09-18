import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D] border-t border-[#1A1C23] overflow-hidden">
      {/* Background Decorative Rings & Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#C8A96B]/15 via-[#E2C27D]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16171E] border border-[#C8A96B]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C27D]">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
          COMMENCE YOUR PROJECT
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#F5F4F0] tracking-tight max-w-3xl mx-auto">
          Ready to Build Your{' '}
          <span className="gold-gradient-text">Online Presence?</span>
        </h2>

        <p className="text-base sm:text-xl text-[#A8A8AD] max-w-2xl mx-auto leading-relaxed">
          Choose a website or tell us what you want to create.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-all duration-200 shadow-[0_4px_25px_rgba(200,169,107,0.3)] hover:shadow-[0_6px_30px_rgba(200,169,107,0.4)] cursor-pointer"
          >
            Get Your Website
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/923453088393?text=Hi%20Veyracon%20Web%20Studio%2C%20I%27m%20ready%20to%20build%20my%20website%20and%20would%20love%20to%20discuss%20it."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F4F0] bg-[#16171E] border border-[#232530] hover:border-[#25D366]/50 hover:text-[#25D366] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};
export default FinalCta;
