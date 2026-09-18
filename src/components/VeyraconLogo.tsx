import React from 'react';

interface VeyraconLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const VeyraconLogo: React.FC<VeyraconLogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: { title: 'text-base tracking-[0.2em]', sub: 'text-[9px] tracking-[0.3em]' },
    md: { title: 'text-xl tracking-[0.25em]', sub: 'text-[10px] tracking-[0.35em]' },
    lg: { title: 'text-2xl tracking-[0.28em]', sub: 'text-xs tracking-[0.4em]' },
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Geometric V Icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} aspect-square`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(200,169,107,0.3)]"
          aria-hidden="true"
        >
          <defs>
            {/* Primary Gold Metallic Gradient */}
            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3E1B9" />
              <stop offset="35%" stopColor="#E2C27D" />
              <stop offset="70%" stopColor="#C8A96B" />
              <stop offset="100%" stopColor="#8D6F34" />
            </linearGradient>

            {/* Accent Gold Gradient */}
            <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E9CE92" />
              <stop offset="50%" stopColor="#C8A96B" />
              <stop offset="100%" stopColor="#9B7B3E" />
            </linearGradient>

            {/* Crisp Silver/White Metallic Wing Gradient */}
            <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E5E5EA" />
              <stop offset="100%" stopColor="#C0C0C8" />
            </linearGradient>

            {/* Ambient Backing Glow */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Wing (Bold Gold Beam with sharp apex fold) */}
          <path
            d="M22 24 L38 24 L52 74 L37 74 Z"
            fill="url(#goldGrad1)"
          />
          {/* Top Right Gold Wing */}
          <path
            d="M51 24 L78 24 L56 50 L42 50 Z"
            fill="url(#goldGrad2)"
          />
          {/* Lower Right Fold / Metallic Silver Wing Accent */}
          <path
            d="M44 51 L56 51 L44 74 L37 74 Z"
            fill="url(#silverGrad)"
          />
          {/* Sharp Center Intersection Crest */}
          <path
            d="M37 74 L52 74 L49 68 L40 68 Z"
            fill="#C8A96B"
          />
        </svg>
      </div>

      {/* Wordmark with signature stylized A and studio subtitle */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className={`font-bold font-heading text-[#F5F4F0] leading-none ${textSizes[size].title}`}>
            VEYR<span className="text-[#E2C27D] font-extrabold inline-block">A</span>CON
          </div>
          <div className={`text-[#C8A96B] font-medium uppercase mt-1 ${textSizes[size].sub} flex items-center gap-1.5`}>
            <span className="inline-block w-2.5 h-[1px] bg-[#C8A96B]/60"></span>
            <span>WEB STUDIO</span>
            <span className="inline-block w-2.5 h-[1px] bg-[#C8A96B]/60"></span>
          </div>
        </div>
      )}
    </div>
  );
};
export default VeyraconLogo;
