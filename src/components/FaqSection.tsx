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
    <section id="faq" className="space-y-4">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1E4] border border-[#E5CEAB] text-[#783908] text-xs font-bold uppercase tracking-wider mb-2">
          <span>CLARIFICATIONS & ANSWERS</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-gray-900 uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h3>
      </div>

      {/* Search Input (Matches Screenshot) */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search your question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#DEC4A1] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#8A3A0B]/20 focus:border-[#8A3A0B] shadow-2xs"
        />
      </div>

      {/* Accordion List */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-[#DEC4A1] divide-y divide-[#EFE2CE] shadow-2xs overflow-hidden">
        {filteredFaqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          return (
            <div key={faq.id} className="transition-colors">
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`cursor-pointer w-full p-4 flex items-center justify-between text-left transition-colors gap-3 ${
                  isOpen ? 'bg-[#FBF5EC]' : 'hover:bg-[#FAF6EE]'
                }`}
              >
                <span className={`font-semibold text-xs sm:text-sm ${isOpen ? 'text-[#7C2D12]' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="text-gray-500 text-xs shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#8A3A0B]" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-2 text-xs sm:text-sm text-gray-700 bg-[#FAF4EA] leading-relaxed border-t border-[#F0E4D2]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
        {filteredFaqs.length === 0 && (
          <div className="p-6 text-center text-xs text-gray-500">
            No matching questions found. Have a custom query? Contact our Vedic counselors via WhatsApp or call!
          </div>
        )}
      </div>
    </section>
  );
};
