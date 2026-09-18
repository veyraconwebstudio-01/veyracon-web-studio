import React from 'react';
import { Layout, Code2, Layers, Target, RefreshCw, Sparkles, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Website Design',
      description: 'Modern layouts created to make businesses look professional and trustworthy.',
      icon: Layout,
      number: '01',
    },
    {
      id: 'web-development',
      title: 'Website Development',
      description: 'Responsive, functional websites designed for modern devices.',
      icon: Code2,
      number: '02',
    },
    {
      id: 'ready-made',
      title: 'Ready-Made Websites',
      description: 'Professional website designs that can be customized for different businesses.',
      icon: Layers,
      number: '03',
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'Focused pages for products, services, campaigns, and lead generation.',
      icon: Target,
      number: '04',
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      description: 'Modernize outdated websites with a cleaner and more professional experience.',
      icon: RefreshCw,
      number: '05',
    },
    {
      id: 'custom-business',
      title: 'Custom Business Websites',
      description: 'Websites designed specifically around a client\'s goals and requirements.',
      icon: Sparkles,
      number: '06',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#111216] border-t border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed">
            Focused web solutions built to meet the exact commercial needs of modern businesses and brands.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-[#0B0B0D] border border-[#1E2028] p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#14151C] group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#E2C27D] group-hover:border-[#C8A96B]/50 transition-colors">
                      <Icon className="w-6 h-6 text-[#C8A96B]" />
                    </div>
                    <span className="font-mono text-xs text-[#555765] font-semibold">
                      {srv.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#F5F4F0] mb-3 group-hover:text-[#E2C27D] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#A8A8AD] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#191A23] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-semibold uppercase tracking-wider text-[#A8A8AD] group-hover:text-[#E2C27D] flex items-center gap-1.5 transition-colors"
                  >
                    Start Project
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
