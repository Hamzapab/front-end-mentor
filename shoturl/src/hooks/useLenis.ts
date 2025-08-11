"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smooth?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
   lerp?: number;
  infinite?: boolean;
  wrapper?: HTMLElement;
  content?: HTMLElement;
}

export function useLenis(options?: LenisOptions) {
  useEffect(() => {
      // Default options
    const defaultOptions: LenisOptions = {
      duration: 1.2, // Control the duration of the scroll
      easing: (t) => t * (2 - t), // easeOutQuad
      smooth: true,
      smoothTouch: false, // Usually better UX on mobile
      touchMultiplier: 2,
      infinite: false,
    };
       const lenis = new Lenis({
      ...defaultOptions,
      ...options,
    })

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, [options]);
}
