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
  const rafIdRef = useRef<number | null>(null);

  const getFramePath = (index: number) => {
    const fileNumber = String(index + 1).padStart(4, "0");
    return `/hotel-frames/frame_${fileNumber}.png`;
  };

  const drawImageCover = useCallback((image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    ctx.clearRect(0, 0, w, h);

    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = w / h;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (imageRatio > canvasRatio) {
      drawHeight = h;
      drawWidth = drawHeight * imageRatio;
      offsetX = (w - drawWidth) / 2;
    } else {
      drawWidth = w;
      drawHeight = drawWidth / imageRatio;
      offsetY = (h - drawHeight) / 2;
    }

    ctx.fillStyle = "#111"; 
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
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

  // Massive Background Preloader
  useEffect(() => {
    let isCancelled = false;

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current.has(index)) {
          resolve();
          return;
        }
        const img = new Image();
        img.onload = () => {
          if (!isCancelled) {
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

    const preloadAll = async () => {
      await loadFrame(0);
      syncDrawNearestLoaded(0);

      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (isCancelled) break;
        await loadFrame(i);
      }
    };

    preloadAll();

    return () => {
      isCancelled = true;
    };
  }, [syncDrawNearestLoaded]);

  // Scroll Tracking
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
      setProgress(newProgress); // React state updates instantly for UI text overlays
    };

    const handleScroll = () => {
      updateTargetProgress();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTargetProgress(); 

    let animationFrameId: number;
    let lastDrawnIndex = -1;

    // Continuous loop decouples canvas drawing from sparse scroll events
    const loop = () => {
      // Lerp (linear interpolation) for buttery smooth frame scrubbing
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.08;
      scrollProgressRef.current = currentProgressRef.current; // sync for resize handler

      const targetIndex = Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1));
      
      // Only draw if the frame index actually changed to save CPU/Battery
      if (targetIndex !== lastDrawnIndex) {
        syncDrawNearestLoaded(targetIndex);
        lastDrawnIndex = targetIndex;
      }
      
      animationFrameId = requestAnimationFrame(loop);
    };
    
    loop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [syncDrawNearestLoaded]);

  // Resize Handling
  useEffect(() => {
    function resizeCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      const currentTarget = Math.round(scrollProgressRef.current * (TOTAL_FRAMES - 1));
      syncDrawNearestLoaded(currentTarget);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); 
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [syncDrawNearestLoaded]);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: "1000vh" }}>
      <div className="sticky top-0 left-0 overflow-hidden bg-charcoal-900" style={{ width: '100vw', height: '100vh' }}>
        <canvas ref={canvasRef} className="block w-full h-full" />
        
        <div className="absolute inset-0 pointer-events-none z-10">
          <HtmlOverlay progress={progress} />
        </div>
      </div>
    </section>
  );
}
