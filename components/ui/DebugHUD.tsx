"use client";

import { useEffect, useState } from "react";
import { useCinematicStore } from "@/store/cinematicStore";
import { CHAPTERS } from "@/config/cinematicConfig";

export default function DebugHUD() {
  const [isVisible, setIsVisible] = useState(false);
  const { targetProgress, smoothProgress, activeChapterId } = useCinematicStore();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'd') {
        setIsVisible(prev => !prev);
      }
      
      // Hotkeys 1-7 to jump to specific chapters
      if (isVisible) {
        const chapterIndex = parseInt(e.key) - 1;
        if (chapterIndex >= 0 && chapterIndex < CHAPTERS.length) {
          const tProgress = CHAPTERS[chapterIndex].start;
          window.scrollTo({
            top: tProgress * document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  // Track actual window scroll
  useEffect(() => {
    if (!isVisible) return;
    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // init
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 z-[9999] bg-black/80 text-green-400 font-mono text-xs p-4 rounded-md border border-green-500/30 backdrop-blur-md w-64 pointer-events-none">
      <div className="text-white mb-2 font-bold text-sm">CINEMATIC DEBUG HUD</div>
      <div className="mb-1">
        <span className="text-gray-400">CHAPTER:</span> <br/>
        <span className="text-yellow-300 font-bold uppercase">{activeChapterId}</span>
      </div>
      <div className="mb-1">
        <span className="text-gray-400">WINDOW SCROLL:</span> {scrollY}px
      </div>
      <div className="mb-1">
        <span className="text-gray-400">TARGET:</span> {targetProgress.toFixed(3)}
      </div>
      <div className="mb-2">
        <span className="text-gray-400">SMOOTH:</span> {smoothProgress.toFixed(3)}
      </div>
      <div className="mt-4 text-gray-500 text-[10px]">
        Press &apos;D&apos; to toggle
        <br />
        Press &apos;1-7&apos; to jump chapters
      </div>
    </div>
  );
}
