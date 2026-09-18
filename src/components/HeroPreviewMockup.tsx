import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Smartphone, Monitor, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const HeroPreviewMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'restaurant' | 'portfolio'>('business');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const previews = {
    business: {
      url: 'https://veyracon.studio/preview/apex-corporate',
      eyebrow: 'ENTERPRISE ADVISORY & TECH',
      title: 'Scalable Architecture For Modern Ventures',
      subtitle: 'Building institutional trust through high-performance web systems.',
      accent: '#C8A96B',
      stats: [
        { label: 'Conversion Lift', value: '+38%' },
        { label: 'Lighthouse Score', value: '99/100' },
      ],
      features: ['Client Portal Integration', 'Bilingual CMS', 'Lead Capture Engine'],
    },
    restaurant: {
      url: 'https://veyracon.studio/preview/aurelia-dining',
      eyebrow: 'HAUTE CUISINE & COCKTAIL BAR',
      title: 'A Sensory Culinary Journey In The Heart Of The City',
      subtitle: 'Table reservations, seasonal digital menu, and instant WhatsApp ordering.',
      accent: '#E2C27D',
      stats: [
        { label: 'Direct Bookings', value: '4.2x' },
        { label: 'Load Speed', value: '0.4s' },
      ],
      features: ['WhatsApp Order Bot', 'Interactive Tasting Menu', 'Map & Valet Guide'],
    },
    portfolio: {
      url: 'https://veyracon.studio/preview/elena-vance-design',
      eyebrow: 'CREATIVE DIRECTOR & ARCHITECT',
      title: 'Curating Physical & Digital Spaces of Timeless Clarity',
      subtitle: 'High-contrast portfolio showcase with fluid lightbox gallery.',
      accent: '#C8A96B',
      stats: [
        { label: 'Engagement Rate', value: '72%' },
        { label: 'Optimized Assets', value: 'WebP/AVIF' },
      ],
      features: ['Filterable Project Grid', 'Press Kit Archive', 'Direct Inquiry Form'],
    },
  };

  const current = previews[activeTab];

  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C8A96B]/15 via-transparent to-[#E2C27D]/10 rounded-2xl filter blur-2xl pointer-events-none" />

      {/* Decorative Floating Card Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute -top-5 -right-3 sm:-right-5 z-20 bg-[#16171E]/95 backdrop-blur-md border border-[#C8A96B]/30 rounded-xl px-3.5 py-2 shadow-2xl flex items-center gap-2.5"
      >
        <div className="w-2 h-2 rounded-full bg-[#E2C27D] animate-pulse" />
        <span className="text-xs font-semibold text-[#F5F4F0] tracking-wide flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
          Production-Ready
        </span>
      </motion.div>

      {/* Floating Bottom Left Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden sm:flex absolute -bottom-5 -left-4 z-20 bg-[#16171E]/95 backdrop-blur-md border border-[#1E2028] rounded-xl px-4 py-2.5 shadow-2xl items-center gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-[#C8A96B]/15 border border-[#C8A96B]/30 flex items-center justify-center text-[#E2C27D]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-medium text-[#A8A8AD]">Crafted by Veyracon</p>
          <p className="text-xs font-bold text-[#F5F4F0]">Fast • Clean • Business-First</p>
        </div>
      </motion.div>

      {/* Main Browser Window Frame */}
      <div className="relative z-10 bg-[#111216] border border-[#1E2028] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-[#C8A96B]/30">
        {/* Window Top Navigation Bar */}
        <div className="bg-[#16171D] border-b border-[#1F2129] px-4 py-2.5 flex items-center justify-between gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-[280px] bg-[#0B0B0D] border border-[#232530] rounded-md px-3 py-1 text-[11px] text-[#A8A8AD] flex items-center justify-between font-mono truncate">
            <span className="truncate">{current.url}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
          </div>

          {/* Device Switcher */}
          <div className="flex items-center gap-1 bg-[#0B0B0D] p-0.5 rounded-md border border-[#232530]">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1 rounded text-xs transition-colors ${deviceMode === 'desktop' ? 'bg-[#1F2128] text-[#E2C27D]' : 'text-[#A8A8AD] hover:text-white'}`}
              title="Desktop View"
              aria-label="Desktop Preview"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1 rounded text-xs transition-colors ${deviceMode === 'mobile' ? 'bg-[#1F2128] text-[#E2C27D]' : 'text-[#A8A8AD] hover:text-white'}`}
              title="Mobile View"
              aria-label="Mobile Preview"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="bg-[#121319] border-b border-[#1E2028] px-3 py-2 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-[10px] uppercase font-semibold text-[#666874] px-1 mr-1">Concepts:</span>
          {(['business', 'restaurant', 'portfolio'] as const).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 capitalize flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tabKey
                  ? 'bg-[#C8A96B]/15 text-[#E2C27D] border border-[#C8A96B]/30'
                  : 'text-[#A8A8AD] hover:text-[#F5F4F0] hover:bg-[#181920]'
              }`}
            >
              {tabKey}
            </button>
          ))}
        </div>

        {/* Mockup Viewport Body */}
        <div className={`p-4 sm:p-6 transition-all duration-300 ${deviceMode === 'mobile' ? 'max-w-[340px] mx-auto' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + deviceMode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Concept Hero Header in Mini View */}
              <div className="border-b border-[#1E2028] pb-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] tracking-wider uppercase font-mono font-semibold text-[#C8A96B]">
                    {current.eyebrow}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1F2128] text-[#A8A8AD] font-mono">
                    Live Demo
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#F5F4F0] leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs text-[#A8A8AD] mt-1.5 line-clamp-2 leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* Mini Stats Banner */}
              <div className="grid grid-cols-2 gap-2.5">
                {current.stats.map((st, i) => (
                  <div key={i} className="bg-[#0B0B0D] border border-[#1E2028] p-2.5 rounded-lg">
                    <div className="text-[10px] text-[#A8A8AD]">{st.label}</div>
                    <div className="text-sm font-bold text-[#E2C27D] font-mono mt-0.5">{st.value}</div>
                  </div>
                ))}
              </div>

              {/* Feature Highlights */}
              <div className="space-y-1.5 pt-1">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#F5F4F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Bar inside Mockup */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href="#websites"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2C27D] hover:text-[#F5F4F0] transition-colors"
                >
                  Inspect Template Details
                  <ArrowRight className="w-3 h-3" />
                </a>
                <span className="text-[10px] font-mono text-[#666874]">
                  Veyracon Standard v2.4
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default HeroPreviewMockup;
