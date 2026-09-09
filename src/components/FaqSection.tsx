import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter(f =>
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-10 sm:py-14 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7]">
      {/* Centered Heading & Clarifications Badge */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 space-y-2.5 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1E4] border border-[#E5CEAB] text-[#783908] text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#8A3A0B]" />
          <span>CLARIFICATIONS & ANSWERS</span>
        </div>
        
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Everything you need to know about the Pitru Paksha masterclass, Shastric rules, and lifetime course access.
        </p>

        {/* Centered Search Bar */}
        <div className="pt-2 max-w-xl mx-auto w-full">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your question (e.g. timing, certificate, materials)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl border border-[#DEC4A1] bg-white focus:outline-none focus:ring-2 focus:ring-[#8A3A0B]/20 focus:border-[#8A3A0B] shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* Full-Width Q&A Accordion - Touching Screen Left to Right */}
      <div className="w-full border-y border-[#DEC4A1] bg-[#FFFDF9] divide-y divide-[#EFE2CE] shadow-xs">
        {filteredFaqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          return (
            <div key={faq.id} className="transition-colors w-full">
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`cursor-pointer w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-4 sm:py-5 flex items-center justify-between text-left transition-colors gap-4 ${
                  isOpen ? 'bg-[#FAF3E8]' : 'hover:bg-[#FAF6EE]'
                }`}
              >
                <span className={`font-semibold text-xs sm:text-sm md:text-base ${isOpen ? 'text-[#7C2D12]' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="text-gray-500 text-xs shrink-0 ml-2">
                  {isOpen ? (
                    <div className="w-7 h-7 rounded-full bg-[#8A3A0B]/10 flex items-center justify-center">
                      <ChevronUp className="w-4 h-4 text-[#8A3A0B]" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-5 pt-3 text-xs sm:text-sm text-gray-700 bg-[#FAF3E8]/80 leading-relaxed border-t border-[#F0E4D2]">
                  <p className="max-w-5xl">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
        {filteredFaqs.length === 0 && (
          <div className="p-8 text-center text-xs sm:text-sm text-gray-500">
            No matching questions found. Have a custom query? Contact our Vedic counselors via WhatsApp or call!
          </div>
        )}
      </div>
    </section>
  );
};
