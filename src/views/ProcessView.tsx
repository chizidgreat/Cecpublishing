import React from 'react';
import { 
  MessagesSquare, 
  FileSearch, 
  FileEdit, 
  Layout, 
  ClipboardCheck, 
  Globe, 
  PackageCheck, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ProcessViewProps {
  onOpenQuote: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: 'STEP 1',
      title: 'Consultation',
      tagline: 'Understand the author’s project and goals',
      icon: <MessagesSquare className="w-5 h-5" />,
      whatHappens: 'We convene via phone, WhatsApp, or video conference to review your vision, target readership, timeline expectations, genre requirements, and budget framework.',
      clientReceives: 'Strategic consultation memo outlining publishing paths (print, digital, or hybrid).'
    },
    {
      num: 'STEP 2',
      title: 'Assessment',
      tagline: 'Review the manuscript and determine the services required',
      icon: <FileSearch className="w-5 h-5" />,
      whatHappens: 'Our senior editors conduct a diagnostic reading of your manuscript sample or full draft to gauge word count, structural readiness, genre tone, and required editing level.',
      clientReceives: 'Custom project scope proposal, fixed itemized quote, and milestone delivery calendar.'
    },
    {
      num: 'STEP 3',
      title: 'Editorial Development',
      tagline: 'Editing, proofreading and manuscript preparation',
      icon: <FileEdit className="w-5 h-5" />,
      whatHappens: 'Substantive developmental editing, line editing, and copyediting are conducted with full author review cycles in Microsoft Word track changes, followed by rigorous proofreading.',
      clientReceives: 'Completely edited, fact-checked, and approved master editorial manuscript.'
    },
    {
      num: 'STEP 4',
      title: 'Design & Formatting',
      tagline: 'Cover design, interior formatting and ebook preparation',
      icon: <Layout className="w-5 h-5" />,
      whatHappens: 'Our design department crafts the custom front, spine, and back cover wrap while typesetters format interior margins, headers, folios, and chapter openings in Adobe InDesign.',
      clientReceives: 'Full PDF interior page proofs, 3D marketing mockups, and high-res cover jacket wrap.'
    },
    {
      num: 'STEP 5',
      title: 'Publishing Preparation',
      tagline: 'Prepare files and publishing requirements',
      icon: <ClipboardCheck className="w-5 h-5" />,
      whatHappens: 'We prepare technical pre-flight press files (CMYK 300 DPI), assign official National Library of Nigeria ISBNs, generate vector barcodes, and validate reflowable EPUB files.',
      clientReceives: 'Verified, error-free production master files and metadata documentation.'
    },
    {
      num: 'STEP 6',
      title: 'Publication',
      tagline: 'Assist with the selected publishing route',
      icon: <Globe className="w-5 h-5" />,
      whatHappens: 'We configure and verify your Amazon KDP, digital distribution accounts, and regional print channels according to your distribution strategy.',
      clientReceives: 'Live worldwide listings on Amazon and partner platforms, enabling international orders.'
    },
    {
      num: 'STEP 7',
      title: 'Final Delivery',
      tagline: 'Provide the completed publishing assets/files',
      icon: <PackageCheck className="w-5 h-5" />,
      whatHappens: 'We bundle all master archive files, source InDesign exports, formatted EPUB/PDF editions, and oversee delivery of physical printed book batches to your destination.',
      clientReceives: 'Complete master archive ZIP, physical book delivery, and 100% intellectual property signoff.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-24 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Transparent Methodology
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Our Publishing Process
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From the initial handshake to holding the finished, bound book in your hands. Here is how CEC Publishing & Media delivers projects with clarity and precision.
          </p>
        </div>
      </section>

      {/* 7-Step Workflow */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              id={`process-step-${idx + 1}`}
              className="bg-white rounded-xs border border-[#E5DFD5] p-6 sm:p-8 shadow-xs hover:border-[#D4AF37] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center font-mono text-sm font-bold shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#B58D23] font-bold">
                      {s.num}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#0B1325]">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-medium italic bg-[#FAF8F5] px-3 py-1.5 rounded-xs border border-[#E5DFD5]">
                  {s.tagline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-[#0B1325] uppercase tracking-wider text-[11px] mb-1.5">
                    What Happens in This Phase:
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {s.whatHappens}
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xs border border-[#E5DFD5]">
                  <h4 className="font-semibold text-[#B58D23] uppercase tracking-wider text-[11px] mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Client Milestone / Deliverable:</span>
                  </h4>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {s.clientReceives}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-[#0B1325] text-white p-8 sm:p-12 rounded-xs border border-[#D4AF37]/30 text-center space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            Ready to Begin Step 1 with CEC Publishing & Media?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule an introductory consultation to discuss your manuscript, vision, and timeline requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C365] text-[#0B1325] font-bold text-sm rounded-xs transition-colors inline-flex items-center gap-2"
            >
              <span>Initiate Consultation Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
