"use client";

import { useState } from "react";
import VignetteManager, { VignettePresets } from "./VignetteManager";

export default function VignetteDemo() {
  const [activeVignette, setActiveVignette] = useState<string | null>(null);

  const triggerVignette = (preset: string) => {
    setActiveVignette(preset);
  };

  const handleComplete = () => {
    setActiveVignette(null);
  };

  const customConfigs = {
    dramatic: {
      speed: "slow" as const,
      intensity: "intense" as const,
      variant: "tinted" as const
    },
    flash: {
      speed: "fast" as const,
      intensity: "intense" as const,
      variant: "default" as const
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Vignette Animation Demo</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => triggerVignette("subtle")}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Subtle
        </button>
        
        <button
          onClick={() => triggerVignette("standard")}
          className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded hover:bg-blue-300 dark:hover:bg-blue-600 transition-colors"
        >
          Standard
        </button>
        
        <button
          onClick={() => triggerVignette("dramatic")}
          className="px-4 py-2 bg-red-200 dark:bg-red-700 rounded hover:bg-red-300 dark:hover:bg-red-600 transition-colors"
        >
          Dramatic
        </button>
        
        <button
          onClick={() => triggerVignette("flash")}
          className="px-4 py-2 bg-yellow-200 dark:bg-yellow-700 rounded hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-colors"
        >
          Flash
        </button>
      </div>

      {/* Render active vignette */}
      {activeVignette && (
        <VignetteManager
          trigger={true}
          config={VignettePresets[activeVignette as keyof typeof VignettePresets] || customConfigs[activeVignette as keyof typeof customConfigs]}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}
