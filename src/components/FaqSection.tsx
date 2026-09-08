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
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
        />
      </div>

      {/* Accordion List */}
      <div className="bg-white rounded-2xl border border-amber-200/80 divide-y divide-amber-100 shadow-sm overflow-hidden">
        {filteredFaqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          return (
            <div key={faq.id} className="transition-colors">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="cursor-pointer w-full p-4 flex items-center justify-between text-left hover:bg-amber-50/40 transition-colors gap-3"
              >
                <span className="font-semibold text-xs sm:text-sm text-gray-900">
                  {faq.question}
                </span>
                <span className="text-gray-500 text-xs shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-amber-700" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-gray-600 bg-amber-50/20 leading-relaxed border-t border-amber-50">
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
