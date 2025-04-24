import React, { useState } from "react";
import { ImageCitationsBank } from "../../imagecitations/images.js";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCards() {
  const [active, setActive] = useState(null); // index of open card
  const toggle = (i) => setActive((prev) => (prev === i ? null : i));

  /** decide which side to slide from based on column index */
  const slideFromSide = (idx) => {
    // 3‑col on lg screens, 2‑col on sm; fall back to left
    const col = idx % 3;                 // 0‑based column
    if      (col === 0) return -120;     // left column -> slide from left
    else if (col === 2) return  120;     // right column -> slide from right
    else                 return  0;      // middle column -> fade from center
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ImageCitationsBank.map((item, idx) => {
          const isOpen   = active === idx;
          const offsetX  = slideFromSide(idx);

          return (
            <motion.button
              key={idx}
              onClick={() => toggle(idx)}
              initial={{ opacity: 0, x: offsetX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="group relative overflow-hidden rounded shadow-lg focus:outline-none"
            >
              {/* image */}
              <img
                src={item.image}
                alt={item.description}
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isOpen ? "scale-105" : "group-hover:scale-105"
                }`}
              />

              {/* hover tint */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* title preview */}
              <span
                className={`absolute inset-x-0 bottom-2 text-center text-white font-semibold transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.description}
              </span>

              {/* full overlay */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center px-4 text-center"
                  >
                    <h3 className="text-lg font-bold mb-2">
                      {item.description}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-info hover:text-deepteal transition-colors"
                      >
                        Visit resource
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
