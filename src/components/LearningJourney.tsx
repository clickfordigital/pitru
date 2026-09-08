import React from 'react';
import { 
  UserPlus, 
  BookMarked, 
  Search, 
  Video, 
  FileCheck, 
  Award, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const steps = [
    { num: 1, title: 'Enroll', desc: 'Get Instant Access', icon: <UserPlus className="w-5 h-5 text-amber-700" /> },
    { num: 2, title: 'Learn Basics', desc: 'Build Foundation', icon: <BookMarked className="w-5 h-5 text-amber-700" /> },
    { num: 3, title: 'Kundli Diagnosis', desc: 'Deepen Knowledge', icon: <Search className="w-5 h-5 text-amber-700" /> },
    { num: 4, title: 'Live Sessions', desc: 'Interactive Q&A', icon: <Video className="w-5 h-5 text-amber-700" /> },
    { num: 5, title: 'Rituals & Vidhi', desc: 'Practice at Home', icon: <FileCheck className="w-5 h-5 text-amber-700" /> },
    { num: 6, title: 'Certification', desc: 'Verifiable Credential', icon: <Award className="w-5 h-5 text-amber-700" /> },
    { num: 7, title: 'Ancestral Grace', desc: 'Lifelong Peace', icon: <ShieldCheck className="w-5 h-5 text-amber-700" /> },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header (Matches Screenshot) */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          YOUR LEARNING JOURNEY
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          From Foundations to Confident Shradh Performance & Ancestral Peace
        </p>
      </div>

      {/* 7-Step Horizontal / Responsive Process Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-3 items-center">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center group">
            
            {/* Step Box with Number Badge */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white border border-amber-200 shadow-sm flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-md transition-all mb-3">
              {step.icon}
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-700 text-white font-serif font-bold text-xs flex items-center justify-center shadow-sm">
                {step.num}
              </span>
            </div>

            {/* Labels */}
            <div className="space-y-0.5">
              <div className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                {step.title}
              </div>
              <div className="text-[11px] text-gray-500">
                {step.desc}
              </div>
            </div>

            {/* Arrow connector between steps (desktop only) */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-9 -right-3.5 z-10 text-amber-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
