import React from 'react';
import { Award, Users, Video, Star, Calendar, Infinity } from 'lucide-react';
import { STATS } from '../data/courseData';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-amber-800" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-800" />;
      case 'Video': return <Video className="w-6 h-6 text-amber-800" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-700 fill-amber-500/20" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-amber-800" />;
      case 'Infinity': return <Infinity className="w-6 h-6 text-amber-800" />;
      default: return <Award className="w-6 h-6 text-amber-800" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-7 sm:pb-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-b from-[#FAF6EF] to-[#F5ECE0] rounded-xl p-4 sm:p-5 border border-[#E5D9C8] shadow-2xs hover:shadow-md hover:border-amber-400 transition-all flex items-center gap-3 sm:gap-4 ${
              idx === 4 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#EFE3D3] border border-[#E0D0BE] flex items-center justify-center shrink-0 shadow-2xs">
              {getIcon(stat.icon)}
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#706456] font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
