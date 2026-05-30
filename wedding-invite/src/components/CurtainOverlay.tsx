"use client";

import React, { useState, useEffect } from "react";

interface CurtainOverlayProps {
  onOpen: () => void;
}

export const CurtainOverlay: React.FC<CurtainOverlayProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen(); // Trigger background music play
  };

  useEffect(() => {
    if (isOpen) {
      // Hide the curtains from DOM after the transition (1.5 seconds) completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className={`curtain-wrapper ${isOpen ? "open" : ""}`}>
      {/* Left Curtain */}
      <div className="curtain-left">
        {/* Decorative tie rope */}
        <div className="curtain-rope curtain-rope-left" />
      </div>

      {/* Center Gold Wax Seal / Open Button */}
      <button 
        className="curtain-seal" 
        onClick={handleOpen}
        aria-label="Open wedding invitation"
      >
        <div className="curtain-seal-inner">
          <div className="font-serif text-[13px] font-extrabold tracking-wider leading-none mb-0.5">NS</div>
          <div className="text-[6.5px] font-bold opacity-80 uppercase tracking-widest leading-tight">
            Tap to<br />Open
          </div>
        </div>
      </button>

      {/* Right Curtain */}
      <div className="curtain-right">
        {/* Decorative tie rope */}
        <div className="curtain-rope curtain-rope-right" />
      </div>
    </div>
  );
};
