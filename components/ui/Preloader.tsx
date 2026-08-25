"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { KeyRound } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    const duration = 1600; // 1.6 seconds for the full cinematic unlock

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(p);

      if (p < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsLoaded(true), 400); // Hold the unlocked state briefly
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const t = setTimeout(() => setIsUnmounted(true), 1200); // Fade out duration
      return () => clearTimeout(t);
    }
  }, [isLoaded]);

  if (isUnmounted) return null;

  // 3D Animation Math derived from 0-100 progress
  // Phase 1 (0-55%): Insert Key
  // Phase 2 (55-85%): Turn Key
  // Phase 3 (85-100%): Unlock Shockwave / Glow

  const insertP = Math.min(progress, 55) / 55;
  const turnP = Math.max(0, Math.min(progress - 55, 30)) / 30;
  const glowP = Math.max(0, progress - 85) / 15;

  // Smooth easing function
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
  const insertEase = easeOut(insertP);
  const turnEase = easeInOut(turnP);

  // 3D Transform values
  const z = 200 * (1 - insertEase);
  const rx = 65 * (1 - insertEase);
  const ry = 45 * (1 - insertEase);
  const rz = -45 * (1 - insertEase) + (90 * turnEase);
  const keyOpacity = Math.min(insertP * 3, 1);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900 transition-opacity duration-1000 ease-in-out",
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div 
        className="flex flex-col items-center justify-center transform transition-transform duration-1000" 
        style={{ transform: isLoaded ? 'scale(1.1)' : 'scale(1)' }}
      >
        
        {/* 3D Key Container */}
        <div 
          className="relative mb-12 flex items-center justify-center"
          style={{ perspective: '800px' }}
        >
          {/* Shockwave effect on unlock */}
          <div 
            className="absolute w-16 h-16 rounded-full border-[2px] border-[#b58d3c]"
            style={{
              opacity: glowP > 0 ? 1 - glowP : 0,
              transform: `scale(${0.5 + glowP * 2.5})`,
            }}
          />

          {/* The Key */}
          <div
            style={{
              transform: `translateZ(${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
              opacity: keyOpacity,
              transformStyle: "preserve-3d"
            }}
          >
            <KeyRound 
              className="w-16 h-16 text-[#b58d3c]" 
              strokeWidth={1.2}
              style={{
                filter: `drop-shadow(0px 0px ${10 + glowP * 20}px rgba(181,141,60,${0.4 + glowP * 0.6}))`
              }}
            />
          </div>
        </div>

        {/* Text Elements */}
        <span 
          className="font-serif text-2xl md:text-3xl text-ivory-100 tracking-[0.3em] uppercase mb-4 transition-opacity duration-300"
          style={{ opacity: 1 - glowP }}
        >
          Aura
        </span>
        
        <div 
          className="flex items-center gap-2 transition-opacity duration-300"
          style={{ opacity: 1 - glowP }}
        >
          <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] text-bronze-400/80 uppercase">
            Unlocking Residence
          </span>
          <span className="text-[10px] md:text-xs font-sans tracking-widest text-bronze-400 font-bold ml-2">
            {progress.toFixed(0)}%
          </span>
        </div>

      </div>
    </div>
  );
}
