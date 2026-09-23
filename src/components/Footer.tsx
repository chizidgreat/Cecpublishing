import React from 'react';
import { BookOpen, MapPin, Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenQuote }) => {
  const navigateTo = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070C18] text-slate-300 border-t border-[#D4AF37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#16223B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  CEC Publishing & Media
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">
                  Publishing | Editing | Creative Services
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A professional publishing and creative services company helping authors, organisations, and individuals transform manuscripts and ideas into professionally edited, formatted, published, and market-ready books.
            </p>

            <div className="pt-2 flex flex-col space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Enugu, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a 
                  href="mailto:cecpublishingandmedia@gmail.com" 
                  className="font-mono text-slate-300 hover:text-[#D4AF37] transition-colors break-all"
                  title="Send email to CEC Publishing & Media"
                >
                  cecpublishingandmedia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a 
                  href="tel:+2347059212780" 
                  className="font-mono text-slate-300 hover:text-[#D4AF37] transition-colors"
                  title="Call 07059212780"
                >
                  07059212780
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/2347059212780" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-[#25D366] transition-colors flex items-center gap-1"
                  title="Chat with CEC on WhatsApp"
                >
                  <span>WhatsApp: <strong className="font-mono text-white">07059212780</strong></span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 border-b border-[#D4AF37]/30 pb-1 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => navigateTo('home')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Publishing Services
                </button>
              </li>
              <li>
                <button
                  id="footer-link-portfolio"
                  onClick={() => navigateTo('portfolio')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Books / Portfolio
                </button>
              </li>
              <li>
                <button
                  id="footer-link-authors"
                  onClick={() => navigateTo('authors')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  For Authors
                </button>
              </li>
              <li>
                <button
                  id="footer-link-process"
                  onClick={() => navigateTo('process')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Publishing Process
                </button>
              </li>
              <li>
                <button
                  id="footer-link-verification"
                  onClick={() => navigateTo('verification')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span>Trust & Verification (RC 9874710)</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded-xs font-mono">ACTIVE</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => navigateTo('faq')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 border-b border-[#D4AF37]/30 pb-1 inline-block">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Ghostwriting & Co-Authoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Manuscript & Line Editing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Book Proofreading
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Typesetting & Book Formatting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Book Cover Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Ebook & Print Publishing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Publishing Consultancy & ISBN
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Project Consultations */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 border-b border-[#D4AF37]/30 pb-1 inline-block">
              Begin Today
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Ready to publish? Submit your project details for an assessment and transparent proposal.
            </p>
            <button
              id="footer-cta-quote-btn"
              onClick={onOpenQuote}
              className="w-full py-2.5 px-4 bg-[#D4AF37] hover:bg-[#E5C365] text-[#0B1325] text-xs font-semibold rounded-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Direct Connect & Socials */}
            <div className="pt-6">
              <span className="text-xs text-slate-400 block mb-2 font-medium">Quick Direct Channels</span>
              <div className="flex flex-col gap-2 text-xs">
                <a 
                  href="https://wa.me/2347059212780" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1.5 rounded-xs bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] transition-colors flex items-center justify-between"
                  title="Chat on WhatsApp"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="font-mono text-[11px]">07059212780</span>
                </a>
                <a 
                  href="tel:+2347059212780" 
                  className="px-2.5 py-1.5 rounded-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
                  title="Direct Phone Call"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Call Desk</span>
                  </span>
                  <span className="font-mono text-[11px]">07059212780</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-300">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div>
              <span className="font-semibold text-white block text-sm mb-0.5">Author Intellectual Property Guarantee</span>
              <p className="text-slate-400 text-xs">Authors retain 100% ownership of their copyrights, distribution royalties, manuscripts, and creative control. CEC Publishing & Media operates exclusively as your professional production and editorial partner.</p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-xs text-[11px]">
                CAC: RC 9874710 (Active)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 pt-2">
            <p>© {new Date().getFullYear()} CEC Publishing & Media. Registered in Nigeria.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px]">
              <span>Enugu, Nigeria</span>
              <span>•</span>
              <a href="mailto:cecpublishingandmedia@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                cecpublishingandmedia@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+2347059212780" className="hover:text-[#D4AF37] transition-colors font-mono">
                07059212780
              </a>
              <span>•</span>
              <button 
                onClick={() => navigateTo('verification')}
                className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1 font-mono text-[#D4AF37]"
              >
                <span>CAC RC 9874710 (Active)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
