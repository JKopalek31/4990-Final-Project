// import React, { useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useScroll,
//   useVelocity,
//   useSpring,
//   useAnimationFrame,
// } from "framer-motion";
// import cloudImage from "../assets/darkcloud.webp";
// // import cloudImage from "../assets/colorCloud.webp";
// // import cloudImage from "../assets/cloudTransparent.png";



// /* ‑‑‑ sizes — keep widths in sync ‑‑‑ */
// const SLIDE_W_PX = 256;               // Tailwind  w‑64
// const PAIR_W     = SLIDE_W_PX * 2;    // 512 px
// const COPIES     = 4;                 // 4 pairs → 8 slides

// /* build 8 slides (normal / flipped ×4) */
// const slides = Array.from({ length: COPIES * 2 }, (_, i) => ({
//   id: i,
//   flip: i % 2 === 1,
// }));

// export default function CloudScrollDrivenLoop() {
//   /* track position */
//   const x = useMotionValue(0);

//   /* current drift direction:  -1 = left,  +1 = right */
//   const dirRef = useRef(-1);

//   /* --- scroll velocity ------------------------------------ */
//   const { scrollY } = useScroll();
//   const rawVel      = useVelocity(scrollY);              // px / s
//   const smoothVel   = useSpring(rawVel, {
//     stiffness: 400,
//     damping: 60,
//   });

//   /* --- frame loop ----------------------------------------- */
//   const CRUISE = 80;     // px/s when idle
//   const SCALE  = 0.4;    // multiply scroll speed by this
//   const MAX    = 400;    // cap boost

//   useAnimationFrame((_, dt) => {
//     const dtS  = dt / 1000;

//     /* read current smoothed scroll velocity */
//     const v    = smoothVel.get();           // + down, − up

//     /* update direction if outside dead‑zone */
//     if (v > 50)  dirRef.current = -1;       // scrolling down  → move left
//     if (v < -50) dirRef.current =  1;       // scrolling up    → move right

//     /* speed boost proportional to magnitude, capped */
//     const boost = Math.min(Math.abs(v) * SCALE, MAX);

//     /* signed speed: direction × (cruise + boost) */
//     const speed = dirRef.current * (CRUISE + boost);

//     /* move + wrap by one pair width */
//     let nextX = x.get() + speed * dtS;      // dir: +right, −left
//     if (nextX <= -PAIR_W) nextX += PAIR_W;
//     if (nextX >= 0)       nextX -= PAIR_W;

//     x.set(nextX);
//   });

//   /* --- JSX ------------------------------------------------ */
//   return (
//     <div className="h-auto flex flex-col items-center overflow-x-visable overflow-y-visable ">
//       <div className="w-full h-auto overflow-hidden">
//         <motion.div className="flex" style={{ x }}>
//           {slides.map(({ id, flip }) => (
//             <img
//               key={id}
//               src={cloudImage}
//               alt="cloud"
//               draggable="false"
//               className={`w-full h-auto object-cover select-none pointer-events-none m-0 ${
//                 flip ? "scale-x-[-1]" : ""
//               }`}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }



import React, { useRef, useLayoutEffect, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import cloudImage from "../assets/bigCloud.webp";   // swap freely!

/* ---- build 8 slides (normal + flipped ×4) ------------------- */
const COPIES = 4;
const slides = Array.from({ length: COPIES * 2 }, (_, i) => ({
  id: i,
  flip: i % 2 === 1,
}));

export default function CloudScrollDrivenLoop() {
  /* horizontal offset for the track */
  const x        = useMotionValue(0);

  /* measured width of ONE tile (set after image loads) */
  const tileW    = useRef(0);
  const trackRef = useRef(null);

  /* measure helper */
  const measure = () => {
    if (trackRef.current?.firstChild) {
      tileW.current = trackRef.current.firstChild.offsetWidth;
    }
  };

  /* measure right after first paint */
  useLayoutEffect(measure, []);

  /* re‑measure on window resize */
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* -------- scroll velocity → direction & boost ------------- */
  const { scrollY } = useScroll();
  const rawVel      = useVelocity(scrollY);
  const smoothVel   = useSpring(rawVel, { stiffness: 400, damping: 60 });

  const dirRef = useRef(-1);  // -1 = left,  +1 = right
  const CRUISE = 80;          // px/s when idle
  const SCALE  = 0.4;         // scale scroll velocity
  const MAX    = 400;         // cap boost

  /* frame loop: move & wrap by ONE measured pair width ------- */
  useAnimationFrame((_, dt) => {
    const dtSec = dt / 1000;
    const v     = smoothVel.get();

    /* flip direction only when scroll velocity leaves dead‑zone */
    if (v > 50)  dirRef.current = -1;    // scroll down → left
    if (v < -50) dirRef.current =  1;    // scroll up   → right

    const boost = Math.min(Math.abs(v) * SCALE, MAX);
    const speed = dirRef.current * (CRUISE + boost);

    const pairW = tileW.current * 2;     // one normal + one flipped
    if (!pairW) return;                  // not measured yet

    /* advance + wrap into (-pairW, 0] */
    let nextX = x.get() + speed * dtSec;
    nextX     = ((nextX % pairW) + pairW) % pairW - pairW;
    x.set(nextX);
  });

  /* re-measure each time an image finishes loading */
  const handleImgLoad = measure;

  /* ---------------- JSX ------------------------------------- */
  return (
    <div className="overflow-x-hidden mt-0 pt-0">
      <div className="w-full overflow-hidden mt-0 pt-0">
        <motion.div ref={trackRef} className="flex mt-0 pt-0" style={{ x }}>
          {slides.map(({ id, flip }) => (
            <img
              key={id}
              src={cloudImage}
              onLoad={handleImgLoad}
              alt=""
              draggable="false"
              className={`w-full object-cover select-none ${
                flip ? "scale-x-[-1]" : ""
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
