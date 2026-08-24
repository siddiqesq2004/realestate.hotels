"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HtmlOverlay from "./sections/HtmlOverlay";

const TOTAL_FRAMES = 209;

export default function CinematicFrameSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [progress, setProgress] = useState(0);

  // Cache images
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const scrollProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  // Cache viewport dimensions (updated only on resize)
  const viewportRef = useRef({ w: 0, h: 0 });

  const getFramePath = (index: number) => {
    const fileNumber = String(index + 1).padStart(4, "0");
    return `/hotel-frames/frame_${fileNumber}.png`;
  };

  // Proper cover-fit drawing that crops the image to fill the viewport without distortion
  const drawImageCover = useCallback((image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
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
    let frameToDraw: HTMLImageElement | null = null;

    const targetFrame = imagesRef.current.get(targetIndex);
    if (targetFrame?.complete && targetFrame.naturalWidth > 0) {
      frameToDraw = targetFrame;
    } else {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const checkDown = targetIndex - offset;
        const checkUp = targetIndex + offset;
        
        const downFrame = imagesRef.current.get(checkDown);
        if (checkDown >= 0 && downFrame?.complete && downFrame.naturalWidth > 0) {
          frameToDraw = downFrame;
          break;
        }

        const upFrame = imagesRef.current.get(checkUp);
        if (checkUp < TOTAL_FRAMES && upFrame?.complete && upFrame.naturalWidth > 0) {
          frameToDraw = upFrame;
          break;
        }
      }
    }

    if (frameToDraw) {
      drawImageCover(frameToDraw);
    }
  }, [drawImageCover]);

  // Resize handler — set canvas buffer size once, cache viewport dims
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w;
      canvas.height = h;

      viewportRef.current = { w, h };

      // Redraw current frame at new size
      const idx = Math.round(scrollProgressRef.current * (TOTAL_FRAMES - 1));
      syncDrawNearestLoaded(idx);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [syncDrawNearestLoaded]);

  // Interlaced Background Preloader with parallel batch loading
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
              // Ignore decode errors
            }
            imagesRef.current.set(index, img);
            
            const target = Math.round(scrollProgressRef.current * (TOTAL_FRAMES - 1));
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

    // Load a batch of frames in parallel (up to `batchSize` at a time)
    const loadBatch = async (indices: number[], batchSize: number) => {
      for (let i = 0; i < indices.length; i += batchSize) {
        if (isCancelled) return;
        const batch = indices.slice(i, i + batchSize);
        await Promise.all(batch.map(idx => loadFrame(idx)));
      }
    };

    const preloadAll = async () => {
      // Load frame 0 immediately
      await loadFrame(0);
      syncDrawNearestLoaded(0);

      // Pass 1: Every 10th frame in parallel batches of 4
      const pass1 = [];
      for (let i = 10; i < TOTAL_FRAMES; i += 10) pass1.push(i);
      await loadBatch(pass1, 4);

      // Pass 2: Every 5th frame
      const pass2 = [];
      for (let i = 5; i < TOTAL_FRAMES; i += 5) pass2.push(i);
      await loadBatch(pass2, 4);

      // Pass 3: Every 2nd frame
      const pass3 = [];
      for (let i = 2; i < TOTAL_FRAMES; i += 2) pass3.push(i);
      await loadBatch(pass3, 4);

      // Pass 4: All remaining odd frames
      const pass4 = [];
      for (let i = 1; i < TOTAL_FRAMES; i += 2) pass4.push(i);
      await loadBatch(pass4, 4);
    };

    preloadAll();

    return () => {
      isCancelled = true;
    };
  }, [syncDrawNearestLoaded]);

  // Scroll Tracking with ultra-smooth lerp animation loop
  useEffect(() => {
    const updateTargetProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const rawProgress = -rect.top / scrollableDistance;
      const newProgress = Math.max(0, Math.min(1, rawProgress));

      targetProgressRef.current = newProgress;
      setProgress(newProgress);
    };

    window.addEventListener("scroll", updateTargetProgress, { passive: true });
    updateTargetProgress(); 

    let animationFrameId: number;
    let lastDrawnIndex = -1;

    const loop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      // Adaptive lerp: slower when close (ultra-smooth glide), faster when far (responsive)
      const lerpFactor = Math.abs(diff) > 0.05 ? 0.06 : 0.025;
      currentProgressRef.current += diff * lerpFactor;

      // Snap to target when extremely close to prevent infinite float drift
      if (Math.abs(diff) < 0.0001) {
        currentProgressRef.current = targetProgressRef.current;
      }

      scrollProgressRef.current = currentProgressRef.current;

      const targetIndex = Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1));
      
      if (targetIndex !== lastDrawnIndex) {
        syncDrawNearestLoaded(targetIndex);
        lastDrawnIndex = targetIndex;
      }
      
      animationFrameId = requestAnimationFrame(loop);
    };
    
    loop();

    return () => {
      window.removeEventListener("scroll", updateTargetProgress);
      cancelAnimationFrame(animationFrameId);
    };
  }, [syncDrawNearestLoaded]);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: "400vh" }}>
      <div className="sticky top-0 left-0 overflow-hidden bg-charcoal-900" style={{ width: '100vw', height: '100vh' }}>
        <canvas
          ref={canvasRef}
          className="block"
          style={{
            width: '100vw',
            height: '100vh',
            willChange: 'contents',
            transform: 'translateZ(0)',
          }}
        />
        
        <div className="absolute inset-0 pointer-events-none z-10">
          <HtmlOverlay progress={progress} />
        </div>
      </div>
    </section>
  );
}
