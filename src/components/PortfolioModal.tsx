import React from 'react';
import { PortfolioProject } from '../types';
import { X, ArrowRight, MessageCircle, CheckCircle2, Layers, Monitor } from 'lucide-react';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOrderConcept: (conceptTitle: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  onClose,
  onOrderConcept,
}) => {
  if (!project) return null;

  const handleOrder = () => {
    onOrderConcept(project.title);
    onClose();
  };

  const getWaLink = () => {
    const msg = encodeURIComponent(
      `Hi Veyracon Web Studio, I saw your concept project "${project.title}" (${project.category}) on your website and would love to build something similar for my company.`
    );
    return `https://wa.me/923453088393?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#111216] border border-[#232530] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#16171D] border-b border-[#1F2129] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#E2C27D] bg-[#C8A96B]/10 px-2.5 py-1 rounded-md border border-[#C8A96B]/20">
              {project.label}
            </span>
            <span className="text-xs text-[#A8A8AD]">|</span>
            <span className="text-xs font-mono text-[#A8A8AD]">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A8A8AD] hover:text-white hover:bg-[#1F2128] transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold font-heading text-[#F5F4F0]">
              {project.title}
            </h3>
            <p className="text-sm text-[#A8A8AD] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture & Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#1E2028]">
              <span className="text-[11px] font-mono text-[#C8A96B] uppercase tracking-wider block mb-1">
                Design Focus
              </span>
              <p className="text-xs text-[#F5F4F0] font-medium">
                {project.aspects.focus}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0B0D] border border-[#1E2028]">
              <span className="text-[11px] font-mono text-[#C8A96B] uppercase tracking-wider block mb-1">
                Layout Structure
              </span>
              <p className="text-xs text-[#F5F4F0] font-medium">
                {project.aspects.layout}
              </p>
            </div>
          </div>

          {/* Color Palette Display */}
          <div className="p-4 rounded-xl bg-[#16171E] border border-[#1E2028]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A8A8AD] block mb-2.5">
              Harmonic Color Palette
            </span>
            <div className="flex items-center gap-3">
              {project.aspects.palette.map((color, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md border border-white/10 shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-mono text-[11px] text-[#A8A8AD]">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Modules */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A8AD] mb-3">
              Key Website Sections & Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B0B0D] border border-[#1E2028] text-xs text-[#F5F4F0]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#16171D] border-t border-[#1F2129] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Discuss This Concept on WhatsApp
          </a>

          <button
            onClick={handleOrder}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-colors"
          >
            Request Similar Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PortfolioModal;
