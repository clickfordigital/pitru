import React from 'react';
import consultationImage from '../assets/images/regenerated_image_1788951123014.webp';
import { 
  Lock, 
  Compass, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Users, 
  ArrowRight
} from 'lucide-react';

interface ConsultationSectionProps {
  onConsultationClick: () => void;
  onTalkToTeamClick: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onConsultationClick,
  onTalkToTeamClick
}) => {
  const guidancePillars = [
    {
      title: 'Pitru Dosh & Tarpan',
      desc: 'Ancestral karma diagnosis & scriptural remedies',
      icon: <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />,
    },
    {
      title: 'Career & Wealth Timing',
      desc: 'Favorable Dasha periods & financial decisions',
      icon: <Compass className="w-4 h-4 text-amber-700 shrink-0" />,
    },
    {
      title: 'Astro-Vastu Guidance',
      desc: 'Energy balancing with zero physical demolition',
      icon: <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />,
    },
    {
      title: 'Kundali & Family Peace',
      desc: 'Horoscope matchmaking & relationship harmony',
      icon: <Users className="w-4 h-4 text-amber-700 shrink-0" />,
    },
  ];

  return (
    <section id="consultation" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Comfortable & Balanced Vedic Sanctuary Container */}
      <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FFF9EE] to-[#F8EFE0] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-amber-300/90 shadow-md">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left 5 Columns: Featured Image with Verified Badges */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/90 shadow-md bg-stone-900 group">
              <img
                src={consultationImage}
                alt="Astro Vastu Expert Hanish Bagga - Acharya Ganesh Consultation"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay for bottom caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-3 inset-x-3 text-white space-y-0.5 pointer-events-none">
                <h4 className="font-serif font-bold text-sm sm:text-base text-amber-100">
                  Astro Vastu Expert Hanish Bagga
                </h4>
                <p className="text-[11px] text-gray-300">
                  Founder & Director • 17+ Years Vedic Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Compact, High-Conversion Guidance Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span>1-ON-1 PERSONAL VEDIC GUIDANCE</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Book Consultation with Acharya Ganesh
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Connect for personalized astrological birth chart analysis, ancestral karma mitigation, career timing, and home Vastu balancing.
              </p>
            </div>

            {/* 4 Concise Guidance Pillars (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {guidancePillars.map((pillar, i) => (
                <div 
                  key={i}
                  className="bg-white/90 p-3 rounded-xl border border-amber-200/80 hover:border-amber-400 transition-all flex items-start gap-2.5 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mt-0.5">
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs text-gray-900 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-semibold text-gray-700">
              <span className="flex items-center gap-1 bg-white/70 px-2.5 py-1 rounded-md border border-amber-200/70">
                <Lock className="w-3.5 h-3.5 text-amber-700" />
                100% Confidential
              </span>
              <span className="flex items-center gap-1 bg-white/70 px-2.5 py-1 rounded-md border border-amber-200/70">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                Dedicated 1-on-1 Time
              </span>
              <span className="flex items-center gap-1 bg-white/70 px-2.5 py-1 rounded-md border border-amber-200/70">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Actionable Remedies
              </span>
            </div>

            {/* Actions: Primary CTA + Direct Desk Call */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={onConsultationClick}
                className="cursor-pointer flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center shadow-md hover:shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>BOOK 1-ON-1 CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                onClick={onTalkToTeamClick}
                className="cursor-pointer flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs sm:text-sm border border-amber-300 transition-all active:scale-98 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                <span>Call Helpline</span>
              </button>
            </div>

            {/* Helpline Notice */}
            <div className="text-[11px] text-gray-500 flex flex-wrap items-center gap-x-2">
              <span>Direct Support Numbers:</span>
              <a href="tel:+917300004325" className="font-bold text-amber-900 hover:underline">
                +91 73000-04325
              </a>
              <span>/</span>
              <a href="tel:+917300004326" className="font-bold text-amber-900 hover:underline">
                +91 73000-04326
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
