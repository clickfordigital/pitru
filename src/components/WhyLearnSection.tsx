import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Infinity as InfinityIcon, 
  BookOpen, 
  HelpCircle, 
  Lock, 
  Compass, 
  PhoneCall,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhyLearnSectionProps {
  onConsultationClick: () => void;
  onTalkToTeamClick: () => void;
}

export const WhyLearnSection: React.FC<WhyLearnSectionProps> = ({ 
  onConsultationClick, 
  onTalkToTeamClick 
}) => {
  // Exactly 5 cards (removed Celebrity Astrologer, TV Panelist, Community Support)
  const features = [
    { 
      id: '01',
      icon: <Award className="w-6 h-6 text-amber-600" />, 
      title: '17 Years Experience', 
      subtitle: 'Authentic Vedic Mastery',
      desc: 'Over 17+ years deciphering Vedic texts, horoscope ancestral debts, and guiding 50,000+ families.'
    },
    { 
      id: '02',
      icon: <CheckCircle2 className="w-6 h-6 text-amber-600" />, 
      title: 'Certified Course', 
      subtitle: 'Recognized Credential',
      desc: 'Earn a verified Certificate of Completion acknowledging your proficiency in Shradh Vidhi & Tarpan.'
    },
    { 
      id: '03',
      icon: <InfinityIcon className="w-6 h-6 text-amber-600" />, 
      title: 'Lifetime Access', 
      subtitle: 'Every Shradh Season',
      desc: 'Re-watch video lessons, review remedial mantras, and download ritual updates year after year.'
    },
    { 
      id: '04',
      icon: <BookOpen className="w-6 h-6 text-amber-600" />, 
      title: 'Practical Learning', 
      subtitle: 'Step-by-Step at Home',
      desc: 'Clear DIY instructions with precise Sanskrit mantras, Mudra diagrams, and zero expensive priests required.'
    },
    { 
      id: '05',
      icon: <HelpCircle className="w-6 h-6 text-amber-600" />, 
      title: 'Live Doubt Sessions', 
      subtitle: 'Direct Faculty Support',
      desc: 'Get your family gotra, tithi calculation, and ancestral questions clarified directly in live Q&A sessions.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Cycle through the 5 cards one by one every 1.5 seconds (1500ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="whylearn" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
          WHY CHOOSE THIS COURSE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-2">
          Why Learn From Acharya Ganesh?
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Get authentic knowledge, practical training, and lifetime support from India's most trusted Vedic guide.
        </p>

        {/* 1.5-second interactive animation indicator tracker */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex items-center gap-1.5 bg-amber-50/80 border border-amber-200/80 px-3 py-1 rounded-full text-xs font-semibold text-amber-900">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
            <span>Key Pillars ({activeIndex + 1}/5)</span>
          </div>
          <div className="flex items-center gap-1">
            {features.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Highlight feature ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i 
                    ? 'w-6 bg-amber-700 shadow-sm' 
                    : 'w-2 bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 5 Feature Cards Layout with 1.5s Animation */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {features.map((feat, idx) => {
            const isActive = activeIndex === idx;
            const isLastSpan = idx === 4; // 5th card spans full width for perfect symmetry

            return (
              <motion.div
                key={feat.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-500 border ${
                  isLastSpan ? 'sm:col-span-2' : 'col-span-1'
                } ${
                  isActive
                    ? 'bg-gradient-to-br from-[#FFFDF9] via-[#FFF8EC] to-[#FEF3D6] border-amber-500 shadow-lg shadow-amber-900/10 ring-2 ring-amber-400/50 scale-[1.02]'
                    : 'bg-white border-amber-200/80 shadow-sm hover:border-amber-300 hover:bg-amber-50/30'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive 
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-700/30' 
                      : 'bg-amber-50 border border-amber-200/70 text-amber-700'
                  }`}>
                    {React.cloneElement(feat.icon, {
                      className: `w-6 h-6 ${isActive ? 'text-white' : 'text-amber-700'}`
                    })}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                        {feat.title}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0 ${
                        isActive 
                          ? 'bg-amber-600 text-white shadow-xs' 
                          : 'bg-amber-100/70 text-amber-800'
                      }`}>
                        {feat.subtitle}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Card: Need Personal Guidance Before Joining? */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF9EE] to-[#F7ECD8] rounded-2xl p-6 sm:p-7 border border-amber-300/80 shadow-md space-y-5">
          
          {/* Header pill with real avatar */}
          <div className="flex items-center gap-3">
            <img
              src="/acharya-ganesh-pitru-paksh.jpg"
              alt="Acharya Ganesh Mentorship"
              className="w-12 h-12 rounded-full object-cover object-top border-2 border-amber-500 shadow-sm"
            />
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-200/80 text-amber-950 uppercase tracking-wider">
                DIRECT MENTORSHIP
              </div>
              <div className="font-serif font-bold text-sm text-gray-900">
                Acharya Ganesh
              </div>
              <div className="text-[11px] text-gray-600">
                Senior Vedic Faculty Team
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              NEED PERSONAL GUIDANCE BEFORE JOINING?
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Not sure whether your family's recurring challenges stem from Pitru Dosh or regular planetary dashas? Connect directly with Acharya Ganesh's senior consultation team.
            </p>
          </div>

          {/* Value points */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800 pt-1">
            <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded-lg border border-amber-200/60">
              <Lock className="w-3.5 h-3.5 text-amber-700" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded-lg border border-amber-200/60">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Custom Roadmap</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={onConsultationClick}
              className="cursor-pointer flex-1 py-3 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center shadow transition-all active:scale-95"
            >
              BOOK CONSULTATION
            </button>
            <button
              onClick={onTalkToTeamClick}
              className="cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-amber-50 text-gray-800 font-semibold text-xs sm:text-sm border border-amber-300 transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-amber-700" />
              <span>Talk to Our Team</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

