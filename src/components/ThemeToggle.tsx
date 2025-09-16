"use client";

import { useEffect, useState } from "react";
import VignetteManager, { VignettePresets } from "./VignetteManager";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showVignette, setShowVignette] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    const root = document.documentElement;
    if (shouldBeDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, []);

  const toggleDuality = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    
    // Trigger vignette animation
    setShowVignette(true);
    
    // Update theme classes
    if (next) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleVignetteComplete = () => {
    setShowVignette(false);
  };

  if (!mounted) return <div className="w-20 h-8 rounded-full bg-muted/60 animate-pulse" />;

  return (
    <>
      <div className="duality-toggle">
        <span>HISTORY</span>
        <div 
          className="toggle-switch"
          onClick={toggleDuality}
        >
          <div className="toggle-slider"></div>
        </div>
        <span>DATA</span>
      </div>
      
      {/* Vignette Animation */}
      <VignetteManager
        trigger={showVignette}
        config={VignettePresets.standard}
        onComplete={handleVignetteComplete}
      />
    </>
  );
}


