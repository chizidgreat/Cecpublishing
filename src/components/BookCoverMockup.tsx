import React from 'react';
import { BookOpen } from 'lucide-react';
import { PortfolioBook } from '../types';

interface BookCoverMockupProps {
  book: PortfolioBook;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
}

export const BookCoverMockup: React.FC<BookCoverMockupProps> = ({
  book,
  size = 'md',
  interactive = false,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-36 h-52 text-xs',
    md: 'w-52 h-76 text-sm',
    lg: 'w-64 h-96 text-base'
  }[size];

  return (
    <div 
      onClick={onClick}
      className={`relative group select-none ${interactive ? 'cursor-pointer' : ''}`}
    >
      {/* 3D Book Container */}
      <div 
        className={`relative ${sizeClasses} rounded-r-md transition-all duration-300 ease-out ${
          interactive ? 'group-hover:-translate-y-2.5 group-hover:rotate-1 group-hover:shadow-2xl' : ''
        }`}
        style={{
          backgroundColor: book.coverAccent,
          boxShadow: '-6px 6px 20px -3px rgba(11, 19, 37, 0.35), 0 2px 6px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Subtle diagonal lighting sheen on hover */}
        {interactive && (
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-r-md z-20" />
        )}

        {/* Book Spine Shadow Left */}
        <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none rounded-l-[1px] z-10" />
        
        {/* Subtle Spine Emboss Ridge */}
        <div className="absolute top-0 bottom-0 left-3.5 w-[1px] bg-white/20 pointer-events-none z-10" />

        {/* Paper Page Edge Effect on Right */}
        <div className="absolute -right-1.5 top-1 bottom-1 w-2 bg-[#F3EFE8] rounded-r-xs border-r border-[#D8D0C5] shadow-xs flex flex-col justify-between py-1 pointer-events-none opacity-90 transition-all duration-300 group-hover:brightness-105 z-10">
          <div className="w-full h-[1px] bg-[#C5BBAA]" />
          <div className="w-full h-[1px] bg-[#C5BBAA]" />
          <div className="w-full h-[1px] bg-[#C5BBAA]" />
        </div>

        {/* Cover Content Layout */}
        {book.coverImage ? (
          <div className="relative h-full w-full overflow-hidden rounded-r-md">
            <img 
              src={book.coverImage} 
              alt={`${book.title} cover`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-r-md"
              style={{ objectPosition: book.objectPosition || 'center' }}
              onError={(e) => {
                const target = e.currentTarget;
                const directFallbacks: Record<string, string> = {
                  'my-book-01': 'https://i.ibb.co/XrV9BVMP/FB-IMG-1787206382108.jpg',
                  'my-book-02': 'https://i.ibb.co/MyLWxS86/Screenshot-20260820-071201.jpg',
                  'my-book-03': 'https://i.ibb.co/jvZr07Qs/Can-I-Still-Become-a-Successful-Artist-KINDLE-COVER.jpg',
                  'my-book-04': 'https://i.ibb.co/TMjZwGqV/The-Money-You-Are-Not-Seeing-Ebook-Cover.png',
                  'client-work-01': 'https://i.ibb.co/5W3d54FF/file-000000007050824385b5aed66adb67aa.png',
                  'client-work-02': 'https://i.ibb.co/4nmGTMc6/file-0000000036548210b430f2a540c69226.png'
                };
                if (directFallbacks[book.id] && !target.src.includes('i.ibb.co')) {
                  target.src = directFallbacks[book.id];
                }
              }}
            />
            {/* Subtle ambient lighting on top of cover image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 pointer-events-none" />
          </div>
        ) : (
          <div className="relative h-full w-full p-4 md:p-5 flex flex-col justify-between text-white overflow-hidden">
            {/* Subtle Geometric Foil Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px]" />
            
            {/* Top: Category Tag & Brand Crest */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37]">
                {book.category}
              </span>
              <div className="flex items-center gap-1 text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors duration-200">
                <BookOpen className="w-3 h-3" />
                <span className="text-[9px] font-mono tracking-tighter">CEC</span>
              </div>
            </div>

            {/* Center: Title & Sample Indicator */}
            <div className="relative z-10 my-auto text-center px-1">
              <h3 className="font-display font-bold text-white text-base md:text-lg leading-tight tracking-tight drop-shadow-sm group-hover:text-amber-50 transition-colors duration-200">
                {book.title}
              </h3>
              <div className="w-8 h-[2px] bg-[#D4AF37] mx-auto my-2 opacity-80 group-hover:w-12 group-hover:opacity-100 transition-all duration-300" />
              <p className="text-xs text-[#E2E8F0] font-medium tracking-wide">
                {book.author}
              </p>
            </div>

            {/* Bottom: Publishing Imprint & Trim Size */}
            <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
              <span className="font-mono text-[9px] text-[#D4AF37] font-semibold">
                {book.trimSize}
              </span>
              <span className="text-[9px] text-slate-300 tracking-wider">
                CEC PRESS
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Ground Shadow with dynamic hover lift */}
      <div 
        className={`absolute -bottom-3 left-4 right-4 h-3 bg-black/25 blur-md rounded-full -z-10 transition-all duration-300 ease-out ${
          interactive ? 'group-hover:scale-105 group-hover:opacity-35 group-hover:blur-lg group-hover:translate-y-1' : ''
        }`} 
      />
    </div>
  );
};
