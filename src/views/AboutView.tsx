import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  Globe2,
  FileCheck,
  Scale
} from 'lucide-react';
import { Page } from '../types';

interface AboutViewProps {
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActivePage, onOpenQuote }) => {
  const values = [
    {
      title: 'Excellence',
      description: 'We hold every manuscript to exacting editorial, typographic, and physical production standards without compromise.'
    },
    {
      title: 'Integrity',
      description: 'Transparent pricing, honest editorial appraisals, genuine publishing guidance, and complete author ownership of rights.'
    },
    {
      title: 'Creativity',
      description: 'Innovative interior design, imaginative cover aesthetics, and fresh narrative structuring that bring author voices to life.'
    },
    {
      title: 'Professionalism',
      description: 'Timely communications, clear project milestones, dedicated governance, and respect for client confidentiality.'
    },
    {
      title: 'Collaboration',
      description: 'We work alongside you as trusted publishing partners, preserving your authentic authorial voice while elevating the prose.'
    },
    {
      title: 'Attention to Detail',
      description: 'Micro-precision in grammar, typesetting alignment, ISBN compliance, barcode resolution, and binding quality.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-24 border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            About CEC Publishing & Media
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Rooted in Craft. Committed to Stories That Matter.
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Headquartered in Enugu, Nigeria, serving authors, organisations, and creative thinkers across the country and the global African diaspora.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 space-y-4">
              <div className="w-12 h-12 bg-[#0B1325] text-[#D4AF37] rounded-xs flex items-center justify-center border border-[#D4AF37]/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
                Who We Are
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1325]">
                A Modern Publishing & Media Partner
              </h2>
              <div className="w-12 h-1 bg-[#D4AF37]" />
            </div>

            <div className="md:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base">
              <p className="font-medium text-[#0B1325] text-lg">
                "CEC Publishing & Media is a publishing and creative services company dedicated to helping authors, organisations and individuals transform ideas and manuscripts into professionally developed books and creative content."
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Whether you are an established author looking for bespoke production, a professional or minister writing your first manuscript, or an institution seeking corporate milestone publications, CEC provides the technical rigor, editorial mentorship, and publishing architecture required to deliver market-ready works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MISSION */}
            <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E5DFD5] shadow-xs relative">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23] block mb-1">
                Our Purpose
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0B1325] mb-4">
                Mission Statement
              </h3>
              <div className="w-10 h-0.5 bg-[#D4AF37] mb-4" />
              <p className="text-slate-700 leading-relaxed text-base italic">
                "To provide accessible, professional and high-quality publishing and creative services that help people communicate their ideas, stories and knowledge effectively."
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E5DFD5] shadow-xs relative">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23] block mb-1">
                Our Horizon
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0B1325] mb-4">
                Vision Statement
              </h3>
              <div className="w-10 h-0.5 bg-[#D4AF37] mb-4" />
              <p className="text-slate-700 leading-relaxed text-base italic">
                "To become a trusted African publishing and creative media brand known for excellence, integrity and transformative storytelling."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
              The Principles That Guide Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1325]">
              Our Core Values
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
            <p className="text-sm sm:text-base text-slate-600">
              Every book project at CEC Publishing & Media is handled in strict alignment with six core institutional virtues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-[#FAF8F5] p-7 rounded-xs border border-[#E5DFD5] hover:border-[#D4AF37] transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <h3 className="font-display text-xl font-bold text-[#0B1325]">
                    {v.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES CEC DIFFERENT */}
      <section className="py-20 bg-[#0B1325] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              The Publishing Relationship
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              What Makes CEC Publishing & Media Different
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#16223B] border border-white/10 rounded-xs">
              <Globe2 className="w-8 h-8 text-[#D4AF37] mb-4" />
              <h3 className="font-display font-bold text-lg text-white mb-2">
                African Roots, Global Standards
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating from Enugu, Nigeria, we celebrate and understand the distinct cultural nuances of African narratives while enforcing international formatting, typesetting, and printing specifications.
              </p>
            </div>

            <div className="p-6 bg-[#16223B] border border-white/10 rounded-xs">
              <Scale className="w-8 h-8 text-[#D4AF37] mb-4" />
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Author Freedom & Retained Rights
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike predatory or restrictive models, CEC authors retain 100% of their intellectual property, copyright ownership, and future publishing rights. You maintain complete control over your creative legacy.
              </p>
            </div>

            <div className="p-6 bg-[#16223B] border border-white/10 rounded-xs">
              <FileCheck className="w-8 h-8 text-[#D4AF37] mb-4" />
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Honest Editorial Candor
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe genuine respect for authors means giving truthful, constructive feedback. We will never tell you a manuscript is ready if structural flaws need addressing first.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Ready to collaborate on your publication?
              </h3>
              <p className="text-sm text-slate-400">
                Discuss your goals with CEC Publishing & Media today.
              </p>
            </div>
            <button
              id="about-start-project-cta"
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C365] text-[#0B1325] font-bold text-sm rounded-xs transition-colors inline-flex items-center gap-2"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
