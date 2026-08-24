import { create } from "zustand";
import { CHAPTERS } from "@/config/cinematicConfig";

interface CinematicState {
  targetProgress: number; // Raw scroll progress mapped 0 to 1
  smoothProgress: number; // Damped cinematic progress (updated in useFrame)
  activeChapterId: string;
  isSettled: boolean; // True if smoothProgress is very close to targetProgress (camera is resting)
  setTargetProgress: (p: number) => void;
  setSmoothProgress: (p: number) => void;
}

export const useCinematicStore = create<CinematicState>((set, get) => ({
  targetProgress: 0,
  smoothProgress: 0,
  activeChapterId: "intro",
  isSettled: true,
  setTargetProgress: (targetProgress) => set({ targetProgress }),
  setSmoothProgress: (smoothProgress) => {
    const target = get().targetProgress;
    const isSettled = Math.abs(smoothProgress - target) < 0.01;
    
    // Find active chapter based on smooth progress
    const active = CHAPTERS.find(c => smoothProgress >= c.start && smoothProgress < c.end) || CHAPTERS[CHAPTERS.length - 1];
    
    set({ smoothProgress, isSettled, activeChapterId: active.id });
  },
}));

// We can set up the global scroll listener here instead of within a component
if (typeof window !== "undefined") {
  const calculateScroll = () => {
    // Determine how far down the document we've scrolled
    const docHeight = document.body.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(docHeight - winHeight, 1);
    
    // Clamp between 0 and 1
    const rawProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    
    // Update store
    useCinematicStore.getState().setTargetProgress(rawProgress);
  };

  // Passive event listener for maximum performance
  window.addEventListener("scroll", calculateScroll, { passive: true });
  window.addEventListener("resize", calculateScroll, { passive: true });
  
  // Initial calculation
  setTimeout(calculateScroll, 100);
}
