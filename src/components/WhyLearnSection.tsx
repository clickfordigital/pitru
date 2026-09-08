import React from 'react';
import { 
  Award, 
  Crown, 
  Tv, 
  CheckCircle2, 
  Infinity as InfinityIcon, 
  BookOpen, 
  Users, 
  HelpCircle, 
  Lock, 
  Compass, 
  MessageSquare, 
  PhoneCall 
} from 'lucide-react';

interface WhyLearnSectionProps {
  onConsultationClick: () => void;
  onTalkToTeamClick: () => void;
}

export const WhyLearnSection: React.FC<WhyLearnSectionProps> = ({ 
  onConsultationClick, 
  onTalkToTeamClick 
}) => {
  const features = [
    { icon: <Award className="w-6 h-6 text-amber-600" />, title: '17 Years', subtitle: 'Experience' },
    { icon: <Crown className="w-6 h-6 text-amber-600" />, title: 'Celebrity', subtitle: 'Astrologer' },
    { icon: <Tv className="w-6 h-6 text-amber-600" />, title: 'TV Panelist', subtitle: '& Media Presence' },
    { icon: <CheckCircle2 className="w-6 h-6 text-amber-600" />, title: 'Certified', subtitle: 'Course' },
    { icon: <InfinityIcon className="w-6 h-6 text-amber-600" />, title: 'Lifetime', subtitle: 'Access' },
    { icon: <BookOpen className="w-6 h-6 text-amber-600" />, title: 'Practical', subtitle: 'Learning' },
    { icon: <Users className="w-6 h-6 text-amber-600" />, title: 'Community', subtitle: 'Support' },
    { icon: <HelpCircle className="w-6 h-6 text-amber-600" />, title: 'Live Doubt', subtitle: 'Sessions' },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
          WHY CHOOSE THIS COURSE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-2">
          Why Learn From Acharya Ganesh?
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Get authentic knowledge, practical training, and lifetime support from India's most trusted Vedic guide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8-Grid Feature Boxes (Matches screenshot) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-amber-200/80 shadow-sm hover:border-amber-300 hover:shadow-md transition-all text-center flex flex-col items-center justify-center space-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                {feat.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 leading-tight">
                  {feat.title}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {feat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Card: Need Personal Guidance Before Joining? (Matches screenshot) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF9EE] to-[#F7ECD8] rounded-2xl p-6 sm:p-7 border border-amber-300/80 shadow-md space-y-5">
          
          {/* Header pill with avatar */}
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80"
              alt="Acharya Ganesh Mentorship"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
            />
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-200/80 text-amber-950 uppercase tracking-wider">
                DIRECT MENTORSHIP
              </div>
              <div className="font-serif font-bold text-sm text-gray-900">
                Acharya Ganesh
              </div>
              <div className="text-[11px] text-gray-600">
                Senior Faculty Team
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
              className="cursor-pointer flex-1 py-3 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center shadow transition-all"
            >
              BOOK CONSULTATION
            </button>
            <button
              onClick={onTalkToTeamClick}
              className="cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-amber-50 text-gray-800 font-semibold text-xs sm:text-sm border border-amber-300 transition-all"
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
