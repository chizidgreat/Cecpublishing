import React, { useState } from 'react';
import { BookOpen, Menu, X, ArrowRight, PhoneCall, Mail, Phone } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Trust & Verification', page: 'verification' },
    { label: 'For Authors', page: 'authors' },
    { label: 'How It Works', page: 'process' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1325]/95 backdrop-blur-md border-b border-[#D4AF37]/20 text-white transition-all duration-200">
      {/* Top Banner Notice */}
      <div className="bg-[#070C18] py-1.5 px-4 text-[12px] text-slate-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <button 
              onClick={() => handleNavClick('verification')}
              className="hover:text-[#D4AF37] transition-colors text-left inline-flex items-center gap-1.5"
              title="View Business Trust & Verification Details"
            >
              <span>RC 9874710 (Active)</span>
            </button>
          </span>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <a 
              href="tel:+2347059212780" 
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-mono text-[11px]"
              title="Call 07059212780"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>07059212780</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="mailto:cecpublishingandmedia@gmail.com" 
              className="hover:text-[#D4AF37] transition-colors hidden md:flex items-center gap-1 text-[11px]"
              title="Email cecpublishingandmedia@gmail.com"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>cecpublishingandmedia@gmail.com</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <button 
              id="top-quick-faq-btn"
              onClick={() => handleNavClick('faq')} 
              className="hover:text-[#D4AF37] transition-colors"
            >
              FAQs
            </button>
            <span className="text-slate-600">|</span>
            <button 
              id="top-quick-contact-btn"
              onClick={() => handleNavClick('contact')} 
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
              <span>Contact Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-11 h-11 rounded-sm bg-[#16223B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-sm group-hover:border-[#D4AF37] transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                CEC Publishing & Media
              </div>
              <div className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                Publishing • Editing • Creative Media
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-150 rounded-xs relative ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-start-project-btn"
              onClick={onOpenQuote}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] text-[#0B1325] text-sm font-semibold rounded-xs shadow-md hover:from-[#E5C365] hover:to-[#C59E2D] transition-all transform active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-quick-quote-btn"
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-[#D4AF37] text-[#0B1325] text-xs font-semibold rounded-xs shadow-xs"
            >
              Start Project
            </button>
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1325] border-t border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                id={`mobile-nav-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`w-full flex items-center justify-between px-3 py-3 text-base rounded-xs font-medium text-left transition-colors ${
                  isActive
                    ? 'bg-[#16223B] text-[#D4AF37] font-semibold border-l-2 border-[#D4AF37]'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-[#D4AF37]">●</span>}
              </button>
            );
          })}

          <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
            <button
              id="mobile-drawer-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#D4AF37] text-[#0B1325] font-semibold rounded-xs shadow-md"
            >
              <span>Start Your Project / Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <a
                href="tel:+2347059212780"
                className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white/5 border border-white/10 rounded-xs text-slate-200 hover:text-[#D4AF37]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono">07059212780</span>
              </a>
              <a
                href="mailto:cecpublishingandmedia@gmail.com"
                className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white/5 border border-white/10 rounded-xs text-slate-200 hover:text-[#D4AF37]"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Email Desk</span>
              </a>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              Enugu, Nigeria • Professional Publishing House
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
