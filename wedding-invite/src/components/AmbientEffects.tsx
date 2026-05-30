"use client";

import React, { useEffect, useState } from "react";

// Realistic petal SVG shapes — 4 variants for natural variety
const PETAL_SHAPES = [
  // Rose petal 1
  "M12 2C12 2 18 7 18 13C18 19 12 22 12 22C12 22 6 19 6 13C6 7 12 2 12 2Z",
  // Rose petal 2 (wider)
  "M12 3C14 5 19 9 18 14C17 19 12 22 12 22C12 22 7 19 6 14C5 9 10 5 12 3Z",
  // Soft round petal
  "M12 2C16 4 20 8 19 14C18 20 12 23 12 23C12 23 6 20 5 14C4 8 8 4 12 2Z",
  // Cherry blossom petal
  "M12 1C12 1 17 5 18 10C19 15 15 19 12 22C9 19 5 15 6 10C7 5 12 1 12 1Z",
];

// Warm romantic color palette for petals
const PETAL_COLORS = [
  { fill: "#d4a0a0", opacity: 0.35 }, // Dusty rose
  { fill: "#b76e79", opacity: 0.25 }, // Deep rose
  { fill: "#c9a96e", opacity: 0.3 },  // Gold
  { fill: "#e8d5a3", opacity: 0.35 }, // Champagne
  { fill: "#f0c4c4", opacity: 0.3 },  // Light pink
  { fill: "#e6c5a0", opacity: 0.3 },  // Warm beige
  { fill: "#cc8899", opacity: 0.25 }, // Mauve
  { fill: "#f5e6d3", opacity: 0.4 },  // Ivory
];

interface PetalConfig {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  rotation: string;
  shape: string;
  fill: string;
  fillOpacity: number;
  animationType: string;
}

export const AmbientEffects: React.FC = () => {
  const [petals, setPetals] = useState<PetalConfig[]>([]);

  useEffect(() => {
    const newPetals: PetalConfig[] = Array.from({ length: 22 }).map((_, idx) => {
      const colorScheme = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      return {
        id: idx,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${12 + Math.random() * 18}s`,
        size: `${10 + Math.random() * 16}px`,
        rotation: `${Math.random() * 360}deg`,
        shape: PETAL_SHAPES[Math.floor(Math.random() * PETAL_SHAPES.length)],
        fill: colorScheme.fill,
        fillOpacity: colorScheme.opacity,
        animationType: Math.random() > 0.5 ? "fall" : "fallSway",
      };
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            animationName: petal.animationType,
            width: petal.size,
            height: petal.size,
            transform: `rotate(${petal.rotation})`,
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={petal.shape}
            fill={petal.fill}
            fillOpacity={petal.fillOpacity}
          />
        </svg>
      ))}
    </div>
  );
};
