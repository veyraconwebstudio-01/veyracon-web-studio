import React, { useState, useEffect } from 'react';
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
import { HtmlSitemapModal } from './components/HtmlSitemapModal';
import { AuthModal } from './components/AuthModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { UserPortalModal } from './components/UserPortalModal';
import { UserAccount, OrderItem } from './types';
import { getCurrentUser, setCurrentUser, getStoredOrders } from './utils/orderStorage';

export default function App() {
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<string>('Business Website');

  // Authentication & Portals State
  const [currentUser, setUser] = useState<UserAccount | null>(null);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'admin'>('login');
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [isUserPortalOpen, setIsUserPortalOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());
    setOrders(getStoredOrders());
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup' | 'admin' = 'login') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleOpenPortal = () => {
    if (!currentUser) {
      handleOpenAuth('login');
      return;
    }
    if (currentUser.role === 'admin') {
      setIsAdminDashboardOpen(true);
    } else {
      setIsUserPortalOpen(true);
    }
  };

  const handleLoginSuccess = (user: UserAccount) => {
    setUser(user);
    if (user.role === 'admin') {
      setIsAdminDashboardOpen(true);
    } else {
      setIsUserPortalOpen(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUser(null);
    setIsAdminDashboardOpen(false);
    setIsUserPortalOpen(false);
  };

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

  const handleOrderCreated = (newOrder: OrderItem) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F4F0] flex flex-col selection:bg-[#C8A96B]/30 selection:text-[#E2C27D] relative">
      {/* Sticky Header with Owner/Client portal shortcuts */}
      <Navbar
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onOpenPortal={handleOpenPortal}
        orderCount={orders.length}
      />

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
        <ContactForm
          preselectedWebsiteType={selectedWebsiteType}
          currentUser={currentUser}
          onOrderCreated={handleOrderCreated}
        />
        <Faq />
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer onOpenSitemap={() => setIsSitemapOpen(true)} />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* HTML Sitemap Modal */}
      <HtmlSitemapModal
        isOpen={isSitemapOpen}
        onClose={() => setIsSitemapOpen(false)}
      />

      {/* Auth Modal (Client Login / Signup / Owner Portal) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialMode={authMode}
      />

      {/* Owner / Admin Dashboard Modal */}
      <AdminDashboardModal
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
        currentUser={currentUser}
        orders={orders}
        onOrdersChange={(updated) => setOrders(updated)}
        onLogout={handleLogout}
      />

      {/* Client Orders Portal Modal */}
      {currentUser && (
        <UserPortalModal
          isOpen={isUserPortalOpen}
          onClose={() => setIsUserPortalOpen(false)}
          currentUser={currentUser}
          orders={orders}
          onNewOrder={() => {
            const formEl = document.getElementById('contact');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

