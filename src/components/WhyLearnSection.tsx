import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  BookOpen, 
  HelpCircle, 
  Lock, 
  Compass, 
  PhoneCall,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import consultationImage from '../assets/images/regenerated_image_1788864599423.webp';

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
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: '17+ Years Experience', 
      subtitle: 'Authentic Vedic Mastery',
      desc: 'Over 17+ years deciphering Vedic texts, horoscope ancestral debts, and guiding 50,000+ families with proven Shastric remedies.'
    },
    { 
      id: '02',
      icon: <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: 'Certified Course', 
      subtitle: 'Recognized Credential',
      desc: 'Earn an official verified Certificate of Completion acknowledging your proficiency in authentic Shradh Vidhi & Tarpan.'
    },
    { 
      id: '03',
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: '1 Year Complete Access', 
      subtitle: 'Full 365-Day Access',
      desc: 'Re-watch video lessons, review remedial mantras, and download ritual guides at your own pace anytime throughout the year.'
    },
    { 
      id: '04',
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: 'Practical Home Learning', 
      subtitle: 'Step-by-Step at Home',
      desc: 'Clear DIY instructions with precise Sanskrit mantras, Mudra diagrams, and zero expensive priests required.'
    },
    { 
      id: '05',
      icon: <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: 'Live Doubt Sessions', 
      subtitle: 'Direct Faculty Support',
      desc: 'Get your family gotra, tithi calculations, and ancestral questions clarified directly in live interactive Q&A sessions.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Cycle through the 5 cards one by one every 0.8 seconds (800ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 800);

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
          Get authentic knowledge, practical training, and dedicated guidance from India's most trusted Vedic guide.
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left 5 Feature Cards Layout with 0.8s Animation */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {features.map((feat, idx) => {
            const isActive = activeIndex === idx;
            const isLastSpan = idx === 4; // 5th card spans full width for perfect symmetry

            return (
              <motion.div
                key={feat.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isLastSpan ? 'sm:col-span-2' : 'col-span-1'
                } ${
                  isActive
                    ? 'bg-gradient-to-br from-[#FFFDF9] via-[#FFF8EC] to-[#FEF3D6] border-amber-500 shadow-xl shadow-amber-900/10 ring-2 ring-amber-400/60 scale-[1.02]'
                    : 'bg-white border-amber-200/90 shadow-sm hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-md'
                }`}
              >
                {isLastSpan ? (
                  /* 5th Card: Full-width Horizontal Layout */
                  <div className="sm:flex sm:items-start sm:gap-5">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 transition-all shadow-sm ${
                      isActive 
                        ? 'bg-amber-600 text-white shadow-amber-700/30' 
                        : 'bg-gradient-to-br from-amber-50 to-amber-100/70 border border-amber-200/80 text-amber-800'
                    }`}>
                      {React.cloneElement(feat.icon, {
                        className: `w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-white' : 'text-amber-800'}`
                      })}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                          {feat.title}
                        </h3>
                        <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                          isActive 
                            ? 'bg-amber-600 text-white shadow-xs' 
                            : 'bg-amber-100 text-amber-900 border border-amber-200/80'
                        }`}>
                          {feat.subtitle}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Cards 1-4: Spacious Vertical Stack Layout with 100% Unclipped Text */
                  <div>
                    {/* Header Row: Icon + Subtitle Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all shadow-sm ${
                        isActive 
                          ? 'bg-amber-600 text-white shadow-amber-700/30' 
                          : 'bg-gradient-to-br from-amber-50 to-amber-100/70 border border-amber-200/80 text-amber-800'
                      }`}>
                        {React.cloneElement(feat.icon, {
                          className: `w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-white' : 'text-amber-800'}`
                        })}
                      </div>

                      <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                        isActive 
                          ? 'bg-amber-600 text-white shadow-xs' 
                          : 'bg-amber-100 text-amber-900 border border-amber-200/80'
                      }`}>
                        {feat.subtitle}
                      </span>
                    </div>

                    {/* Title: Full Width, Never Truncated */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {feat.title}
                    </h3>

                    {/* Description: Generous Line Height and Clear Readability */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Card: Need Personal Guidance Before Joining? */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF9EE] via-[#FFF5E5] to-[#F7ECD8] rounded-2xl p-6 sm:p-7 border border-amber-300/80 shadow-md flex flex-col justify-between space-y-5">
          
          {/* Header pill with real avatar */}
          <div className="flex items-center gap-3">
            <img
              src="/acharya-ganesh-logo.jpg"
              alt="Acharya Ganesh Official Logo"
              className="w-12 h-12 rounded-full object-contain p-0.5 bg-white border-2 border-amber-500 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-200/80 text-amber-950 uppercase tracking-wider">
                1-ON-1 VEDIC GUIDANCE
              </div>
              <div className="font-serif font-bold text-sm text-gray-900">
                Acharya Ganesh
              </div>
              <div className="text-[11px] text-gray-600">
                Grand Master Astrovastu & Vedic Guide
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              BOOK CONSULTATION WITH ACHARYA GANESH
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Book an exclusive 1-on-1 personal consultation with Acharya Ganesh. Get your birth chart, family gotra, and ancestral debts analyzed with proven Shastric remedies and a personalized spiritual roadmap.
            </p>
          </div>

          {/* Visual Showcase: Personal Consultation & Horoscope Audit */}
          <div className="relative rounded-xl overflow-hidden border border-amber-300/80 shadow-md group">
            <img
              src={consultationImage}
              alt="Acharya Ganesh Vedic Astrology Personal Consultation Setup"
              className="w-full h-44 sm:h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium drop-shadow-sm">
              <span className="flex items-center gap-1.5 bg-amber-950/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-amber-400/40 text-amber-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                1-on-1 Kundali & Gotra Audit
              </span>
              <span className="bg-emerald-950/85 backdrop-blur-xs text-emerald-300 px-2.5 py-1 rounded-md text-[10px] font-bold border border-emerald-400/40">
                Live Slots Today
              </span>
            </div>
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
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

