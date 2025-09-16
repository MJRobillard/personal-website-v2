"use client";

import { useEffect, useState } from "react";
import VignetteAnimation from "./VignetteAnimation";

interface VignetteConfig {
  speed: "fast" | "normal" | "slow";
  intensity: "subtle" | "normal" | "intense";
  variant: "default" | "tinted";
}

interface VignetteManagerProps {
  trigger: boolean;
  config?: Partial<VignetteConfig>;
  onComplete?: () => void;
}

export default function VignetteManager({ 
  trigger, 
  config = {},
  onComplete 
}: VignetteManagerProps) {
  const [isActive, setIsActive] = useState(false);
  
  // Default configuration
  const defaultConfig: VignetteConfig = {
    speed: "slow",
    intensity: "intense", 
    variant: "tinted",
    ...config
  };

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
    }
  }, [trigger]);

  const handleComplete = () => {
    setIsActive(false);
    onComplete?.();
  };

  return (
    <VignetteAnimation
      isActive={isActive}
      speed={defaultConfig.speed}
      intensity={defaultConfig.intensity}
      variant={defaultConfig.variant}
      onComplete={handleComplete}
    />
  );
}

// Preset configurations for different use cases
export const VignettePresets = {
  // Quick, subtle transition
  subtle: {
    speed: "fast" as const,
    intensity: "subtle" as const,
    variant: "default" as const
  },
  
  // Standard theme transition
  standard: {
    speed: "normal" as const,
    intensity: "normal" as const,
    variant: "tinted" as const
  },
  
  // Dramatic transition
  dramatic: {
    speed: "slow" as const,
    intensity: "intense" as const,
    variant: "tinted" as const
  },
  
  // Fast flash effect
  flash: {
    speed: "fast" as const,
    intensity: "intense" as const,
    variant: "default" as const
  }
} as const;
