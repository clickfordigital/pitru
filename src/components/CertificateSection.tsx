import React from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CertificateSectionProps {
  onEnrollClick: () => void;
}

export const CertificateSection: React.FC<CertificateSectionProps> = ({ onEnrollClick }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Certificate Showcase Header */}
      <div className="text-center space-y-2">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
          ACCREDITED VEDIC CREDENTIAL
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 uppercase">
          CERTIFICATE PREVIEW
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Earn an authenticated, shareable Certificate of Completion accredited by Acharya Ganesh Academy of Vedic Astrology upon completing all lessons and ritual modules.
        </p>
      </div>

      {/* Certificate Card Mockup */}
      <div className="relative rounded-2xl overflow-hidden bg-[#FAF5EC] border-4 border-amber-600/40 p-5 sm:p-8 shadow-xl text-center space-y-4">
        
        {/* Ornate Frame Inside */}
        <div className="border-2 border-dashed border-amber-700/50 rounded-xl p-5 sm:p-8 bg-white/95 relative shadow-inner">
          
          {/* Top Emblem */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-amber-800 text-xl font-bold">ॐ</span>
            <span className="font-serif font-bold text-xs sm:text-sm tracking-widest text-amber-950 uppercase">
              ACHARYA GANESH
            </span>
          </div>

          <div className="text-[10px] sm:text-xs text-amber-800 tracking-wider font-semibold uppercase mb-3">
            ACADEMY OF VEDIC ASTROLOGY
          </div>

          <h4 className="font-serif text-lg sm:text-2xl font-bold text-gray-900 uppercase tracking-wide">
            CERTIFICATE OF COMPLETION
          </h4>

          <p className="text-xs sm:text-sm text-gray-600 italic mt-2 mb-3">
            This is to proudly certify that the student has successfully completed the specialized masterclass in
          </p>

          <div className="font-serif font-bold text-amber-900 text-base sm:text-lg border-y-2 border-amber-300 py-2.5 my-3 bg-amber-50/40">
            Pitru Paksh — Ancestral Karma, Pitru Dosh Nivaran & Shradh Vidhi
          </div>

          <div className="flex items-center justify-between pt-5 mt-3 text-xs text-gray-600 border-t border-amber-200">
            <div className="text-left">
              <span className="font-bold text-gray-900 block text-xs sm:text-sm">Acharya Ganesh</span>
              <span className="text-[11px] text-gray-500">Grand Master & Founder</span>
            </div>

            {/* Gold Seal Graphic */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-500 p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-amber-950 text-amber-200 flex flex-col items-center justify-center text-[9px] font-bold leading-tight border border-amber-400/40">
                <span>SEAL</span>
                <span>VERIFIED</span>
              </div>
            </div>

            <div className="text-right">
              <span className="font-bold text-gray-900 block text-xs sm:text-sm">Credential ID</span>
              <span className="font-mono text-amber-900 font-semibold text-xs">AG-PP-2026</span>
            </div>
          </div>

        </div>

        {/* Credential Verification & CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-amber-200/80">
          <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Verifiable Academy Credential with unique QR and LinkedIn shareability.</span>
          </div>

          <button
            onClick={onEnrollClick}
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider shadow transition-all whitespace-nowrap active:scale-95"
          >
            <span>Claim Certificate • ₹1,500</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};

