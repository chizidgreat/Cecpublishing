import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactViewProps {
  onOpenQuote: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'Editing',
    projectType: 'Book Manuscript (Non-Fiction)',
    estimatedBudget: 'Flexible / Based on Scope',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    'Ghostwriting',
    'Editing',
    'Proofreading',
    'Book Formatting',
    'Cover Design',
    'Ebook Publishing',
    'Print Publishing',
    'Publishing Consultancy',
    'Digital Content',
    'Other'
  ];

  const projectTypes = [
    'Book Manuscript (Non-Fiction)',
    'Book Manuscript (Fiction)',
    'Faith & Ministry / Devotional',
    'Academic Thesis / Textbook',
    'Memoir / Autobiography',
    'Corporate Publication / Annual Report',
    'Poetry / Literary Anthologies',
    'Other Creative Project'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean form handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello CEC Publishing & Media,\nMy name is ${formData.fullName || '[Your Name]'}.\nI am reaching out regarding ${formData.serviceRequired} for my ${formData.projectType}.\nPhone: ${formData.phone || 'N/A'}\nMessage: ${formData.message || 'I would like to discuss my publishing project.'}`
    );
    return `https://wa.me/2347059212780?text=${text}`;
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Connect With Our Editorial Team
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Contact CEC Publishing & Media
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Based in Enugu, Nigeria. We provide personalized consultations for authors, organisations, and visionaries ready to publish.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-xs border border-[#E5DFD5] shadow-xs space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B58D23]">
                  Publishing Office
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0B1325] mt-1">
                  Enugu, Nigeria
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Serving clients across all Nigerian states and internationally.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5DFD5] text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B58D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#0B1325]">Address</span>
                    <span className="text-slate-600">Enugu, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#B58D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#0B1325]">Phone & Calls</span>
                    <a 
                      href="tel:+2347059212780" 
                      className="font-mono text-slate-700 hover:text-[#B58D23] text-sm transition-colors block font-medium"
                    >
                      07059212780
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#0B1325]">WhatsApp Desk</span>
                    <a 
                      href="https://wa.me/2347059212780" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-mono text-slate-700 hover:text-[#25D366] text-sm transition-colors block font-medium"
                    >
                      07059212780 (+234 705 921 2780)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#B58D23] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#0B1325]">Business Email</span>
                    <a 
                      href="mailto:cecpublishingandmedia@gmail.com" 
                      className="font-mono text-slate-700 hover:text-[#B58D23] text-sm transition-colors block font-medium break-all"
                    >
                      cecpublishingandmedia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-4 border-t border-[#E5DFD5]">
                <a
                  id="contact-whatsapp-direct-btn"
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Quick Quote Prompt Card */}
            <div className="bg-[#0B1325] text-white p-7 rounded-xs border border-[#D4AF37]/30 space-y-3">
              <h4 className="font-display font-bold text-lg text-[#D4AF37]">
                Need a Detailed Project Calculation?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you have page counts, word estimates, and target completion deadlines, use our dedicated quote calculator.
              </p>
              <button
                onClick={onOpenQuote}
                className="pt-2 text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                <span>Go to Detailed Quote Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E5DFD5] shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B58D23]">
                  Project Intake
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0B1325]">
                  Send a Formal Project Enquiry
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Complete the fields below and our publishing advisory team will contact you within 24–48 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#FAF8F5] border border-[#D4AF37] p-8 rounded-xs text-center space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#B58D23] mx-auto" />
                  <h4 className="font-display font-bold text-xl text-[#0B1325]">
                    Enquiry Received Successfully
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B1325]">{formData.fullName}</span>. Your enquiry regarding <span className="font-semibold text-[#0B1325]">{formData.serviceRequired}</span> has been logged. An editorial representative from CEC Publishing & Media will review your submission and connect with you shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 text-xs font-semibold bg-[#0B1325] text-white rounded-xs"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-xs font-semibold bg-[#25D366] text-white rounded-xs inline-flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Chukwuemeka Okafor"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="author@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 ..."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Service Required *
                      </label>
                      <select
                        id="contact-service-dropdown"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt} value={pt}>
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Estimated Budget
                      </label>
                      <input
                        id="contact-budget"
                        type="text"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder="e.g. Standard publishing tier / discuss options"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                      Message / Project Description *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your manuscript or project: current stage, word count if known, goals, and any specific questions..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3 bg-[#0B1325] hover:bg-[#16223B] text-[#D4AF37] font-semibold text-sm rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm border border-[#D4AF37]/50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Request a Quote</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="text-xs text-slate-500">
                      Confidentiality guaranteed.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
