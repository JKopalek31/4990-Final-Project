import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

/**
 * A triple-copy Framer Motion marquee for smoothest scrolling:
 * - We measure a single text copy's width precisely (no added margin).
 * - We place 3 copies side by side.
 * - We continuously scroll left.
 * - When we've passed 1 copy's width, we shift x by +measuredWidth
 *   so the marquee never "snaps" or leaves a gap.
 * 
 * TIPS:
 * - If you still see a tiny flicker, tweak +/- 1 or 2 px from measuredWidth in the reset check.
 */
export default function InfiniteMarquee({
  text = "Why is this language endangered?",
  speed = 50,          // px per second
  className = "",      // container styling
  textClassName = "",  // text styling
}) {
  const containerRef = useRef(null);
  const [measuredWidth, setMeasuredWidth] = useState(0);
  const x = useMotionValue(0);

  // Measure text after mount
  useEffect(() => {
    if (!containerRef.current) return;
    const measureSpan = containerRef.current.querySelector(".marquee-measure");
    if (measureSpan) {
      setMeasuredWidth(measureSpan.offsetWidth);
    }
  }, [text]);

  // Animate left each frame
  useAnimationFrame((t, delta) => {
    if (!measuredWidth) return;
    const move = (speed * delta) / 1000;
    x.set(x.get() - move);

    // If scrolled beyond one copy, shift back by one copy
    // so effectively we stay in the middle copy infinitely
    if (x.get() <= -measuredWidth) {
      x.set(x.get() + measuredWidth);
    }
  });

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div 
        ref={containerRef}
        className="absolute flex whitespace-nowrap text-6xl text-amber-300" 
        style={{ x }}
      >
        {/*
          3 copies of the text: A, B, C 
          So we can smoothly shift from copy A to B, B to C
        */}
        <span className="marquee-measure inline-block">
          <span className={textClassName}>{text}</span>
        </span>
        <span className="inline-block">
          <span className={textClassName}>{text}</span>
        </span>
        <span className="inline-block">
          <span className={textClassName}>{text}</span>
        </span>
      </motion.div>
    </div>
  );
}
