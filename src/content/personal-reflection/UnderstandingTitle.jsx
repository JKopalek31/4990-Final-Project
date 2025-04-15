import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SpaceMoonTitle() {
  // 1) Ref for the title so we can detect in-view
  const titleRef = useRef(null);
  // once: true => only animates the first time it enters
  const inView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-offwhite via-salmon to-slate-300 overflow-hidden">
      {/* 2) Inline <style> for star twinkle + moon float */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }

        /* A simple float animation for the moon */
        @keyframes floatMoon {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
      `}</style>

      {/* 3) Minimal star divs for demonstration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/8 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-7/8 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-7/8 left-7/8 w-1 h-1 bg-white rounded-full animate-pulse" />

      </div>

      {/* 4) The moon at bottom-left, floating indefinitely */}
      <div
        className="
          absolute bottom-8 left-12
          w-36 h-36 sm:w-52 sm:h-52
          bg-gray-200 rounded-full shadow-xl border-4 border-white overflow-hidden
          /* Apply the custom floatMoon keyframe */
          animate-[floatMoon_3s_ease-in-out_infinite]
        "
      >
        {/* Some craters */}
        <div className="absolute w-5 h-5 bg-gray-400 rounded-full top-6 left-4" />
        <div className="absolute w-4 h-4 bg-gray-500 rounded-full top-10 left-10" />
        <div className="absolute w-4 h-4 bg-gray-400 rounded-full top-16 left-4" />
      </div>

      {/* 5) The main title: a motion element that slides in from left on inView */}
      <motion.h1
        ref={titleRef}
        className="
          top-4 text-white text-5xl sm:text-7xl
          font-bold tracking-wide uppercase text-center drop-shadow-lg
          z-10
        "
        // We'll control the animate state based on inView
        initial={{ x: -80, opacity: 0 }}
        animate={
          inView
            ? { x: 0, opacity: 1 }
            : { x: -80, opacity: 0 }
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Has the Research Deepened My Understanding
      </motion.h1>
    </div>
  );
}
