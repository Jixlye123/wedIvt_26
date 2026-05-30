"use client";

import React, { useState, useRef, TouchEvent } from "react";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { PageThree } from "./PageThree";
import { ChevronRight } from "lucide-react";

export const SwipeContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Minimum swipe distance in px to register a page change
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < 2) {
      setCurrentIndex((prev) => prev + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div 
      className="relative w-full h-full flex flex-col justify-between"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Swipeable container */}
      <div className="w-full h-full overflow-hidden relative">
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: "300%"
          }}
        >
          {/* Card Pages */}
          <div className="w-1/3 h-full"><PageOne /></div>
          <div className="w-1/3 h-full"><PageTwo /></div>
          <div className="w-1/3 h-full"><PageThree /></div>
        </div>
      </div>

      {/* Swipe Navigation Dots */}
      <div className="pagination-dots">
        {[0, 1, 2].map((idx) => (
          <div 
            key={idx} 
            className={`swipe-dot ${idx === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Hint to swipe, shown only on page 1 */}
      {currentIndex === 0 && (
        <div className="swipe-hint">
          <div className="flex items-center gap-1">
            <span>Swipe Left</span>
            <ChevronRight size={14} className="animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};
