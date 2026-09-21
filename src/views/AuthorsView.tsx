import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  FileText, 
  PenTool, 
  Layers, 
  FileCheck, 
  Send, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert,
  UserCheck
} from 'lucide-react';
import { Page } from '../types';

interface AuthorsViewProps {
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export const AuthorsView: React.FC<AuthorsViewProps> = ({ setActivePage, onOpenQuote }) => {
  const authorJourney = [
    { step: '01', stage: 'Idea', icon: <Lightbulb className="w-5 h-5" />, desc: 'Concept incubation, thematic scoping, outline structure, and target reader definition.' },
    { step: '02', stage: 'Manuscript', icon: <FileText className="w-5 h-5" />, desc: 'Draft writing or collaborative ghostwriting sessions capturing your authentic tone.' },
    { step: '03', stage: 'Editing', icon: <PenTool className="w-5 h-5" />, desc: 'Substantive developmental assessment, line-by-line polishing, and rigorous proofreading.' },
    { step: '04', stage: 'Design', icon: <Sparkles className="w-5 h-5" />, desc: 'Bespoke cover art creation, typography selection, and spine calculations.' },
    { step: '05', stage: 'Formatting', icon: <Layers className="w-5 h-5" />, desc: 'Interior typesetting for print paperbacks/hardcovers and validated reflowable EPUBs.' },
    { step: '06', stage: 'Publishing', icon: <FileCheck className="w-5 h-5" />, desc: 'ISBN registration, legal deposit compliance, and worldwide Amazon KDP distribution.' },
    { step: '07', stage: 'Finished Book', icon: <BookOpen className="w-5 h-5" />, desc: 'Physical book deliveries, author copies, and commercial market launch.' }
  ];

  const authorProfiles = [
    {
      title: 'First-Time Authors',
      description: 'You have a compelling story or life experience but need a patient guide to help you navigate editing, typesetting, and legal registration without stress.'
    },
    {
      title: 'Ministers & Church Leaders',
      description: 'You have sermon series, theological treatises, and devotional manuscripts ready to inspire congregations and expand ministry impact.'
    },
    {
      title: 'Academics & Researchers',
      description: 'You require disciplined peer-grade formatting, precise indexing, bibliography formatting, and scholarly printing standards.'
    },
    {
      title: 'Business Executives & Coaches',
      description: 'You want an authoritative book that cements your industry authority, generates client trust, and documents your frameworks.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-24 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Dedicated Author Partnership
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            "Your Manuscript Deserves More Than a Draft."
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Writing your book was only the beginning. CEC Publishing & Media provides the editorial mastery, visual polish, and strategic publishing infrastructure to transform your draft into a lasting legacy.
          </p>
          <div className="pt-4">
            <button
              id="authors-hero-discuss-btn"
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] text-[#0B1325] font-bold text-sm rounded-xs shadow-lg hover:from-[#E5C365] hover:to-[#C59E2D] transition-all inline-flex items-center gap-2"
            >
              <span>Discuss Your Manuscript</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* The Author Journey Visual */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
              The Lifecycle of a Book
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1325]">
              The Author Journey With CEC
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
            <p className="text-sm sm:text-base text-slate-600">
              Every successful book travels through a disciplined sequence of creative and technical stages.
            </p>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {authorJourney.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-5 rounded-xs border border-[#E5DFD5] flex flex-col justify-between hover:border-[#D4AF37] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#B58D23]">
                      {item.step}
                    </span>
                    <div className="w-7 h-7 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1325] mb-2 group-hover:text-[#B58D23]">
                    {item.stage}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {idx < authorJourney.length - 1 && (
                  <div className="hidden lg:block pt-3 text-slate-300 text-right">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Profiles */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
              Who We Guide
            </span>
            <h2 className="font-display text-3xl font-bold text-[#0B1325]">
              Tailored Guidance for Every Author Archetype
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authorProfiles.map((profile, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-xs border border-[#E5DFD5] shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls CEC Prevents */}
      <section className="py-20 bg-[#0B1325] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Quality Assurance
            </span>
            <h2 className="font-display text-3xl font-bold">
              What We Protect Your Manuscript Against
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-[#16223B] border border-white/10 rounded-xs">
              <h4 className="font-display font-bold text-white mb-2">Unpolished Pacing</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Repetitive chapters, weak transitions, or logical gaps that cause readers to abandon the book halfway.
              </p>
            </div>
            <div className="p-6 bg-[#16223B] border border-white/10 rounded-xs">
              <h4 className="font-display font-bold text-white mb-2">Amateur Formatting</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inconsistent margins, poor line-breaking, mismatched fonts, and broken Kindle reflow that scream "unprofessional".
              </p>
            </div>
            <div className="p-6 bg-[#16223B] border border-white/10 rounded-xs">
              <h4 className="font-display font-bold text-white mb-2">Copyright Surrender</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Restrictive vanity publishers locking up your rights. With CEC, you keep 100% of your royalties and copyright.
              </p>
            </div>
          </div>

          <div className="pt-8 text-center">
            <button
              id="author-journey-cta-btn"
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C365] text-[#0B1325] font-bold text-sm rounded-xs transition-colors inline-flex items-center gap-2"
            >
              <span>Schedule a Manuscript Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
