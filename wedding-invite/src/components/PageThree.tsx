"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";
import { GoldDivider } from "./GoldDivider";

interface AgendaItem {
  time: string;
  title: string;
}

// Floating hearts for the RSVP page
const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{
    id: number;
    left: string;
    delay: string;
    duration: string;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 8 }).map((_, idx) => ({
      id: idx,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 6}s`,
      size: 8 + Math.random() * 10,
      color: ["#d4a0a0", "#b76e79", "#c9a96e", "#e8d5a3"][Math.floor(Math.random() * 4)],
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          size={h.size}
          fill={h.color}
          color={h.color}
          style={{
            position: "absolute",
            bottom: "-10px",
            left: h.left,
            animationName: "floatHeart",
            animationDelay: h.delay,
            animationDuration: h.duration,
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

const timelineItemVariant = {
  hidden: { opacity: 0, x: -25, rotate: -2 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export const PageThree: React.FC = () => {
  const agenda: AgendaItem[] = [
    { time: "08:49 AM", title: "Marriage Registration" },
    { time: "09:30 AM", title: "Poruwa Ceremony" },
    { time: "10:30 AM", title: "Reception" },
    { time: "12:00 PM", title: "Buffet Opens" },
    { time: "02:30 PM", title: "Dance Floor" },
  ];

  return (
    <div className="swipe-page" style={{ position: "relative" }}>
      {/* Floating hearts background */}
      <FloatingHearts />

      <div className="corner-decorations" />

      {/* Page Title */}
      <motion.div
        className="relative w-full text-center mt-6 z-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-xs tracking-[0.25em] font-semibold uppercase mb-1 gold-gradient"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Wedding Agenda
        </h2>
        <GoldDivider delay={0.15} />
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="relative w-full max-w-[290px] mx-auto z-10 my-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="timeline">
          {agenda.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              variants={timelineItemVariant}
              custom={idx}
            >
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.12 + 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              />
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-title" style={{ color: "var(--text-warm)" }}>{item.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RSVP Section */}
      <motion.div
        className="relative w-full text-center mb-4 z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <GoldDivider delay={0.3} />

        <motion.p
          className="text-[10px] tracking-[0.25em] font-bold uppercase mb-3 mt-3 gold-gradient"
          style={{ fontFamily: "var(--font-cinzel)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          RSVP
        </motion.p>

        <div className="flex flex-col gap-2.5 justify-center items-center">
          {[
            { name: "DILTHARA", phone: "0761526684" },
            { name: "LAKSHAN", phone: "0761527852" },
          ].map((contact, idx) => (
            <motion.a
              key={contact.name}
              href={`tel:${contact.phone}`}
              className="rsvp-button"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + idx * 0.15,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={12} style={{ color: "var(--gold-primary)" }} />
              <span>{contact.name} – {contact.phone}</span>
            </motion.a>
          ))}
        </div>

        {/* "With Love" closing */}
        <motion.p
          className="with-love mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          With Love ♥
        </motion.p>
      </motion.div>

      {/* Spacer */}
      <div className="h-6" />
    </div>
  );
};
