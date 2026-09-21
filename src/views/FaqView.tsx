import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { Page } from '../types';

interface FaqViewProps {
  setActivePage: (page: Page) => void;
  onOpenQuote: () => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ setActivePage, onOpenQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'first-time-authors': true,
    'publishing-costs': true
  });
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Editorial', 'Publishing', 'Costs & Timelines'];

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQ_DATA.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-16 lg:py-20 border-b border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Knowledge Base & Advisory
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Clear, upfront answers regarding editorial workflows, ISBN compliance, Amazon distribution, and project scope evaluation.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                id="faq-search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions or keywords..."
                className="w-full bg-[#16223B] border border-[#D4AF37]/30 text-white placeholder-slate-400 text-sm rounded-xs pl-11 pr-4 py-3 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xs text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-[#0B1325]'
                    : 'bg-[#16223B] text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-white rounded-xs border border-[#E5DFD5] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#B58D23] shrink-0" />
                      <span className="font-display font-bold text-base sm:text-lg text-[#0B1325]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#B58D23]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-[#E5DFD5]/50 bg-white">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xs border border-[#E5DFD5] p-8">
              <p className="text-slate-500 text-sm">No matching questions found for "{searchTerm}".</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs text-[#B58D23] font-semibold underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>

        {/* Still have questions */}
        <div className="mt-16 bg-white p-8 rounded-xs border border-[#E5DFD5] text-center space-y-4">
          <div className="w-10 h-10 rounded-xs bg-[#0B1325] text-[#D4AF37] mx-auto flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#0B1325]">
            Have a Specific Question About Your Manuscript?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our editorial desk is available to assist you with honest, practical guidance on publishing options in Nigeria and globally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-2.5 bg-[#0B1325] text-white text-xs font-semibold rounded-xs hover:bg-[#16223B] transition-colors"
            >
              Contact Our Desk
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#D4AF37] text-[#0B1325] text-xs font-semibold rounded-xs hover:bg-[#E5C365] transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
