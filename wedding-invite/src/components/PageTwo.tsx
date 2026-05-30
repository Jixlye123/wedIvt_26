"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { GoldDivider } from "./GoldDivider";

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const springIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15, delay: 0.3 },
  },
};

export const PageTwo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    // Wedding Date: June 26, 2026 at 9:00 AM (Sri Lanka timezone +05:30)
    const targetDate = new Date("2026-06-26T09:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isOver: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVenueClick = () => {
    // Open Grand Silver Ray - Rathnapura in Google Maps
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Grand+Silver+Ray+Rathnapura";
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="swipe-page" style={{ position: "relative" }}>
      <div className="corner-decorations" />

      {/* Page Title */}
      <motion.div
        className="relative w-full text-center mt-6 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xs tracking-[0.25em] font-semibold uppercase mb-1 gold-gradient"
          style={{ fontFamily: "var(--font-cinzel)" }}
          variants={slideUp}
          custom={0}
        >
          When & Where
        </motion.h2>
        <GoldDivider delay={0.2} />
      </motion.div>

      {/* Date and Time Info */}
      <motion.div
        className="relative w-full text-center z-10 px-4 my-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 mb-6"
          variants={slideUp}
          custom={1}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Calendar className="text-[var(--gold-primary)]" size={24} />
          </motion.div>
          <h3
            className="font-bold tracking-wide text-lg mt-1"
            style={{ fontFamily: "var(--font-cinzel)", color: "var(--text-dark)", fontSize: "1rem" }}
          >
            Friday, June 26, 2026
          </h3>
          <div
            className="flex items-center gap-1.5 text-xs font-medium"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-montserrat)" }}
          >
            <Clock size={14} style={{ color: "var(--rose-accent)" }} />
            <span>9:00 AM – 4:00 PM</span>
          </div>
        </motion.div>

        {/* Location / Clickable Venue — Glassmorphism Card */}
        <motion.div
          onClick={handleVenueClick}
          className="relative venue-link p-5 mx-auto max-w-[320px] rounded-2xl cursor-pointer z-10"
          variants={springIn}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex justify-center mb-2.5">
            <motion.div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(201,169,110,0.1) 0%, rgba(212,160,160,0.1) 100%)",
                color: "var(--gold-primary)",
              }}
              animate={{ boxShadow: ["0 0 0px rgba(201,169,110,0)", "0 0 15px rgba(201,169,110,0.3)", "0 0 0px rgba(201,169,110,0)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <MapPin size={20} />
            </motion.div>
          </div>
          <h4
            className="font-bold text-sm tracking-wide mb-1 uppercase"
            style={{ fontFamily: "var(--font-cinzel)", color: "var(--text-dark)" }}
          >
            At the Main Ballroom
          </h4>
          <p
            className="font-medium text-xs tracking-wider mb-2"
            style={{ fontFamily: "var(--font-dancing)", color: "var(--gold-primary)", fontSize: "0.9rem" }}
          >
            Grand Silver Ray – Rathnapura
          </p>
          <p
            className="text-[9px] uppercase tracking-widest mt-3 border-t pt-2 flex items-center justify-center gap-1"
            style={{ color: "var(--text-muted)", borderColor: "rgba(201,169,110,0.1)" }}
          >
            <span>Tap to open Google Maps</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div
        className="relative w-full text-center mb-10 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-[9px] tracking-[0.2em] uppercase font-semibold mb-2"
          style={{ color: "var(--rose-deep)", fontFamily: "var(--font-montserrat)" }}
          variants={slideUp}
          custom={3}
        >
          {timeLeft.isOver ? "The Wedding Has Begun ✨" : "Counting Down To The Big Day"}
        </motion.p>

        {!timeLeft.isOver && (
          <div className="countdown-container">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                className="countdown-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="countdown-value"
                  key={item.value}
                  initial={{ opacity: 0.7, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(item.value).padStart(2, "0")}
                </motion.div>
                <div className="countdown-label">{item.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Spacer */}
      <div className="h-6" />
    </div>
  );
};
