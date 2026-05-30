import React from "react";

interface HibiscusDecorProps {
  className?: string;
  style?: React.CSSProperties;
}

export const HibiscusDecor: React.FC<HibiscusDecorProps> = ({ className, style }) => {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Light grey hibiscus vector artwork */}
      <g stroke="#b8974c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
        {/* Leaf 1 */}
        <path d="M40 90 C 20 80, 10 50, 30 30 C 50 10, 80 20, 90 40 C 80 60, 60 80, 40 90 Z" fill="none" />
        <path d="M30 30 Q 55 55 90 40" fill="none" />
        <path d="M48 42 Q 40 50 35 48" fill="none" />
        <path d="M60 50 Q 55 60 48 62" fill="none" />
        <path d="M72 58 Q 70 70 65 72" fill="none" />

        {/* Leaf 2 */}
        <path d="M120 40 C 130 20, 160 10, 180 30 C 200 50, 190 80, 170 90 C 150 80, 130 60, 120 40 Z" fill="none" />
        <path d="M180 30 Q 155 55 120 40" fill="none" />
        <path d="M165 42 Q 160 50 155 48" fill="none" />
        <path d="M150 50 Q 145 60 138 62" fill="none" />

        {/* Petal 1 (Top) */}
        <path
          d="M100 100 C 90 70, 70 50, 100 45 C 130 40, 110 70, 100 100 Z"
          fill="rgba(184, 151, 76, 0.03)"
        />
        {/* Petal 2 (Right) */}
        <path
          d="M100 100 C 130 90, 150 70, 155 100 C 160 130, 130 110, 100 100 Z"
          fill="rgba(184, 151, 76, 0.03)"
        />
        {/* Petal 3 (Bottom Right) */}
        <path
          d="M100 100 C 110 130, 90 160, 120 165 C 150 170, 130 140, 100 100 Z"
          fill="rgba(184, 151, 76, 0.03)"
        />
        {/* Petal 4 (Bottom Left) */}
        <path
          d="M100 100 C 70 110, 50 130, 45 100 C 40 70, 70 90, 100 100 Z"
          fill="rgba(184, 151, 76, 0.03)"
        />
        {/* Petal 5 (Left) */}
        <path
          d="M100 100 C 90 130, 70 150, 100 155 C 130 160, 110 130, 100 100 Z"
          fill="rgba(184, 151, 76, 0.03)"
        />

        {/* Center details and lines inside petals */}
        <path d="M100 100 Q 95 70 92 55" />
        <path d="M100 100 Q 120 95 135 92" />
        <path d="M100 100 Q 105 130 112 145" />
        <path d="M100 100 Q 80 105 65 108" />
        <path d="M100 100 Q 95 125 90 140" />

        {/* Long Stamen Column (Pistil) */}
        <path d="M100 100 C 115 80, 140 70, 160 55" strokeWidth="2" stroke="#b8974c" />
        {/* Stamen anthers (little dots) */}
        <circle cx="160" cy="55" r="3" fill="#b8974c" />
        <circle cx="155" cy="50" r="2" fill="#b8974c" />
        <circle cx="163" cy="62" r="2" fill="#b8974c" />
        <circle cx="148" cy="58" r="2" fill="#b8974c" />
        <circle cx="142" cy="65" r="1.5" fill="#b8974c" />
        <circle cx="135" cy="70" r="1.5" fill="#b8974c" />
      </g>
    </svg>
  );
};
