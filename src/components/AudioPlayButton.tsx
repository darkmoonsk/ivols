"use client";

import { useState } from "react";
import { IconVolume } from "@tabler/icons-react";

interface AudioPlayButtonProps {
  path?: string;
}

function AudioPlayButton({ path }: AudioPlayButtonProps) {
  const cloud_url = process.env.NEXT_PUBLIC_AUDIO_CLOUD_URL ?? '';
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayAudio = () => {
    if (isPlaying) {
      return;
    }
    const url = cloud_url + path;
    const audio = new Audio(url);

    if (audio) {
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  }

  return (
    <div
      className="
      p-1 flex items-center justify-center rounded-full bg-cyan-600
      transition-all ease-in duration-200 hover:scale-110
    "
    >
      <button onClick={handlePlayAudio}>
        <IconVolume size={20} color="white" />
      </button>
    </div>
  );
}

export default AudioPlayButton;
