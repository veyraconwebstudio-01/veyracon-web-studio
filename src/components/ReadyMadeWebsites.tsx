import React, { useState } from 'react';
import { WebsiteProduct } from '../types';
import { WebsitePreviewModal } from './WebsitePreviewModal';
import { CheckCircle2, ArrowRight, Utensils, Building2, UserSquare2, Compass, ShoppingBag, Palette } from 'lucide-react';

interface ReadyMadeWebsitesProps {
  onSelectForOrder: (productTitle: string) => void;
}

export const ReadyMadeWebsites: React.FC<ReadyMadeWebsitesProps> = ({ onSelectForOrder }) => {
  const [selectedProduct, setSelectedProduct] = useState<WebsiteProduct | null>(null);

  const products: WebsiteProduct[] = [
    {
      id: 'restaurant',
      title: 'Restaurant Website',
      category: 'Hospitality & Dining',
      description: 'A stylish website for restaurants, cafés, bakeries, and food businesses.',
      features: [
        'Menu section',
        'Contact details',
        'WhatsApp ordering',
        'Location section',
        'Mobile responsive',
      ],
      ctaText: 'View Website',
      previewType: 'restaurant',
      badge: 'High Inquiries',
      highlights: {
        idealFor: 'Restaurants, bistros, bakeries, lounges',
        deliveryTime: '2 - 4 Days',
        pages: 'Multi-section Menu + Info',
      },
    },
    {
      id: 'business',
      title: 'Business Website',
      category: 'Corporate & Services',
      description: 'A professional company website designed to build trust and present services clearly.',
      features: [
        'Professional homepage',
        'Services',
        'About section',
        'Contact form',
        'Mobile responsive',
      ],
      ctaText: 'View Website',
      previewType: 'business',
      badge: 'Most Popular',
      highlights: {
        idealFor: 'Agencies, consultants, law firms, B2B',
        deliveryTime: '3 - 5 Days',
        pages: 'Homepage + Services + About + Contact',
      },
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      category: 'Creatives & Professionals',
      description: 'A clean portfolio website for creators, freelancers, photographers, designers, and professionals.',
      features: [
        'Portfolio gallery',
        'About section',
        'Project showcase',
        'Social links',
        'Contact section',
      ],
      ctaText: 'View Website',
      previewType: 'portfolio',
      highlights: {
        idealFor: 'Designers, architects, photographers',
        deliveryTime: '2 - 4 Days',
        pages: 'Project Gallery + Bio + Inquiries',
      },
    },
    {
      id: 'landing-page',
      title: 'Landing Page',
      category: 'Campaigns & Products',
      description: 'A focused one-page website designed for a product, service, campaign, or business offer.',
      features: [
        'Strong hero section',
        'Benefits',
        'Call-to-action sections',
        'Lead form',
        'Responsive layout',
      ],
      ctaText: 'View Website',
      previewType: 'landing',
      badge: 'Fast Launch',
      highlights: {
        idealFor: 'Product launches, marketing campaigns',
        deliveryTime: '24 - 48 Hours',
        pages: 'High-Conversion Single Page',
      },
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Website',
      category: 'Retail & Storefronts',
      description: 'A modern online-store interface for businesses that want to showcase and sell products online.',
      features: [
        'Product cards',
        'Categories',
        'Cart-style interface',
        'Customer-focused design',
        'Mobile responsive',
      ],
      ctaText: 'View Website',
      previewType: 'ecommerce',
      highlights: {
        idealFor: 'Boutiques, consumer brands, retail catalog',
        deliveryTime: '4 - 7 Days',
        pages: 'Catalog + Product Detail + Checkout Ready',
      },
    },
    {
      id: 'custom-website',
      title: 'Custom Website',
      category: 'Bespoke Development',
      description: 'A fully custom website designed around the customer\'s business, style, and requirements.',
      features: [
        'Custom layout',
        'Custom sections',
        'Brand-focused design',
        'Responsive development',
        'Personalized features',
      ],
      ctaText: 'Request Custom Website',
      previewType: 'custom',
      badge: 'Tailored Scope',
      highlights: {
        idealFor: 'Unique brands with specialized requirements',
        deliveryTime: 'Custom Timeline',
        pages: 'Built from Ground Up',
      },
    },
  ];

  // Visual thumbnail mock representations for cards
  const renderCardVisual = (type: WebsiteProduct['previewType']) => {
    switch (type) {
      case 'restaurant':
        return (
          <div className="h-44 bg-[#0B0B0D] p-4 flex flex-col justify-between border-b border-[#1E2028] relative overflow-hidden group-hover:border-[#C8A96B]/30 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A8A8AD]">
              <span className="flex items-center gap-1.5 text-[#E2C27D] font-mono">
                <Utensils className="w-3.5 h-3.5 text-[#C8A96B]" />
                Haute Cuisine & Bar
              </span>
              <span className="px-2 py-0.5 rounded bg-[#16171E] text-[10px] text-[#C8A96B]">WhatsApp Order</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="h-3 w-3/4 bg-gradient-to-r from-[#E2C27D]/40 to-transparent rounded" />
              <div className="h-2 w-1/2 bg-[#232530] rounded" />
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="h-10 bg-[#16171E] rounded border border-[#1E2028] p-2 flex flex-col justify-center">
                  <div className="h-1.5 w-12 bg-[#C8A96B]/60 rounded mb-1" />
                  <div className="h-1 w-8 bg-[#333544] rounded" />
                </div>
                <div className="h-10 bg-[#16171E] rounded border border-[#1E2028] p-2 flex flex-col justify-center">
                  <div className="h-1.5 w-12 bg-[#C8A96B]/60 rounded mb-1" />
                  <div className="h-1 w-8 bg-[#333544] rounded" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6E707D]">
              <span>Table Booking • Direct Menu</span>
              <span className="text-[#E2C27D]">0.3s Speed</span>
            </div>
          </div>
        );
      case 'business':
        return (
          <div className="h-44 bg-[#0B0B0D] p-4 flex flex-col justify-between border-b border-[#1E2028] relative overflow-hidden group-hover:border-[#C8A96B]/30 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A8A8AD]">
              <span className="flex items-center gap-1.5 text-[#E2C27D] font-mono">
                <Building2 className="w-3.5 h-3.5 text-[#C8A96B]" />
                Institutional Corporate
              </span>
              <span className="px-2 py-0.5 rounded bg-[#16171E] text-[10px] text-[#C8A96B]">B2B Ready</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="h-3.5 w-4/5 bg-gradient-to-r from-[#F5F4F0]/80 to-transparent rounded" />
              <div className="h-2 w-2/3 bg-[#262835] rounded" />
              <div className="flex gap-2 pt-2">
                <div className="flex-1 h-9 bg-[#16171E] rounded border border-[#1E2028] p-1.5">
                  <div className="h-1.5 w-8 bg-[#C8A96B] rounded mb-1" />
                  <div className="h-1 w-12 bg-[#333544] rounded" />
                </div>
                <div className="flex-1 h-9 bg-[#16171E] rounded border border-[#1E2028] p-1.5">
                  <div className="h-1.5 w-8 bg-[#C8A96B] rounded mb-1" />
                  <div className="h-1 w-12 bg-[#333544] rounded" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6E707D]">
              <span>Services • Case Studies • Contact</span>
              <span className="text-[#E2C27D]">Trust Builder</span>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="h-44 bg-[#0B0B0D] p-4 flex flex-col justify-between border-b border-[#1E2028] relative overflow-hidden group-hover:border-[#C8A96B]/30 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A8A8AD]">
              <span className="flex items-center gap-1.5 text-[#E2C27D] font-mono">
                <UserSquare2 className="w-3.5 h-3.5 text-[#C8A96B]" />
                Curated Studio Gallery
              </span>
              <span className="px-2 py-0.5 rounded bg-[#16171E] text-[10px] text-[#C8A96B]">Visual Focus</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="h-16 bg-[#16171E] rounded border border-[#1E2028] flex flex-col justify-end p-1.5">
                <div className="h-1 w-10 bg-[#C8A96B] rounded" />
              </div>
              <div className="h-16 bg-[#181922] rounded border border-[#C8A96B]/30 flex flex-col justify-end p-1.5 shadow-sm">
                <div className="h-1 w-10 bg-[#E2C27D] rounded" />
              </div>
              <div className="h-16 bg-[#16171E] rounded border border-[#1E2028] flex flex-col justify-end p-1.5">
                <div className="h-1 w-10 bg-[#C8A96B] rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6E707D]">
              <span>Grid Showcase • Social Integration</span>
              <span className="text-[#E2C27D]">Artist & Agency</span>
            </div>
          </div>
        );
      case 'landing':
        return (
          <div className="h-44 bg-[#0B0B0D] p-4 flex flex-col justify-between border-b border-[#1E2028] relative overflow-hidden group-hover:border-[#C8A96B]/30 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A8A8AD]">
              <span className="flex items-center gap-1.5 text-[#E2C27D] font-mono">
                <Compass className="w-3.5 h-3.5 text-[#C8A96B]" />
                High-Conversion Funnel
              </span>
              <span className="px-2 py-0.5 rounded bg-[#16171E] text-[10px] text-[#C8A96B]">Lead Magnet</span>
            </div>
            <div className="space-y-2 my-auto text-center px-4">
              <div className="h-3 w-3/4 mx-auto bg-[#F5F4F0]/80 rounded" />
              <div className="h-2 w-1/2 mx-auto bg-[#262835] rounded" />
              <div className="pt-2">
                <div className="h-6 w-32 mx-auto rounded bg-[#C8A96B] flex items-center justify-center">
                  <div className="h-1.5 w-16 bg-[#0B0B0D] rounded" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6E707D]">
              <span>Hero • Benefits • Fast Lead Form</span>
              <span className="text-[#E2C27D]">Max Conversion</span>
            </div>
          </div>
        );
      case 'ecommerce':
        return (
          <div className="h-44 bg-[#0B0B0D] p-4 flex flex-col justify-between border-b border-[#1E2028] relative overflow-hidden group-hover:border-[#C8A96B]/30 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A8A8AD]">
              <span className="flex items-center gap-1.5 text-[#E2C27D] font-mono">
                <ShoppingBag className="w-3.5 h-3.5 text-[#C8A96B]" />
                Modern Retail Storefront
              </span>
              <span className="px-2 py-0.5 rounded bg-[#16171E] text-[10px] text-[#C8A96B]">Shop Interface</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="h-16 bg-[#16171E] rounded border border-[#1E2028] p-1.5 flex flex-col justify-between">
                <div className="h-8 bg-[#0B0B0D] rounded" />
                <div className="h-1 w-10 bg-[#C8A96B] rounded" />
              </div>
              <div className="h-16 bg-[#16171E] rounded border border-[#1E2028] p-1.5 flex flex-col justify-between">
                <div className="h-8 bg-[#0B0B0D] rounded" />
                <div className="h-1 w-10 bg-[#C8A96B] rounded" />
              </div>
              <div className="h-16 bg-[#16171E] rounded border border-[#1E2028] p-1.5 flex flex-col justify-between">
                <div className="h-8 bg-[#0B0B0D] rounded" />
                <div className="h-1 w-10 bg-[#C8A96B] rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6E707D]">
              <span>Cards • Categories • Cart System</span>
              <span className="text-[#E2C27D]">Direct Sell</span>
            </div>
          </div>
        );
      case 'custom':
        return (
          <div className="h-44 bg-[#0B0B0D] p-4 flex flex-col justify-between border-b border-[#1E2028] relative overflow-hidden group-hover:border-[#C8A96B]/30 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A8A8AD]">
              <span className="flex items-center gap-1.5 text-[#E2C27D] font-mono">
                <Palette className="w-3.5 h-3.5 text-[#C8A96B]" />
                Custom Architecture
              </span>
              <span className="px-2 py-0.5 rounded bg-[#C8A96B]/15 text-[10px] text-[#E2C27D] border border-[#C8A96B]/30">Bespoke</span>
            </div>
            <div className="space-y-2.5 my-auto px-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#C8A96B]/20 border border-[#C8A96B]/40 flex items-center justify-center text-[9px] text-[#E2C27D] font-mono">01</div>
                <div className="h-2 flex-1 bg-[#232530] rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#C8A96B]/20 border border-[#C8A96B]/40 flex items-center justify-center text-[9px] text-[#E2C27D] font-mono">02</div>
                <div className="h-2 flex-1 bg-[#C8A96B]/40 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#C8A96B]/20 border border-[#C8A96B]/40 flex items-center justify-center text-[9px] text-[#E2C27D] font-mono">03</div>
                <div className="h-2 flex-1 bg-[#232530] rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6E707D]">
              <span>Bespoke Layout • Tailored Modules</span>
              <span className="text-[#E2C27D]">Zero Limits</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="websites" className="relative py-24 sm:py-32 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            CURATED SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            Ready-Made Websites
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed">
            Choose a professional design. Customize it for your brand. Launch faster.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#111216] border border-[#1E2028] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#C8A96B]/40 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group"
            >
              <div>
                {/* Visual Thumbnail */}
                {renderCardVisual(product.previewType)}

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-wider font-semibold">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#C8A96B]/10 text-[#E2C27D] border border-[#C8A96B]/25 font-medium">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#F5F4F0] group-hover:text-[#E2C27D] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A8AD] mt-2 leading-relaxed min-h-[40px]">
                      {product.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2 border-t border-[#1C1E26] space-y-2">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7D7E87]">
                      Core Inclusions:
                    </div>
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F4F0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    product.id === 'custom-website'
                      ? 'bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] shadow-[0_2px_15px_rgba(200,169,107,0.25)]'
                      : 'bg-[#181922] text-[#F5F4F0] border border-[#232530] hover:border-[#C8A96B]/60 hover:text-[#E2C27D]'
                  }`}
                >
                  {product.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Preview */}
      <WebsitePreviewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForOrder={(title) => {
          onSelectForOrder(title);
          const contactSec = document.getElementById('contact');
          if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
};
export default ReadyMadeWebsites;
