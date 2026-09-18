export interface WebsiteProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  ctaText: string;
  badge?: string;
  previewType: 'restaurant' | 'business' | 'portfolio' | 'landing' | 'ecommerce' | 'custom';
  colorAccent?: string;
  highlights: {
    idealFor: string;
    deliveryTime: string;
    pages: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  label: 'Concept Project' | 'Website Concept';
  description: string;
  previewUrl?: string;
  techStack: string[];
  features: string[];
  aspects: {
    palette: string[];
    layout: string;
    focus: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProjectFormData {
  fullName: string;
  businessName: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  budgetRange: string;
  hasWebsite: string;
  designStyle: string;
  projectDescription: string;
  agreedToPricingTerms: boolean;
}
