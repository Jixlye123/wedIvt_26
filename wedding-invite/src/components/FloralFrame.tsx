"use client";

import React from "react";

interface FloralFrameProps {
  position: "top-left" | "bottom-right";
  className?: string;
}

export const FloralFrame: React.FC<FloralFrameProps> = ({ position, className = "" }) => {
  const isTop = position === "top-left";

  return (
    <img
      src={isTop ? "/wedding_flowers_top.png" : "/wedding_flowers_bottom.png"}
      alt=""
      aria-hidden="true"
      className={`${isTop ? "floral-corner-tl" : "floral-corner-br"} ${className}`}
      draggable={false}
    />
  );
};
