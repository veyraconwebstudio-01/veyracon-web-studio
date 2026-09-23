import React, { useState } from 'react';
import { 
  Globe, 
  Layers, 
  Briefcase, 
  HelpCircle, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Code,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const HtmlSitemapModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigateToSection = (anchor: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const siteStructure = [
    {
      category: 'Primary Pages & Sections',
      icon: Globe,
      color: '#C8A96B',
      links: [
        { title: 'Home / Hero Overview', anchor: '#home', description: 'Main digital introduction & luxury aesthetic showcase' },
        { title: 'Ready-Made Websites', anchor: '#readymade', description: '12+ pre-engineered production website designs' },
        { title: 'Web Studio Services', anchor: '#services', description: 'Core custom web design, engineering & redesign packages' },
        { title: 'Why Choose Veyracon', anchor: '#why-choose', description: 'Performance, conversion architecture & client benefits' },
        { title: 'Featured Portfolio Showcase', anchor: '#portfolio', description: 'Curated gallery of responsive live site mockups' },
        { title: 'Execution Process & Roadmap', anchor: '#process', description: 'Phase-by-phase development from wireframe to launch' },
        { title: 'About Veyracon Studio', anchor: '#about', description: 'Mission statement, design philosophy & developer craft' },
        { title: 'Order & Contact Intake', anchor: '#contact', description: 'Live proposal generator, direct order form & inquiry intake' },
        { title: 'Frequently Asked Questions (FAQ)', anchor: '#faq', description: 'Common answers regarding timelines, pricing & hosting' },
      ],
    },
    {
      category: 'Ready-Made Website Categories',
      icon: Layers,
      color: '#E2C27D',
      links: [
        { title: 'Corporate Business Websites', anchor: '#readymade', description: 'For firms, consultants, legal practices & agencies' },
        { title: 'Restaurant & Hospitality Suites', anchor: '#readymade', description: 'Menu displays, table reservations & location finders' },
        { title: 'E-commerce & Brand Showcase', anchor: '#readymade', description: 'Catalog presentation, cart UX & checkout gateways' },
        { title: 'Creative Portfolios & Photography', anchor: '#readymade', description: 'High-contrast aesthetic galleries for visual artists' },
        { title: 'Real Estate & Property Listings', anchor: '#readymade', description: 'Property cards, filterable specs & agent lead capture' },
        { title: 'Healthcare & Medical Practices', anchor: '#readymade', description: 'Clinic trust badges, doctor profiles & appointment booking' },
        { title: 'SaaS & Digital Product Landing Pages', anchor: '#readymade', description: 'Feature highlights, interactive tiers & signup flows' },
      ],
    },
    {
      category: 'Development Services',
      icon: Code,
      color: '#93C5FD',
      links: [
        { title: 'Custom Responsive Web Design', anchor: '#services', description: 'Tailor-made design engineered around brand identity' },
        { title: 'Full-Stack Web Development', anchor: '#services', description: 'Lightning-fast React, TypeScript & modern web standards' },
        { title: 'Conversion-Focused Landing Pages', anchor: '#services', description: 'Engineered specifically for ad campaigns & ROI' },
        { title: 'Legacy Website Modernization', anchor: '#services', description: 'Redesigning outdated sites with modern speed & elegance' },
        { title: 'Technical Search Engine Optimization (SEO)', anchor: '#services', description: 'Schema.org JSON-LD, crawl architecture & local tags' },
      ],
    },
    {
      category: 'Direct Channels & Verification',
      icon: Phone,
      color: '#25D366',
      links: [
        { title: 'Direct WhatsApp Line (+92 345 3088393)', url: 'https://wa.me/923453088393', external: true, description: 'Instant project quotes and rapid consultation' },
        { title: 'Instagram Profile (@veyraconwebstudio)', url: 'https://www.instagram.com/veyraconwebstudio/', external: true, description: 'Latest studio updates, case studies & design stories' },
        { title: 'XML Machine Sitemap (/sitemap.xml)', url: 'https://veyraconwebstudio.netlify.app/sitemap.xml', external: true, description: 'Official XML crawler feed submitted to Google Search Console' },
        { title: 'Robots Permission File (/robots.txt)', url: 'https://veyraconwebstudio.netlify.app/robots.txt', external: true, description: 'Indexation directives allowing search bots access' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0E0F13] border border-[#232530] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#1F212A] flex items-center justify-between bg-[#13141A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8A96B]/15 border border-[#C8A96B]/30 flex items-center justify-center text-[#E2C27D]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-[#F5F4F0] flex items-center gap-2">
                HTML Site Index & Architecture
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#C8A96B]/15 text-[#E2C27D] border border-[#C8A96B]/30">
                  SEO Sitemap
                </span>
              </h2>
              <p className="text-xs text-[#8A8C99]">
                Complete hierarchy of links, services, and indexing points for Veyracon Web Studio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#8A8C99] hover:text-white bg-[#1A1C23] hover:bg-[#252833] border border-[#262936] transition-colors cursor-pointer"
          >
            Close Esc
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-8 divide-y divide-[#1A1C24]">
          {/* Metadata bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-2 text-xs">
            <div className="p-3 rounded-xl bg-[#14151B] border border-[#21232D] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <div>
                <span className="block text-[#6E707E] text-[10px] uppercase font-mono">Domain Status</span>
                <span className="font-semibold text-[#F5F4F0]">Google Index Ready</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#14151B] border border-[#21232D] flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0" />
              <div>
                <span className="block text-[#6E707E] text-[10px] uppercase font-mono">Target Geographic Region</span>
                <span className="font-semibold text-[#F5F4F0]">Pakistan (en-PK) & Worldwide</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#14151B] border border-[#21232D] flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#60A5FA] shrink-0" />
              <div>
                <span className="block text-[#6E707E] text-[10px] uppercase font-mono">Crawler Validation</span>
                <span className="font-semibold text-[#F5F4F0]">robots.txt & sitemap.xml OK</span>
              </div>
            </div>
          </div>

          {/* Grouped Links */}
          {siteStructure.map((group, idx) => (
            <div key={idx} className="pt-6 space-y-4">
              <div className="flex items-center gap-2">
                <group.icon className="w-4 h-4" style={{ color: group.color }} />
                <h3 className="text-xs font-bold uppercase tracking-wider font-heading text-[#F5F4F0]">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.links.map((item, itemIdx) => {
                  if ('external' in item && item.external) {
                    return (
                      <a
                        key={itemIdx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-xl bg-[#13141A] hover:bg-[#1A1C24] border border-[#1E202A] hover:border-[#C8A96B]/40 transition-all flex items-start justify-between gap-3 text-left"
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs font-semibold text-[#F5F4F0] group-hover:text-[#E2C27D] flex items-center gap-1.5">
                            {item.title}
                            <ExternalLink className="w-3 h-3 text-[#6E707E] group-hover:text-[#E2C27D]" />
                          </div>
                          <p className="text-[11px] text-[#7E808F] leading-snug">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    );
                  }

                  return (
                    <button
                      key={itemIdx}
                      onClick={() => navigateToSection(item.anchor!)}
                      className="group p-3 rounded-xl bg-[#13141A] hover:bg-[#1A1C24] border border-[#1E202A] hover:border-[#C8A96B]/40 transition-all flex items-start justify-between gap-3 text-left cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-[#F5F4F0] group-hover:text-[#E2C27D] flex items-center gap-1">
                          {item.title}
                          <ChevronRight className="w-3 h-3 text-[#6E707E] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <p className="text-[11px] text-[#7E808F] leading-snug">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-[#575967] group-hover:text-[#C8A96B] shrink-0">
                        {item.anchor}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info bar */}
        <div className="p-4 sm:p-5 bg-[#101116] border-t border-[#1C1E26] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#7A7C8C] flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>Canonical link path: <span className="font-mono text-[#F5F4F0]">https://veyraconwebstudio.netlify.app/</span></span>
          </div>
          <button
            onClick={() => navigateToSection('#contact')}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-[#C8A96B] to-[#E2C27D] text-black font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            Start a Website Project
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
