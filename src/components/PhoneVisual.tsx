"use client";

import { useEffect, useState } from "react";

interface PhoneVisualProps {
  src: string;
  alt: string;
  title: string;
  allow?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
}

export default function PhoneVisual({ 
  src, 
  alt, 
  title, 
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen = true,
  loading = "lazy"
}: PhoneVisualProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };
    
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div className="relative mx-auto max-w-sm">
        <div className="relative bg-gray-300 rounded-[2.5rem] p-2 shadow-2xl animate-pulse">
          <div className="bg-gray-200 rounded-[2rem] h-[600px]"></div>
        </div>
      </div>
    );
  }

  // iPhone color variants - using CSS classes for better styling
  const phoneVariants = {
    light: "phone-space-gray", // Space Gray for light mode
    dark: "phone-silver"  // Silver for dark mode
  };

  const variant = isDark ? phoneVariants.dark : phoneVariants.light;

  return (
    <div className="relative mx-auto max-w-sm">
      {/* iPhone frame styling */}
      <div className={`phone-frame relative ${variant} rounded-[2.5rem] p-2`}>
        <div className="phone-screen rounded-[2rem] overflow-hidden transition-all duration-500">
          {/* iPhone notch */}
          <div className="phone-notch h-6 rounded-t-[2rem] flex items-center justify-center transition-all duration-500">
            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
          </div>
          {/* Screen content */}
          <div className="phone-screen-content h-[600px] relative">
            <iframe
              src={src}
              className="w-full h-full border-0"
              title={title}
              allow={allow}
              allowFullScreen={allowFullScreen}
              loading={loading}
            />
          </div>
          {/* Home indicator */}
          <div className="phone-home-indicator h-2 rounded-b-[2rem] flex items-center justify-center transition-all duration-500">
            <div className="w-12 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Depth shadow */}
      <div className="phone-shadow absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 rounded-full"></div>
    </div>
  );
}
