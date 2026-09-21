import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, ZoomIn, ZoomOut, Download, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const certificateImageUrl = "https://lampzvhzghzopbtrbisv.supabase.co/storage/v1/object/public/certificate/5875416605989211963.jpg";

  if (!isOpen) return null;

  return (
    <div 
      id="cac-certificate-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="cac-certificate-modal-container"
        className="bg-[#0B1325] border border-[#D4AF37]/50 rounded-xs shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#B58D23]" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#111A2E]/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xs bg-[#16223B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-xs border border-[#D4AF37]/30">
                  Official Record
                </span>
                <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RC 9874710 • ACTIVE
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white truncate mt-0.5">
                Official CAC Certificate — Available for Verification
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="zoom-certificate-btn"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-xs transition-colors"
              title={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              id="close-certificate-modal-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xs transition-colors"
              title="Close Certificate Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#070C18] flex flex-col items-center justify-center min-h-[300px] max-h-[65vh]">
          <div className="relative group max-w-2xl w-full flex justify-center">
            <div 
              className={`transition-all duration-300 rounded-xs border border-[#D4AF37]/30 shadow-2xl bg-white overflow-hidden ${
                isZoomed ? 'scale-125 cursor-zoom-out my-12' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={certificateImageUrl}
                alt="CEC Publishing & Media CAC Certificate of Incorporation - RC 9874710"
                referrerPolicy="no-referrer"
                className="max-h-[55vh] sm:max-h-[60vh] w-auto object-contain mx-auto select-none"
              />
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 flex items-center gap-1.5">
            <span>Click image to {isZoomed ? 'zoom out' : 'zoom in'} for high-resolution inspection.</span>
          </p>
        </div>

        {/* Modal Footer / Verification Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0B1325] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 space-y-0.5 text-center sm:text-left">
            <div className="font-semibold text-white">
              CEC PUBLISHING & MEDIA • RC No. 9874710
            </div>
            <p className="text-[11px] text-slate-400">
              Registered: 20 September 2026 • Location: Enugu, Nigeria • Status: ACTIVE
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              id="modal-verify-cac-external-btn"
              href="https://icrp.cac.gov.ng/public-search/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] text-[#0B1325] text-xs font-semibold rounded-xs shadow-md hover:from-[#E5C365] hover:to-[#C59E2D] transition-all"
            >
              <span>Verify on CAC Public Search</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={certificateImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-white/20 hover:border-[#D4AF37] text-slate-300 hover:text-white text-xs font-medium rounded-xs bg-white/5 hover:bg-white/10 transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Full Image</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
