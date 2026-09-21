import React, { useState, useEffect } from 'react';

const TARGET_1 = "Ideas to Life.";
const TARGET_2 = "Story to the World.";

type Phase = 'typing1' | 'typing2' | 'resting' | 'erasing';

export const AnimatedHeadline: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('typing1');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // If hovering while resting, pause the 8-second timer to give reader full control
    if (isHovered && phase === 'resting') {
      return;
    }

    let timer: NodeJS.Timeout;

    if (phase === 'typing1') {
      if (text1.length < TARGET_1.length) {
        // Write out "Ideas to Life." slowly one by one (90ms per letter)
        timer = setTimeout(() => {
          setText1(TARGET_1.slice(0, text1.length + 1));
        }, 90);
      } else {
        // Line 1 finished, brief natural pause before Line 2 starts writing
        timer = setTimeout(() => {
          setPhase('typing2');
        }, 220);
      }
    } else if (phase === 'typing2') {
      if (text2.length < TARGET_2.length) {
        // Write out "Story to the World." slowly one by one (90ms per letter)
        timer = setTimeout(() => {
          setText2(TARGET_2.slice(0, text2.length + 1));
        }, 90);
      } else {
        // Line 2 finished! Both phrases are fully written out
        // Move to resting phase for the 8-second countdown
        setPhase('resting');
      }
    } else if (phase === 'resting') {
      // Resting phase: both phrases are completely written and stay visible for 8 full seconds
      timer = setTimeout(() => {
        setPhase('erasing');
      }, 8000);
    } else if (phase === 'erasing') {
      // Smoothly backspace out before the next 8-second write-out cycle begins
      if (text2.length > 0) {
        timer = setTimeout(() => {
          setText2(TARGET_2.slice(0, text2.length - 1));
        }, 22);
      } else if (text1.length > 0) {
        timer = setTimeout(() => {
          setText1(TARGET_1.slice(0, text1.length - 1));
        }, 22);
      } else {
        // Both cleared, brief pause then write out slowly one by one again
        timer = setTimeout(() => {
          setPhase('typing1');
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [phase, text1, text2, isHovered]);

  return (
    <div 
      className="relative w-full overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        Ghost Reference Element:
        Rendered invisibly in normal document flow.
        Accurately reserves the exact full multiline height across ANY screen size,
        preventing layout shift, jumping, or overlapping with sibling elements.
      */}
      <div 
        aria-hidden="true" 
        className="invisible select-none pointer-events-none opacity-0 font-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.2] sm:leading-[1.14]"
      >
        <div className="block">
          <span className="whitespace-nowrap">Bringing Your</span> <span>Ideas to Life.</span>
        </div>
        <div className="block mt-1 sm:mt-1.5">
          <span className="whitespace-nowrap">Publishing Your</span> <span>Story to the World.</span>
        </div>
      </div>

      {/* 
        Active Typing Layer:
        Positioned over the ghost reference.
        Never causes layout shifts or overlapping.
      */}
      <h1 
        id="hero-animated-headline"
        className="absolute inset-0 top-0 left-0 w-full font-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.2] sm:leading-[1.14] cursor-default select-text"
        aria-label="Bringing Your Ideas to Life. Publishing Your Story to the World."
      >
        {/* Line 1: "Bringing Your " + "Ideas to Life." */}
        <div className="block text-white">
          <span className="whitespace-nowrap">Bringing Your </span>
          <span className="text-white inline font-extrabold">{text1}</span>
          {phase === 'typing1' && (
            <span 
              className="inline-block w-[2.5px] sm:w-[4px] h-[0.82em] bg-[#D4AF37] ml-1 align-middle rounded-full shadow-[0_0_8px_#D4AF37] animate-pulse" 
              aria-hidden="true"
            />
          )}
        </div>

        {/* Line 2: "Publishing Your " + "Story to the World." */}
        <div className="text-[#D4AF37] block mt-1 sm:mt-1.5">
          <span className="text-[#D4AF37] whitespace-nowrap">Publishing Your </span>
          <span className="text-[#D4AF37] inline font-extrabold">{text2}</span>
          {(phase === 'typing2' || phase === 'resting' || phase === 'erasing') && (
            <span 
              className="inline-block w-[2.5px] sm:w-[4px] h-[0.82em] bg-[#D4AF37] ml-1 align-middle rounded-full shadow-[0_0_8px_#D4AF37] animate-pulse" 
              aria-hidden="true"
            />
          )}
        </div>
      </h1>
    </div>
  );
};
