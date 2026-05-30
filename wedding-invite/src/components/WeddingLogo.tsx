import React from "react";

interface WeddingLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const WeddingLogo: React.FC<WeddingLogoProps> = ({
  className = "w-full h-full object-contain",
  style,
}) => {
  return (
    <img
      src="/photo_2026-05-29_23-50-58-removebg-preview.png"
      alt="N & S Monogram"
      className={className}
      style={style}
    />
  );
};
