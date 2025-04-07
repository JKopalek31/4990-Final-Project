import React from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useAnimationFrame,
  useTransform,
} from "framer-motion";

export default function RecordWithSoundAndBook() {
  const styles = {
    page: {
      height: "200vh",
      background: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
    },
    row: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "140px", // reduced for visual balance
    },
    bubble: {
      background: "#fff",
      padding: "32px 48px",
      borderRadius: "40px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      transformOrigin: "center",
      whiteSpace: "nowrap",
      fontSize: "2rem",
    },
    bubbleText: {
      margin: 0,
      color: "#333",
    },
    bookWrapper: {
      position: "relative",
      width: "360px", // increased
      height: "480px", // increased
      perspective: "1500px",
    },
    page: {
      position: "absolute",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
    },
    pageFront: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "6px",
      backfaceVisibility: "hidden",
      boxShadow: "2px 4px 10px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.4rem",
      fontWeight: "bold",
      color: "#630000",
      padding: "0 20px",
    },
    pageBack: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
      borderRadius: "6px",
      transform: "rotateY(180deg)",
      backfaceVisibility: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.4rem",
      color: "#630000",
      padding: "0 20px",
    },
  };

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 40, stiffness: 300 });

  const spin = useMotionValue(0);
  const bubbleOpacity = useMotionValue(1);
  const bubblePulse = useMotionValue(1); // reset to 1 initially
  const pageFlipBase = useMotionValue(0);
  const pageRotationValues = Array.from({ length: 6 }).map(() =>
    useMotionValue(0)
  );

  // On scroll, trigger bubble pulse
  useMotionValueEvent(scrollY, "change", () => {
    bubblePulse.set(0.85); // shrink
    bubblePulse.set(1);    // bounce back
  });

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000;
    const vel = smoothVelocity.get();

    // Spin the record
    const spinSpeed = dt * vel * 0.1;
    spin.set(spin.get() + spinSpeed);

    // Optional: Opacity fade by speed
    bubbleOpacity.set(vel > 10 ? 1 : 0.7);

    // Flip pages
    const flipSpeed = dt * (vel * 1.5 + 50);
    pageFlipBase.set(pageFlipBase.get() + flipSpeed);

    pageRotationValues.forEach((mv, i) => {
      const offset = i * 20;
      mv.set(pageFlipBase.get() + offset);
    });
  });

  return (
    <div style={styles.page}>
      <div style={styles.row}>
        {/* Spinning Record */}
        <motion.svg
          width={500}
          height={500}
          viewBox="0 0 500 500"
          style={{ rotate: spin }}
        >
          <circle cx="250" cy="250" r="230" fill="black" />
          <circle cx="250" cy="250" r="60" fill="#eee" />
          <defs>
            <path
              id="circlePath"
              d="M250,250 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"
            />
          </defs>
          <text fill="#fff" fontSize="18" letterSpacing="2">
            <textPath href="#circlePath" startOffset="0%">
              Oral Traditions Oral Traditions Oral Traditions Oral Traditions
            </textPath>
          </text>
        </motion.svg>

        {/* Sound Bubble */}
        <motion.div
          style={{
            ...styles.bubble,
            scale: bubblePulse,
            opacity: bubbleOpacity,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <p style={styles.bubbleText}>“Media”</p>
        </motion.div>

        {/* Flipping Book */}
        <div style={styles.bookWrapper}>
          {pageRotationValues.map((mv, i) => {
            const rotation = useTransform(mv, (v) => v % 360);
            return (
              <motion.div
                key={i}
                style={{
                  ...styles.page,
                  rotateY: rotation,
                  zIndex: 6 - i,
                }}
              >
                <div style={styles.pageFront}>Literature</div>
                <div style={styles.pageBack}>Literature</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
