import React from 'react';
import { CURRICULUM_20_PARTS } from '../data/courseData';
import { Check } from 'lucide-react';

interface CurriculumTableProps {
  onEnrollClick: () => void;
}

export const CurriculumTable: React.FC<CurriculumTableProps> = ({ onEnrollClick }) => {
  const col1 = CURRICULUM_20_PARTS.filter((_, idx) => idx % 2 === 0);
  const col2 = CURRICULUM_20_PARTS.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="curriculum" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          Table of Content
        </h2>
      </div>

      {/* 20-Part Grid Card Layout (Matching Screenshot) */}
      <div className="bg-white rounded-2xl p-4 sm:p-8 border border-amber-200/90 shadow-sm max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          
          {/* Column 1 (Odd items / Left column) */}
          <div className="space-y-3">
            {col1.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl border border-amber-100 hover:border-amber-300 bg-[#FCFBF8] hover:bg-amber-50/50 transition-all"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-200/80 flex items-center justify-center font-serif font-bold text-xs sm:text-sm shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  {item.id}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-amber-950 transition-colors leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Column 2 (Even items / Right column) */}
          <div className="space-y-3">
            {col2.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl border border-amber-100 hover:border-amber-300 bg-[#FCFBF8] hover:bg-amber-50/50 transition-all"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-200/80 flex items-center justify-center font-serif font-bold text-xs sm:text-sm shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  {item.id}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-amber-950 transition-colors leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Curriculum Callout */}
        <div className="mt-8 pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Includes 100+ Shastric Sanskrit mantras, Mudra diagrams & Audio recordings.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onEnrollClick}
              className="cursor-pointer px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
            >
              Get Full Access • ₹1,500
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
