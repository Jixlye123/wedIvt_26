"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CoupleIntroProps {
  onDismiss: () => void;
}

export const CoupleIntro: React.FC<CoupleIntroProps> = ({ onDismiss }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [exiting, setExiting] = useState(false);

  const dismiss = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(onDismiss, 800);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.addEventListener("ended", dismiss);
    return () => v.removeEventListener("ended", dismiss);
  }, []);

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Full-screen cinematic video */}
      <video
        ref={videoRef}
        className="intro-video-bg"
        src="/Hailuo_Video_Create a smooth 3-second cinem_517155047544016905.mp4"
        autoPlay
        playsInline
        muted
        preload="auto"
      />

      {/* Gradient scrim — keeps text readable against any video */}
      <div className="intro-scrim" />

      {/* Couple name + tagline anchored at bottom */}
      <motion.div
        className="intro-text-wrap"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="intro-names">Nipuni &amp; Samith</p>
        <motion.div
          className="intro-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        />
        <p className="intro-tagline-sub">with joy in their hearts</p>
        <p className="intro-tagline-main">invite you to celebrate their wedding</p>
      </motion.div>


    </motion.div>
  );
};
