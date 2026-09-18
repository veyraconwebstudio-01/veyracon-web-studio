import React from 'react';
import { VeyraconLogo } from './VeyraconLogo';
import { Check, Shield, Award, Sparkles, Instagram, MessageCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0B0B0D] border-t border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Geometric V Emblem & Ambient Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-[#111216] border border-[#1E2028] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-[#C8A96B]/30">
              {/* Background ambient gold gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A96B]/10 via-transparent to-[#E2C27D]/5 rounded-3xl pointer-events-none" />

              {/* Large Geometric Emblem */}
              <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <VeyraconLogo size="lg" showWordmark={false} />
              </div>

              <div className="space-y-1 relative z-10">
                <div className="font-heading font-extrabold text-xl text-[#F5F4F0] tracking-[0.2em]">
                  VEYR<span className="text-[#E2C27D]">A</span>CON
                </div>
                <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C8A96B]">
                  WEB STUDIO
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1F2129] w-full flex items-center justify-center gap-5 text-xs text-[#A8A8AD]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
                  Modern UI
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2C27D]" />
                  Clean Code
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
              STUDIO PROFILE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
              About Veyracon Web Studio
            </h2>

            {/* Mandated Official Description */}
            <p className="text-base sm:text-lg text-[#F5F4F0]/90 leading-relaxed">
              Veyracon Web Studio is a digital web studio focused on creating modern,
              professional websites for businesses, brands, entrepreneurs, and creators.
              Our goal is simple: create websites that look polished, communicate clearly,
              and help businesses build a stronger digital presence.
            </p>

            {/* Secondary Statement */}
            <div className="p-5 rounded-xl bg-[#111216] border border-[#C8A96B]/30 relative overflow-hidden">
              <div className="text-lg sm:text-xl font-heading font-bold text-[#E2C27D] tracking-wide">
                Websites. Crafted for Business.
              </div>
              <p className="text-xs sm:text-sm text-[#A8A8AD] mt-1">
                We believe thoughtful design and seamless functionality are essential assets for any serious enterprise.
              </p>
            </div>

            {/* Core Directives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-[#A8A8AD]">
                <div className="w-5 h-5 rounded bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#C8A96B] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Direct client collaboration from concept to deployment</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#A8A8AD]">
                <div className="w-5 h-5 rounded bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#C8A96B] flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Engineered specifically for business lead conversion</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/923453088393"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#25D366] bg-[#16171F] border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +92 345 3088393
              </a>
              <a
                href="https://www.instagram.com/veyraconwebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#E2C27D] bg-[#16171F] border border-[#C8A96B]/30 hover:bg-[#C8A96B]/10 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C8A96B]" />
                @veyraconwebstudio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
