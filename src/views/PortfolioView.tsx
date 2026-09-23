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
    : selectedCategory.includes('Chizi')
    ? PORTFOLIO_BOOKS.filter(b => b.workType === 'my-book')
    : selectedCategory.includes('Client')
    ? PORTFOLIO_BOOKS.filter(b => b.workType === 'client-work')
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
                  Portfolio Notice: Six works are presented below — four authored books by Chizi Ezugwu and two selected works completed for clients by CEC Publishing & Media.
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

      {/* Library Grid - Two Clearly Separated Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Category 1: Books by Chizi Ezugwu */}
        {(selectedCategory === 'All' || selectedCategory.includes('Chizi')) && (
          <div id="category-books-by-chizi-ezugwu" className="space-y-6">
            <div className="border-b border-[#D4AF37]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B58D23]">
                    Category 01
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1325]">
                  Books by Chizi Ezugwu
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Authored books by Chizi Ezugwu.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-[#B58D23] bg-[#FAF8F5] px-3 py-1 rounded-xs border border-[#D4AF37]/40 w-fit">
                4 Published Titles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PORTFOLIO_BOOKS.filter(b => b.workType === 'my-book').map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-xs border border-[#E5DFD5] p-5 shadow-xs flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out group relative overflow-hidden"
                >
                  {/* Gold accent line indicator on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  {/* Badge */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B58D23] bg-[#FAF8F5] border border-[#D4AF37]/40 px-2 py-0.5 rounded-xs">
                      Books by Chizi Ezugwu
                    </span>
                  </div>

                  {/* 3D Mockup Stage */}
                  <div className="py-5 flex justify-center bg-[#FAF8F5] group-hover:bg-[#FAF8F5]/80 rounded-xs border border-[#E5DFD5]/60 group-hover:border-[#D4AF37]/40 mb-4 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <BookCoverMockup 
                      book={book} 
                      size="sm" 
                      interactive={true}
                      onClick={() => setSelectedBook(book)}
                    />
                  </div>

                  {/* Book Details */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-[#B58D23] mb-1">
                        Author: Chizi Ezugwu
                      </div>

                      <h3 className="font-display text-lg font-bold text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 leading-snug">
                        {book.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed pt-2 line-clamp-3">
                        {book.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5DFD5]">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                        Services Rendered:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {book.services.map((srv, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] bg-[#FAF8F5] group-hover:bg-white text-slate-700 px-1.5 py-0.5 rounded-xs border border-[#E5DFD5]"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="pt-4 mt-3 border-t border-[#E5DFD5]">
                    <button
                      id={`view-project-btn-${book.id}`}
                      onClick={() => setSelectedBook(book)}
                      className="w-full py-2 bg-[#0B1325] hover:bg-[#16223B] text-white text-xs font-semibold rounded-xs transition-all duration-200 flex items-center justify-center gap-1.5 border border-transparent hover:border-[#D4AF37]/40 group/btn cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 2: Selected Client Works */}
        {(selectedCategory === 'All' || selectedCategory.includes('Client')) && (
          <div id="category-selected-client-works" className="space-y-6 pt-6">
            <div className="border-b border-[#D4AF37]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600">
                    Category 02
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1325]">
                  Selected Client Works
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Works completed for clients by CEC Publishing & Media. (Authored by the respective clients indicated on each cover).
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-xs border border-slate-300 w-fit">
                2 Commissioned Works
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_BOOKS.filter(b => b.workType === 'client-work').map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-xs border border-[#E5DFD5] p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row gap-6 justify-between hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out group relative overflow-hidden"
                >
                  {/* Subtle gold accent line indicator on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  {/* 3D Mockup Stage */}
                  <div className="sm:w-5/12 flex flex-col items-center justify-center bg-[#FAF8F5] group-hover:bg-[#FAF8F5]/80 rounded-xs border border-[#E5DFD5]/60 p-4 relative overflow-hidden">
                    <BookCoverMockup 
                      book={book} 
                      size="md" 
                      interactive={true}
                      onClick={() => setSelectedBook(book)}
                    />
                  </div>

                  {/* Book Details */}
                  <div className="sm:w-7/12 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded-xs">
                          Selected Client Works
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          CEC Publishing & Media
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#0B1325] group-hover:text-[#B58D23] transition-colors duration-200 leading-snug">
                        {book.title}
                      </h3>

                      <div className="bg-[#FAF8F5] p-2.5 rounded-xs border border-[#E5DFD5] space-y-0.5">
                        <p className="text-xs font-bold text-[#0B1325]">
                          Author: {book.author}
                        </p>
                        <p className="text-[11px] text-[#B58D23] font-medium">
                          Completed for client by CEC Publishing & Media
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {book.description}
                      </p>

                      <div className="pt-2 border-t border-[#E5DFD5]">
                        <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                          Services Provided by CEC:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {book.services.map((srv, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-[#FAF8F5] text-slate-700 px-2 py-0.5 rounded-xs border border-[#E5DFD5]"
                            >
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View Project Button */}
                    <div className="pt-4 border-t border-[#E5DFD5]">
                      <button
                        id={`view-project-btn-${book.id}`}
                        onClick={() => setSelectedBook(book)}
                        className="w-full py-2.5 bg-[#0B1325] hover:bg-[#16223B] text-white text-xs font-semibold rounded-xs transition-all duration-200 flex items-center justify-center gap-2 border border-transparent hover:border-[#D4AF37]/40 group/btn cursor-pointer shadow-xs"
                      >
                        <span>View Project Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Catalog Note */}
        <div className="mt-16 p-6 bg-white border border-dashed border-[#D4AF37] rounded-xs text-xs text-slate-700 max-w-2xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-[#B58D23] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-[#0B1325]">Catalog Structure (Six Works):</h4>
            <p className="text-slate-600 leading-relaxed">
              This portfolio features four books authored by Chizi Ezugwu and two selected works completed for clients by CEC Publishing & Media. For custom publication support and tailored project quotes, contact our team.
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
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase font-mono tracking-wider font-semibold text-[#B58D23]">
                    {selectedBook.category} • Specifications
                  </span>
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs ${
                    selectedBook.workType === 'my-book' 
                      ? 'bg-[#16223B] text-[#D4AF37] border border-[#D4AF37]/30' 
                      : 'bg-slate-100 text-slate-700 border border-slate-300'
                  }`}>
                    {selectedBook.workType === 'my-book' ? 'Books by Chizi Ezugwu' : 'Selected Client Works'}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-[#0B1325]">
                  {selectedBook.title}
                </h3>
                
                <p className="text-xs text-slate-600 font-medium">
                  {selectedBook.workType === 'my-book'
                    ? `Author: ${selectedBook.author}`
                    : `Author: ${selectedBook.author} (Completed for client by CEC Publishing & Media)`}
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
