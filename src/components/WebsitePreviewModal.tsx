import React, { useState } from 'react';
import { WebsiteProduct } from '../types';
import { X, CheckCircle2, MessageCircle, ArrowRight, Monitor, Smartphone, Sparkles, ExternalLink } from 'lucide-react';

interface WebsitePreviewModalProps {
  product: WebsiteProduct | null;
  onClose: () => void;
  onSelectForOrder: (productTitle: string) => void;
}

export const WebsitePreviewModal: React.FC<WebsitePreviewModalProps> = ({
  product,
  onClose,
  onSelectForOrder,
}) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  if (!product) return null;

  const handleOrder = () => {
    onSelectForOrder(product.title);
    onClose();
  };

  const getEncodedWaText = () => {
    return encodeURIComponent(
      `Hi Veyracon Web Studio, I'm interested in the "${product.title}" design package. Could we discuss tailoring this for my business?`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#111216] border border-[#232530] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#16171D] border-b border-[#1F2129] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-wider uppercase text-[#C8A96B] font-semibold bg-[#C8A96B]/10 px-2.5 py-1 rounded-md border border-[#C8A96B]/20">
              {product.category}
            </span>
            <h3 className="text-lg font-bold font-heading text-[#F5F4F0]">
              {product.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div className="hidden sm:flex items-center bg-[#0B0B0D] p-1 rounded-lg border border-[#232530]">
              <button
                onClick={() => setDevice('desktop')}
                className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition-colors ${
                  device === 'desktop'
                    ? 'bg-[#1F2128] text-[#E2C27D] font-medium'
                    : 'text-[#A8A8AD] hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition-colors ${
                  device === 'mobile'
                    ? 'bg-[#1F2128] text-[#E2C27D] font-medium'
                    : 'text-[#A8A8AD] hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#A8A8AD] hover:text-white hover:bg-[#1F2128] transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Simulated Browser Preview Frame */}
          <div
            className={`border border-[#1E2028] rounded-xl bg-[#0B0B0D] p-5 shadow-inner transition-all duration-300 mx-auto ${
              device === 'mobile' ? 'max-w-[340px]' : 'w-full'
            }`}
          >
            {/* Top Preview Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1A1C24] text-[11px] text-[#A8A8AD] font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C8A96B]" />
                veyracon.studio/{product.id}-concept
              </span>
              <span className="text-[#666874]">Interactive Concept</span>
            </div>

            {/* Simulated Page Content */}
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#16171E] border border-[#232530]">
                <div className="text-[10px] text-[#C8A96B] uppercase tracking-wider font-semibold">
                  Featured Layout
                </div>
                <h4 className="text-xl font-bold font-heading text-[#F5F4F0] mt-1">
                  {product.title} Architecture
                </h4>
                <p className="text-xs text-[#A8A8AD] mt-1.5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#111216] border border-[#1E2028] rounded-lg">
                  <div className="text-[10px] text-[#A8A8AD] uppercase">Ideal For</div>
                  <div className="text-xs font-semibold text-[#F5F4F0] mt-0.5">{product.highlights.idealFor}</div>
                </div>
                <div className="p-3 bg-[#111216] border border-[#1E2028] rounded-lg">
                  <div className="text-[10px] text-[#A8A8AD] uppercase">Est. Turnaround</div>
                  <div className="text-xs font-semibold text-[#E2C27D] mt-0.5">{product.highlights.deliveryTime}</div>
                </div>
                <div className="p-3 bg-[#111216] border border-[#1E2028] rounded-lg">
                  <div className="text-[10px] text-[#A8A8AD] uppercase">Structure</div>
                  <div className="text-xs font-semibold text-[#F5F4F0] mt-0.5">{product.highlights.pages}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Included Features List */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A8A8AD] mb-3">
              Included Design Components & Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#16171E] border border-[#1E2028] text-sm text-[#F5F4F0]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C8A96B] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Details */}
          <div className="p-4 rounded-xl bg-[#16171E]/60 border border-[#C8A96B]/20 text-xs text-[#A8A8AD] space-y-1.5">
            <div className="font-semibold text-[#E2C27D] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C8A96B]" />
              Tailored to Your Identity
            </div>
            <p className="leading-relaxed">
              Every ready-made design is adapted with your specific logo, color palette, company copy, typography, high-resolution photography, and contact points.
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#16171D] border-t border-[#1F2129] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/923453088393?text=${getEncodedWaText()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Inquire via WhatsApp
          </a>

          <button
            onClick={handleOrder}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-colors shadow-md"
          >
            Request This Website Design
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default WebsitePreviewModal;
