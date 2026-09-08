import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles
} from 'lucide-react';

export const VideoIntroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const totalDuration = 272; // 4 minutes 32 seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize timer for interactive playback preview
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

  return (
    <section id="video-intro" className="py-10 sm:py-14 px-4 max-w-5xl mx-auto">
      {/* Short & Clean Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>COURSE VIDEO SESSION</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
          Course Overview by Mentor Hanish Bagga
        </h2>
        <p className="text-sm text-gray-600">
          Watch Hanish Sir explain the Vedic significance of Shradh and what this masterclass covers.
        </p>
      </div>

      {/* Single View Clean Video Player */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 shadow-xl shadow-amber-950/20 group">
          
          <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 to-black">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

            {/* Center Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video session'}
                className={`pointer-events-auto cursor-pointer flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-300 active:scale-95 ${
                  isPlaying 
                    ? 'bg-black/50 hover:bg-black/80 opacity-0 group-hover:opacity-100' 
                    : 'bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-[2.5px] shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:scale-105'
                }`}
              >
                <div className="w-full h-full rounded-full bg-slate-950/80 flex items-center justify-center border border-amber-400/40">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400 ml-1" />
                  )}
                </div>
              </button>

              {!isPlaying && (
                <span className="mt-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-amber-400/40 text-amber-200 text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Hanish Sir Course Introduction (4:32)
                </span>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-3 sm:p-4 flex flex-col gap-2 z-10">
              {/* Progress Scrubber */}
              <div 
                className="w-full h-1.5 sm:h-2 bg-gray-700/80 rounded-full cursor-pointer relative overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const percent = clickX / rect.width;
                  handleSeek(Math.floor(percent * totalDuration));
                }}
              >
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-200"
                  style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                />
              </div>

              {/* Time & Controls */}
              <div className="flex items-center justify-between text-white text-xs pt-1">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay}
                    className="cursor-pointer hover:text-amber-400 transition-colors p-1"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button 
                    onClick={toggleMute}
                    className="cursor-pointer hover:text-amber-400 transition-colors p-1"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="text-gray-300 font-mono text-[11px] sm:text-xs">
                    <span className="text-amber-300 font-semibold">{formatTime(currentTime)}</span>
                    <span className="mx-1 text-gray-500">/</span>
                    <span>{formatTime(totalDuration)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleSeek(0)}
                  className="cursor-pointer hover:text-amber-300 text-gray-300 text-[11px] sm:text-xs underline font-medium"
                >
                  Restart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
