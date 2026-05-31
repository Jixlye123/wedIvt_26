"use client";

import React, { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  color: string;
}

const SPARKLE_COLORS = [
  "#e8d5a3",
  "#c9a96e",
  "#d4a0a0",
  "#f0e4cc",
  "#b76e79",
];

export const SparkleEffect: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: 12 }).map((_, idx) => ({
      id: idx,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: 2 + Math.random() * 3,
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.duration,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: `radial-gradient(circle, ${s.color} 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
};
