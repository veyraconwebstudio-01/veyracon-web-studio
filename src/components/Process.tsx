import React from 'react';
import { MessageSquareText, Layers, Code, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      desc: 'The customer shares their business, website type, style, and requirements.',
      icon: MessageSquareText,
      detail: 'Submit your form or message directly on WhatsApp with your vision and goals.',
    },
    {
      step: '02',
      title: 'Choose or Customize',
      desc: 'They select a ready-made design or request a custom website.',
      icon: Layers,
      detail: 'Pick from curated high-performance layouts or outline bespoke custom features.',
    },
    {
      step: '03',
      title: 'We Build',
      desc: 'Veyracon customizes the content, visuals, structure, and website experience.',
      icon: Code,
      detail: 'We integrate your copy, assets, typography, and refine responsiveness.',
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'After approval, the website is prepared for deployment and launch.',
      icon: Rocket,
      detail: 'Final quality audit, domain configuration, and go-live assistance.',
    },
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#0B0B0D] border-t border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            From Idea to Launch
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed">
            A straightforward, transparent four-step progression from initial concept to a published website.
          </p>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#111216] border border-[#1E2028] p-7 rounded-2xl relative flex flex-col justify-between transition-all duration-300 hover:border-[#C8A96B]/40 group"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading text-[#C8A96B]/30 group-hover:text-[#E2C27D] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#E2C27D] group-hover:border-[#C8A96B]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#C8A96B]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#F5F4F0] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8A8AD] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#1C1E27] text-[11px] text-[#6F7180] font-mono leading-normal">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Process;
