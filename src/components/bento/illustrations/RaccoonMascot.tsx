import React from 'react';

interface RaccoonMascotProps {
  className?: string;
  size?: number;
}

export const RaccoonMascot: React.FC<RaccoonMascotProps> = ({ 
  className = '', 
  size = 72 
}) => {
  return (
    <div 
      className={`relative select-none pointer-events-none transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${className}`}
      style={{ width: size, height: size * 0.95 }}
    >
      <svg
        viewBox="0 0 100 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Left Ear */}
        <path
          d="M22 36 L10 12 C9 10 12 8 15 10 L34 25 Z"
          fill="#374151"
          stroke="#1F2937"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 31 L14 15 C13 13 15 12 17 13 L30 24 Z"
          fill="#E5E7EB"
        />

        {/* Right Ear */}
        <path
          d="M78 36 L90 12 C91 10 88 8 85 10 L66 25 Z"
          fill="#374151"
          stroke="#1F2937"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M80 31 L86 15 C87 13 85 12 83 13 L70 24 Z"
          fill="#E5E7EB"
        />

        {/* Head Base */}
        <ellipse
          cx="50"
          cy="48"
          rx="38"
          ry="32"
          fill="#4B5563"
        />

        {/* White Cheek Tufts */}
        <path
          d="M16 54 C12 60 14 68 22 72 C28 75 36 76 42 74 C34 70 26 62 24 52 Z"
          fill="#F3F4F6"
        />
        <path
          d="M84 54 C88 60 86 68 78 72 C72 75 64 76 58 74 C66 70 74 62 76 52 Z"
          fill="#F3F4F6"
        />

        {/* Bandit Mask (Dark patch across eyes) */}
        <path
          d="M18 42 C24 38 32 38 40 44 C45 48 55 48 60 44 C68 38 76 38 82 42 C85 48 84 56 78 60 C70 64 62 60 56 54 C53 51 47 51 44 54 C38 60 30 64 22 60 C16 56 15 48 18 42 Z"
          fill="#111827"
        />

        {/* White Eyebrow Spots */}
        <ellipse cx="32" cy="36" rx="4" ry="2.5" fill="#F3F4F6" />
        <ellipse cx="68" cy="36" rx="4" ry="2.5" fill="#F3F4F6" />

        {/* Left Eye */}
        <circle cx="33" cy="46" r="6" fill="#030712" />
        <circle cx="31.5" cy="44.5" r="2.2" fill="#FFFFFF" />
        <circle cx="34.5" cy="47.5" r="1" fill="#FFFFFF" opacity="0.8" />

        {/* Right Eye */}
        <circle cx="67" cy="46" r="6" fill="#030712" />
        <circle cx="65.5" cy="44.5" r="2.2" fill="#FFFFFF" />
        <circle cx="68.5" cy="47.5" r="1" fill="#FFFFFF" opacity="0.8" />

        {/* Muzzle (Snout) */}
        <ellipse
          cx="50"
          cy="58"
          rx="14"
          ry="10"
          fill="#F9FAFB"
        />

        {/* Nose */}
        <path
          d="M46 54 C46 52 54 52 54 54 C54 57 51 59 50 59 C49 59 46 57 46 54 Z"
          fill="#111827"
        />

        {/* Mouth */}
        <path
          d="M47 61 C48 63 50 63 50 61 C50 63 52 63 53 61"
          stroke="#374151"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Peeking Paws */}
        <g className="transition-transform duration-300 group-hover:-translate-y-0.5">
          {/* Left Paw */}
          <ellipse cx="28" cy="78" rx="7" ry="5.5" fill="#374151" stroke="#1F2937" strokeWidth="1" />
          <circle cx="24" cy="76" r="1.5" fill="#1F2937" />
          <circle cx="28" cy="74.5" r="1.5" fill="#1F2937" />
          <circle cx="32" cy="76" r="1.5" fill="#1F2937" />

          {/* Right Paw */}
          <ellipse cx="72" cy="78" rx="7" ry="5.5" fill="#374151" stroke="#1F2937" strokeWidth="1" />
          <circle cx="68" cy="76" r="1.5" fill="#1F2937" />
          <circle cx="72" cy="74.5" r="1.5" fill="#1F2937" />
          <circle cx="76" cy="76" r="1.5" fill="#1F2937" />
        </g>
      </svg>
    </div>
  );
};
