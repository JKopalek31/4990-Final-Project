import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// const text = [ "Thoughts on the class", typingSpeed = 50,]

export default function ThoughtBubbleTitleInView({
  text = "Important Ideas From Class ...",
  typingSpeed = 50,
}) {
  const [displayedText, setDisplayedText] = useState("");
  
  // 1) Ref for intersection / in-view tracking
  const bubbleRef = useRef(null);
  const inView = useInView(bubbleRef, { once: false, margin: "-50px" });
  // `once: false` means it will trigger again each time it re-enters the viewport

  useEffect(() => {
    if (inView) {
      // Reset the text and type again each time we become visible
      setDisplayedText("");
      let index = 0;
      const timer = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        if (index >= text.length) {
          clearInterval(timer);
        }
      }, typingSpeed);

      return () => clearInterval(timer);
    }
  }, [inView, text, typingSpeed]);

  return (
    <motion.div
      ref={bubbleRef}
      className="relative max-w-5xl mx-auto bg-slate-200 text-slate-800 px-4 py-3 rounded-2xl shadow-lg flex flex-col mt-52 mb-20"
      style={{
        // optional cartoon bubble tail using inline style
      }}

      // 2) Slide in from the left each time it appears in the viewport
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}

      // 3) Ensure re-triggering if scrolled away and back
      viewport={{ once: false, margin: "-50px" }}
    >
      {/* Bubble Tail */}
      <div
        style={{
          content: '""',
          position: "absolute",
          left: "-10px",
          bottom: "10px",
          width: 0,
          height: 0,
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          borderRight: "10px solid #e2e8f0",
        }}
      />

      {/* Typed text + blinking cursor */}
      <h1 className="text-3xl sm:text-7xl font-semibold leading-snug">
        {displayedText}
        <span className="blinking-cursor">|</span>
      </h1>
    </motion.div>
  );
}
