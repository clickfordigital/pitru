import React from 'react';
import { Award, Users, Video, Star, Infinity } from 'lucide-react';
import { STATS } from '../data/courseData';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-600" />;
      case 'Video': return <Video className="w-6 h-6 text-amber-600" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-600 fill-amber-500/20" />;
      case 'Infinity': return <Infinity className="w-6 h-6 text-amber-600" />;
      default: return <Award className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 pb-14">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-xl p-4 sm:p-5 border border-amber-200/80 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 sm:gap-4 ${
              idx === 4 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
              {getIcon(stat.icon)}
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-tight">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
