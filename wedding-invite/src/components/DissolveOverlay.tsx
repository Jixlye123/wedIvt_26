"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeddingLogo } from "./WeddingLogo";

interface DissolveOverlayProps {
  onOpen: () => void;
}

// Small sparkle burst on tap
const SparkBurst: React.FC = () => {
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * 360;
    const distance = 50 + Math.random() * 40;
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    return { id: i, x, y, size: 2 + Math.random() * 3 };
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-[95] flex items-center justify-center">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: ["#e8d5a3", "#c9a96e", "#d4a0a0", "#b76e79"][p.id % 4],
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export const DissolveOverlay: React.FC<DissolveOverlayProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRipples, setShowRipples] = useState(false);
  const [showSparks, setShowSparks] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleOpen = () => {
    setShowRipples(true);
    setShowSparks(true);
    onOpen(); // Trigger background music play immediately on user gesture

    // Wait a brief moment for water ripples to expand before dissolving overlay
    setTimeout(() => {
      setIsOpen(true);
    }, 400);
  };

  useEffect(() => {
    if (isOpen) {
      // Hide the overlay from DOM after the transition (1.4 seconds) completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className={`dissolve-wrapper ${isOpen ? "fade-out" : ""}`}>
      {/* Tap Ripples (Water Drop Effect) */}
      {showRipples && (
        <>
          <div className="ripple-circle" style={{ animationDelay: "0s" }} />
          <div className="ripple-circle" style={{ animationDelay: "0.15s" }} />
          <div className="ripple-circle" style={{ animationDelay: "0.3s" }} />
        </>
      )}

      {/* Sparkle burst on tap */}
      <AnimatePresence>
        {showSparks && <SparkBurst />}
      </AnimatePresence>

      {/* Invitation Welcome Text */}
      <motion.div
        className="dissolve-text z-10 px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="text-[9px] tracking-[0.3em] font-light mb-2 uppercase"
          style={{ color: "var(--text-muted)" }}
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.3em", opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Wedding Invitation
        </motion.p>
        <motion.p
          className="text-[14px] tracking-[0.2em] font-semibold uppercase gold-gradient"
          style={{ fontFamily: "var(--font-script)", fontSize: "1.5rem", textTransform: "none" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Nipuni & Samith
        </motion.p>
      </motion.div>

      {/* Center Gold Wax Seal / Open Button */}
      <motion.button
        className="dissolve-seal z-10"
        onClick={handleOpen}
        aria-label="Open wedding invitation"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <div className="dissolve-seal-inner flex flex-col items-center justify-center">
          <div className="w-10 h-10 mb-1">
            <WeddingLogo />
          </div>
          <div className="text-[6px] font-bold opacity-90 uppercase tracking-widest leading-tight">
            Tap to<br />Open
          </div>
        </div>
      </motion.button>

      {/* Subtle instruction text */}
      <motion.p
        className="text-[7px] tracking-[0.3em] uppercase mt-6 z-10"
        style={{ color: "var(--text-muted)", opacity: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Tap the seal to open
      </motion.p>
    </div>
  );
};
