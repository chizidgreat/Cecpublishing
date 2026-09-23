import React, { useState } from 'react';
import { 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  Calculator, 
  ShieldCheck, 
  MessageSquare,
  FileText,
  X,
  Clock,
  CreditCard,
  Sparkles
} from 'lucide-react';
import { QuoteFormData } from '../types';
import { SERVICES_DATA, STANDARD_PAYMENT_TERMS } from '../data/servicesData';

interface QuoteViewProps {
  initialServiceId?: string;
}

export const QuoteView: React.FC<QuoteViewProps> = ({ initialServiceId }) => {
  const defaultService = SERVICES_DATA.find(s => s.id === initialServiceId)?.title || 'Manuscript Editing';

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    projectTitle: '',
    service: defaultService,
    pageCount: '',
    wordCount: '',
    projectDescription: '',
    deadline: 'Standard Timeline (4–8 weeks)',
    budgetRange: 'Standard Scope / Awaiting Assessment',
    manuscriptStatus: 'Completed First Draft'
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const deadlineOptions = [
    'Standard Timeline (4–8 weeks)',
    'Urgent / Accelerated (Under 4 weeks)',
    'Quarterly Goal (2–4 months)',
    'Flexible / Quality-First'
  ];

  const manuscriptStatusOptions = [
    'Completed First Draft',
    'Rough Draft (Requires substantive editing)',
    'Concept / Outline Stage (Ghostwriting needed)',
    'Edited Manuscript (Ready for formatting & cover)',
    'Ready for Publishing Consultancy / ISBN'
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
    setFormError(null);

    // Ensure form is not submitted empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.projectDescription.trim()) {
      setFormError('Please fill in all required fields (Full Name, Email Address, Phone Number, and Project Description).');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  const generateWhatsAppRelay = () => {
    const summaryLines = [
      'Hello CEC Publishing & Media,',
      'I have submitted a project enquiry via your website form.',
      `• Full Name: ${formData.name.trim() || 'N/A'}`,
      `• Email: ${formData.email.trim() || 'N/A'}`,
      `• Phone Number: ${formData.phone.trim() || 'N/A'}`,
      formData.projectTitle.trim() ? `• Working Title: ${formData.projectTitle.trim()}` : null,
      `• Service Required: ${formData.service}`,
      `• Page / Word Count: ${formData.pageCount.trim() || formData.wordCount.trim() || 'Not specified'}`,
      `• Preferred Timeline: ${formData.deadline}`,
      `• Brief Description: ${formData.projectDescription.trim().slice(0, 150)}${formData.projectDescription.length > 150 ? '...' : ''}`
    ].filter(Boolean).join('\n');

    return `https://wa.me/2347059212780?text=${encodeURIComponent(summaryLines)}`;
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Project Consultation & Quotation
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Project Enquiry Form
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Tell us about your manuscript or publishing goals. Our team will review your specifications, evaluate the scope, and prepare an itemized proposal.
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
                    Project Enquiry Received
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B1325]">{formData.name}</span>. Your enquiry for <span className="font-semibold text-[#0B1325]">{formData.service}</span> has been received by our editorial and production desk at CEC Publishing & Media.
                  </p>

                  <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs text-left max-w-md mx-auto space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-[#0B1325]">{formData.service}</span>
                    </div>
                    {formData.projectTitle.trim() && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Working Title:</span>
                        <span className="font-semibold text-[#0B1325]">{formData.projectTitle}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimated Length:</span>
                      <span className="font-semibold text-[#0B1325]">{formData.pageCount || formData.wordCount || 'To be determined'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Preferred Timeline:</span>
                      <span className="font-semibold text-[#0B1325]">{formData.deadline}</span>
                    </div>
                    {uploadedFile && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Sample Upload:</span>
                        <span className="font-semibold text-[#0B1325] truncate max-w-[200px]">{uploadedFile.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Explicit Accurate Confirmation Message per Requirement 5 */}
                  <div className="p-4 bg-amber-50/60 border border-[#D4AF37]/40 rounded-xs text-xs text-slate-700 max-w-md mx-auto text-left flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#B58D23] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B1325] block mb-0.5">Response Timeline Notice</strong>
                      <span>Our team will review your enquiry in detail and respond with a personalized assessment and proposal within <strong>24–48 business hours</strong>.</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          projectTitle: '',
                          service: defaultService,
                          pageCount: '',
                          wordCount: '',
                          projectDescription: '',
                          deadline: 'Standard Timeline (4–8 weeks)',
                          budgetRange: 'Standard Scope / Awaiting Assessment',
                          manuscriptStatus: 'Completed First Draft'
                        });
                        setUploadedFile(null);
                      }}
                      className="px-6 py-2.5 bg-[#0B1325] text-white text-xs font-semibold rounded-xs hover:bg-[#16223B] transition-colors cursor-pointer"
                    >
                      Submit Another Project
                    </button>
                    <a
                      href={generateWhatsAppRelay()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Follow Up on WhatsApp (07059212780)</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
                      {formError}
                    </div>
                  )}

                  <div className="border-b border-[#E5DFD5] pb-4">
                    <h3 className="font-display font-bold text-xl text-[#0B1325]">
                      1. Author / Client Information
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please provide your contact details for correspondence and project proposals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Chinua Achebe"
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
                        placeholder="author@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07059212780 or +234..."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Working Title / Project Title (if any)
                      </label>
                      <input
                        id="quote-project-title"
                        type="text"
                        value={formData.projectTitle}
                        onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                        placeholder="e.g. Principles of Modern Leadership"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="border-b border-[#E5DFD5] pt-4 pb-4">
                    <h3 className="font-display font-bold text-xl text-[#0B1325]">
                      2. Project Specifications
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select services required and tell us about your manuscript.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Service(s) Required *
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
                        Estimated Page Count
                      </label>
                      <input
                        id="quote-page-count"
                        type="text"
                        value={formData.pageCount}
                        onChange={(e) => setFormData({ ...formData, pageCount: e.target.value })}
                        placeholder="e.g. 150 pages"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                        Estimated Word Count (if applicable)
                      </label>
                      <input
                        id="quote-word-count"
                        type="text"
                        value={formData.wordCount}
                        onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                        placeholder="e.g. 35,000 words"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                      Preferred Timeline / Deadline
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
                      Brief Project Description *
                    </label>
                    <textarea
                      id="quote-project-description"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Outline your book's topic, target audience, specific editorial concerns, and expected delivery format..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#0B1325] rounded-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Manuscript Sample Upload (Drag & Drop + Manual Click) */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1325] mb-1.5">
                      Upload Manuscript Sample / Outline (Optional)
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
                              Word (.docx), PDF, or RTF sample (Max 25MB). Strictly confidential.
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
                      className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B58D23] text-[#0B1325] font-bold text-sm sm:text-base rounded-xs shadow-md hover:from-[#E5C365] hover:to-[#C59E2D] transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      Submissions receive a manual assessment and proposal from our editorial desk within 24–48 business hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Sidebar: Transparent Pricing Principles & Support */}
          <div className="lg:col-span-4 space-y-6">
            {/* Value-Focused Pricing Message */}
            <div className="bg-[#FAF8F5] p-6 rounded-xs border border-[#D4AF37] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#B58D23]">
                <Sparkles className="w-4 h-4" />
                <h4 className="font-display font-bold text-sm text-[#0B1325]">
                  Exceptional Quality. Accessible Pricing.
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                At CEC Publishing & Media, we believe professional publishing services should be both excellent and accessible. We deliver high-quality writing, editing, design and publishing support at competitive, affordable rates, with each project quoted according to its specific requirements.
              </p>
              <div className="pt-2 border-t border-[#E5DFD5] text-[11px] text-slate-600">
                Tell us about your project and we’ll provide a personalised quotation based on your specific needs.
              </div>
            </div>

            {/* Payment terms */}
            <div className="bg-white p-5 rounded-xs border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-[#0B1325]">
                <CreditCard className="w-4 h-4 text-[#B58D23]" />
                <h4 className="font-display font-bold text-sm text-[#0B1325]">
                  Payment Terms
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {STANDARD_PAYMENT_TERMS}
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                Print publishing is quoted separately according to current printing and material costs.
              </p>
            </div>

            {/* How Quotes Are Determined */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#B58D23]">
                <Calculator className="w-5 h-5" />
                <h4 className="font-display font-bold text-base text-[#0B1325]">
                  How Quotes Are Determined
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                At CEC Publishing & Media, we never use arbitrary flat fees. Your quote is tailored according to transparent factors:
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-[#E5DFD5]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Page & Word Count:</strong> Direct volume of text requiring editing, proofing, or typesetting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Editorial Depth:</strong> Proofreading vs. structural and developmental editing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                  <span><strong>Production Scope:</strong> Standard trade paperbacks vs. multi-edition hardcover and ebook formats.</span>
                </li>
              </ul>
            </div>

            {/* Author Guarantee */}
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

            {/* Direct Contact Card */}
            <div className="bg-white p-6 rounded-xs border border-[#E5DFD5] text-xs space-y-2 text-slate-600">
              <span className="font-semibold text-[#0B1325] block text-sm">Prefer to Speak First?</span>
              <p>Reach out directly to our publishing team in Enugu, Nigeria:</p>
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
                  <a 
                    href="https://wa.me/2347059212780?text=Hello%20CEC%20Publishing%20%26%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20publishing%20services." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#25D366] hover:underline font-mono font-medium"
                  >
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
