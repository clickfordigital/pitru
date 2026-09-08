import React from 'react';
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

  return (
    <section id="course-features" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
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

      {/* 7 Feature Cards Grid with Premium Badge Emblems */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="relative flex flex-col items-center text-center bg-white rounded-2xl p-4 sm:p-4.5 border border-amber-200/90 shadow-sm hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Premium Gold Emblem Badge */}
              <div className="relative mb-3.5">
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 p-[1.5px] shadow-sm shadow-amber-900/20 group-hover:shadow-md transition-shadow">
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

              {/* Title & Description */}
              <div className="space-y-1 w-full pt-1">
                <h3 className="font-bold text-xs sm:text-sm text-gray-900 leading-snug group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
