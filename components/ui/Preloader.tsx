"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Pseudo-3D Extruded Key Component
const SolidKey3D = ({ layers = 24, progress = 0 }) => {
  const colorFront = "#e5c07b"; 
  const colorEdge = "#997a00";  
  
  return (
    <div className="relative w-24 h-24" style={{ transformStyle: 'preserve-3d', transform: `translateZ(${layers / 2}px)` }}>
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

// 3D Brass Lock Plate Component
const LockPlate = ({ glowP }: { glowP: number }) => (
  <svg viewBox="0 0 100 150" className="absolute w-24 h-36 drop-shadow-2xl" style={{ transform: 'translateZ(0px)' }}>
    <defs>
      <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f3d794" />
        <stop offset="50%" stopColor="#b58d3c" />
        <stop offset="100%" stopColor="#8c6b2a" />
      </linearGradient>
      <linearGradient id="brassGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffeba8" />
        <stop offset="50%" stopColor="#e5c07b" />
        <stop offset="100%" stopColor="#b58d3c" />
      </linearGradient>
      <filter id="insetShadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.5" />
      </filter>
    </defs>
    <path 
      fill={glowP > 0 ? "url(#brassGlow)" : "url(#brass)"}
      filter="url(#insetShadow)" 
      fillRule="evenodd" 
      style={{ transition: 'fill 0.3s' }}
      d="M50 0C77.6 0 100 22.4 100 50V100C100 127.6 77.6 150 50 150C22.4 150 0 127.6 0 100V50C0 22.4 22.4 0 50 0ZM50 40C43.37 40 38 45.37 38 52C38 56.88 40.92 61.08 45.1 63.02L42 90H58L54.9 63.02C59.08 61.08 62 56.88 62 52C62 45.37 56.63 40 50 40Z" 
    />
  </svg>
);

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    const duration = 2400; // 2.4 seconds for the realistic cinematic unlock

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(p);

      if (p < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsLoaded(true), 500); // Hold unlocked state briefly
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
  // Phase 1 (0-50%): Insert Key (Flies in and aligns with keyhole)
  // Phase 2 (50-80%): Turn Key (Rolls 90 degrees inside lock)
  // Phase 3 (80-100%): Unlock Shockwave / Glow

  const insertP = Math.min(progress, 50) / 50;
  const turnP = Math.max(0, Math.min(progress - 50, 30)) / 30;
  const glowP = Math.max(0, progress - 80) / 20;

  // Smooth easing functions
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
  const iE = easeOut(insertP);
  const tE = easeInOut(turnP);

  // Key Transforms relative to the lock plate
  const tz = 250 * (1 - iE);      // Starts 250px straight out in front, pushes perfectly straight in to 0
  const tx = 0;                   // Perfectly aligned horizontally
  const ty = -10;                 // Perfectly aligned with the keyhole slot vertically
  
  const ry = -90;                 // Key always points directly straight into the lock
  const rz = 0;                   // No tilt
  const rx = 90 * tE;             // Rolls 90deg inside the lock to unlock
  
  const keyOpacity = Math.min(insertP * 5, 1); // Fades in quickly at the start

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900 transition-opacity duration-1000 ease-in-out",
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div 
        className="flex flex-col items-center justify-center transform transition-transform duration-1000 w-full" 
        style={{ transform: isLoaded ? 'scale(1.15)' : 'scale(1)' }}
      >
        
        {/* 3D Scene Root */}
        <div 
          className="relative mb-20 flex items-center justify-center w-full"
          style={{ perspective: '1200px' }}
        >
          {/* Entire Lock Scene tilted slightly so we can see the glorious 3D volume */}
          <div 
            style={{ transform: `rotateY(-35deg) rotateX(15deg) scale(${1 + glowP * 0.1})`, transformStyle: 'preserve-3d' }} 
            className="relative flex items-center justify-center"
          >
            {/* Shockwave effect on unlock */}
            <div 
              className="absolute w-32 h-48 rounded-[40px] border-[2px] border-[#e5c07b]"
              style={{
                opacity: glowP > 0 ? 1 - glowP : 0,
                transform: `scale(${1 + glowP * 0.4}) translateZ(5px)`,
              }}
            />

            {/* Lock Interior (Black void that hides the tip of the inserted key) */}
            <div 
              className="absolute w-20 h-32 bg-[#0a0a0a] rounded-[30px]" 
              style={{ transform: 'translateZ(-2px)', boxShadow: 'inset 0 0 20px black' }} 
            />

            {/* Brass Lock Plate */}
            <LockPlate glowP={glowP} />

            {/* The 3D Key */}
            <div
              style={{
                transform: `translateZ(${tz}px) translateX(${tx}px) translateY(${ty}px) rotateY(${ry}deg) rotateZ(${rz}deg) rotateX(${rx}deg)`,
                opacity: keyOpacity,
                transformStyle: "preserve-3d"
              }}
            >
               <SolidKey3D layers={24} progress={glowP} />
            </div>
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
