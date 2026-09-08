import React from 'react';
import { X, Play, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnrollClick: () => void;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({ 
  isOpen, 
  onClose, 
  onEnrollClick 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111620] text-white rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#181F2C] border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-serif font-bold text-lg">ॐ</span>
            <span className="font-serif font-bold text-sm text-amber-200">
              Pitru Paksh Masterclass Curriculum Preview
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Mockup */}
        <div className="p-6 space-y-5">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-amber-500/30 flex flex-col items-center justify-center group shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Acharya Ganesh Pitru Paksh Overview"
              className="w-full h-full object-cover filter brightness-50 group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 p-1 shadow-2xl group-hover:scale-110 transition-transform">
                <div className="w-full h-full bg-black/60 rounded-full flex items-center justify-center text-amber-300">
                  <Play className="w-7 h-7 fill-amber-300 ml-1" />
                </div>
              </div>
              <span className="mt-3 text-xs font-bold text-amber-200 tracking-wider uppercase bg-black/70 px-3 py-1 rounded-full border border-amber-500/30">
                Course Walkthrough by Acharya Ganesh (3:45 mins)
              </span>
            </div>

            {/* Video metadata overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-gray-300 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <span>Chapter 1: Why Tarpan at Home Works</span>
              <span className="text-amber-400 font-mono">1080p Full HD</span>
            </div>
          </div>

          {/* Quick Syllabus Checklist */}
          <div className="space-y-2 text-xs text-gray-300">
            <div className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">
              What You Will Discover Inside:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Exact Kusha grass & water mudras</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garuda Purana Shradh rules</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>9th house Pitru Dosh identification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sarva Pitru Amavasya solutions</span>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-gray-800">
            <div className="text-xs text-gray-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Includes 100+ lessons & downloadable guides</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onEnrollClick();
              }}
              className="cursor-pointer w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Enroll For ₹1,500</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
