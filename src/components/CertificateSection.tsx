import React from 'react';
import { ShieldCheck, ArrowRight, Award } from 'lucide-react';

interface CertificateSectionProps {
  onEnrollClick: () => void;
}

export const CertificateSection: React.FC<CertificateSectionProps> = ({ onEnrollClick }) => {
  return (
    <div id="certificate" className="max-w-4xl mx-auto space-y-6">
      
      {/* Certificate Showcase Header */}
      <div className="text-center space-y-2">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
          ACCREDITED VEDIC CREDENTIAL
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 uppercase">
          Official Certificate of Participation
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Earn an authenticated, shareable Certificate accredited by Acharya Ganesh & Divine Astro Vastu Sciences LLP upon completion.
        </p>
      </div>

      {/* Certificate Frame with Real Certificate Image */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E6] border border-amber-300/80 p-3 sm:p-5 shadow-2xl space-y-4">
        
        {/* Certificate Image Container */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-amber-200/90 bg-white">
          <img
            src="/acharya-ganesh-certificate.jpg"
            alt="Official Acharya Ganesh Certificate of Participation - Divine Astro Vastu Sciences LLP"
            className="w-full h-auto object-contain block mx-auto transition-transform duration-300 hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Credential Verification & CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 px-1">
          <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Official Credential with Master Astrovastu verification & LinkedIn shareability.</span>
          </div>

          <button
            onClick={onEnrollClick}
            id="certificate-enroll-btn"
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Claim Your Certificate • ₹1,500</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>

      </div>

    </div>
  );
};

