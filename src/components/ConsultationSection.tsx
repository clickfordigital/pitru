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
      icon: <Sparkles className="w-4 h-4 text-[#FED7AA] shrink-0" />,
    },
    {
      title: 'Career & Wealth Timing',
      desc: 'Favorable Dasha periods & financial decisions',
      icon: <Compass className="w-4 h-4 text-[#FED7AA] shrink-0" />,
    },
    {
      title: 'Astro-Vastu Guidance',
      desc: 'Energy balancing with zero physical demolition',
      icon: <CheckCircle2 className="w-4 h-4 text-[#FED7AA] shrink-0" />,
    },
    {
      title: 'Kundali & Family Peace',
      desc: 'Horoscope matchmaking & relationship harmony',
      icon: <Users className="w-4 h-4 text-[#FED7AA] shrink-0" />,
    },
  ];

  return (
    <section id="consultation" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Featured Highlight Container: Rich Burnt Orange & Terracotta Vedic Sanctuary */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#B84405] via-[#A33B04] to-[#8A3002] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-[#E8712C] shadow-2xl shadow-orange-950/25">
        
        {/* Subtle Decorative Golden Shimmer Line */}
        <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#FED7AA]/70 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left 5 Columns: Featured Image with Terracotta Gold Border */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#FED7AA]/60 shadow-xl shadow-black/35 bg-stone-900 group">
              <img
                src={consultationImage}
                alt="Astro Vastu Expert Hanish Bagga - Acharya Ganesh Consultation"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay for bottom caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-3 inset-x-3 text-white space-y-0.5 pointer-events-none">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#FFF2E0]">
                  Astro Vastu Expert Hanish Bagga
                </h4>
                <p className="text-[11px] text-[#FED7AA]">
                  Founder & Director • 17+ Years Vedic Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Highlighted Guidance Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
                <Sparkles className="w-3 h-3 text-[#FED7AA]" />
                <span>1-ON-1 PERSONAL VEDIC GUIDANCE</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Book Consultation with Acharya Ganesh
              </h2>
              <p className="text-xs sm:text-sm text-[#FFEDD5] mt-1.5 leading-relaxed">
                Connect for personalized astrological birth chart analysis, ancestral karma mitigation, career timing, and home Vastu balancing.
              </p>
            </div>

            {/* 4 Concise Guidance Pillars (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {guidancePillars.map((pillar, i) => (
                <div 
                  key={i}
                  className="bg-[#752602]/70 p-3 rounded-xl border border-[#DF6928]/45 hover:border-[#FED7AA]/70 transition-all flex items-start gap-2.5 shadow-xs backdrop-blur-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center mt-0.5 text-[#FED7AA]">
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs text-white leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-[#FED7AA]/90 mt-0.5 leading-tight">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-semibold text-[#FFEDD5]">
              <span className="flex items-center gap-1 bg-[#662001]/70 px-2.5 py-1 rounded-md border border-[#DE6827]/40">
                <Lock className="w-3.5 h-3.5 text-[#FED7AA]" />
                100% Confidential
              </span>
              <span className="flex items-center gap-1 bg-[#662001]/70 px-2.5 py-1 rounded-md border border-[#DE6827]/40">
                <Clock className="w-3.5 h-3.5 text-[#FED7AA]" />
                Dedicated 1-on-1 Time
              </span>
              <span className="flex items-center gap-1 bg-[#662001]/70 px-2.5 py-1 rounded-md border border-[#DE6827]/40">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FED7AA]" />
                Actionable Remedies
              </span>
            </div>

            {/* Actions: Primary CTA + Direct Desk Call */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={onConsultationClick}
                className="cursor-pointer flex-1 py-3 px-5 rounded-xl bg-white hover:bg-[#FFF7ED] text-[#8A3002] font-black text-xs sm:text-sm uppercase tracking-wider text-center shadow-lg shadow-black/20 hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>BOOK 1-ON-1 CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-[#8A3002] stroke-[2.5]" />
              </button>

              <button
                onClick={onTalkToTeamClick}
                className="cursor-pointer flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/30 transition-all active:scale-98 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FED7AA]" />
                <span>Direct Call Support</span>
              </button>
            </div>

            {/* Helpline Notice */}
            <div className="text-[11px] text-[#FED7AA] flex flex-wrap items-center gap-x-2">
              <span>Direct Support Numbers:</span>
              <a href="tel:+917300004325" className="font-bold text-white hover:underline">
                +91 73000-04325
              </a>
              <span>/</span>
              <a href="tel:+917300004326" className="font-bold text-white hover:underline">
                +91 73000-04326
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
