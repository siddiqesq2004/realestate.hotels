"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HtmlOverlay from "./sections/HtmlOverlay";

const TOTAL_FRAMES = 209;
const LAST_FRAME = TOTAL_FRAMES - 1;

export default function CinematicFrameSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Progress state for HtmlOverlay — updated at a throttled rate from rAF, NOT from scroll events
  const [progress, setProgress] = useState(0);

  // All mutable animation state lives in refs to avoid re-renders
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const overlayProgressRef = useRef(0);

  // Cache viewport dimensions (updated only on resize)
  const viewportRef = useRef({ w: 0, h: 0 });

  // Canvas context cache to avoid repeated getContext calls
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const getFramePath = (index: number) => {
    const fileNumber = String(index + 1).padStart(4, "0");
    return `/hotel-frames/frame_${fileNumber}.png`;
  };

  // Proper cover-fit drawing that crops the image to fill the viewport without distortion
  const drawImageCover = useCallback((image: HTMLImageElement) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    const vw = viewportRef.current.w;
    const vh = viewportRef.current.h;
    if (vw === 0 || vh === 0) return;

    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = vw / vh;

    let sx = 0, sy = 0, sw = image.naturalWidth, sh = image.naturalHeight;

    // Crop the source image (not scale the destination) for a true "cover" fit
    if (imageRatio > canvasRatio) {
      // Image is wider than viewport — crop left/right
      sw = image.naturalHeight * canvasRatio;
      sx = (image.naturalWidth - sw) / 2;
    } else {
      // Image is taller than viewport — crop top/bottom
      sh = image.naturalWidth / canvasRatio;
      sy = (image.naturalHeight - sh) / 2;
    }

    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, vw, vh);
  }, []);

  const syncDrawNearestLoaded = useCallback((targetIndex: number) => {
    // Clamp target index
    const clampedTarget = Math.max(0, Math.min(LAST_FRAME, targetIndex));

    const targetFrame = imagesRef.current.get(clampedTarget);
    if (targetFrame?.complete && targetFrame.naturalWidth > 0) {
      drawImageCover(targetFrame);
      return;
    }

    // Fallback: find the nearest loaded frame (prefer looking backward first for visual continuity)
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

  // Resize handler — set canvas buffer size with devicePixelRatio, cache viewport dims
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x to save memory on 3x screens
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Set the actual pixel buffer size (sharp on retina/mobile)
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      viewportRef.current = { w: canvas.width, h: canvas.height };

      // Cache the context and scale it to match DPR
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) {
        ctxRef.current = ctx;
      }

      // Redraw current frame at new size
      const idx = Math.round(scrollProgressRef.current * LAST_FRAME);
      syncDrawNearestLoaded(idx);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [syncDrawNearestLoaded]);

  // Preloader: prioritises first frame, last 10 frames, then keyframes, then fills all gaps
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
            try {
              await img.decode();
            } catch {
              // Ignore decode errors — the raw bitmap is still usable
            }
            imagesRef.current.set(index, img);

            // If this frame is near the current scroll position, redraw immediately
            const target = Math.round(scrollProgressRef.current * LAST_FRAME);
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

    // Load a batch of frames in parallel
    const loadBatch = async (indices: number[], batchSize: number) => {
      for (let i = 0; i < indices.length; i += batchSize) {
        if (isCancelled) return;
        const batch = indices.slice(i, i + batchSize);
        await Promise.all(batch.map((idx) => loadFrame(idx)));
      }
    };

    const unique = (arr: number[]) => [...new Set(arr)];

    const preloadAll = async () => {
      // Priority 0: First frame — must be visible immediately
      await loadFrame(0);
      syncDrawNearestLoaded(0);

      // Priority 1: Last 10 frames — these are deferred by the old interlaced loader
      // and are the primary cause of end-of-scroll jerkiness
      const endFrames = [];
      for (let i = LAST_FRAME; i >= Math.max(0, TOTAL_FRAMES - 10); i--) endFrames.push(i);
      await loadBatch(endFrames, 6);

      // Priority 2: Keyframes every 10th — gives fast coarse coverage of the full timeline
      const pass1: number[] = [];
      for (let i = 10; i < TOTAL_FRAMES; i += 10) pass1.push(i);
      await loadBatch(unique(pass1), 6);

      // Priority 3: Fill in every 5th
      const pass2: number[] = [];
      for (let i = 5; i < TOTAL_FRAMES; i += 5) pass2.push(i);
      await loadBatch(unique(pass2), 6);

      // Priority 4: Fill every 2nd
      const pass3: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 2) pass3.push(i);
      await loadBatch(unique(pass3), 6);

      // Priority 5: All remaining frames
      const pass4: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) pass4.push(i);
      await loadBatch(unique(pass4), 6);
    };

    preloadAll();

    return () => {
      isCancelled = true;
    };
  }, [syncDrawNearestLoaded]);

  // JS-driven Step-Based Scroll Logic
  useEffect(() => {
    // The exact progress targets for the 4 wording scenes
    const STEPS = [0, 0.35, 0.65, 1.0];
    let currentStepIndex = 0;
    let isTransitioning = false;
    let touchStartY = 0;

    const navigateToStep = (direction: 1 | -1) => {
      if (isTransitioning) return;
      
      const nextStep = currentStepIndex + direction;
      if (nextStep >= 0 && nextStep < STEPS.length) {
        currentStepIndex = nextStep;
        isTransitioning = true;
        targetProgressRef.current = STEPS[currentStepIndex];
        
        // Cooldown before allowing the next scroll action
        // This ensures one flick = exactly one scene
        setTimeout(() => {
          isTransitioning = false;
        }, 1200);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Disable native scrolling completely
      if (Math.abs(e.deltaY) > 20) {
        navigateToStep(e.deltaY > 0 ? 1 : -1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Disable native touch scrolling
      if (isTransitioning) return;
      
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY; // Positive = swipe up (scroll down)
      
      if (Math.abs(deltaY) > 30) {
        navigateToStep(deltaY > 0 ? 1 : -1);
      }
    };

    // Attach with passive: false so we can preventDefault
    const options = { passive: false };
    window.addEventListener("wheel", handleWheel, options);
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchmove", handleTouchMove, options);

    let animationFrameId: number;
    let lastDrawnIndex = -1;

    const loop = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;
      const absDiff = Math.abs(diff);

      // Smooth continuous exponential lerp
      // Factor 0.05 is slightly slower and more cinematic for scene transitions
      const lerpFactor = 0.05;
      currentProgressRef.current = current + diff * lerpFactor;

      // Snap to target when extremely close
      if (absDiff < 0.0005) {
        currentProgressRef.current = target;
      }

      scrollProgressRef.current = currentProgressRef.current;

      // Draw the frame
      const targetIndex = Math.round(currentProgressRef.current * LAST_FRAME);

      if (targetIndex !== lastDrawnIndex) {
        syncDrawNearestLoaded(targetIndex);
        lastDrawnIndex = targetIndex;
      }

      // Throttled HtmlOverlay progress updates
      if (Math.abs(currentProgressRef.current - overlayProgressRef.current) > 0.005) {
        overlayProgressRef.current = currentProgressRef.current;
        setProgress(currentProgressRef.current);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
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
        <HtmlOverlay progress={progress} />
      </div>
    </section>
  );
}
