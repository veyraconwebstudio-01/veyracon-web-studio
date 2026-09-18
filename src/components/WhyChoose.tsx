import React from 'react';
import { Eye, Smartphone, Compass, Cpu, MessageSquare, Sliders } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const reasons = [
    {
      id: '01',
      title: 'Premium Visual Design',
      description:
        'Clean layouts, intentional typography, and balanced spacing that elevate how potential clients perceive your company.',
      icon: Eye,
    },
    {
      id: '02',
      title: 'Mobile Responsive',
      description:
        'Meticulously tested to guarantee that mobile visitors enjoy the exact same clarity, speed, and smooth navigation as desktop users.',
      icon: Smartphone,
    },
    {
      id: '03',
      title: 'Clear User Experience',
      description:
        'Structured information flow that directs visitors toward key actions—whether that is calling, ordering, or requesting a quote.',
      icon: Compass,
    },
    {
      id: '04',
      title: 'Modern Development',
      description:
        'Built with clean, contemporary web standards to ensure fast loading times, strong accessibility, and rock-solid stability.',
      icon: Cpu,
    },
    {
      id: '05',
      title: 'Direct Communication',
      description:
        'Direct project contact through WhatsApp and personal consultation without bureaucracy or confusing agency middlemen.',
      icon: MessageSquare,
    },
    {
      id: '06',
      title: 'Customized for Your Brand',
      description:
        'Adapted to reflect your specific services, color identity, imagery, and commercial goals so your site feels authentically yours.',
      icon: Sliders,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D] border-t border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            THE VEYRACON STANDARD
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            Built With Business in Mind
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed">
            Every decision from initial layout to final deployment is made to strengthen your brand's digital presence and credibility.
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#111216] border border-[#1E2028] p-7 rounded-2xl transition-all duration-300 hover:border-[#C8A96B]/30 hover:bg-[#14151C]"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#E2C27D]">
                    <Icon className="w-5 h-5 text-[#C8A96B]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#5B5D6C]">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#F5F4F0] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A8AD] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
