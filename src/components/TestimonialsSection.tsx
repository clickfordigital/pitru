import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/courseData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header (Matches Screenshot) */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          WHAT OUR STUDENTS SAY
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Genuine experiences from working professionals, scholars, and spiritual seekers.
        </p>
      </div>

      {/* 4 Cards Grid (Matches Screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between relative"
          >
            {/* Upper row: Avatar with initials + Name/Role + Quote icon */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-700 text-amber-100 font-serif font-bold text-sm flex items-center justify-center shadow-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      {t.role}, {t.location}
                    </div>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-amber-300" />
              </div>

              {/* Review text */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                "{t.review}"
              </p>
            </div>

            {/* Bottom Row: 5 Stars + Verified Student */}
            <div className="pt-4 mt-4 border-t border-amber-100 flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-600">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Student</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
