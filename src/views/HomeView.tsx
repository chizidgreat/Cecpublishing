import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2,
  BookOpen, 
  Feather, 
  FileEdit, 
  LayoutTemplate, 
  Palette, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Users, 
  Clock, 
  Award,
  ChevronRight,
  ExternalLink,
  Eye,
  Building2,
  Calendar,
  MapPin,
  Lock,
  FileText,
  DollarSign,
  Info
} from 'lucide-react';
import { Page, PortfolioBook } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { PORTFOLIO_BOOKS } from '../data/portfolioData';
import { BookCoverMockup } from '../components/BookCoverMockup';
import { CertificateModal } from '../components/CertificateModal';
import { AnimatedHeadline } from '../components/AnimatedHeadline';

interface HomeViewProps {
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
  onSelectBook: (book: PortfolioBook) => void;
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActivePage,
  onOpenQuote,
  onSelectBook,
  onSelectServiceForQuote
}) => {
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredBooks = PORTFOLIO_BOOKS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1325] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#D4AF37]/20">
        {/* Subtle Background Ambience (No slop gradients - refined subtle grid and warm gold accent) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Refined Identity Chip */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>CEC Publishing & Media • Enugu, Nigeria</span>
              </div>

              {/* Animated Write-Forward Headline */}
              <AnimatedHeadline />

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                CEC Publishing & Media provides professional publishing, editing, ghostwriting, book production and creative services for authors, organisations and individuals ready to turn their ideas into professionally produced works.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Bookstore-Grade Layouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Meticulous Editorial Rigour</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Global Print & Ebook Reach</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenQuote}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] text-[#0B1325] font-bold text-sm sm:text-base rounded-xs shadow-lg hover:from-[#E5C365] hover:to-[#C59E2D] transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => setActivePage('services')}
                  className="px-6 py-3.5 bg-[#16223B] hover:bg-[#1F2E4D] text-slate-200 hover:text-white border border-[#D4AF37]/30 text-sm sm:text-base font-medium rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

              {/* Trust Metric Badges (Strictly realistic & factual) */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span>Direct Editorial Advisory</span>
                <span>•</span>
                <span>Custom Trim Formats</span>
                <span>•</span>
                <span>100% Author Copyright Retention</span>
              </div>
            </div>

            {/* Right: Visual Representation of Books & Publishing */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* Literary Showcase Composition */}
              <div className="relative w-full max-w-md py-6 flex items-center justify-center">
                {/* Book Mockup 1 (Background Angle) */}
                <div className="absolute -left-2 top-4 transform -rotate-6 scale-90 opacity-70 transition-transform hover:rotate-0 hover:opacity-100 hidden sm:block">
                  <BookCoverMockup 
                    book={PORTFOLIO_BOOKS[1]} 
                    size="sm" 
                    interactive={false} 
                  />
                </div>

                {/* Book Mockup 2 (Featured Centerpiece) */}
                <div className="relative z-20 shadow-2xl transition-transform hover:scale-105 duration-300">
                  <BookCoverMockup 
                    book={PORTFOLIO_BOOKS[0]} 
                    size="md" 
                    interactive={true}
                    onClick={() => onSelectBook(PORTFOLIO_BOOKS[0])}
                  />
                  <div className="mt-4 text-center">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] bg-[#16223B] px-3 py-1 border border-[#D4AF37]/30 rounded-xs">
                      Publishing Showcase [Sample]
                    </span>
                  </div>
                </div>

                {/* Book Mockup 3 (Right Foreground Angle) */}
                <div className="absolute -right-2 bottom-4 transform rotate-6 scale-90 opacity-80 transition-transform hover:rotate-0 hover:opacity-100 hidden sm:block">
                  <BookCoverMockup 
                    book={PORTFOLIO_BOOKS[2]} 
                    size="sm" 
                    interactive={false} 
                  />
                </div>
              </div>

              {/* Craftsmanship Note */}
              <div className="mt-2 text-center text-xs text-slate-400 italic">
                Hardcover, Paperback, and Reflowable Digital Editions engineered to international publishing specifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A. TRUST / INTRODUCTION SECTION */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
              About CEC Publishing & Media
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1325]">
              A Dedicated Publishing House Built on Literary Excellence
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
            <p className="text-base text-slate-700 leading-relaxed pt-2">
              Based in Enugu, Nigeria, CEC Publishing & Media operates with an unyielding commitment to editorial integrity, elegant typography, and authentic author collaboration. We empower authors, churches, organisations, and visionary thinkers to transform ideas into tangible, impactful literature that stands shoulder-to-shoulder with global standards.
            </p>
          </div>

          {/* Quick Capability Matrix */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs hover:border-[#D4AF37] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#16223B] transition-all duration-300 shadow-xs">
                <FileEdit className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 mb-2">Editorial Precision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Developmental editing, line crafting, and proofreading that refine arguments and voice without diluting your message.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs hover:border-[#D4AF37] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#16223B] transition-all duration-300 shadow-xs">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 mb-2">Bespoke Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interior typesetting, font pairings, and genre-focused cover art calibrated for reader engagement and aesthetic poise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs hover:border-[#D4AF37] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#16223B] transition-all duration-300 shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 mb-2">Publishing Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear guidance on ISBN registration, legal deposit, Amazon KDP distribution, and local printing logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B. SERVICES SECTION */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
                Comprehensive Publishing Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1325] mt-1">
                Our Core Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                From initial brainstorming and ghostwriting to editing, typesetting, and global distribution.
              </p>
            </div>
            <button
              id="view-all-services-btn"
              onClick={() => setActivePage('services')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1325] hover:text-[#B58D23] transition-colors group cursor-pointer"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF8F5] hover:bg-white p-7 rounded-xs border border-[#E5DFD5] flex flex-col justify-between hover:shadow-lg hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 ease-out group relative overflow-hidden"
              >
                {/* Subtle top indicator line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white border border-[#E5DFD5] group-hover:border-[#D4AF37]/40 text-[#0B1325] rounded-xs transition-colors duration-200">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DFD5]/80 flex items-center justify-between">
                  <button
                    onClick={() => setActivePage('services')}
                    className="text-xs font-semibold text-slate-700 hover:text-[#0B1325] transition-colors flex items-center gap-1 group/link cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>
                  <button
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className="text-xs font-semibold text-[#B58D23] hover:text-[#8C6D18] flex items-center gap-1 group/link cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setActivePage('services')}
              className="px-6 py-3 bg-[#0B1325] hover:bg-[#16223B] text-white text-sm font-semibold rounded-xs transition-colors inline-flex items-center gap-2"
            >
              <span>Explore All 12 Publishing & Creative Services</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>

      {/* C. WHY CHOOSE CEC */}
      <section className="py-20 bg-[#0B1325] text-white border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              The CEC Distinction
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Why Authors & Organisations Choose CEC
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We stand apart through our devotion to literary craft, transparent advisory, and structured project governance.
            </p>
          </div>

          {/* 6 Key Pillars strictly adhering to user instructions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-6 bg-[#111A2E] border border-white/10 rounded-xs hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-4">
                <FileEdit className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Professional Editorial Support</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Your manuscript is reviewed by dedicated editors who examine narrative arc, conceptual depth, syntax, and accuracy with academic and commercial precision.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-[#111A2E] border border-white/10 rounded-xs hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Attention to Detail</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From micro-typographic kerning and running headers to ISBN legal compliance, nothing is rushed or treated with indifference.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-[#111A2E] border border-white/10 rounded-xs hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">End-to-End Publishing Assistance</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We bridge every step: writing, editing, cover artistry, interior typesetting, Amazon KDP onboarding, and local print coordination under one roof.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-[#111A2E] border border-white/10 rounded-xs hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Author-Focused Approach</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                You retain 100% of your copyright, royalties, and creative control. We act as your skilled publishing partners, advising with clarity rather than imposing constraints.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 bg-[#111A2E] border border-white/10 rounded-xs hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Quality Production</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We demand rigorous standards for paperweight, binding integrity, foil embossing, and crisp vector typography that rivals international trade paperbacks.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 bg-[#111A2E] border border-white/10 rounded-xs hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Creative Expertise</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rooted in Enugu with a deep appreciation for African literary voices, coupled with technical mastery of global digital publishing standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. HOW IT WORKS (Simple 4-Step Process) */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
              Streamlined Workflow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1325]">
              How It Works
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
            <p className="text-sm sm:text-base text-slate-700">
              A transparent, structured four-phase pathway turning your raw manuscript into a market-ready publication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 01 */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs relative">
              <div className="text-2xl font-mono font-bold text-[#B58D23] mb-3">01</div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">Consultation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We discuss your manuscript, vision, target readers, timeline, and publishing objectives to define the project scope.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs relative">
              <div className="text-2xl font-mono font-bold text-[#B58D23] mb-3">02</div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">Assessment</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our editorial team conducts a diagnostic evaluation of your manuscript to prescribe the exact editorial and design needs.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs relative">
              <div className="text-2xl font-mono font-bold text-[#B58D23] mb-3">03</div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">Editing & Production</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We execute substantive editing, proofreading, bespoke cover design, and interior typesetting with iterative author reviews.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs relative">
              <div className="text-2xl font-mono font-bold text-[#B58D23] mb-3">04</div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">Publishing & Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We finalize distribution on Amazon and digital platforms, coordinate print batches, and hand over complete master files.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setActivePage('process')}
              className="text-sm font-semibold text-[#0B1325] hover:text-[#B58D23] inline-flex items-center gap-1.5"
            >
              <span>View Our Detailed 7-Stage Publishing Process</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>

      {/* TRUST & VERIFICATION SECTION */}
      <section id="trust-and-verification" className="py-20 bg-[#0B1325] text-white border-b border-[#D4AF37]/30 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Official Business Verification</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Trust You Can Verify
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We understand that entrusting someone with your manuscript, ideas and money requires confidence. CEC Publishing & Media is a formally registered Nigerian business committed to transparent, professional client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Credentials Card (Left) */}
            <div className="lg:col-span-7 bg-[#111A2E] border-2 border-[#D4AF37] p-6 sm:p-8 rounded-xs shadow-2xl relative">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                    Corporate Affairs Commission (CAC) Registered
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    CEC PUBLISHING & MEDIA
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xs bg-[#16223B] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              {/* Data Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#070C18]/80 p-5 rounded-xs border border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    CAC Registration Number
                  </span>
                  <span className="font-mono text-base font-bold text-white mt-0.5 block">
                    RC No. 9874710
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Registration Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-xs mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    STATUS: ACTIVE
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Date of Registration
                  </span>
                  <span className="font-mono text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    20 SEPTEMBER 2026
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Operating Location
                  </span>
                  <span className="font-mono text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    ENUGU, NIGERIA
                  </span>
                </div>
              </div>

              {/* 5 Distinct Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Registered Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Verifiable CAC Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Written Client Agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Intellectual Property Clarity (Author Retains 100% Rights)</span>
                </div>
              </div>

              {/* Supporting statement */}
              <p className="text-xs text-slate-300 italic border-l-2 border-[#D4AF37] pl-3 py-1 mb-6 bg-white/5">
                “Your confidence matters to us. Our business identity is publicly verifiable, and our client engagements are governed by clear service terms.”
              </p>

              {/* Two clear buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="home-verify-on-cac-btn"
                  href="https://icrp.cac.gov.ng/public-search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-[#0B1325] text-xs sm:text-sm font-bold rounded-xs transition-colors shadow-sm group"
                >
                  <span>Verify on CAC</span>
                  <ExternalLink className="w-4 h-4 text-[#B58D23] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <button
                  id="home-view-cac-certificate-btn"
                  onClick={() => setCertificateModalOpen(true)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] hover:from-[#E5C365] hover:to-[#C59E2D] text-[#0B1325] text-xs sm:text-sm font-bold rounded-xs shadow-md transition-all active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  <span>View CAC Certificate</span>
                </button>
              </div>
            </div>

            {/* Right: Certificate Preview Card */}
            <div className="lg:col-span-5 bg-[#16223B] border border-[#D4AF37]/40 p-6 rounded-xs shadow-xl flex flex-col items-center text-center">
              <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-white/10 text-xs">
                <span className="font-mono text-[#D4AF37] uppercase tracking-wider text-[11px] font-semibold">
                  CAC Certificate Record
                </span>
                <span className="text-emerald-400 font-mono text-[10px]">VERIFIED DOCUMENT</span>
              </div>

              {/* Certificate Image Frame with Hover Preview */}
              <div 
                className="relative bg-[#070C18] p-2 rounded-xs border border-[#D4AF37]/30 group cursor-pointer overflow-hidden shadow-inner w-full flex items-center justify-center min-h-[260px]"
                onClick={() => setCertificateModalOpen(true)}
                title="Click to view full certificate"
              >
                <img
                  src="https://lampzvhzghzopbtrbisv.supabase.co/storage/v1/object/public/certificate/5875416605989211963.jpg"
                  alt="Official CAC Certificate - CEC Publishing & Media"
                  referrerPolicy="no-referrer"
                  className="max-h-[240px] w-auto object-contain rounded-xs group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-[#D4AF37] text-[#0B1325] text-xs font-bold rounded-xs shadow-md flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>Open Certificate Viewer</span>
                  </span>
                </div>
              </div>

              <div className="w-full mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300">RC 9874710 • Active Record</span>
                <button
                  onClick={() => setActivePage('verification')}
                  className="text-[#D4AF37] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Detailed Trust Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. FEATURED WORK / PORTFOLIO PREVIEW */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
                Library & Showcase
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1325] mt-1">
                Featured Work & Completed Projects
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Representative project formats and design specifications. All catalog items feature sample placeholders until client releases are confirmed.
              </p>
            </div>
            <button
              onClick={() => setActivePage('portfolio')}
              className="mt-4 md:mt-0 text-sm font-semibold text-[#0B1325] hover:text-[#B58D23] inline-flex items-center gap-1.5"
            >
              <span>Explore Complete Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* 3 Featured Books */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div 
                key={book.id}
                className="bg-[#FAF8F5] hover:bg-white p-6 rounded-xs border border-[#E5DFD5] flex flex-col items-center text-center group hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out relative overflow-hidden"
              >
                {/* Subtle top indicator line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="py-4 w-full flex justify-center rounded-xs transition-colors duration-300 relative">
                  <BookCoverMockup 
                    book={book} 
                    size="md" 
                    interactive={true} 
                    onClick={() => onSelectBook(book)} 
                  />
                </div>

                <div className="w-full pt-4 border-t border-[#E5DFD5] space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B58D23]">
                    {book.category} • [Sample Project]
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500">{book.author}</p>
                  
                  <div className="pt-2 flex flex-wrap justify-center gap-1">
                    {book.services.map((s, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] bg-white group-hover:bg-[#FAF8F5] border border-[#E5DFD5] group-hover:border-[#E5DFD5] hover:border-[#D4AF37]/60 px-2 py-0.5 rounded-xs text-slate-700 hover:text-[#0B1325] transition-colors duration-150"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 pt-2 line-clamp-2">
                    {book.description}
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={() => onSelectBook(book)}
                      className="text-xs font-semibold text-[#0B1325] hover:text-[#B58D23] inline-flex items-center gap-1 transition-colors group/btn cursor-pointer"
                    >
                      <span>Inspect Project Details</span>
                      <ChevronRight className="w-3 h-3 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. BOOK PUBLISHING PATHWAY SECTION */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1325] text-white rounded-xs p-8 sm:p-12 lg:p-16 border border-[#D4AF37]/30 relative overflow-hidden">
            <div className="max-w-3xl space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                From Raw Draft to Finished Book
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                We Help Authors Move Seamlessly From Manuscript to Market-Ready Publication.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Writing a book is a significant intellectual and personal achievement. However, navigating editing, layout design, ISBN registration, cover artwork, and distribution platforms on your own can lead to costly missteps and frustration. CEC Publishing & Media provides the structured guidance and technical craftsmanship you need to release a book you are truly proud of.
              </p>

              {/* Journey Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                <span className="px-2.5 py-1 bg-[#16223B] border border-white/10 rounded-xs">Idea</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#16223B] border border-white/10 rounded-xs">Draft</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#16223B] border border-white/10 rounded-xs">Editorial</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#16223B] border border-white/10 rounded-xs">Typesetting</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#D4AF37] text-[#0B1325] font-bold rounded-xs">Published Title</span>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  id="pathway-authors-cta"
                  onClick={() => setActivePage('authors')}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C365] text-[#0B1325] font-bold text-sm rounded-xs transition-colors"
                >
                  Explore Author Pathways
                </button>
                <button
                  id="pathway-discuss-cta"
                  onClick={onOpenQuote}
                  className="px-6 py-3 bg-[#16223B] hover:bg-[#1E2E4E] text-white border border-[#D4AF37]/40 text-sm font-medium rounded-xs transition-colors"
                >
                  Discuss Your Manuscript
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G. MAJOR CONVERSION CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1325] tracking-tight">
            Have a Book, Idea or Creative Project in Mind?
          </h2>
          <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Let's turn it into something you can proudly put your name on.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="home-bottom-talk-cta"
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1325] hover:bg-[#16223B] text-[#D4AF37] hover:text-[#FAF8F5] text-base font-bold rounded-xs shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50"
            >
              <span>Talk to CEC Publishing & Media</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </button>
            <button
              id="home-bottom-contact-cta"
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-7 py-4 bg-[#FAF8F5] hover:bg-[#E5DFD5] text-[#0B1325] text-base font-medium rounded-xs border border-[#D4AF37]/30 transition-colors"
            >
              Contact Enquiry Desk
            </button>
          </div>
          <p className="text-xs text-slate-500 pt-2">
            Serving clients in Enugu, across Nigeria, and internationally. Complete confidentiality assured.
          </p>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
      />
    </div>
  );
};
