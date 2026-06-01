"use client";

import React from "react";
import { motion } from "framer-motion";
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

      {/* Decorative corner borders */}
      <div className="corner-decorations" />

      {/* Parents' Request */}
      <motion.div
        className="relative w-full text-center mt-2 z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-[10px] tracking-[0.2em] font-semibold mb-1 uppercase"
          style={{ fontFamily: "var(--font-dancing)", color: "#000000", fontSize: "clamp(0.7rem, 3vw, 0.85rem)" }}
          variants={fadeUp}
          custom={0}
        >
          Mr. & Mrs. Weerasinghe
        </motion.p>

        <motion.p
          className="text-[9px] tracking-[0.3em] font-light mb-1 uppercase"
          style={{ color: "#5C4033", fontFamily: "var(--font-dancing)", fontSize: "clamp(0.6rem, 2.5vw, 0.7rem)" }}
          variants={fadeUp}
          custom={1}
        >
          Together With
        </motion.p>

        <motion.p
          className="text-[10px] tracking-[0.2em] font-semibold mb-2 uppercase"
          style={{ fontFamily: "var(--font-dancing)", color: "var(--text-warm)", fontSize: "clamp(0.7rem, 3vw, 0.85rem)" }}
          variants={fadeUp}
          custom={2}
        >
          Mr. & Mrs. Sunilsantha
        </motion.p>

        <GoldDivider delay={0.4} />

        <motion.p
          className="text-[9px] tracking-[0.15em] font-medium mb-2 uppercase py-1 max-w-[280px] mx-auto"
          style={{ color: "#000000", fontFamily: "var(--font-montserrat)", fontSize: "clamp(0.55rem, 2.2vw, 0.65rem)" }}
          variants={fadeUp}
          custom={3}
        >
          Request the honor of your presence
        </motion.p>

        <motion.p
          style={{
            fontFamily: "var(--font-dancing)",
            fontSize: "clamp(0.85rem, 4vw, 1rem)",
            fontWeight: 700,
            color: "var(--rose-deep)",
            letterSpacing: "0.04em",
            borderBottom: "1px solid rgba(183,110,121,0.35)",
            paddingBottom: "2px",
            display: "inline-block",
          }}
          variants={fadeUp}
          custom={4}
        >
          To grace the marriage of their daughter &amp; son
        </motion.p>
      </motion.div>

      {/* Monogram Section */}
      <motion.div
        className="relative my-1.5 z-10 flex flex-col items-center"
        variants={scaleBlur}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center">
          <WeddingLogo />
        </div>
        <motion.p
          className="date-stamp"
          style={{ fontFamily: "var(--font-cinzel)", marginTop: "0.25rem", fontSize: "0.6rem" }}
        >
          26 · 06 · 26
        </motion.p>
      </motion.div>

      {/* Bride & Groom Names */}
      <div className="relative w-full text-center mb-4 z-10 px-4">
        <AnimatedText
          text="Nipuni Dilthara"
          as="h2"
          className="font-script leading-none mb-1"
          style={{
            color: "var(--gold-primary)",
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2rem, 10vw, 2.75rem)",
            display: "block",
            letterSpacing: "0.02em"
          }}
          delay={0.5}
          staggerDelay={0.03}
        />
        <motion.p
          className="font-script my-1 rose-gold-gradient"
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(1.8rem, 8vw, 2.2rem)",
            lineHeight: "1"
          }}
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
          className="font-script leading-none mt-1"
          style={{
            color: "var(--gold-primary)",
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2rem, 10vw, 2.75rem)",
            display: "block",
            letterSpacing: "0.02em"
          }}
          delay={1.0}
          staggerDelay={0.03}
        />
      </div>

      {/* Spacer */}
      <div className="h-6" />
    </div>
  );
};
