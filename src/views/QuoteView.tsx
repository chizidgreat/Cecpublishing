import React, { useState } from 'react';
import { 
  FileCheck2, 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  Calculator, 
  ShieldCheck, 
  MessageSquare,
  HelpCircle,
  FileText,
  X
} from 'lucide-react';
import { QuoteFormData } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface QuoteViewProps {
  initialServiceId?: string;
}

export const QuoteView: React.FC<QuoteViewProps> = ({ initialServiceId }) => {
  const defaultService = SERVICES_DATA.find(s => s.id === initialServiceId)?.title || 'Manuscript Editing';

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    pageCount: '',
    wordCount: '',
    projectDescription: '',
    deadline: 'Flexible / Standard Timeline (4-8 weeks)',
    budgetRange: 'Standard Scope / Awaiting Assessment',
    manuscriptStatus: 'Completed First Draft'
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const budgetOptions = [
    'Standard Scope / Awaiting Assessment',
    'Economy / Phased Services',
    'Comprehensive Full-Service Package',
    'Executive / Turnkey Production'
  ];

  const deadlineOptions = [
    'Urgent / Accelerated (Under 4 weeks)',
    'Standard Timeline (4–8 weeks)',
    'Quarterly Goal (2–4 months)',
    'Flexible / Quality-First'
  ];

  const manuscriptStatusOptions = [
    'Concept / Outline Stage (Ghostwriting needed)',
    'Rough First Draft (Needs substantive editing)',
    'Polished Draft (Needs line editing & proofreading)',
    'Edited Manuscript (Ready for formatting & cover)',
    'Corporate / Ministry Project'
  ];

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 650);
  };

  const generateWhatsAppRelay = () => {
    const text = encodeURIComponent(
      `Hello CEC Publishing & Media,\nI have submitted a quote enquiry on your website.\nAuthor Name: ${formData.name || 'N/A'}\nService: ${formData.service}\nStatus: ${formData.manuscriptStatus}\nEstimated Word/Page Count: ${formData.wordCount || formData.pageCount || 'Not specified'}\nPhone: ${formData.phone}`
    );
    return `https://wa.me/2347059212780?text=${text}`;
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Project Scope & Estimation
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Request a Publishing Quote
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Tell us about your manuscript. We review word counts, editorial depth, formatting needs, and distribution options to prepare an itemized proposal.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xs border border-[#E5DFD5] p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#16223B] text-[#D4AF37] mx-auto flex items-center justify-center border border-[#D4AF37]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1325]">
                    Project Enquiry Submitted
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B1325]">{formData.name}</span>. Our editorial and production desk at CEC Publishing & Media has received your specifications for <span className="font-semibold text-[#0B1325]">{formData.service}</span>.
                  </p>
                  <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs text-left max-w-md mx-auto space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-[#0B1325]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimated Length:</span>
                      <span className="font-semibold text-[#0B1325]">{formData.wordCount || formData.pageCount || 'Pending draft'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Deadline:</span>
                      <span className="font-semibold text-[#0B1325]">{formData.deadline}</span>
                    </div>
                    {uploadedFile && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Sample Upload:</span>
                        <span className="font-semibold text-[#0B1325] truncate max-w-[200px]">{uploadedFile.name}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-500">
                    We typically respond with initial assessment notes within 24 to 48 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#0B1325] text-white text-xs font-semibold rounded-xs hover:bg-[#16223B]"
                    >
                      Submit Another Project
                    </button>
                    <a
                      href={generateWhatsAppRelay()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-xs inline-flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Notify CEC on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#E5DFD5] pb-4">
                    <h3 className="font-display font-bold text-xl text-[#0B1325]">
                      1. Author / Client Information
                    </h3>
                    <p className="text-xs text-slate-500">
                      Who should we address the proposal and correspondence to?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Ngozi Balogun"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ngozi@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="border-b border-[#E5DFD5] pt-4 pb-4">
                    <h3 className="font-display font-bold text-xl text-[#0B1325]">
                      2. Project Specifications
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select primary services and manuscript metrics.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Primary Service Required *
                      </label>
                      <select
                        id="quote-service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Current Manuscript Status
                      </label>
                      <select
                        id="quote-manuscript-status"
                        value={formData.manuscriptStatus}
                        onChange={(e) => setFormData({ ...formData, manuscriptStatus: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        {manuscriptStatusOptions.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Estimated Word Count (if applicable)
                      </label>
                      <input
                        id="quote-word-count"
                        type="text"
                        value={formData.wordCount}
                        onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                        placeholder="e.g. 45,000 words"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Number of Pages (if formatted / estimated)
                      </label>
                      <input
                        id="quote-page-count"
                        type="text"
                        value={formData.pageCount}
                        onChange={(e) => setFormData({ ...formData, pageCount: e.target.value })}
                        placeholder="e.g. 180 pages"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Desired Target Deadline
                      </label>
                      <select
                        id="quote-deadline"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        {deadlineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Budget Framework
                      </label>
                      <select
                        id="quote-budget-range"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                      Project Description & Special Objectives *
                    </label>
                    <textarea
                      id="quote-project-description"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Outline your book's topic, target audience, preferred publishing formats (Paperback, Hardcover, Kindle EPUB), or any specific concerns..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Manuscript Sample Upload (Drag & Drop + Manual Click per Guidelines) */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                      Upload Manuscript Sample / Table of Contents (Optional)
                    </label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={handleFileDrop}
                      className={`border-2 border-dashed rounded-xs p-6 text-center transition-colors cursor-pointer ${
                        dragActive ? 'border-[#D4AF37] bg-[#FAF8F5]' : 'border-[#E5DFD5] bg-[#FAF8F5]/50 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <input
                        id="quote-manuscript-file"
                        type="file"
                        accept=".doc,.docx,.pdf,.rtf,.txt"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="quote-manuscript-file" className="cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-[#B58D23] mx-auto mb-2" />
                        {uploadedFile ? (
                          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0B1325]">
                            <FileText className="w-4 h-4 text-[#B58D23]" />
                            <span>{uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(0)} KB)</span>
                            <button
                              type="button"
                              onClick={(e) => { e.preventDefault(); setUploadedFile(null); }}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-xs font-semibold text-[#0B1325] block">
                              Click to select or drag & drop file here
                            </span>
                            <span className="text-[11px] text-slate-500 block mt-1">
                              Word (.docx), PDF, or RTF sample (Max 25MB). Confidential.
                            </span>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-[#E5DFD5]">
                    <button
                      id="quote-submit-enquiry-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] text-[#0B1325] font-bold text-sm sm:text-base rounded-xs shadow-md hover:from-[#E5C365] hover:to-[#C59E2D] transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Processing Project Details...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      CEC Publishing & Media respects your intellectual property. All submissions are treated with strict confidentiality.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Sidebar: Transparent Pricing Principles & Support */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#B58D23]">
                <Calculator className="w-5 h-5" />
                <h4 className="font-display font-bold text-base text-[#0B1325]">
                  How Quotes Are Determined
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                At CEC Publishing & Media, we never use arbitrary flat fees that disadvantage authors. Your quote is tailored according to transparent factors:
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-[#E5DFD5]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Word Count & Length:</strong> Direct volume of text requiring proofing or typesetting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Editorial Depth:</strong> Basic proofreading vs. comprehensive developmental rewriting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Interior Complexity:</strong> Plain fiction text vs. indexed academic textbooks, charts, and tables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Binding & Print Specifications:</strong> Paperback vs. foil-stamped hardcover runs.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0B1325] text-white p-6 rounded-xs border border-[#D4AF37]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-display font-bold text-base text-white">
                  Author Guarantee
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You retain 100% ownership of your manuscript, publishing rights, and book royalties. CEC operates as your professional production partner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] text-xs space-y-2 text-slate-600">
              <span className="font-semibold text-[#0B1325] block text-sm">Prefer to Speak First?</span>
              <p>Reach out directly to our publishing team in Enugu:</p>
              <div className="pt-2 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0B1325]">Email:</span>
                  <a href="mailto:cecpublishingandmedia@gmail.com" className="text-[#B58D23] hover:underline font-mono break-all">
                    cecpublishingandmedia@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0B1325]">Phone:</span>
                  <a href="tel:+2347059212780" className="text-slate-700 hover:text-[#B58D23] font-mono font-medium">
                    07059212780
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0B1325]">WhatsApp:</span>
                  <a href="https://wa.me/2347059212780" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-mono font-medium">
                    07059212780
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
