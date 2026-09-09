import React, { useState } from 'react';
import { CURRICULUM_20_PARTS } from '../data/courseData';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface CurriculumTableProps {
  onEnrollClick: () => void;
}

export const CurriculumTable: React.FC<CurriculumTableProps> = ({ onEnrollClick }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Show 10 items initially, show all 20 when expanded
  const visibleItems = isExpanded ? CURRICULUM_20_PARTS : CURRICULUM_20_PARTS.slice(0, 10);
  const col1 = visibleItems.filter((_, idx) => idx % 2 === 0);
  const col2 = visibleItems.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="curriculum" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
          <span>COMPREHENSIVE 20-PART SYLLABUS</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          Table of Content
        </h2>
      </div>

      {/* Curriculum Grid Card Layout */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-amber-200/90 shadow-sm max-w-5xl mx-auto relative overflow-hidden transition-all duration-300">
        
        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          
          {/* Column 1 (Odd items / Left column) */}
          <div className="space-y-3">
            {col1.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl border border-amber-100 hover:border-amber-300 bg-[#FCFBF8] hover:bg-amber-50/50 transition-all shadow-2xs"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-200/80 flex items-center justify-center font-serif font-bold text-xs sm:text-sm shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  {item.id}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-amber-950 transition-colors leading-snug block">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 (Even items / Right column) */}
          <div className="space-y-3">
            {col2.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl border border-amber-100 hover:border-amber-300 bg-[#FCFBF8] hover:bg-amber-50/50 transition-all shadow-2xs"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-200/80 flex items-center justify-center font-serif font-bold text-xs sm:text-sm shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  {item.id}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-amber-950 transition-colors leading-snug block">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Know More / Show More Toggle Button & Enrollment Callout */}
        <div className="mt-6 pt-5 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-3.5">
          
          {/* Show More / Know More Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 text-amber-900 font-bold text-xs sm:text-sm border border-amber-300 shadow-2xs transition-all active:scale-98"
          >
            <span>{isExpanded ? 'Show Less (First 10 Topics)' : 'Know More • Show All 20 Topics'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-amber-800" />
            ) : (
              <ChevronDown className="w-4 h-4 text-amber-800" />
            )}
          </button>

          {/* Quick Enroll CTA */}
          <button
            onClick={onEnrollClick}
            className="cursor-pointer w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:brightness-110 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-98 flex items-center justify-center gap-2"
          >
            <span>Get Full Access • ₹1,500</span>
          </button>

        </div>

      </div>
    </section>
  );
};
