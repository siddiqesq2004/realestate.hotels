"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import HtmlOverlay from "./sections/HtmlOverlay";

import { useUIStore } from "@/store/uiStore";

const TOTAL_FRAMES = 209;
const LAST_FRAME = TOTAL_FRAMES - 1;

export default function CinematicFrameSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Active scene index for HtmlOverlay (0, 1, 2, 3)
  const [activeScene, setActiveScene] = useState(0);

  // Mutable animation state
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const currentProgressRef = useRef({ val: 0 }); // Object for GSAP to tween

  // Cache viewport dimensions (updated only on resize)
  const viewportRef = useRef({ w: 0, h: 0 });

  // Canvas context cache
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const getFramePath = (index: number) => {
    const fileNumber = String(index + 1).padStart(4, "0");
    return `/hotel-frames/frame_${fileNumber}.png`;
  };

  const drawImageCover = useCallback((image: HTMLImageElement) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    const vw = viewportRef.current.w;
    const vh = viewportRef.current.h;
    if (vw === 0 || vh === 0) return;

    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = vw / vh;

    let sx = 0, sy = 0, sw = image.naturalWidth, sh = image.naturalHeight;

    if (imageRatio > canvasRatio) {
      sw = image.naturalHeight * canvasRatio;
      sx = (image.naturalWidth - sw) / 2;
    } else {
      sh = image.naturalWidth / canvasRatio;
      sy = (image.naturalHeight - sh) / 2;
    }

    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, vw, vh);
  }, []);

  const syncDrawNearestLoaded = useCallback((targetIndex: number) => {
    const clampedTarget = Math.max(0, Math.min(LAST_FRAME, targetIndex));

    const targetFrame = imagesRef.current.get(clampedTarget);
    if (targetFrame?.complete && targetFrame.naturalWidth > 0) {
      drawImageCover(targetFrame);
      return;
    }

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const checkDown = clampedTarget - offset;
      if (checkDown >= 0) {
        const downFrame = imagesRef.current.get(checkDown);
        if (downFrame?.complete && downFrame.naturalWidth > 0) {
          drawImageCover(downFrame);
          return;
        }
      }

      const checkUp = clampedTarget + offset;
      if (checkUp <= LAST_FRAME) {
        const upFrame = imagesRef.current.get(checkUp);
        if (upFrame?.complete && upFrame.naturalWidth > 0) {
          drawImageCover(upFrame);
          return;
        }
      }
    }
  }, [drawImageCover]);

  // Canvas Resize
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      viewportRef.current = { w: canvas.width, h: canvas.height };

      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) ctxRef.current = ctx;

      const idx = Math.round(currentProgressRef.current.val * LAST_FRAME);
      syncDrawNearestLoaded(idx);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [syncDrawNearestLoaded]);

  // Preloader
  useEffect(() => {
    let isCancelled = false;

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current.has(index)) {
          resolve();
          return;
        }
        const img = new Image();
        img.onload = async () => {
          if (!isCancelled) {
            try { await img.decode(); } catch {}
            imagesRef.current.set(index, img);

            // Redraw if this frame is what we are currently looking at
            const target = Math.round(currentProgressRef.current.val * LAST_FRAME);
            if (Math.abs(target - index) < 5) {
              syncDrawNearestLoaded(target);
            }
          }
          resolve();
        };
        img.onerror = () => resolve();
        img.src = getFramePath(index);
      });
    };

    const loadBatch = async (indices: number[], batchSize: number) => {
      for (let i = 0; i < indices.length; i += batchSize) {
        if (isCancelled) return;
        const batch = indices.slice(i, i + batchSize);
        await Promise.all(batch.map((idx) => loadFrame(idx)));
      }
    };

    const unique = (arr: number[]) => [...new Set(arr)];

    const preloadAll = async () => {
      await loadFrame(0);
      syncDrawNearestLoaded(0);

      const endFrames = [];
      for (let i = LAST_FRAME; i >= Math.max(0, TOTAL_FRAMES - 10); i--) endFrames.push(i);
      await loadBatch(endFrames, 6);

      const pass1: number[] = [];
      for (let i = 10; i < TOTAL_FRAMES; i += 10) pass1.push(i);
      await loadBatch(unique(pass1), 6);

      const pass2: number[] = [];
      for (let i = 5; i < TOTAL_FRAMES; i += 5) pass2.push(i);
      await loadBatch(unique(pass2), 6);

      const pass3: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 2) pass3.push(i);
      await loadBatch(unique(pass3), 6);

      const pass4: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) pass4.push(i);
      await loadBatch(unique(pass4), 6);
    };

    preloadAll();
    return () => { isCancelled = true; };
  }, [syncDrawNearestLoaded]);

  // GSAP-driven Step Logic
  useEffect(() => {
    const STEPS = [0, 0.35, 0.65, 1.0];
    let currentStepIndex = 0;
    let isTransitioning = false;
    let touchStartY = 0;

    // Reset store on mount just in case
    useUIStore.getState().setNavHidden(false);

    const navigateToStep = (direction: 1 | -1) => {
      if (isTransitioning) return;
      
      const nextStep = currentStepIndex + direction;
      if (nextStep >= 0 && nextStep < STEPS.length) {
        currentStepIndex = nextStep;
        isTransitioning = true;
        
        // Update React state exactly ONCE per transition (prevents 60fps re-rendering jerkiness)
        setActiveScene(currentStepIndex);
        
        // Hide top nav if on the final scene
        useUIStore.getState().setNavHidden(currentStepIndex === 3);
        
        // Use GSAP for buttery smooth, perfectly eased transition
        gsap.to(currentProgressRef.current, {
          val: STEPS[currentStepIndex],
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            const targetIndex = Math.round(currentProgressRef.current.val * LAST_FRAME);
            syncDrawNearestLoaded(targetIndex);
          },
          onComplete: () => {
            isTransitioning = false;
          }
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Disable native scrolling
      if (Math.abs(e.deltaY) > 20) {
        navigateToStep(e.deltaY > 0 ? 1 : -1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Disable native scrolling
      if (isTransitioning) return;
      
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY; // Positive = swipe up (scroll down)
      
      if (Math.abs(deltaY) > 30) {
        navigateToStep(deltaY > 0 ? 1 : -1);
      }
    };

    const options = { passive: false };
    window.addEventListener("wheel", handleWheel, options);
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchmove", handleTouchMove, options);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      gsap.killTweensOf(currentProgressRef.current);
    };
  }, [syncDrawNearestLoaded]);

  return (
    <section ref={sectionRef} className="relative w-full h-[100dvh] overflow-hidden bg-charcoal-900">
      <canvas
        ref={canvasRef}
        className="block absolute inset-0 w-full h-full"
        style={{
          willChange: "contents",
          transform: "translateZ(0)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-10">
        <HtmlOverlay activeScene={activeScene} />
      </div>
    </section>
  );
}
