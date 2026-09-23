import React, { useState } from 'react';
import { 
  Feather, 
  FileEdit, 
  CheckCircle2, 
  LayoutTemplate, 
  Palette, 
  Smartphone, 
  BookOpen, 
  Compass, 
  ArrowRight, 
  Check, 
  Users,
  Sparkles,
  CreditCard,
  Layers,
  FileCheck2
} from 'lucide-react';
import { SERVICES_DATA, VALUE_PRICING_MESSAGE, STANDARD_PAYMENT_TERMS } from '../data/servicesData';

interface ServicesViewProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Editorial',
    'Design & Production',
    'Publishing & Strategy'
  ];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Feather': return <Feather className="w-5 h-5" />;
      case 'FileEdit': return <FileEdit className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'LayoutTemplate': return <LayoutTemplate className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-24 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Professional Capabilities & Tailored Quotations
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Publishing, Editorial & Creative Services
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Every step required to transform an unformatted manuscript or raw concept into an internationally distributed, exquisitely produced book.
          </p>

          {/* Filter Pills */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xs text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-[#0B1325] shadow-xs'
                    : 'bg-[#16223B] text-slate-300 hover:text-white hover:border-[#D4AF37]/50 border border-white/10 hover:bg-[#1C2C4C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE-FOCUSED PRICING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-xs border border-[#D4AF37] shadow-xl p-6 sm:p-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF8F5] border border-[#D4AF37]/50 text-[#B58D23] text-xs font-bold uppercase tracking-wider rounded-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke & Accessible Publishing</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0B1325]">
              {VALUE_PRICING_MESSAGE.headline}
            </h2>
            
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {VALUE_PRICING_MESSAGE.body}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="services-request-quote-cta"
                onClick={() => onSelectServiceForQuote('manuscript-editing')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0B1325] hover:bg-[#16223B] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-all duration-200 shadow-md border border-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>{VALUE_PRICING_MESSAGE.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-xs text-slate-500 italic pt-1">
              {VALUE_PRICING_MESSAGE.ctaSupportingText}
            </p>
          </div>

          {/* Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E5DFD5]">
            <div className="bg-[#FAF8F5] p-5 rounded-xs border border-[#E5DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#B58D23]">
                <Layers className="w-4 h-4" />
                <h3 className="font-display font-bold text-sm text-[#0B1325]">
                  Tailored to Project Scope
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quotations are calculated according to your manuscript’s specific length, editorial depth, genre requirements, and final publication format.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-xs border border-[#E5DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#B58D23]">
                <FileCheck2 className="w-4 h-4" />
                <h3 className="font-display font-bold text-sm text-[#0B1325]">
                  Competitive & Affordable
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-standard publishing craftsmanship structured at accessible, realistic rates for authors, independent creators, ministers, and organisations.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-xs border border-[#E5DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#B58D23]">
                <CreditCard className="w-4 h-4" />
                <h3 className="font-display font-bold text-sm text-[#0B1325]">
                  Transparent Milestones
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {STANDARD_PAYMENT_TERMS} Print runs are quoted separately based on exact print specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-xs border border-[#E5DFD5] p-8 shadow-xs flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              {/* Subtle gold accent indicator on card hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#16223B] group-hover:shadow-xs transition-all duration-300">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#B58D23] font-semibold bg-[#FAF8F5] group-hover:border-[#D4AF37]/40 px-2.5 py-1 border border-[#E5DFD5] rounded-xs transition-colors duration-200">
                      {service.category}
                    </span>
                    {service.quoteModel && (
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">
                        {service.quoteModel}
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-slate-700 text-sm font-medium mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.fullDesc}
                </p>

                {/* What is included */}
                <div className="mb-6 pt-4 border-t border-[#E5DFD5]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1325] mb-3">
                    What Is Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
                        <Check className="w-3.5 h-3.5 text-[#B58D23] shrink-0 mt-0.5 group-hover:text-[#D4AF37] transition-colors duration-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who it is for */}
                <div className="mb-6 p-3.5 bg-[#FAF8F5] group-hover:bg-[#FAF8F5]/80 rounded-xs border border-[#E5DFD5] text-xs transition-colors duration-200">
                  <div className="flex items-center gap-1.5 font-semibold text-[#0B1325] mb-1">
                    <Users className="w-3.5 h-3.5 text-[#B58D23]" />
                    <span>Who It Is For:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  Enugu, Nigeria & Nationwide
                </span>
                <button
                  id={`quote-btn-${service.id}`}
                  onClick={() => onSelectServiceForQuote(service.id)}
                  className="px-4 py-2.5 bg-[#0B1325] hover:bg-[#16223B] text-[#D4AF37] hover:text-white text-xs font-semibold rounded-xs transition-all duration-200 flex items-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] group/btn active:scale-[0.98] shadow-xs cursor-pointer"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Callout */}
      <section className="max-w-4xl mx-auto px-4 mt-16 text-center bg-[#16223B] text-white p-8 rounded-xs border border-[#D4AF37]/30">
        <h3 className="font-display font-bold text-xl mb-2">Unsure Which Services Your Manuscript Needs?</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Submit your project details or sample pages. Our editorial desk will evaluate your requirements and provide a tailored quotation.
        </p>
        <button
          onClick={() => onSelectServiceForQuote('manuscript-editing')}
          className="px-6 py-3 bg-[#D4AF37] text-[#0B1325] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#E5C365] transition-colors cursor-pointer"
        >
          Request Project Consultation
        </button>
      </section>
    </div>
  );
};
