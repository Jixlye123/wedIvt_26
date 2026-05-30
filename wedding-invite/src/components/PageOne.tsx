"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloralFrame } from "./FloralFrame";
import { WeddingLogo } from "./WeddingLogo";
import { GoldDivider } from "./GoldDivider";
import { AnimatedText } from "./AnimatedText";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const scaleBlur = {
  hidden: { opacity: 0, scale: 0.7, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const PageOne: React.FC = () => {
  return (
    <div className="swipe-page" style={{ position: "relative" }}>
      {/* Couple background image */}
      <div className="couple-bg" />

      {/* Watercolor flower decorations */}
      <FloralFrame position="top-left" />
      <FloralFrame position="bottom-right" />

      {/* Decorative corner borders */}
      <div className="corner-decorations" />

      {/* Parents' Request */}
      <motion.div
        className="relative w-full text-center mt-6 z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-[10px] tracking-[0.2em] font-semibold mb-1 uppercase"
          style={{ fontFamily: "var(--font-dancing)", color: "var(--text-warm)", fontSize: "0.85rem" }}
          variants={fadeUp}
          custom={0}
        >
          Mr. & Mrs. Weerasinghe
        </motion.p>

        <motion.p
          className="text-[9px] tracking-[0.3em] font-light mb-1 uppercase"
          style={{ color: "var(--rose-deep)", fontFamily: "var(--font-dancing)", fontSize: "0.7rem" }}
          variants={fadeUp}
          custom={1}
        >
          Together With
        </motion.p>

        <motion.p
          className="text-[10px] tracking-[0.2em] font-semibold mb-3 uppercase"
          style={{ fontFamily: "var(--font-dancing)", color: "var(--text-warm)", fontSize: "0.85rem" }}
          variants={fadeUp}
          custom={2}
        >
          Mr. & Mrs. Sunilsantha
        </motion.p>

        <GoldDivider delay={0.4} />

        <motion.p
          className="text-[9px] tracking-[0.15em] font-medium mb-3 uppercase py-1.5 max-w-[280px] mx-auto"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-montserrat)", fontSize: "0.65rem" }}
          variants={fadeUp}
          custom={3}
        >
          Request the honor of your presence
        </motion.p>

        <motion.p
          className="text-[8px] tracking-[0.2em] font-light uppercase"
          style={{ color: "var(--rose-accent)", fontFamily: "var(--font-montserrat)" }}
          variants={fadeUp}
          custom={4}
        >
          To grace the marriage of their daughter & son
        </motion.p>
      </motion.div>

      {/* Monogram Section */}
      <motion.div
        className="relative my-2 z-10 flex flex-col items-center"
        variants={scaleBlur}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-28 h-28 relative flex items-center justify-center">
          <WeddingLogo />
        </div>
        <motion.p
          className="text-[11px] tracking-[0.4em] font-bold mt-2 gold-gradient"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          26 · 06 · 2026
        </motion.p>
      </motion.div>

      {/* Bride & Groom Names */}
      <div className="relative w-full text-center mb-8 z-10 px-4">
        <AnimatedText
          text="Nipuni Dilthara"
          as="h2"
          className="font-script text-5xl leading-none mb-2"
          style={{ color: "var(--gold-primary)" }}
          delay={0.5}
          staggerDelay={0.03}
        />
        <motion.p
          className="font-script text-4xl my-3 rose-gold-gradient"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          &
        </motion.p>
        <AnimatedText
          text="Samith Lakshan"
          as="h2"
          className="font-script text-5xl leading-none mt-2"
          style={{ color: "var(--gold-primary)" }}
          delay={1.0}
          staggerDelay={0.03}
        />
      </div>

      {/* Spacer */}
      <div className="h-6" />
    </div>
  );
};
