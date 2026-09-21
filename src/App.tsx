import React, { useState, useEffect } from 'react';
import { Page, PortfolioBook } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PortfolioView } from './views/PortfolioView';
import { AuthorsView } from './views/AuthorsView';
import { ProcessView } from './views/ProcessView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';
import { QuoteView } from './views/QuoteView';
import { VerificationView } from './views/VerificationView';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedBook, setSelectedBook] = useState<PortfolioBook | null>(null);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);

  // Handle browser URL hash or back/forward if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = [
        'home', 'about', 'services', 'portfolio', 'authors', 'process', 'faq', 'contact', 'quote', 'verification'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changePage = (page: Page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setQuoteServiceId(undefined);
    changePage('quote');
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setQuoteServiceId(serviceId);
    changePage('quote');
  };

  const handleSelectBook = (book: PortfolioBook) => {
    setSelectedBook(book);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111A2E] selection:bg-[#D4AF37]/30 selection:text-[#0B1325]">
      {/* Sticky Top Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={changePage}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomeView
            setActivePage={changePage}
            onOpenQuote={handleOpenQuote}
            onSelectBook={handleSelectBook}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            setActivePage={changePage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioView
            onOpenQuote={handleOpenQuote}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        )}

        {activePage === 'authors' && (
          <AuthorsView
            setActivePage={changePage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'process' && (
          <ProcessView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'faq' && (
          <FaqView
            setActivePage={changePage}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {activePage === 'quote' && (
          <QuoteView
            initialServiceId={quoteServiceId}
          />
        )}

        {activePage === 'verification' && (
          <VerificationView
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      {/* Global Floating Actions (WhatsApp + Back to Top) */}
      <FloatingActions onOpenQuote={handleOpenQuote} />

      {/* Site Footer */}
      <Footer
        setActivePage={changePage}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
