"use client";

import React, { useRef, useState, useEffect } from "react";
import { ScrollContainer } from "@/components/ScrollContainer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { AmbientEffects } from "@/components/AmbientEffects";
import { DissolveOverlay } from "@/components/DissolveOverlay";
import { SparkleEffect } from "@/components/SparkleEffect";
import { CoupleIntro } from "@/components/CoupleIntro";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOverlayMounted, setIsOverlayMounted] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioUrl = "/Fall-In-Love-chosic.com_.mp3";
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio failed to play:", err));
    }
    // Unmount overlay from React DOM after fade-out animation completes (~1.5s)
    // This matches DissolveOverlay's internal shouldRender timer exactly
    setTimeout(() => {
      setIsOverlayMounted(false);
    }, 1500);
    // Show cinematic intro after envelope has fully slid away
    setTimeout(() => setShowIntro(true), 1200);
  };

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play failed:", err));
    }
  };

  return (
    <main className="flex-1 w-full h-full flex items-center justify-center bg-[#eae5db] relative">
      {/* Soft desktop shadow background elements */}
      <div className="absolute inset-0 bg-radial from-stone-500/10 to-transparent pointer-events-none z-0" />
      
      {/* Main simulated mobile layout */}
      <div className="mobile-viewport relative">
        {/* Dissolve intro screen overlay with Water Drop tap animations */}
        {isOverlayMounted && <DissolveOverlay onOpen={handleOpenInvitation} />}

        {/* Base decorative gradient layer */}
        <div className="bg-overlay" />

        {/* Falling wedding flower petals */}
        <AmbientEffects />

        {/* Floating golden sparkle/glitter particles */}
        <SparkleEffect />

        {/* Floating volume trigger */}
        <MusicPlayer isPlaying={isPlaying} togglePlay={toggleMusic} />

        {/* Cinematic couple intro — appears after envelope slides away */}
        {showIntro && <CoupleIntro onDismiss={() => setShowIntro(false)} />}

        {/* Water drop reveal container wrapper around page timeline scrolls */}
        <div className={`w-full h-full envelope-reveal ${isOpen ? "revealed" : ""}`}>
          <ScrollContainer />
        </div>
      </div>
    </main>
  );
}
