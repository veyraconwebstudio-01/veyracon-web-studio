import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { ReadyMadeWebsites } from './components/ReadyMadeWebsites';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { CustomCta } from './components/CustomCta';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<string>('Business Website');

  const handleSelectWebsiteForOrder = (title: string) => {
    // Map website title to form dropdown options
    if (title.includes('Restaurant')) setSelectedWebsiteType('Restaurant Website');
    else if (title.includes('Portfolio')) setSelectedWebsiteType('Portfolio Website');
    else if (title.includes('Landing')) setSelectedWebsiteType('Landing Page');
    else if (title.includes('E-Commerce')) setSelectedWebsiteType('E-Commerce Website');
    else if (title.includes('Custom')) setSelectedWebsiteType('Custom Website');
    else setSelectedWebsiteType('Business Website');
  };

  const handleSelectCustom = () => {
    setSelectedWebsiteType('Custom Website');
  };

  const handleSelectConcept = (title: string) => {
    if (title.includes('Restaurant')) setSelectedWebsiteType('Restaurant Website');
    else if (title.includes('Portfolio')) setSelectedWebsiteType('Portfolio Website');
    else if (title.includes('Fashion')) setSelectedWebsiteType('E-Commerce Website');
    else setSelectedWebsiteType('Custom Website');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F4F0] flex flex-col selection:bg-[#C8A96B]/30 selection:text-[#E2C27D] relative">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <TrustIntro />
        <ReadyMadeWebsites onSelectForOrder={handleSelectWebsiteForOrder} />
        <Services />
        <WhyChoose />
        <Portfolio onSelectConcept={handleSelectConcept} />
        <Process />
        <CustomCta onSelectCustom={handleSelectCustom} />
        <About />
        <ContactForm preselectedWebsiteType={selectedWebsiteType} />
        <Faq />
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
