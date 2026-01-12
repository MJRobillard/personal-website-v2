"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ComputerVisualProps {
  src: string;
  title: string;
  allow?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
}

export default function ComputerVisual({ 
  src, 
  title, 
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen = true,
  loading = "lazy"
}: ComputerVisualProps) {
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

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const screenVariants = {
    hidden: { 
      scale: 0.9,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1
    }
  };

  const baseVariants = {
    hidden: { 
      scale: 0.9,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1
    }
  };

  const shadowVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02
    }
  };

  const shadowHoverVariants = {
    hover: {
      scale: 1.1,
      opacity: 0.8
    }
  };

  if (!mounted) {
    return (
      <div className="relative mx-auto max-w-2xl">
        <motion.div 
          className="relative bg-gray-300 rounded-lg p-3 shadow-2xl"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1, 0.98]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="bg-gray-200 rounded h-[400px]"></div>
        </motion.div>
      </div>
    );
  }

  const computerColor = isDark ? "#2d2d2d" : "#e5e5e5";
  const bezelColor = isDark ? "#1a1a1a" : "#d1d1d1";
  const baseColor = isDark ? "#252525" : "#e0e0e0";

  return (
    <motion.div 
      className="computer-container relative max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }}
    >
      {/* Laptop Screen */}
      <motion.div 
        className="relative"
        variants={screenVariants}
        whileHover={hoverVariants}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      >
        {/* Screen Bezel */}
        <div 
          className="computer-screen-bezel rounded-t-lg p-2"
          style={{
            background: bezelColor,
            boxShadow: isDark 
              ? "0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.1)" 
              : "0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0,0,0,0.1)"
          }}
        >
          {/* Camera/Webcam */}
          <div className="flex justify-center mb-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{
                background: isDark ? "#333" : "#999"
              }}
            />
          </div>
          
          {/* Screen */}
          <motion.div 
            className="computer-screen rounded overflow-hidden"
            style={{
              background: isDark ? "#000" : "#fff",
              aspectRatio: "16/9"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <iframe
              src={src}
              className="w-full h-full border-0"
              title={title}
              allow={allow}
              allowFullScreen={allowFullScreen}
              loading={loading}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Laptop Base/Keyboard */}
      <motion.div 
        className="computer-base relative"
        variants={baseVariants}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: "easeOut"
        }}
        style={{
          background: baseColor,
          height: "20px",
          borderRadius: "0 0 8px 8px",
          boxShadow: isDark 
            ? "0 4px 12px rgba(0, 0, 0, 0.4)" 
            : "0 4px 12px rgba(0, 0, 0, 0.15)"
        }}
      >
        {/* Trackpad area indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div 
            className="w-16 h-1 rounded-full"
            style={{
              background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }}
          />
        </div>
      </motion.div>
      
      {/* Depth shadow */}
      <motion.div 
        className="computer-shadow absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 rounded-full"
        variants={shadowVariants}
        whileHover={shadowHoverVariants}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut"
        }}
        style={{
          background: isDark 
            ? "radial-gradient(50% 60% at 50% 50%, rgba(0,0,0,0.6), rgba(0,0,0,0) 70%)"
            : "radial-gradient(50% 60% at 50% 50%, rgba(0,0,0,0.2), rgba(0,0,0,0) 70%)"
        }}
      />
    </motion.div>
  );
}
