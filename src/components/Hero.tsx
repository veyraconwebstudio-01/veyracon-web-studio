import React from 'react';
import { HeroPreviewMockup } from './HeroPreviewMockup';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0B0B0D]"
    >
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#C8A96B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7 text-left">
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#16171E] border border-[#C8A96B]/30 text-xs font-semibold tracking-[0.2em] uppercase text-[#E2C27D] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
              VEYRACON WEB STUDIO
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading text-[#F5F4F0] tracking-tight leading-[1.12]">
              Websites That Make Businesses{' '}
              <span className="gold-gradient-text block sm:inline">
                Look Serious.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed max-w-xl font-normal">
              We design modern, responsive websites built to give businesses a
              stronger online presence, build trust, and turn visitors into
              customers.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('websites')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-all duration-200 shadow-[0_4px_20px_rgba(200,169,107,0.25)] hover:shadow-[0_6px_25px_rgba(200,169,107,0.35)] cursor-pointer"
              >
                Explore Websites
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#F5F4F0] bg-[#16171F] border border-[#1F2129] hover:border-[#C8A96B]/50 hover:bg-[#1E2028] transition-all duration-200 cursor-pointer"
              >
                Start Your Project
              </button>

              {/* WhatsApp Option */}
              <a
                href="https://wa.me/923453088393?text=Hi%20Veyracon%20Web%20Studio%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold text-[#A8A8AD] hover:text-[#25D366] transition-colors border border-transparent hover:border-[#25D366]/30 hover:bg-[#16171E]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Small Trust Line */}
            <div className="pt-4 border-t border-[#181920] flex items-center gap-2 text-xs font-medium text-[#7D7E87]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Modern Design • Responsive Development • Business Focused</span>
            </div>
          </div>

          {/* Right Desktop Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
            <HeroPreviewMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
