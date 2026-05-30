"use client";

import React, { useRef, useState, UIEvent } from "react";
import { motion } from "framer-motion";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { PageThree } from "./PageThree";

export const ScrollContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollHeight = e.currentTarget.scrollHeight;
    const clientHeight = e.currentTarget.clientHeight;

    // Hide indicator if scrolled near the bottom (Page 3)
    if (scrollTop > (scrollHeight - clientHeight) - 80) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="scroll-container"
        onScroll={handleScroll}
      >
        <div className="scroll-page"><PageOne /></div>
        <div className="scroll-page"><PageTwo /></div>
        <div className="scroll-page"><PageThree /></div>
      </div>

      {showScrollIndicator && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span
            className="text-[7px] tracking-[0.25em] uppercase font-semibold mb-1"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-montserrat)" }}
          >
            Scroll Down
          </span>
          <div className="scroll-indicator-dot" />
        </motion.div>
      )}
    </div>
  );
};
