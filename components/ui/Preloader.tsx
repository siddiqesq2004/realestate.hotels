"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { KeyRound } from "lucide-react"; // Using KeyRound for a more classic, elegant key shape

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Fast simulated loading (approx 1.2 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 200); // Slight pause at 100%
          return 100;
        }
        return prev + 3; // +3 every 30ms = ~1000ms total
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const t = setTimeout(() => setIsUnmounted(true), 1000); // Wait for the fade out transition
      return () => clearTimeout(t);
    }
  }, [isLoaded]);

  if (isUnmounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900 transition-opacity duration-[800ms] ease-in-out",
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center justify-center transform transition-transform duration-1000" style={{ transform: isLoaded ? 'scale(1.05)' : 'scale(1)' }}>
        
        {/* Luxury Key Icon loading animation */}
        <div className="relative mb-8">
          <KeyRound className="w-14 h-14 text-white/5" strokeWidth={0.5} />
          
          {/* Gold overlay that reveals from bottom to top */}
          <KeyRound 
            className="absolute top-0 left-0 w-14 h-14 text-[#b58d3c] drop-shadow-[0_0_15px_rgba(181,141,60,0.5)]" 
            strokeWidth={1} 
            style={{ 
              clipPath: `inset(${100 - progress}% 0 0 0)`,
              transition: 'clip-path 0.1s ease-out'
            }}
          />
        </div>

        <span className="font-serif text-2xl md:text-3xl text-ivory-100 tracking-[0.3em] uppercase mb-3">
          Aura
        </span>
        
        <div className="flex items-center gap-2 overflow-hidden h-4">
          <span className="text-[9px] md:text-[10px] font-sans tracking-[0.4em] text-bronze-400/80 uppercase">
            Unlocking Your Residence
          </span>
          <span className="text-[9px] md:text-[10px] font-sans tracking-widest text-bronze-400 font-bold ml-2">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}
