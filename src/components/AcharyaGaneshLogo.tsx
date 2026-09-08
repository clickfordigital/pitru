import React from 'react';

interface AcharyaGaneshLogoProps {
  className?: string;
}

export const AcharyaGaneshLogo: React.FC<AcharyaGaneshLogoProps> = ({ className = 'h-16' }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 160"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF4D6" />
            <stop offset="70%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="#FFB300" />
          </radialGradient>
          
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9E8B6" />
            <stop offset="50%" stopColor="#FFF7D6" />
            <stop offset="100%" stopColor="#F3DC9B" />
          </linearGradient>

          <filter id="subtleDrop" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#421a08" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Outer Circular Ring (Mandal / Zodiac Wheel) */}
        <g filter="url(#subtleDrop)">
          {/* External decorative gear/scallop rim */}
          <circle cx="100" cy="65" r="54" fill="#78350F" />
          <circle cx="100" cy="65" r="50" fill="#B45309" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="100" cy="65" r="45" fill="#78350F" />
          
          {/* Radiating Zodiac division rays */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + Math.cos(angle) * 44;
            const y1 = 65 + Math.sin(angle) * 44;
            const x2 = 100 + Math.cos(angle) * 50;
            const y2 = 65 + Math.sin(angle) * 50;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FDE68A"
                strokeWidth="1.2"
              />
            );
          })}

          {/* Inner ring & glowing aura */}
          <circle cx="100" cy="65" r="41" fill="url(#sunGlow)" stroke="#92400E" strokeWidth="1.5" />
          
          {/* Astrological constellation/symbolic dots */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const cx = 100 + Math.cos(angle) * 36;
            const cy = 65 + Math.sin(angle) * 36;
            return <circle key={`dot-${i}`} cx={cx} cy={cy} r="1" fill="#B45309" />;
          })}
        </g>

        {/* Meditating Guru / Acharya Silhouette & Illustration */}
        <g id="acharya-figure" transform="translate(100, 65)">
          {/* Radiant Halo behind head */}
          <circle cx="0" cy="-12" r="14" fill="#FEF3C7" opacity="0.9" />
          <circle cx="0" cy="-12" r="12" stroke="#F59E0B" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" />

          {/* Head & Hair/Bun */}
          <circle cx="0" cy="-22" r="4.5" fill="#3D1D12" /> {/* Top bun (juda) */}
          <circle cx="0" cy="-13" r="8" fill="#F8C697" /> {/* Face */}
          
          {/* Hair & Beard */}
          <path d="M-8 -15 Q-4 -21 0 -21 Q4 -21 8 -15 Q6 -8 8 -2 Q4 3 0 4 Q-4 3 -8 -2 Z" fill="#3D1D12" />
          <path d="M-6 -10 Q0 -6 6 -10 Q4 2 0 4 Q-4 2 -6 -10 Z" fill="#2E140C" /> {/* Flowing Beard */}
          
          {/* Face Details: Tilak & serene eyes */}
          <path d="M-0.8 -18 L0.8 -18 L0.8 -13 L-0.8 -13 Z" fill="#DC2626" /> {/* Red Tilak */}
          <circle cx="0" cy="-14" r="0.8" fill="#FBBF24" />
          <path d="M-3.5 -13 Q-2 -11 -0.5 -13" stroke="#2E140C" strokeWidth="0.7" fill="none" strokeLinecap="round" />
          <path d="M0.5 -13 Q2 -11 3.5 -13" stroke="#2E140C" strokeWidth="0.7" fill="none" strokeLinecap="round" />

          {/* Rudraksha / Garland */}
          <path d="M-7 -6 Q0 0 7 -6" stroke="#9A3412" strokeWidth="1.2" strokeDasharray="1.5 1.2" fill="none" />

          {/* Torso & Saffron Robe / Angavastram */}
          <path
            d="M-15 14 Q-12 -2 -5 -5 Q0 -7 5 -5 Q12 -2 15 14 Z"
            fill="#EA580C"
          />
          {/* Golden border on shawl */}
          <path
            d="M-8 -5 Q0 5 13 14"
            stroke="#FDE047"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M-6 -4 Q2 6 15 14"
            stroke="#9A3412"
            strokeWidth="0.8"
            fill="none"
          />

          {/* Crossed Meditating Legs in Lotus Pose */}
          <path
            d="M-22 17 Q-15 10 0 12 Q15 10 22 17 Q12 24 0 23 Q-12 24 -22 17 Z"
            fill="#C2410C"
          />
          {/* Folded hands in Dhyana Mudra */}
          <ellipse cx="0" cy="11" rx="6" ry="3" fill="#F8C697" />
          <circle cx="0" cy="10" r="1.5" fill="#E0834E" />
        </g>

        {/* Lower Banner Ribbon 1: "ACHARYA GANESH" */}
        <g filter="url(#subtleDrop)">
          {/* Ribbon back folds (shadows) */}
          <path d="M22 108 L34 94 L34 114 Z" fill="#92400E" />
          <path d="M178 108 L166 94 L166 114 Z" fill="#92400E" />

          {/* Ribbon notched ends */}
          <path d="M12 116 L34 94 L34 118 L24 126 Z" fill="#D97706" />
          <path d="M188 116 L166 94 L166 118 L176 126 Z" fill="#D97706" />

          {/* Main Arched Ribbon Banner */}
          <path
            d="M28 106 Q100 95 172 106 L168 126 Q100 115 32 126 Z"
            fill="url(#ribbonGrad)"
            stroke="#78350F"
            strokeWidth="1.4"
          />

          {/* Text: ACHARYA GANESH */}
          <text
            x="100"
            y="118.5"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="13.5"
            fontWeight="900"
            letterSpacing="0.06em"
            fill="#451A03"
          >
            Acharya Ganesh
          </text>
        </g>

        {/* Lower Motto Scroll: "जो सही राह दिखाए" */}
        <g>
          {/* Inner small scroll pill */}
          <rect
            x="48"
            y="131"
            width="104"
            height="18"
            rx="9"
            fill="#FFFBEB"
            stroke="#92400E"
            strokeWidth="1.2"
          />
          {/* Little ribbon swallowtails */}
          <path d="M48 135 L42 140 L48 145 Z" fill="#B45309" stroke="#92400E" strokeWidth="0.8" />
          <path d="M152 135 L158 140 L152 145 Z" fill="#B45309" stroke="#92400E" strokeWidth="0.8" />

          {/* Motto Hindi Text */}
          <text
            x="100"
            y="143.5"
            textAnchor="middle"
            fontFamily="'Noto Sans Devanagari', 'Segoe UI', system-ui, sans-serif"
            fontSize="9"
            fontWeight="700"
            fill="#78350F"
          >
            जो सही राह दिखाए
          </text>
        </g>
      </svg>
    </div>
  );
};
