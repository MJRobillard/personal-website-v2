"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PhoneVisualProps {
  src: string;
  title: string;
  allow?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
}

export default function PhoneVisual({ 
  src, 
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

  const frameVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1
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
      scale: 1.03
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
      <div className="relative mx-auto max-w-md">
        <motion.div 
          className="relative bg-gray-300 rounded-[2.5rem] p-2 shadow-2xl"
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
          <div className="bg-gray-200 rounded-[2rem] h-[600px]"></div>
        </motion.div>
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
    <motion.div 
      className="phone-container relative"
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
      {/* iPhone frame styling */}
      <motion.div 
        className={`phone-frame relative ${variant} rounded-[2.5rem] p-2`}
        variants={frameVariants}
        whileHover={hoverVariants}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        style={{ 
          boxShadow: isDark 
            ? "0 8px 32px rgba(229, 229, 231, 0.3), 0 0 0 1px rgba(255,255,255,0.1)" 
            : "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0,0,0,0.1)"
        }}
      >
        <motion.div 
          className="phone-screen rounded-[2rem] overflow-hidden"
          variants={screenVariants}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut"
          }}
          style={{
            background: isDark ? "#1c1c1e" : "#ffffff"
          }}
        >
          {/* iPhone notch */}
          <motion.div 
            className="phone-notch h-6 rounded-t-[2rem] flex items-center justify-center"
            style={{
              background: isDark ? "#d1d1d6" : "#1c1c1e"
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.div 
              className="w-16 h-1 bg-gray-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            />
          </motion.div>
          
          {/* Screen content */}
          <motion.div 
            className="phone-screen-content h-[800px] relative"
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
          
          {/* Home indicator */}
          <motion.div 
            className="phone-home-indicator h-2 rounded-b-[2rem] flex items-center justify-center"
            style={{
              background: isDark ? "#d1d1d6" : "#1c1c1e"
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.div 
              className="w-12 h-1 bg-white rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Depth shadow */}
      <motion.div 
        className="phone-shadow absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 rounded-full"
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
