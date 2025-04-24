import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Cloud } from "lucide-react";
import Cloud from "../../components/Cloud"
const cardsData = [
  {
    id: 1,
    front: "Language",
    back: "By researching the Ainu language and people, My perspective on endangered languages have changed significantly. Seeing how depleated the population for such a rich culture becoming almost erraticated is sad and for trivial reasons.",
  },
  {
    id: 2,
    front: "Identity",
    back: "Seeing the impact of traditions and rituals passed down over centuries helped me see how important these aspects are to identity. When you embrace your identity, you should be proud of what you are and not feel the preasure of external forces.",
  },
  {
    id: 3,
    front: "Culture",
    back: "When looking at places like Upopoy National Park, the importance of preserving endangered ways-of-life is highlighted. The dire need to support culture preservation efforts has become more important more and more languages go extinct every day.",
  },
];

export default function FloatStopCards() {
  // Generate random star background
  const starCount = 70;
  const stars = Array.from({ length: starCount }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1,
  }));

  return (
    <>
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: 'linear-gradient(180deg, #cbd5e1 0%, #3A3A3E 85%, #18182b 100%)',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "2rem",
        paddingBottom: "20px",
      }}
    >
      {/* Inline keyframes for star twinkle + responsive text */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* A CSS class for the front text, with media query for smaller screens */
        .responsiveTitle {
          margin: 0;
          color: #334155;
          font-size: 175px; /* default (desktop) */
          text-align: center;
        }
        @media (max-width: 600px) {
          .responsiveTitle {
            font-size: 80px; /* smaller size on mobile */
          }
        }
      `}</style>

      {/* Star background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: "#fff",
              borderRadius: "50%",
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Stack the cards vertically */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {cardsData.map((card) => (

          <FloatingSlideCard key={card.id} front={card.front} back={card.back} />

        ))}
      </div>
      {/* <Cloud />  // 500‑px‑tall full‑width strip */}
      </div>
    {/* <Cloud/> */}
    </>
  );
}

/**
 * FloatingSlideCard:
 *  - Container is 400px tall
 *  - Floats up/down if closed, stops floating when open (y=0)
 *  - Slides to the RIGHT if revealed (x=+300)
 *  - On second click, closes => re-float + return to x=0
 */
function FloatingSlideCard({ front, back }) {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (

    <motion.div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
      // If card is NOT revealed => float up/down. If revealed => y=0
      animate={{
        y: revealed ? 0 : [0, -10, 0, 10, 0],
      }}
      transition={{
        y: revealed
          ? { duration: 0.4 } // quick settle if open
          : {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
      }}
    >

      {/* The back side */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "300px",
          height: "400px",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <p style={{ margin: 0, color: "#EEEBDD", fontSize: "1.25rem" }}>{back}</p>
      </div>
      {/* The front side: slides RIGHT if revealed */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "400px",
          borderRadius: "0.5rem",
          backgroundColor: "#EEEBDD",
          padding: "1rem",
          boxSizing: "border-box",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          x: revealed ? 300 : 0, // slide right if revealed, else x=0
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={handleClick}
      >
        <p className="responsiveTitle">{front}</p>
      </motion.div>
    </motion.div>

  );
}
