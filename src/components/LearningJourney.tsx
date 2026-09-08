import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Video, 
  FileText, 
  MessageSquare, 
  ClipboardCheck, 
  Award, 
  CalendarCheck 
} from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      tag: 'VEDIC',
      title: 'Expert-Led Courses',
      desc: 'Learn from experienced mentors'
    },
    {
      icon: Video,
      tag: '1080P',
      title: 'HD Video Lessons',
      desc: 'Easy-to-follow sessions'
    },
    {
      icon: FileText,
      tag: 'GUIDES',
      title: 'Study Material',
      desc: 'Notes & downloadable resources'
    },
    {
      icon: MessageSquare,
      tag: 'Q&A',
      title: 'Live Support',
      desc: 'Ask questions anytime'
    },
    {
      icon: ClipboardCheck,
      tag: 'VIDHI',
      title: 'Assignments',
      desc: 'Practice with real exercises'
    },
    {
      icon: Award,
      tag: 'OFFICIAL',
      title: 'Certificate',
      desc: 'Earn a completion certificate'
    },
    {
      icon: CalendarCheck,
      tag: '365 DAYS',
      title: 'One Year Access',
      desc: 'Learn at your own pace'
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [typedTexts, setTypedTexts] = useState<string[]>(() => features.map(() => ''));
  const [activeCardIndex, setActiveCardIndex] = useState<number>(-1);

  // Trigger when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety fallback so animation starts even without scroll event
    const fallbackTimer = setTimeout(() => setIsInView(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Sequential typing animation across each card one by one
  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let currentCard = 0;
    let currentChar = 0;

    // Initialize clean state
    setTypedTexts(features.map(() => ''));
    setActiveCardIndex(0);

    const typeNextChar = () => {
      // If all cards finished typing
      if (currentCard >= features.length) {
        setActiveCardIndex(-1);
        // Keep completed text displayed for 5 seconds, then replay smoothly
        timeoutId = setTimeout(() => {
          currentCard = 0;
          currentChar = 0;
          setTypedTexts(features.map(() => ''));
          setActiveCardIndex(0);
          timeoutId = setTimeout(typeNextChar, 350);
        }, 5000);
        return;
      }

      setActiveCardIndex(currentCard);
      const targetText = features[currentCard].desc;

      if (currentChar <= targetText.length) {
        const textSlice = targetText.slice(0, currentChar);
        setTypedTexts((prev) => {
          const updated = [...prev];
          updated[currentCard] = textSlice;
          return updated;
        });
        currentChar++;
        // Fast, natural typewriter cadence (30ms per character)
        timeoutId = setTimeout(typeNextChar, 30);
      } else {
        // Current card completed; advance to the next card with a subtle pause
        currentCard++;
        currentChar = 0;
        timeoutId = setTimeout(typeNextChar, 220);
      }
    };

    timeoutId = setTimeout(typeNextChar, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <section 
      ref={sectionRef} 
      id="course-features" 
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
          COURSE DELIVERABLES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-2">
          Everything Included In Your Enrollment
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Complete toolset, verified mentorship, and practical study resources designed for effortless home learning.
        </p>
      </div>

      {/* 7 Feature Cards Grid with Premium Badge Emblems & Sequential Typing Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
        {features.map((item, idx) => {
          const Icon = item.icon;
          const currentText = typedTexts[idx];
          const isCurrentlyTyping = activeCardIndex === idx;

          return (
            <div 
              key={idx} 
              className={`relative flex flex-col items-center text-center bg-white rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 group ${
                isCurrentlyTyping 
                  ? 'border-amber-400 shadow-md shadow-amber-900/15 -translate-y-0.5 ring-2 ring-amber-300/40' 
                  : 'border-amber-200/90 shadow-sm hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1'
              }`}
            >
              {/* Premium Gold Emblem Badge */}
              <div className="relative mb-3.5">
                <div className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 p-[1.5px] shadow-sm shadow-amber-900/20 group-hover:shadow-md transition-shadow ${
                  isCurrentlyTyping ? 'scale-105' : ''
                }`}>
                  <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EC] to-[#FFF0D4] flex items-center justify-center relative overflow-hidden group-hover:from-[#FFF6E6] group-hover:to-[#FFE7BC] transition-colors">
                    {/* Subtle corner golden aura */}
                    <div className="absolute top-0 right-0 w-7 h-7 bg-gradient-to-bl from-amber-400/25 to-transparent rounded-bl-full pointer-events-none" />
                    
                    <Icon 
                      className="w-6 h-6 text-amber-800 group-hover:scale-110 transition-transform duration-300 drop-shadow-xs" 
                      strokeWidth={1.9}
                    />
                  </div>
                </div>

                {/* Sub-badge Tag Pill */}
                <span className="absolute -bottom-1.5 inset-x-0 mx-auto w-max text-[9px] font-extrabold tracking-wider uppercase px-1.5 py-0.2 rounded-md bg-amber-800 text-amber-100 border border-amber-300/80 shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description with Sequential Typing Effect */}
              <div className="space-y-1.5 w-full pt-1 flex flex-col flex-1">
                <h3 className="font-bold text-xs sm:text-sm text-gray-900 leading-snug group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description Text Container with zero layout shift and live typewriter cursor */}
                <div className="min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center justify-center">
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-medium">
                    {currentText || (activeCardIndex > idx || activeCardIndex === -1 ? item.desc : '\u00A0')}
                    {isCurrentlyTyping && (
                      <span className="inline-block w-[1.5px] h-3 sm:h-3.5 bg-amber-700 ml-0.5 animate-pulse align-middle" />
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
