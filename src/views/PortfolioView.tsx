import React, { useState } from 'react';
import { BookOpen, Layers, Check, Info, PlusCircle, X, ArrowRight } from 'lucide-react';
import { PORTFOLIO_BOOKS, PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { PortfolioBook } from '../types';
import { BookCoverMockup } from '../components/BookCoverMockup';

interface PortfolioViewProps {
  onOpenQuote: () => void;
  selectedBook: PortfolioBook | null;
  setSelectedBook: (book: PortfolioBook | null) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onOpenQuote,
  selectedBook,
  setSelectedBook
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredBooks = selectedCategory === 'All'
    ? PORTFOLIO_BOOKS
    : PORTFOLIO_BOOKS.filter(b => b.category === selectedCategory);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1325] text-white py-12 lg:py-16 border-b border-[#D4AF37]/20 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Grid: CEO on the top-left, Catalog Header on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
            {/* Top Left: The CEO */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div 
                id="portfolio-ceo-card"
                className="bg-[#121B2F] border border-[#D4AF37]/40 rounded-xs shadow-xl relative overflow-hidden group hover:border-[#D4AF37] transition-all duration-300 flex flex-col sm:flex-row items-stretch"
              >
                {/* Gold accent bar on top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#D4AF37]/20 z-20" />

                {/* Left Half: Large CEO Portrait (50% of the box) */}
                <div className="w-full sm:w-1/2 relative bg-[#0B1325] overflow-hidden min-h-[260px] sm:min-h-[300px]">
                  <img
                    src="https://i.ibb.co/q30F6Chs/5875215197792833353.jpg"
                    alt="CEO Christian Chizurumoke Ezugwu - CEC Publishing & Media"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle vignette gradient at bottom of photo for badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325]/90 via-transparent to-transparent pointer-events-none" />

                  {/* "THE CEO" badge on the portrait */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="bg-[#D4AF37] text-[#0B1325] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs shadow-md inline-flex items-center gap-1 font-mono">
                      THE CEO
                    </span>
                  </div>
                </div>

                {/* Right Half: Writeup (50% of the box) */}
                <div className="w-full sm:w-1/2 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block font-semibold">
                      Executive Leadership
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                      Christian Chizurumoke Ezugwu
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">
                      Chief Executive Officer & Lead Publisher
                    </p>
                    <div className="w-8 h-[2px] bg-[#D4AF37]/60 my-2" />
                    <p className="text-xs text-slate-400 italic leading-relaxed">
                      "Curating authorial voices with precision, cultural reverence, and world-class craft."
                    </p>
                  </div>

                  {/* Direct connect channel inside writeup */}
                  <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                    <span className="text-slate-400 font-mono text-[11px]">CEC Publishing & Media</span>
                    <a
                      href="https://wa.me/2347059212780?text=Hello%20CEO%20Christian%20Chizurumoke%20Ezugwu%2C%20I%20am%20exploring%20the%20CEC%20publishing%20portfolio%20and%20would%20like%20to%20consult%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:text-[#E5C365] font-semibold hover:underline inline-flex items-center gap-1 text-xs group/link"
                    >
                      <span>Connect with CEO</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right: Showcase Introduction & Catalog Info */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  Publishing Archive & Showcase
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Selected Titles & Publishing Catalog
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Exemplars of interior typography, bespoke cover wraps, and full-scale print and digital book production executed under our executive editorial direction.
              </p>

              {/* Explicit Notice per strict instructions */}
              <div className="inline-flex items-center gap-2 bg-[#16223B] border border-[#D4AF37]/40 px-4 py-2 rounded-xs text-xs text-[#D4AF37] max-w-xl">
                <Info className="w-4 h-4 shrink-0" />
                <span className="text-left">
                  Catalog Note: Items below represent sample formatting placeholders showcasing production standards until client release authorizations are registered.
                </span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="pt-6 flex flex-wrap items-center justify-start sm:justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xs text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                  selectedCategory === cat
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

      {/* Library Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xs border border-[#E5DFD5] p-6 shadow-xs flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              {/* Subtle gold accent line indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              {/* Top: 3D Mockup Stage */}
              <div className="py-6 flex justify-center bg-[#FAF8F5] group-hover:bg-[#FAF8F5]/80 rounded-xs border border-[#E5DFD5]/60 group-hover:border-[#D4AF37]/40 mb-6 transition-all duration-300 relative overflow-hidden">
                {/* Subtle ambient golden radiance in background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <BookCoverMockup 
                  book={book} 
                  size="md" 
                  interactive={true}
                  onClick={() => setSelectedBook(book)}
                />
              </div>

              {/* Book Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#B58D23] bg-[#FAF8F5] group-hover:border-[#D4AF37]/40 px-2 py-0.5 rounded-xs border border-[#E5DFD5] transition-colors duration-200">
                    {book.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {book.trimSize}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 leading-snug">
                  {book.title}
                </h3>

                <p className="text-xs text-slate-600 font-medium">
                  {book.author}
                </p>

                {/* Services Provided */}
                <div className="pt-2 border-t border-[#E5DFD5]">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1.5">
                    Services Rendered:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {book.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#FAF8F5] group-hover:bg-white text-slate-700 hover:text-[#0B1325] hover:border-[#D4AF37]/60 px-2 py-0.5 rounded-xs border border-[#E5DFD5] transition-colors duration-150"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1 line-clamp-3">
                  {book.description}
                </p>
              </div>

              {/* View Project Button */}
              <div className="pt-6 mt-4 border-t border-[#E5DFD5]">
                <button
                  id={`view-project-btn-${book.id}`}
                  onClick={() => setSelectedBook(book)}
                  className="w-full py-2.5 bg-[#0B1325] hover:bg-[#16223B] text-white text-xs font-semibold rounded-xs transition-all duration-200 flex items-center justify-center gap-2 border border-transparent hover:border-[#D4AF37]/40 group/btn active:scale-[0.99] shadow-xs cursor-pointer"
                >
                  <span>View Project Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Future Content Integration Note for Client */}
        <div className="mt-16 p-6 bg-white border border-dashed border-[#D4AF37] rounded-xs text-xs text-slate-700 max-w-2xl mx-auto flex items-start gap-3">
          <PlusCircle className="w-5 h-5 text-[#B58D23] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-[#0B1325]">Adding New Books to Your Catalog:</h4>
            <p className="text-slate-600 leading-relaxed">
              This catalog system is cleanly decoupled. New books can be added in seconds by appending your real published titles, cover art, authors, trim specs, and service lists into the modular data file.
            </p>
          </div>
        </div>
      </section>

      {/* Book Inspection Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-xs max-w-2xl w-full p-6 sm:p-8 relative border border-[#D4AF37] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#0B1325]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              <div className="sm:col-span-5 flex justify-center py-4 bg-[#FAF8F5] rounded-xs border border-[#E5DFD5]">
                <BookCoverMockup book={selectedBook} size="md" interactive={false} />
              </div>

              <div className="sm:col-span-7 space-y-4">
                <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-[#B58D23]">
                  {selectedBook.category} • Specifications
                </span>
                
                <h3 className="font-display text-2xl font-bold text-[#0B1325]">
                  {selectedBook.title}
                </h3>
                
                <p className="text-xs text-slate-600 font-medium">
                  {selectedBook.author}
                </p>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedBook.description}
                </p>

                <div className="pt-2 border-t border-[#E5DFD5] space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#0B1325]">Binding Format:</span>
                    <span>{selectedBook.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#0B1325]">Trim Size:</span>
                    <span>{selectedBook.trimSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#0B1325]">Imprint:</span>
                    <span>CEC Publishing & Media</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1.5">
                    Services Provided:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {selectedBook.services.map((s, i) => (
                      <span key={i} className="text-[10px] bg-[#FAF8F5] text-slate-700 px-2 py-0.5 rounded-xs border border-[#E5DFD5]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedBook(null);
                      onOpenQuote();
                    }}
                    className="w-full py-2.5 bg-[#0B1325] text-[#D4AF37] font-semibold text-xs rounded-xs hover:bg-[#16223B] transition-colors"
                  >
                    Discuss Similar Book Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
