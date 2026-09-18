import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface CustomCtaProps {
  onSelectCustom: () => void;
}

export const CustomCta: React.FC<CustomCtaProps> = ({ onSelectCustom }) => {
  const handleCustomClick = () => {
    onSelectCustom();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-[#111216] border-y border-[#1A1C23] overflow-hidden">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8A96B]/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#C8A96B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16171E] border border-[#C8A96B]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C27D]">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
          BESPOKE DIGITAL SOLUTIONS
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight max-w-2xl mx-auto">
          Have Something Different in Mind?
        </h2>

        <p className="text-base sm:text-lg text-[#A8A8AD] max-w-2xl mx-auto leading-relaxed">
          Tell us about your business and we'll help create a website built around your idea.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleCustomClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-all duration-200 shadow-[0_4px_20px_rgba(200,169,107,0.25)] cursor-pointer"
          >
            Request a Custom Website
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/923453088393?text=Hi%20Veyracon%20Web%20Studio%2C%20I%20have%20a%20custom%20website%20idea%20for%20my%20business%20and%20would%20love%20to%20discuss%20it."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F4F0] bg-[#16171F] border border-[#232530] hover:border-[#25D366]/50 hover:text-[#25D366] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
export default CustomCta;
