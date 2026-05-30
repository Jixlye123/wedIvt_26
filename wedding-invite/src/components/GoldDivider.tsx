"use client";

import React from "react";
import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
  delay?: number;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({ className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`gold-divider ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="gold-divider-line" />
      <div className="gold-divider-diamond" />
      <div className="gold-divider-line" />
    </motion.div>
  );
};
