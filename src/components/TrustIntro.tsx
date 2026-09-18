import React from 'react';
import { Smartphone, Layout, Zap, Target } from 'lucide-react';

export const TrustIntro: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      desc: 'Flawless across phones, tablets, and high-res desktops.',
    },
    {
      icon: Layout,
      title: 'Modern UI',
      desc: 'Refined aesthetics, premium typography, and clean spacing.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      desc: 'Lightweight architecture optimized for instant page loads.',
    },
    {
      icon: Target,
      title: 'Business Focused',
      desc: 'Engineered to generate real inquiries and build genuine credibility.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#111216] border-y border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B]">
            DESIGN PHILOSOPHY
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#F5F4F0] leading-tight">
            Your Business Deserves More Than Just a Website.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A8AD] leading-relaxed max-w-2xl mx-auto">
            A website should help a business look professional, communicate clearly,
            and make it easier for customers to take action. Veyracon Web Studio creates
            polished digital experiences built around those goals.
          </p>
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B0B0D] border border-[#1E2028] p-6 rounded-xl transition-all duration-200 hover:border-[#C8A96B]/30 hover:bg-[#15161D] group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#16171E] border border-[#232530] group-hover:border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-[#E2C27D]" />
                </div>
                <h3 className="text-base font-semibold text-[#F5F4F0] mb-1.5 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8A8AD] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TrustIntro;
