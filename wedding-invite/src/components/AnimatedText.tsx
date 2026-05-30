"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  type?: "word" | "letter";
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  as: Component = "p",
  type = "letter",
  style,
}) => {
  const MotionComponent = motion.create(Component);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 8,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const items = type === "word" ? text.split(" ") : text.split("");

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: "inline-block", ...style }}
    >
      {items.map((item, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          style={{
            display: "inline-block",
            whiteSpace: item === " " ? "pre" : "normal",
          }}
        >
          {type === "word" ? (idx < items.length - 1 ? item + "\u00A0" : item) : item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </MotionComponent>
  );
};
