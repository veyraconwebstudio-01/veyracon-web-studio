import React, { useState } from 'react';
import { PortfolioProject } from '../types';
import { PortfolioModal } from './PortfolioModal';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectConcept: (title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectConcept }) => {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const projects: PortfolioProject[] = [
    {
      id: 'luxury-restaurant',
      title: 'L’Ambroisie Reserve',
      category: 'Luxury Restaurant',
      label: 'Concept Project',
      description:
        'A fine-dining gastronomic digital experience featuring an interactive tasting menu, sommelier notes, and direct WhatsApp reservation desk.',
      techStack: ['Responsive Layout', 'WhatsApp Concierge', 'Dynamic Menu'],
      features: [
        'Curated 7-Course Degustation Showcase',
        'Direct WhatsApp Concierge Integration',
        'Private Dining Room Inquiries',
        'Mobile-Optimized Wine List',
      ],
      aspects: {
        palette: ['#0B0B0D', '#C8A96B', '#1E2028'],
        layout: 'Asymmetric editorial with gold rule dividers',
        focus: 'High perceived exclusivity and rapid table booking',
      },
    },
    {
      id: 'construction',
      title: 'Vanguard Structural Group',
      category: 'Modern Construction Company',
      label: 'Concept Project',
      description:
        'High-authority engineering and construction layout highlighting completed infrastructure, safety certifications, and commercial bid requests.',
      techStack: ['Project Galleries', 'B2B Estimator', 'Team Overview'],
      features: [
        'Commercial & Civil Projects Directory',
        'Interactive Bid & RFP Inquiry Gateway',
        'Safety, Compliance, and License Badges',
        'Subcontractor Procurement Portal',
      ],
      aspects: {
        palette: ['#111216', '#E2C27D', '#2B2D38'],
        layout: 'Grid-oriented monolithic corporate blocks',
        focus: 'Heavy institutional trust and capability validation',
      },
    },
    {
      id: 'creative-portfolio',
      title: 'Kaelen Vance Archival',
      category: 'Creative Portfolio',
      label: 'Concept Project',
      description:
        'A minimalist monochrome and gold portfolio for visual directors, photographers, and independent spatial designers.',
      techStack: ['Full-bleed Masonry', 'Dark Mode Architecture', 'Social Feeds'],
      features: [
        'Curated Exhibition Lightbox',
        'Selected Commission Archive',
        'Press & Editorial Coverage Section',
        'Direct Studio Booking & Rep Links',
      ],
      aspects: {
        palette: ['#08080A', '#FFFFFF', '#C8A96B'],
        layout: 'Minimalist whitespace with expansive photography',
        focus: 'Uncluttered visual showcase and direct representation inquiries',
      },
    },
    {
      id: 'digital-agency',
      title: 'Monolith Brand Systems',
      category: 'Digital Agency',
      label: 'Website Concept',
      description:
        'Modern digital agency website with structured case study breakdowns, service tiers, and interactive discovery call booking.',
      techStack: ['Interactive Case Studies', 'Client Portal', 'Tiered Scope'],
      features: [
        'Strategic Deliverable Bento Matrix',
        'Interactive Scope & Pricing Matrix',
        'Client Result Metrics Display',
        'Multi-Step Project Onboarding Form',
      ],
      aspects: {
        palette: ['#0B0B0D', '#C8A96B', '#E2C27D'],
        layout: 'Modern bento container hierarchy',
        focus: 'Positioning high-ticket advisory and production speed',
      },
    },
    {
      id: 'fashion-store',
      title: 'Maison Noire Atelier',
      category: 'Fashion Store',
      label: 'Concept Project',
      description:
        'A luxury apparel storefront concept highlighting limited-edition capsule releases, lookbook presentations, and streamlined checkout.',
      techStack: ['Capsule Catalog', 'Lookbook Viewer', 'Size Guide'],
      features: [
        'Runway & Capsule Drop Carousel',
        'Detailed Material & Fit Specifications',
        'WhatsApp VIP Order Line',
        'Currency & Global Shipping Selector',
      ],
      aspects: {
        palette: ['#0F0F12', '#D8BC7E', '#1C1D24'],
        layout: 'Editorial luxury lookbook styling',
        focus: 'Tactile product presentation and boutique conversion',
      },
    },
    {
      id: 'real-estate',
      title: 'Aura Prime Estates',
      category: 'Real Estate Business',
      label: 'Website Concept',
      description:
        'Premium real estate showcase designed for luxury residential developments, architectural floorplans, and private viewing appointments.',
      techStack: ['Property Showcase', 'Floorplan Viewer', 'Agent Connect'],
      features: [
        'Neighborhood Lifestyle & Amenity Guide',
        'High-Resolution Floorplan & Spec Sheets',
        'Private Viewing Appointment Scheduler',
        'Direct WhatsApp Listing Broker Connect',
      ],
      aspects: {
        palette: ['#0B0B0D', '#C8A96B', '#232530'],
        layout: 'Expansive structural view with split specs',
        focus: 'Property value maximization and direct agent contact',
      },
    },
  ];

  const renderProjectVisual = (proj: PortfolioProject) => {
    return (
      <div className="relative h-56 bg-[#0E0F14] overflow-hidden border-b border-[#1E2028] p-5 flex flex-col justify-between group">
        {/* Background Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16171E_1px,transparent_1px),linear-gradient(to_bottom,#16171E_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

        {/* Top Concept Tag */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#16171E]/90 border border-[#232530] text-[#E2C27D]">
            {proj.label}
          </span>
          <span className="text-[11px] font-mono text-[#A8A8AD]">
            {proj.category}
          </span>
        </div>

        {/* Center Graphic Representation */}
        <div className="relative z-10 space-y-2 max-w-xs">
          <div className="h-4 w-3/4 bg-gradient-to-r from-[#F5F4F0]/80 via-[#C8A96B]/60 to-transparent rounded" />
          <div className="h-2 w-1/2 bg-[#232530] rounded" />
          <div className="pt-2 flex gap-1.5">
            {proj.aspects.palette.map((c, i) => (
              <span key={i} className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Bottom Specs Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E707D]">
          <span>{proj.techStack[0]}</span>
          <span className="text-[#C8A96B] flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Veyracon Concept
          </span>
        </div>

        {/* Stylish Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <button
            onClick={() => setActiveProject(proj)}
            className="px-5 py-2.5 rounded-xl bg-[#C8A96B] text-[#0B0B0D] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            Inspect Concept
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#111216] border-t border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            DESIGN ARCHIVES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            Selected Website Concepts
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed">
            Exploratory project designs demonstrating layout hierarchy, typography, and commercial clarity across distinct business sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#0B0B0D] border border-[#1E2028] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#C8A96B]/40 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {renderProjectVisual(proj)}

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-wider font-semibold">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-[#F5F4F0] mt-1 group-hover:text-[#E2C27D] transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8A8AD] leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] bg-[#16171E] border border-[#232530] hover:border-[#C8A96B]/50 hover:text-[#E2C27D] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  View Project
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A96B]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concept Inspection Modal */}
      <PortfolioModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOrderConcept={(title) => {
          onSelectConcept(title);
          const contact = document.getElementById('contact');
          if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
};
export default Portfolio;
