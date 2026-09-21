import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Lock, 
  DollarSign, 
  Eye, 
  Download, 
  Building2, 
  Calendar, 
  MapPin, 
  Award,
  ArrowRight,
  Info
} from 'lucide-react';
import { CertificateModal } from '../components/CertificateModal';

interface VerificationViewProps {
  onOpenQuote: () => void;
}

export const VerificationView: React.FC<VerificationViewProps> = ({ onOpenQuote }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const certificateImageUrl = "https://lampzvhzghzopbtrbisv.supabase.co/storage/v1/object/public/certificate/5875416605989211963.jpg";

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#16223B] border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-xs text-xs text-[#D4AF37]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-mono font-semibold tracking-wider uppercase">Institutional Trust & Integrity</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Trust You Can Verify
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto" />

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We understand that entrusting someone with your manuscript, ideas and money requires confidence. CEC Publishing & Media is a formally registered Nigerian business committed to transparent, professional client relationships.
          </p>

          <p className="text-xs sm:text-sm text-[#D4AF37] max-w-xl mx-auto font-medium italic">
            “Your confidence matters to us. Our business identity is publicly verifiable, and our client engagements are governed by clear service terms.”
          </p>
        </div>
      </section>

      {/* 2. Main Verification Content & Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official CAC Credentials Card */}
          <div className="lg:col-span-6 space-y-6">
            <div 
              id="cac-credentials-card"
              className="bg-white border-2 border-[#D4AF37] rounded-xs shadow-xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Gold Top Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#B58D23]" />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B58D23] font-bold block mb-1">
                    Corporate Affairs Commission (CAC) Record
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#0B1325]">
                    CEC PUBLISHING & MEDIA
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 shadow-xs">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              {/* Core Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF8F5] p-5 rounded-xs border border-[#E5DFD5] mb-6">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
                    CAC Registration Number
                  </span>
                  <span className="font-mono text-base font-bold text-[#0B1325]">
                    RC No. 9874710
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
                    Registration Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-xs mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    STATUS: ACTIVE
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
                    Date of Registration
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#0B1325] flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    20 SEPTEMBER 2026
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
                    Operating Location
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#0B1325] flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    ENUGU, NIGERIA
                  </span>
                </div>
              </div>

              {/* 5 Distinct Trust Markers */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Registered Business with the Corporate Affairs Commission</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verifiable CAC Record on Official Government Portal</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Written Client Agreements detailing scope, timeline & deliverables</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Pricing with zero hidden post-contract charges</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Intellectual Property Clarity — author retains 100% rights</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E5DFD5]">
                <a
                  id="page-verify-on-cac-btn"
                  href="https://icrp.cac.gov.ng/public-search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B1325] hover:bg-[#16223B] text-white text-xs sm:text-sm font-semibold rounded-xs border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all shadow-sm group"
                >
                  <span>Verify on CAC Public Search</span>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  id="page-view-certificate-btn"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] hover:from-[#E5C365] hover:to-[#C59E2D] text-[#0B1325] text-xs sm:text-sm font-semibold rounded-xs shadow-md transition-all active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  <span>View CAC Certificate</span>
                </button>
              </div>

              {/* Independent Verification Guidance */}
              <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-xs text-[11px] text-slate-600 flex items-start gap-2 leading-relaxed">
                <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  <strong>How to verify:</strong> Visit the official CAC Public Search portal, type <strong>“CEC Publishing & Media”</strong> or registration number <strong>“9874710”</strong> to confirm our registered and active business status independently.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Certificate Preview & Verification Container */}
          <div className="lg:col-span-6 space-y-6">
            <div 
              id="cac-certificate-preview-container"
              className="bg-white border border-[#E5DFD5] rounded-xs shadow-md p-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5DFD5]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-[#B58D23] font-semibold">
                    Document Artifact
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#0B1325]">
                    Official CAC Certificate
                  </h3>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono px-2 py-0.5 rounded-xs font-semibold">
                  ACTIVE
                </span>
              </div>

              {/* Certificate Image Frame */}
              <div 
                className="relative bg-[#070C18] p-3 rounded-xs border border-[#E5DFD5] group cursor-pointer overflow-hidden shadow-inner flex flex-col items-center justify-center min-h-[340px]"
                onClick={() => setModalOpen(true)}
              >
                <img
                  src={certificateImageUrl}
                  alt="CEC Publishing & Media CAC Registration Certificate"
                  referrerPolicy="no-referrer"
                  className="max-h-[320px] w-auto object-contain rounded-xs shadow-md group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay with button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-4 py-2 bg-[#D4AF37] text-[#0B1325] text-xs font-semibold rounded-xs shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>Enlarge Certificate</span>
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>Official CAC Certificate — Available for Verification</span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-[#B58D23] hover:text-[#8C6D18] font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Inspect Full Document</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Regulatory Clarity Note */}
            <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-5 rounded-xs">
              <h4 className="font-display font-semibold text-sm text-[#0B1325] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Our Commercial & Legal Standing</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                CEC Publishing & Media is an active, formally registered Nigerian private business entity operating in full compliance with the Companies and Allied Matters Act. Our CAC registration confirms our bona fide legal existence and accountability under Nigerian law.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Three Pillars of Client Protection */}
        <section className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B58D23]">
              Security & Integrity
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1325]">
              How We Protect Every Author & Client
            </h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Written Client Agreements */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">
                Written Client Agreements
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every project begins with a clear, written engagement contract. It outlines exact editorial milestones, delivery schedules, typesetting specifications, and payment terms so both parties operate with mutual certainty.
              </p>
            </div>

            {/* Intellectual Property & Confidentiality */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">
                Strict IP & Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your ideas and manuscripts remain your exclusive intellectual property. We sign confidentiality clauses and ensure that 100% of copyrights, distribution royalties, and master files belong entirely to you upon completion.
              </p>
            </div>

            {/* Transparent Pricing Commitment */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1325] mb-2">
                Transparent Pricing Commitment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide itemized, all-inclusive quotations before work begins. There are zero hidden post-contract fees or arbitrary milestone surcharges. Payments are phased across agreed production deliverables.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Bottom Consultation Prompt */}
        <section className="mt-16 bg-[#0B1325] text-white p-8 sm:p-12 rounded-xs border border-[#D4AF37]/30 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to Discuss Your Project with Confidence?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Submit your manuscript or publishing requirements for a thorough diagnostic review, detailed roadmap, and formal service agreement.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] hover:from-[#E5C365] hover:to-[#C59E2D] text-[#0B1325] text-sm font-semibold rounded-xs shadow-md transition-all active:scale-95"
              >
                <span>Request Project Proposal & Quote</span>
              </button>
              <a
                href="https://wa.me/2347059212780?text=Hello%20CEC%20Publishing%20%26%20Media%2C%20I%20have%20reviewed%20your%20Trust%20%26%20Verification%20details%20and%20would%20like%20to%20consult%20on%20my%20publishing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-sm font-semibold rounded-xs bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
