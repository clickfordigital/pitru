import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface CertificateSectionProps {
  onEnrollClick: () => void;
}

export const CertificateSection: React.FC<CertificateSectionProps> = ({ onEnrollClick }) => {
  return (
    <div id="certificate" className="max-w-5xl mx-auto">
      {/* 2-Column Card: Left Text & Highlights, Right Certificate Image */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF4E8] to-[#F5ECE0] border border-amber-300/80 p-5 sm:p-7 lg:p-8 shadow-xl shadow-amber-950/5">
        
        {/* Subtle Decorative Golden Accents */}
        <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Glowing Logo & CTA */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Official Certificate of Participation
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Earn an authenticated, shareable Certificate accredited by <span className="font-semibold text-gray-900">Acharya Ganesh</span> & <span className="font-semibold text-gray-900">Divine Astro Vastu Sciences LLP</span> upon successful course completion.
              </p>
            </div>

            {/* Glowing Institute Logo Emblem */}
            <div className="py-2 flex items-center justify-start">
              <div className="relative group flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-50/90 via-amber-100/40 to-white/90 border border-amber-200/90 shadow-sm overflow-hidden">
                
                {/* Luminous Golden Radiant Aura behind the PNG logo */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-r from-amber-400/60 via-yellow-300/50 to-orange-400/40 rounded-full blur-xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/10 pointer-events-none" />

                {/* PNG Logo with Radiant Golden Halo Glow */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/50 to-amber-500/30 blur-md animate-pulse" />
                  <img
                    src="/acharya-ganesh-logo.png"
                    alt="Acharya Ganesh Official Accreditation Logo"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_14px_rgba(217,119,6,0.6)] transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Mentor Identification */}
                <div className="relative space-y-0.5">
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-amber-800 uppercase block">
                    Astro Vastu Expert
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    Mentor Hanish Bagga
                  </h4>
                </div>
              </div>
            </div>

            {/* Call to Action & Trust Subtext */}
            <div className="pt-1 space-y-2">
              <button
                onClick={onEnrollClick}
                id="certificate-enroll-btn"
                className="cursor-pointer group flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Claim Your Certificate • ₹1,500</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-gray-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Issued automatically after completing the 20-part curriculum.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Certificate Image Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-xl bg-white p-2 sm:p-2.5 border border-amber-300/80 shadow-md shadow-amber-900/10 transition-transform duration-300 hover:shadow-xl hover:shadow-amber-900/15">
              {/* Gold Top Border Accent */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none" />
              
              {/* Certificate Image */}
              <div className="overflow-hidden rounded-lg border border-amber-100 bg-amber-50/20">
                <img
                  src="/acharya-ganesh-certificate.jpg"
                  alt="Official Acharya Ganesh Certificate of Participation - Divine Astro Vastu Sciences LLP"
                  className="w-full h-auto object-contain block mx-auto transition-transform duration-300 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified Badge Tag */}
              <div className="mt-2 flex items-center justify-between text-[10.5px] text-gray-600 px-1">
                <span className="flex items-center gap-1 font-semibold text-amber-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Divine Astro Vastu Sciences LLP
                </span>
                <span className="text-gray-500 font-medium">Verified Format</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

