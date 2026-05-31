"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WeddingLogo } from "./WeddingLogo";

interface DissolveOverlayProps {
  onOpen: () => void;
}

export const DissolveOverlay: React.FC<DissolveOverlayProps> = ({ onOpen }) => {
  const [phase, setPhase] = useState<"idle" | "opening">("idle");
  const [mounted, setMounted] = useState(true);

  const handleOpen = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    onOpen();
    setTimeout(() => setMounted(false), 1500);
  };

  if (!mounted) return null;

  const opening = phase === "opening";

  return (
    <div className={`envelope-outer${opening ? " slide-out" : ""}`}>
      {/* Floral background */}
      <div className="dissolve-bg-pattern" />

      {/* Top triangular flap — compresses upward on open */}
      <div className={`envelope-flap${opening ? " flap-open" : ""}`} />

      {/* Envelope fold-line decorations (bottom V + side diagonals) */}
      <div className="envelope-folds" />

      {/* Dashed inner border */}
      <div className="dissolve-border" />

      {/* Welcome text */}
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
          className="gold-gradient"
          style={{ fontFamily: "var(--font-script)", fontSize: "1.5rem", textTransform: "none" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Nipuni & Samith
        </motion.p>
      </motion.div>

      {/* Wax seal button */}
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
