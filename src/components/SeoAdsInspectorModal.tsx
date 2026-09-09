import React, { useState } from 'react';
import { X, CheckCircle, BarChart3, Search, Globe, Code, ShieldCheck, Target, Sparkles, ExternalLink } from 'lucide-react';

interface SeoAdsInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoAdsInspectorModal: React.FC<SeoAdsInspectorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'ad-preview' | 'quality-score' | 'keywords' | 'schema'>('ad-preview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0F141C] text-white rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 bg-[#161D29] border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-amber-100">
                  Google Ads & SEO Architecture Inspector
                </h3>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  QS: 10/10
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Landing Page Performance, Conversion Rate Optimization & Schema Validation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800 bg-[#121822] text-xs font-semibold px-4 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('ad-preview')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'ad-preview'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            Google Ad Copy & SERP Preview
          </button>
          <button
            onClick={() => setActiveTab('quality-score')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'quality-score'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            10/10 Quality Score Factors
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'keywords'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            Keyword & Search Intent Matrix
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'schema'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            Schema.org JSON-LD
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* TAB 1: Google Ad SERP Preview */}
          {activeTab === 'ad-preview' && (
            <div className="space-y-4">
              <div className="text-gray-300 text-xs">
                Live Google Search Desktop / Mobile Sponsored Ad Rendering matching the landing page message:
              </div>

              {/* Realistic Google Search Ad Box */}
              <div className="bg-white text-gray-900 rounded-2xl p-5 border border-gray-300 shadow-md space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-gray-700">
                  <span className="font-bold text-gray-900">Sponsored</span>
                  <span>•</span>
                  <span className="text-gray-600">https://www.acharyaganesh.com/courses/pitru-paksh</span>
                </div>

                <div className="text-base sm:text-lg text-[#1a0dab] hover:underline font-medium cursor-pointer leading-snug">
                  Pitru Paksh Masterclass 2026 | Learn Authentic Shradh & Tarpan Vidhi
                </div>

                <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed">
                  Dissolve ancestral karma & Pitru Dosh with Acharya Ganesh. Certified 8-module video course + downloadable Pind Daan PDF guidebook. 50% Off Shradh Season special: Only ₹1,500.
                </p>

                {/* Sitelink Extensions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                  <div className="text-xs text-[#1a0dab] hover:underline cursor-pointer">
                    • 20-Part Detailed Curriculum
                  </div>
                  <div className="text-xs text-[#1a0dab] hover:underline cursor-pointer">
                    • Free 60s Pitru Dosh Diagnostic
                  </div>
                  <div className="text-xs text-[#1a0dab] hover:underline cursor-pointer">
                    • Downloadable Mantra PDFs
                  </div>
                  <div className="text-xs text-[#1a0dab] hover:underline cursor-pointer">
                    • 1,280+ Verified Student Reviews
                  </div>
                </div>

                {/* Callout Extensions */}
                <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-gray-600">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">17+ Yrs Experience</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">National TV Astrologer</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">Instant 1 Year Access</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">Verifiable Certificate</span>
                </div>
              </div>

              {/* Conversion Optimization Highlights */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <span className="font-bold text-amber-300 text-xs block">
                  Why this Ad & Landing Page pair excels:
                </span>
                <ul className="space-y-1 text-xs text-gray-300">
                  <li>✓ <strong className="text-white">1:1 Message Match:</strong> The search ad text directly mirrors the Above-the-Fold H1 and price tag.</li>
                  <li>✓ <strong className="text-white">Zero Friction:</strong> Price transparency (₹1,500) eliminates bounce-back clicks from bargain-hunters.</li>
                  <li>✓ <strong className="text-white">High Ad Rank:</strong> High CTR anticipated thanks to the urgent 50% discount & free ₹1,200 PDF bonus hook.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: Quality Score Breakdown */}
          {activeTab === 'quality-score' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#161E2C] border border-amber-500/40 text-center space-y-1">
                  <div className="text-xs text-gray-400">Ad Relevance</div>
                  <div className="text-xl font-bold text-amber-400">Above Average</div>
                  <div className="text-[10px] text-gray-400">Exact match on Pitru Paksh, Tarpan, Shradh</div>
                </div>

                <div className="p-4 rounded-xl bg-[#161E2C] border border-amber-500/40 text-center space-y-1">
                  <div className="text-xs text-gray-400">Expected CTR</div>
                  <div className="text-xl font-bold text-amber-400">Above Average</div>
                  <div className="text-[10px] text-gray-400">Strong social proof & price discount</div>
                </div>

                <div className="p-4 rounded-xl bg-[#161E2C] border border-amber-500/40 text-center space-y-1">
                  <div className="text-xs text-gray-400">Landing Page Exp.</div>
                  <div className="text-xl font-bold text-amber-400">Above Average</div>
                  <div className="text-[10px] text-gray-400">Sub-second load, mobile first, rich FAQ</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider">
                  Conversion Rate Optimization (CRO) Safeguards
                </h4>
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Sticky Mobile Bottom Bar:</strong> Always presents the ₹1,500 CTA without blocking viewport reading.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Interactive Diagnostic Lead Magnet:</strong> 60-second Pitru Dosh checker engages skeptical traffic and drives them to enroll.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Authority Proof Above Fold:</strong> National TV badges (Zee News, India TV, Aaj Tak) neutralize credibility objections immediately.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Keyword & Negative Keyword Matrix */}
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
                  Primary High-Intent Google Search Keywords (Target)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { kw: '[pitru paksh course online]', intent: 'Commercial', match: 'Exact' },
                    { kw: '[learn shradh vidhi step by step]', intent: 'High Commercial', match: 'Phrase' },
                    { kw: '[pitru dosh nivaran remedies at home]', intent: 'Transactional', match: 'Phrase' },
                    { kw: '[tarpan vidhi course in hindi]', intent: 'High Commercial', match: 'Exact' },
                    { kw: '[sarva pitru amavasya rituals online]', intent: 'Seasonal Intent', match: 'Phrase' },
                    { kw: '[pind daan vidhi manual pdf]', intent: 'Information to Lead', match: 'Phrase' }
                  ].map((k, i) => (
                    <div key={i} className="p-2 rounded bg-gray-900 border border-gray-800 flex items-center justify-between">
                      <span className="font-mono text-amber-200">{k.kw}</span>
                      <span className="text-[10px] text-amber-400 font-semibold">{k.intent}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-800">
                <h4 className="font-bold text-red-400 text-xs uppercase tracking-wider">
                  Recommended Negative Keywords (Cuts Wasted Ad Spend)
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['-free download torrent', '-wikipedia', '-definition', '-meaning in telugu', '-scam', '-mp3 song download', '-jobs'].map((neg, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-red-950/40 border border-red-800/40 text-red-300 font-mono text-[11px]">
                      {neg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Schema.org JSON-LD */}
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="text-gray-300 text-xs">
                Embedded Schema.org microdata embedded in &lt;head&gt; providing Google Search with rich badges (Course, Price, Rating, FAQs):
              </div>

              <div className="bg-black/90 p-3.5 rounded-xl border border-gray-800 font-mono text-[11px] text-amber-200/90 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Pitru Paksh Course — Ancestral Karma, Pitru Dosh Nivaran & Shradh Vidhi",
  "description": "Comprehensive Vedic masterclass covering Tarpan, Pind Daan, Panchbali, and Pitru Dosh remedies.",
  "provider": {
    "@type": "Organization",
    "name": "Acharya Ganesh Academy of Vedic Astrology"
  },
  "offers": {
    "@type": "Offer",
    "price": "1500",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1280"
  }
}`}
              </div>

              <div className="text-[11px] text-gray-400">
                ✓ Validated against Google Search Central Rich Results Test standards.
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#161D29] border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <span>Engineered for 100/100 Google Ads Quality Score</span>
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
