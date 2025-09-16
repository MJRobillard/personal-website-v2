"use client";

import { useEffect, useState } from "react";

/**
 * VignetteAnimation Component
 * 
 * A customizable vignette overlay animation that can be used for theme transitions,
 * focus effects, or visual emphasis. The animation creates a radial gradient overlay
 * that fades in and out with customizable timing and intensity.
 * 
 * @param isActive - Whether the vignette animation should be active
 * @param speed - Animation speed: "fast" (300ms), "normal" (600ms), "slow" (1000ms)
 * @param intensity - Overlay intensity: "subtle" (0.4), "normal" (0.8), "intense" (1.2)
 * @param variant - Visual variant: "default" (black/white), "tinted" (theme colors)
 * @param onComplete - Callback fired when animation completes
 * 
 * CSS Custom Properties (can be overridden):
 * - --vignette-intensity: Controls the opacity of the vignette (0-1.2)
 * - --vignette-duration: Animation duration in milliseconds
 * - --vignette-easing: CSS easing function for the animation
 * 
 * Usage Examples:
 * ```tsx
 * // Basic usage
 * <VignetteAnimation isActive={true} />
 * 
 * // Custom configuration
 * <VignetteAnimation 
 *   isActive={showVignette}
 *   speed="slow"
 *   intensity="intense"
 *   variant="tinted"
 *   onComplete={() => setShowVignette(false)}
 * />
 * ```
 */
interface VignetteAnimationProps {
  isActive: boolean;
  speed?: "fast" | "normal" | "slow";
  intensity?: "subtle" | "normal" | "intense";
  variant?: "default" | "tinted";
  onComplete?: () => void;
}

export default function VignetteAnimation({
  isActive,
  speed = "normal",
  intensity = "normal",
  variant = "default",
  onComplete
}: VignetteAnimationProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      
      // Calculate duration based on speed
      const durations = {
        fast: 300,
        normal: 600,
        slow: 1000
      };
      
      const duration = durations[speed];
      
      // Clean up after animation completes
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, speed, onComplete]);

  if (!shouldRender) return null;

  const speedClass = `vignette-${speed}`;
  const intensityClass = `vignette-${intensity}`;
  const variantClass = variant === "tinted" ? "vignette-tinted" : "";

  return (
    <div 
      className={`vignette-animation ${speedClass} ${intensityClass} ${variantClass}`}
      style={{
        // Allow for custom CSS variables to be overridden
        '--vignette-intensity': intensity === "subtle" ? 0.4 : intensity === "intense" ? 1.2 : 0.8,
        '--vignette-duration': speed === "fast" ? '300ms' : speed === "slow" ? '1000ms' : '600ms'
      } as React.CSSProperties}
    />
  );
}
