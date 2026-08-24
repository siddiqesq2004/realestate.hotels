"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0); // 0: AURA, 1: Preparing, 2: Loading, 3: Fade out, 4: Unmount

  useEffect(() => {
    // Initial delay for AURA
    const t1 = setTimeout(() => setStage(1), 1200);
    // Show Preparing
    const t2 = setTimeout(() => setStage(2), 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (stage === 2) {
      // Simulate progress loading to 100% quickly since initial frames load fast
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [stage]);

  useEffect(() => {
    if (progress === 100 && stage >= 2) {
      const t3 = setTimeout(() => setStage(3), 600);
      const t4 = setTimeout(() => setStage(4), 2000); 
      
      return () => {
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [progress, stage]);

  if (stage === 4) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900 transition-opacity duration-[1500ms] ease-in-out",
        stage === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center justify-center h-24">
        {stage === 0 && (
          <span className="font-serif text-4xl text-ivory-100 tracking-[0.3em] animate-pulse">
            AURA
          </span>
        )}
        
        {stage === 1 && (
          <span className="text-sm font-medium tracking-[0.2em] text-bronze-400/80 animate-pulse">
            Preparing your experience
          </span>
        )}

        {stage === 2 && (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <div className="w-12 h-[1px] bg-bronze-600/30 overflow-hidden">
              <div 
                className="h-full bg-bronze-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-medium tracking-[0.2em] text-ivory-300/50">
              {progress.toFixed(0)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
