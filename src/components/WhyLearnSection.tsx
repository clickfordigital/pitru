import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  BookOpen, 
  HelpCircle, 
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Maximize2
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhyLearnSectionProps {
  onOpenVideoModal?: () => void;
}

export const WhyLearnSection: React.FC<WhyLearnSectionProps> = ({ 
  onOpenVideoModal
}) => {
  // Exactly 5 cards
  const features = [
    { 
      id: '01',
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: '17+ Years Experience', 
      subtitle: 'Authentic Vedic Mastery',
      desc: 'Over 17+ years deciphering Vedic texts, horoscope ancestral debts, and guiding 50,000+ families with proven Shastric remedies.'
    },
    { 
      id: '02',
      icon: <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: 'Certified Course', 
      subtitle: 'Recognized Credential',
      desc: 'Earn an official verified Certificate of Completion acknowledging your proficiency in authentic Shradh Vidhi & Tarpan.'
    },
    { 
      id: '03',
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: '1 Year Complete Access', 
      subtitle: 'Full 365-Day Access',
      desc: 'Re-watch video lessons, review remedial mantras, and download ritual guides at your own pace anytime throughout the year.'
    },
    { 
      id: '04',
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: 'Practical Home Learning', 
      subtitle: 'Step-by-Step at Home',
      desc: 'Clear DIY instructions with precise Sanskrit mantras, Mudra diagrams, and zero expensive priests required.'
    },
    { 
      id: '05',
      icon: <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: 'Live Doubt Sessions', 
      subtitle: 'Direct Faculty Support',
      desc: 'Get your family gotra, tithi calculations, and ancestral questions clarified directly in live interactive Q&A sessions.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Video playback state for interactive YouTube player
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const totalDuration = 272; // 4 minutes 32 seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (seconds: number) => {
    setCurrentTime(seconds);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Cycle through the 5 cards one by one every 0.8 seconds (800ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 800);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="whylearn" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1E4] border border-[#E5CEAB] text-[#783908] text-xs font-bold uppercase tracking-wider mb-2">
          <span>WHY CHOOSE THIS COURSE</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-2">
          Why Learn From Acharya Ganesh?
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Rooted in Parashari Vedic Astrology, structured for beginners and practicing astrologers alike.
        </p>

        {/* Feature Cycle Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Highlight feature ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i 
                  ? 'w-6 bg-[#8A3A0B] shadow-sm' 
                  : 'w-2 bg-[#E2D2BD] hover:bg-[#D4BEA3]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Grid: 5 Feature Cards on Left, YouTube Video Section on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left 7 Columns: 5 Feature Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {features.map((feat, idx) => {
            const isActive = activeIndex === idx;
            const isLastSpan = idx === 4; // 5th card spans full width for perfect symmetry

            return (
              <motion.div
                key={feat.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isLastSpan ? 'sm:col-span-2' : 'col-span-1'
                } ${
                  isActive
                    ? 'bg-gradient-to-br from-[#FFFDF8] via-[#FFF6E5] to-[#FEEDCD] border-[#D48F35] shadow-lg shadow-amber-950/10 ring-2 ring-[#EAA84C]/50 scale-[1.02]'
                    : 'bg-white/95 border-[#E6DBCA] shadow-2xs hover:border-[#C48E4D] hover:bg-[#FFFBF5] hover:shadow-md'
                }`}
              >
                {isLastSpan ? (
                  /* 5th Card: Full-width Horizontal Layout */
                  <div className="sm:flex sm:items-start sm:gap-5">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 transition-all shadow-sm ${
                      isActive 
                        ? 'bg-[#8A3A0B] text-white shadow-[#8A3A0B]/30' 
                        : 'bg-gradient-to-br from-[#FAF2E6] to-[#F3E5D0] border border-[#E5D2B8] text-[#783908]'
                    }`}>
                      {React.cloneElement(feat.icon, {
                        className: `w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-white' : 'text-[#783908]'}`
                      })}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                          {feat.title}
                        </h3>
                        <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                          isActive 
                            ? 'bg-[#8A3A0B] text-white shadow-xs' 
                            : 'bg-[#FAF0E1] text-[#783908] border border-[#E8D4BC]'
                        }`}>
                          {feat.subtitle}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Cards 1-4: Spacious Vertical Stack Layout */
                  <div>
                    {/* Header Row: Icon + Subtitle Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all shadow-sm ${
                        isActive 
                          ? 'bg-[#8A3A0B] text-white shadow-[#8A3A0B]/30' 
                          : 'bg-gradient-to-br from-[#FAF2E6] to-[#F3E5D0] border border-[#E5D2B8] text-[#783908]'
                      }`}>
                        {React.cloneElement(feat.icon, {
                          className: `w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-white' : 'text-[#783908]'}`
                        })}
                      </div>

                      <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 ${
                        isActive 
                          ? 'bg-[#8A3A0B] text-white shadow-xs' 
                          : 'bg-[#FAF0E1] text-[#783908] border border-[#E8D4BC]'
                      }`}>
                        {feat.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {feat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right 5 Columns: YouTube Section (Replaces Consultation Card) */}
        <div id="video-intro" className="lg:col-span-5 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E6] to-[#F5EAD6] rounded-2xl p-5 sm:p-6 border border-[#DEC4A1] shadow-md flex flex-col justify-between space-y-4">
          
          {/* Top Row: YouTube Branding & Badges */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-6 rounded-md bg-[#FF0000] flex items-center justify-center text-white shadow-xs">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block leading-tight">
                  Acharya Ganesh
                </span>
                <span className="text-[10px] text-gray-600 block leading-tight">
                  Official YouTube Video
                </span>
              </div>
            </div>
            
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider">
              Preview Session
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              Course Overview by Mentor Hanish Bagga
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Watch Hanish Sir explain the Vedic significance of Shradh, ancestor karma remedies, and what is covered in the 20-part syllabus.
            </p>
          </div>

          {/* YouTube-Style Video Player */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-amber-400/50 shadow-md group">
            <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden bg-slate-950">
              {/* Mentor Poster */}
              <img
                src="/acharya-ganesh-pitru-paksh.jpg"
                alt="Mentor Hanish Bagga introducing the Pitru Paksha & Shradh Masterclass"
                className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                  isPlaying ? 'scale-105 opacity-90' : 'opacity-95'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video session'}
                  className={`pointer-events-auto cursor-pointer flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-300 active:scale-95 ${
                    isPlaying 
                      ? 'bg-black/50 hover:bg-black/80 opacity-0 group-hover:opacity-100' 
                      : 'bg-[#FF0000] hover:bg-[#E60000] text-white shadow-xl shadow-red-600/40 hover:scale-105'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  )}
                </button>

                {!isPlaying && (
                  <span className="mt-2.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Hanish Sir Orientation (4:32)
                  </span>
                )}
              </div>

              {/* Bottom Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-2.5 sm:p-3 flex flex-col gap-1.5 z-10">
                {/* Progress Scrubber */}
                <div 
                  className="w-full h-1.5 bg-gray-700/80 rounded-full cursor-pointer relative overflow-hidden"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percent = clickX / rect.width;
                    handleSeek(Math.floor(percent * totalDuration));
                  }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-red-600 to-amber-400 rounded-full transition-all duration-200"
                    style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                  />
                </div>

                {/* Time & Controls */}
                <div className="flex items-center justify-between text-white text-[11px] pt-0.5">
                  <div className="flex items-center gap-2.5">
                    <button 
                      onClick={togglePlay}
                      className="cursor-pointer hover:text-amber-400 transition-colors p-0.5"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>

                    <button 
                      onClick={toggleMute}
                      className="cursor-pointer hover:text-amber-400 transition-colors p-0.5"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>

                    <div className="text-gray-300 font-mono text-[10px] sm:text-[11px]">
                      <span className="text-amber-300 font-semibold">{formatTime(currentTime)}</span>
                      <span className="mx-1 text-gray-500">/</span>
                      <span>{formatTime(totalDuration)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleSeek(0)}
                      className="cursor-pointer hover:text-amber-300 text-gray-300 text-[10px] flex items-center gap-1 font-medium"
                      title="Restart Video"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restart</span>
                    </button>
                    {onOpenVideoModal && (
                      <button 
                        onClick={onOpenVideoModal}
                        className="cursor-pointer hover:text-amber-300 text-gray-300 text-[10px] flex items-center gap-1 font-medium ml-1"
                        title="Expand Video"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Highlights Under Video */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-gray-700 pt-0.5">
            <div className="bg-white/80 py-1.5 px-1 rounded-lg border border-amber-200/70">
              ⏱️ 4:32 Mins
            </div>
            <div className="bg-white/80 py-1.5 px-1 rounded-lg border border-amber-200/70">
              📜 20-Part Vidhi
            </div>
            <div className="bg-white/80 py-1.5 px-1 rounded-lg border border-amber-200/70">
              🌟 Hindi & English
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-1">
            <button
              onClick={onOpenVideoModal || togglePlay}
              className="w-full cursor-pointer py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-stone-900 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider text-center shadow transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{isPlaying ? 'Watching Overview Session' : 'Watch Full Video Session'}</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
