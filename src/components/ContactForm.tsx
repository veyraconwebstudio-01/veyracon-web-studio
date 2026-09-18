import React, { useState, useEffect } from 'react';
import { ProjectFormData } from '../types';
import { MessageCircle, Send, CheckCircle2, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  preselectedWebsiteType?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedWebsiteType }) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    fullName: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    websiteType: 'Business Website',
    budgetRange: 'Standard Project',
    hasWebsite: 'No',
    designStyle: 'Modern',
    projectDescription: '',
    agreedToPricingTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedWebsiteType) {
      setFormData((prev) => ({ ...prev, websiteType: preselectedWebsiteType }));
    }
  }, [preselectedWebsiteType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMessage('');
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Website Inquiry - Veyracon Web Studio*
👤 *Name:* ${formData.fullName}
🏢 *Business:* ${formData.businessName || 'N/A'}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsappNumber}
💻 *Website Type:* ${formData.websiteType}
💰 *Budget Tier:* ${formData.budgetRange}
🌐 *Existing Website:* ${formData.hasWebsite}
🎨 *Style Preference:* ${formData.designStyle}
📝 *Project Notes:*
${formData.projectDescription || 'No additional notes provided.'}`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsappNumber.trim()) {
      setErrorMessage('Please provide your full name, email, and WhatsApp number so we can reach you.');
      return;
    }

    if (!formData.agreedToPricingTerms) {
      setErrorMessage('Please confirm that final pricing depends on specific project requirements.');
      return;
    }

    // Set submitted state to show the confirmed submission screen
    setSubmitted(true);
  };

  const copyDetailsToClipboard = () => {
    const text = `Veyracon Web Studio Inquiry:
