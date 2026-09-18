import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const encodedMessage = encodeURIComponent(
    "Hi Veyracon Web Studio, I'm interested in getting a website for my business."
  );
  const waUrl = `https://wa.me/923453088393?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-end gap-3 group">
      {/* Optional Dismissible Mini Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#16171E] border border-[#C8A96B]/30 text-[#F5F4F0] px-3.5 py-2 rounded-xl shadow-2xl text-xs font-medium backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat with Veyracon on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8E909D] hover:text-white p-0.5 ml-1 transition-colors"
            title="Dismiss"
            aria-label="Dismiss WhatsApp Tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Veyracon Web Studio (+92 345 3088393)"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-[#0B0B0D] shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0B0B0D]"
      >
        {/* Subtle pulsating outer ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-40 duration-1000" />

        <MessageCircle className="w-7 h-7 fill-current stroke-[1.5]" />
      </a>
    </div>
  );
};
export default FloatingWhatsApp;
