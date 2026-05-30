"use client";

import React from "react";
import { VolumeX, Volume2 } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: (e: React.MouseEvent) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlay }) => {
  return (
    <button
      className={`music-btn ${isPlaying ? "music-playing" : ""}`}
      onClick={togglePlay}
      title={isPlaying ? "Mute Music" : "Play Music"}
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
};
