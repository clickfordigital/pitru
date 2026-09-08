import React, { useState } from 'react';
import { CURRICULUM_20_PARTS } from '../data/courseData';
import { BookOpen, Check, Search, Download } from 'lucide-react';

interface CurriculumTableProps {
  onEnrollClick: () => void;
}

export const CurriculumTable: React.FC<CurriculumTableProps> = ({ onEnrollClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Foundations', 'Kundli', 'Diagnosis', 'Tarpan', 'Rituals', 'Remedies', 'Special Vidhi'];

  const filteredItems = CURRICULUM_20_PARTS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const col1 = filteredItems.filter((_, idx) => idx % 2 === 0);
  const col2 = filteredItems.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="curriculum" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
          COURSE CURRICULUM
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-2">
          Complete 20-Part Shradh Vidhi Syllabus
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Complete 20-part breakdown of Pitru Paksh, Ancestral Karma, Pitru Dosh Nivaran & Shradh Vidhi
        </p>

        {/* Quick Search & Category Filters */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g., Tarpan, Kundli, Mantras, Pind Daan)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
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