Name: ${formData.fullName}
Business: ${formData.businessName || 'N/A'}
Email: ${formData.email}
WhatsApp: ${formData.whatsappNumber}
Website Type: ${formData.websiteType}
Budget Range: ${formData.budgetRange}
Existing Site: ${formData.hasWebsite}
Style: ${formData.designStyle}
Description: ${formData.projectDescription}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#111216] border-t border-[#1A1C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171E] border border-[#1E2028] text-xs font-semibold tracking-[0.2em] uppercase text-[#C8A96B]">
            PROJECT INITIATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4F0] tracking-tight">
            Start Your Website
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8AD] leading-relaxed">
            Tell us what you're looking for and we'll discuss your project with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Info & Direct WhatsApp alternative */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0B0B0D] border border-[#1E2028] p-7 rounded-2xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16171E] border border-[#232530] flex items-center justify-center text-[#E2C27D]">
                  <Sparkles className="w-5 h-5 text-[#C8A96B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#F5F4F0]">
                    Direct Collaboration
                  </h3>
                  <p className="text-xs text-[#A8A8AD]">Fast response via WhatsApp</p>
                </div>
              </div>

              <p className="text-xs text-[#A8A8AD] leading-relaxed">
                Every project is crafted with direct consultation. We review your requirements, suggest the optimal layout archetype, and provide a clear quote.
              </p>

              <div className="pt-4 border-t border-[#1A1C24] space-y-3">
                <div className="text-xs text-[#A8A8AD]">
                  <span className="font-semibold text-[#F5F4F0] block mb-1">Official WhatsApp:</span>
                  <a
                    href="https://wa.me/923453088393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-mono hover:underline flex items-center gap-1.5 font-medium"
                  >
                    +92 345 3088393
                  </a>
                </div>

                <div className="text-xs text-[#A8A8AD]">
                  <span className="font-semibold text-[#F5F4F0] block mb-1">Instagram:</span>
                  <a
                    href="https://www.instagram.com/veyraconwebstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E2C27D] font-mono hover:underline flex items-center gap-1.5"
                  >
                    @veyraconwebstudio
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#0B0B0D] border border-[#1E2028] p-7 rounded-2xl space-y-3 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A8A8AD]">
                Prefer WhatsApp? Message us directly.
              </div>
              <p className="text-xs text-[#A8A8AD]">
                Skip forms and talk directly with the studio about your website idea.
              </p>
              <a
                href="https://wa.me/923453088393?text=Hi%20Veyracon%20Web%20Studio%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1F2128] text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-colors mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-8 bg-[#0B0B0D] border border-[#1E2028] p-6 sm:p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            {submitted ? (
              /* Success / Submission Screen with direct WhatsApp option */
              <div className="space-y-6 py-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/40 flex items-center justify-center mx-auto text-[#E2C27D]">
                  <CheckCircle2 className="w-8 h-8 text-[#C8A96B]" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold font-heading text-[#F5F4F0]">
                    Project Request Prepared
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A8AD] leading-relaxed">
                    Thank you, <span className="text-[#F5F4F0] font-semibold">{formData.fullName}</span>. Your project parameters for a{' '}
                    <span className="text-[#E2C27D] font-semibold">{formData.websiteType}</span> have been compiled.
                  </p>
                </div>

                {/* Dispatch to WhatsApp */}
                <div className="p-5 rounded-xl bg-[#16171E] border border-[#232530] text-left max-w-lg mx-auto space-y-4">
                  <div className="text-xs text-[#A8A8AD] flex items-center justify-between">
                    <span className="font-semibold text-[#F5F4F0]">Instant Transmit:</span>
                    <button
                      onClick={copyDetailsToClipboard}
                      className="inline-flex items-center gap-1 text-[11px] text-[#C8A96B] hover:text-[#E2C27D] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy Summary'}
                    </button>
                  </div>

                  <p className="text-xs text-[#A8A8AD] leading-relaxed">
                    To receive an immediate review and quote, click below to forward this brief directly to Veyracon's WhatsApp:
                  </p>

                  <a
                    href={`https://wa.me/923453088393?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#22bf5b] transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-black" />
                    Send Directly on WhatsApp (+92 345 3088393)
                  </a>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        whatsappNumber: '',
                        websiteType: 'Business Website',
                        budgetRange: 'Standard Project',
                        hasWebsite: 'No',
                        designStyle: 'Modern',
                        projectDescription: '',
                        agreedToPricingTerms: false,
                      });
                    }}
                    className="text-xs text-[#A8A8AD] hover:text-[#F5F4F0] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-200 flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-semibold text-[#F5F4F0]">
                      Full Name <span className="text-[#C8A96B]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="businessName" className="text-xs font-semibold text-[#F5F4F0]">
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="e.g. Vance Architecture"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address & WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-[#F5F4F0]">
                      Email Address <span className="text-[#C8A96B]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="whatsappNumber" className="text-xs font-semibold text-[#F5F4F0]">
                      WhatsApp Number <span className="text-[#C8A96B]">*</span>
                    </label>
                    <input
                      id="whatsappNumber"
                      name="whatsappNumber"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Website Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="websiteType" className="text-xs font-semibold text-[#F5F4F0]">
                      Website Type
                    </label>
                    <select
                      id="websiteType"
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] focus:outline-none transition-colors"
                    >
                      <option value="Business Website">Business Website</option>
                      <option value="Restaurant Website">Restaurant Website</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="E-Commerce Website">E-Commerce Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Custom Website">Custom Website</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="budgetRange" className="text-xs font-semibold text-[#F5F4F0]">
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] focus:outline-none transition-colors"
                    >
                      <option value="Basic Project">Basic Project</option>
                      <option value="Standard Project">Standard Project</option>
                      <option value="Premium Project">Premium Project</option>
                      <option value="Need a Quote">Need a Quote</option>
                    </select>
                  </div>
                </div>

                {/* Existing Website & Preferred Design Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="hasWebsite" className="text-xs font-semibold text-[#F5F4F0]">
                      Do You Already Have a Website?
                    </label>
                    <select
                      id="hasWebsite"
                      name="hasWebsite"
                      value={formData.hasWebsite}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] focus:outline-none transition-colors"
                    >
                      <option value="No">No, starting fresh</option>
                      <option value="Yes">Yes, seeking redesign or replacement</option>
                      <option value="In Progress">In progress / looking for completion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="designStyle" className="text-xs font-semibold text-[#F5F4F0]">
                      Preferred Design Style
                    </label>
                    <select
                      id="designStyle"
                      name="designStyle"
                      value={formData.designStyle}
                      onChange={handleChange}
                      className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] focus:outline-none transition-colors"
                    >
                      <option value="Modern">Modern</option>
                      <option value="Minimal">Minimal</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Creative">Creative</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDescription" className="text-xs font-semibold text-[#F5F4F0]">
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    placeholder="Briefly describe what your business does, key features needed, or design references you admire..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full bg-[#16171E] border border-[#232530] focus:border-[#C8A96B] rounded-xl px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#555763] focus:outline-none transition-colors"
                  />
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="agreedToPricingTerms"
                    name="agreedToPricingTerms"
                    type="checkbox"
                    required
                    checked={formData.agreedToPricingTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded bg-[#16171E] border-[#232530] text-[#C8A96B] focus:ring-[#C8A96B] accent-[#C8A96B]"
                  />
                  <label htmlFor="agreedToPricingTerms" className="text-xs text-[#A8A8AD] leading-normal select-none">
                    I understand that final pricing depends on project requirements.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#C8A96B] text-[#0B0B0D] hover:bg-[#E2C27D] transition-all duration-200 shadow-[0_4px_20px_rgba(200,169,107,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Project Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
