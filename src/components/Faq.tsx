import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What types of websites do you create?',
      answer:
        'Veyracon creates business websites, restaurant websites, portfolios, landing pages, e-commerce website interfaces, redesigns, and custom websites.',
    },
    {
      question: 'Can I customize a ready-made website?',
      answer:
        'Yes. Ready-made designs can be adjusted with your business name, colors, images, content, services, and other project-specific details.',
    },
    {
      question: 'Will my website work on mobile phones?',
      answer:
        'Yes. Websites are designed to adapt to modern desktop, tablet, and mobile screen sizes.',
    },
    {
      question: 'How much does a website cost?',
      answer:
        'Pricing depends on the website type, number of pages, design requirements, features, and customization. Contact Veyracon for a project quote.',
    },
    {
      question: 'How long does a website take?',
      answer:
        'Project timelines depend on the size and complexity of the website and how quickly the required content and feedback are provided.',
    },
    {
      question: 'Can you redesign my current website?',
      answer:
        'Yes. Existing websites can be redesigned to create a more modern, polished, and user-friendly experience.',
    },
    {
      question: 'Do you provide domain and hosting?',
      answer:
        'Domain and hosting arrangements can be discussed depending on the project. Any third-party domain, hosting, platform, or subscription charges should be clearly explained separately.',
    },
    {
      question: 'How can I contact Veyracon?',
      answer:
        'You can use the website contact form, message us on WhatsApp at +92 345 3088393, or contact us through Instagram at @veyraconwebstudio.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#0B0B0D] border-t border-[#1A1C23]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            Clear Answers
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our design process, turnaround, and website delivery.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#111216] border border-[#1E2028] rounded-xl overflow-hidden transition-colors hover:border-[#C8A96B]/30"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold font-heading text-[#F5F4F0]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#C8A96B] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E2C27D] border-[#C8A96B]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#A8A8AD] leading-relaxed border-t border-[#181922] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#111216] border border-[#1E2028] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-[#F5F4F0] font-heading">
              Have another question?
            </h3>
            <p className="text-xs text-[#A8A8AD] mt-0.5">
              Ask directly on WhatsApp for an immediate response.
            </p>
          </div>
          <a
            href="https://wa.me/923453088393?text=Hi%20Veyracon%20Web%20Studio%2C%20I%20have%20a%20question%20about%20your%20websites."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#25D366] bg-[#16171E] border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
export default Faq;
