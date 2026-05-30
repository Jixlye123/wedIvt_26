"use client";

import React, { useRef, useState, useEffect } from "react";
import { ScrollContainer } from "@/components/ScrollContainer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { AmbientEffects } from "@/components/AmbientEffects";
import { DissolveOverlay } from "@/components/DissolveOverlay";
import { SparkleEffect } from "@/components/SparkleEffect";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
        <DissolveOverlay onOpen={handleOpenInvitation} />

        {/* Base decorative gradient layer */}
        <div className="bg-overlay" />

        {/* Falling wedding flower petals */}
        <AmbientEffects />

        {/* Floating golden sparkle/glitter particles */}
        <SparkleEffect />

        {/* Floating volume trigger */}
        <MusicPlayer isPlaying={isPlaying} togglePlay={toggleMusic} />

        {/* Water drop reveal container wrapper around page timeline scrolls */}
        <div className={`w-full h-full waterdrop-reveal ${isOpen ? "revealed" : ""}`}>
          <ScrollContainer />
        </div>
      </div>
    </main>
  );
}
