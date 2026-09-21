import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, X } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingActionsProps {
  onOpenQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuote }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
      {/* WhatsApp Tooltip Prompt */}
      {showWhatsAppTooltip && (
        <div className="bg-[#0B1325] text-white text-xs p-3.5 rounded-sm border border-[#D4AF37]/40 shadow-2xl max-w-[calc(100vw-2.5rem)] sm:max-w-xs relative mb-1 animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowWhatsAppTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-[#D4AF37] mb-1">Chat with CEC Publishing Desk</p>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Have a manuscript or question? Connect directly via WhatsApp or start a formal quote request.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <button
              onClick={() => {
                setShowWhatsAppTooltip(false);
                onOpenQuote();
              }}
              className="px-2.5 py-1 bg-[#D4AF37] text-[#0B1325] font-semibold text-[10px] rounded-xs hover:bg-[#E5C365] transition-colors"
            >
              Request Quote
            </button>
            <a
              href="https://wa.me/2347059212780?text=Hello%20CEC%20Publishing%20%26%20Media%2C%20I%20would%20like%20to%20inquire%20about%20your%20publishing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#25D366] font-semibold flex items-center gap-1 hover:underline"
            >
              <MessageCircle className="w-3 h-3" />
              <span>07059212780</span>
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating & Hovering Action Button */}
      <motion.div 
        className="relative group"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "easeInOut",
        }}
      >
        {/* Soft breathing pulse ring around the button */}
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.55, 0, 0.55],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none -z-10"
        />

        <motion.a
          id="floating-whatsapp-btn"
          href="https://wa.me/2347059212780?text=Hello%20CEC%20Publishing%20%26%20Media%2C%20I%20would%20like%20to%20inquire%20about%20your%20publishing%20services."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 20px 25px -5px rgba(37, 211, 102, 0.45), 0 8px 10px -6px rgba(37, 211, 102, 0.3)" 
          }}
          whileTap={{ scale: 0.92 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-shadow duration-300 border-2 border-white/30 relative cursor-pointer"
          aria-label="Chat with CEC Publishing on WhatsApp"
          title="Chat with CEC Publishing on WhatsApp (07059212780)"
        >
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, -5, 0],
              transition: { duration: 0.4 }
            }}
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
          </motion.div>

          {/* Online active status indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-300 border-2 border-[#0B1325] rounded-full flex items-center justify-center shadow-xs">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" />
          </span>
        </motion.a>

        {/* Hover Pill Tooltip (Desktop only - prevents mobile screen overflow) */}
        <span className="hidden sm:flex absolute right-16 top-3 whitespace-nowrap bg-[#0B1325] text-white text-xs px-3 py-1.5 rounded-xs border border-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl items-center gap-1.5 translate-x-2 group-hover:translate-x-0">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Chat on WhatsApp • 07059212780</span>
        </span>
      </motion.div>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          id="floating-back-to-top-btn"
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B1325]/90 backdrop-blur-xs text-[#D4AF37] border border-[#D4AF37]/40 shadow-lg flex items-center justify-center hover:bg-[#16223B] transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
