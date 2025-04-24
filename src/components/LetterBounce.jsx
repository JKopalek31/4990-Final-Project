import React from "react";
import { motion } from "framer-motion";

export default function LetterBounce({
  text,
  delay = 0,
  stagger = 0.05,
  className = "",
  ...rest
}) {
  /* split into pure words (no spaces kept) */
  const words = text ? text.split(" ") : [];

  /* variants -------------------------------------------------- */
  const wordVariants = {
    hidden: {},
    show: (i = 0) => ({
      transition: { staggerChildren: stagger, delayChildren: delay + i * 0.15 },
    }),
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 12 },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className={`relative inline-block ${className}`}
      {...rest}
    >
      {words.map((word, wi) => (
        <React.Fragment key={wi}>
          {/* whole word keeps together */}
          <motion.span
            variants={wordVariants}
            custom={wi}
            className="inline-block whitespace-nowrap"
            /* right‑padding replaces the lost space */
            style={{ paddingRight: wi === words.length - 1 ? 0 : "0.5rem" }}
          >
            {Array.from(word).map((char, ci) => (
              <motion.span
                key={ci}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </React.Fragment>
      ))}
    </motion.span>
  );
}
