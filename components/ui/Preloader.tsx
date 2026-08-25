"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Pseudo-3D Extruded Key Component
const SolidKey3D = ({ layers = 20, progress = 0 }) => {
  const colorFront = "#e5c07b"; // Bright gold for front face
  const colorEdge = "#997a00";  // Darker bronze for the extruded depth
  
  return (
    <div className="relative w-24 h-24 sm:w-32 sm:h-32" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>
      {Array.from({ length: layers }).map((_, i) => (
        <svg 
          key={i} 
          viewBox="0 0 24 24" 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            transform: `translateZ(${-i}px)`, 
            color: i === 0 || i === layers - 1 ? colorFront : colorEdge,
            filter: i === 0 ? `drop-shadow(0 0 ${5 + progress * 20}px rgba(229,192,123,${0.3 + progress * 0.7}))` : 'none'
          }}
        >
          {/* A solid classic key path */}
          <path fill="currentColor" d="M12.65 10A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ))}
    </div>
  );
};

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    const duration = 2200; // 2.2 seconds for the full 3D cinematic unlock

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
  // Phase 1 (0-50%): Insert Key (Flies in from front)
  // Phase 2 (50-85%): Turn Key (Rolls 90 degrees)
  // Phase 3 (85-100%): Unlock Shockwave / Glow

  const insertP = Math.min(progress, 50) / 50;
  const turnP = Math.max(0, Math.min(progress - 50, 35)) / 35;
  const glowP = Math.max(0, progress - 85) / 15;

  // Smooth easing functions
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
  const iE = easeOut(insertP);
  const tE = easeInOut(turnP);

  // 3D Transform values for true 3D rotation
  const tz = 300 * (1 - iE); // Starts 300px close to camera, pushes into 0
  const ry = -10 - 65 * iE;  // Starts almost flat, turns -75deg into the lock
  const rz = -45 * (1 - iE); // Starts tilted, straightens out
  const rx = -90 * tE;       // Rolls -90deg on its own axis to sweep teeth up
  
  const keyOpacity = Math.min(insertP * 3, 1);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900 transition-opacity duration-1000 ease-in-out",
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div 
        className="flex flex-col items-center justify-center transform transition-transform duration-1000 w-full" 
        style={{ transform: isLoaded ? 'scale(1.1)' : 'scale(1)' }}
      >
        
        {/* 3D Scene Container */}
        <div 
          className="relative mb-16 flex items-center justify-center w-full"
          style={{ perspective: '1000px' }}
        >
          {/* Shockwave effect on unlock */}
          <div 
            className="absolute w-24 h-24 rounded-full border-[2px] border-[#e5c07b]"
            style={{
              opacity: glowP > 0 ? 1 - glowP : 0,
              transform: `scale(${0.5 + glowP * 3})`,
            }}
          />

          {/* The 3D Key wrapper */}
          <div
            style={{
              transform: `translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) rotateX(${rx}deg)`,
              opacity: keyOpacity,
              transformStyle: "preserve-3d"
            }}
          >
             <SolidKey3D layers={20} progress={glowP} />
          </div>
        </div>

        {/* Text Elements */}
        <span 
          className="font-serif text-3xl md:text-4xl text-ivory-100 tracking-[0.3em] uppercase mb-4 transition-opacity duration-300"
          style={{ opacity: 1 - glowP }}
        >
          Aura
        </span>
        
        <div 
          className="flex items-center gap-3 transition-opacity duration-300"
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
