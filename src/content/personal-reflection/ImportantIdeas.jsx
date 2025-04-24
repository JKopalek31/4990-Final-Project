import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/** Returns an integer between min and max (inclusive). */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Decide circle diameters based on container width.
 * If container < 600 => smaller diameters,
 * else => bigger diameters.
 */
function getDiameters(containerWidth, isBig) {
  const breakpoint = 600;
  if (containerWidth < breakpoint) {
    // "Mobile" sizes
    return isBig ? 300 : 150;
  } else {
    // Larger screens
    return isBig ? 700 : 300;
  }
}

/**
 * Initialize circle objects with random positions & velocities
 * using the container width to determine base diameter.
 */
function initBalls(circleData, containerW, containerH) {
  return circleData.map((data) => {
    const normalDiameter = getDiameters(containerW, false);
    const x = randInt(0, containerW - normalDiameter);
    const y = randInt(0, containerH - normalDiameter);

    // random velocity in -4..4
    const dx = (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 2);
    const dy = (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 2);

    // random color
    const possibleColors = [
        "#630000", 
        "#D8B6A4", 
        "#5C4033", 
        
      ];
      const color = possibleColors[randInt(0, possibleColors.length - 1)];

    return {
      ...data,
      x,
      y,
      dx,
      dy,
      color,
    };
  });
}

export default function ImportantIdeas() {
  const containerRef = useRef(null);

  const [balls, setBalls] = useState([]);
  const [isStopped, setIsStopped] = useState(false);
  const [selectedBallId, setSelectedBallId] = useState(null);

  const circleData = [
    {
      id: 1,
      title: "Culture should be celebrated. Embracing your routes is noble and promotes a more enclusive environment for everyone involved.",
      question: "What are the most important ideas you've learned?",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "Language and culture are tied very closely and should be considered as one entity(can't have one without the other).",
      question: "How has your perspective changed in this course?",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      title: "This class challenged my thinking of sociability within cultures. Thinking about how people act in different situations.",
      question: "What assumptions have you reconsidered?",
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      title: "Learning about the obsurd number of endangered languages broaded my perspective on language preservation efforts.",
      question: "How has researching your chosen language helped?",
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      title: "Language plays a huge roll in having an identity associated with your lineage. You being yourself and yourself only.",
      question: "What connections exist between language and identity?",
      image: "https://picsum.photos/300/200?random=5",
    },
  ];

  // On mount, measure container & init ball positions
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    setBalls(initBalls(circleData, w, h));
  }, []);

  // The main animation with collisions
  useEffect(() => {
    let reqId;
    const container = containerRef.current;
    if (!container) return;

    function animate() {
      setBalls((prev) => {
        let nextBalls = [...prev];

        if (!isStopped) {
          nextBalls = nextBalls.map((ball) => {
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            const isBig = ball.id === selectedBallId;
            const diameter = getDiameters(containerWidth, isBig);

            let { x, y, dx, dy } = ball;

            // Move
            x += dx;
            y += dy;

            // Container boundary bounce
            if (x < 0 || x + diameter > containerWidth) {
              dx = -dx;
            }
            if (y < 0 || y + diameter > containerHeight) {
              dy = -dy;
            }

            // clamp after flipping velocity
            x = Math.min(Math.max(x, 0), containerWidth - diameter);
            y = Math.min(Math.max(y, 0), containerHeight - diameter);

            return { ...ball, x, y, dx, dy };
          });

          // Multi-pass collisions
          nextBalls = multiPassCollision(nextBalls, selectedBallId, container);
        } else {
          // If pinned
          if (selectedBallId != null) {
            nextBalls = pinnedCollision(nextBalls, selectedBallId, container);
          }
        }

        return nextBalls;
      });
      reqId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(reqId);
  }, [isStopped, selectedBallId]);

  /** 
   * multiPassCollision => normal collisions among all circles 
   * (no overlap). If one circle is big, we treat it as pinned.
   */
  function multiPassCollision(ballsArr, bigId, container) {
    let updated = [...ballsArr];
    const PASSES = 5;
    for (let i = 0; i < PASSES; i++) {
      updated = resolveCollisions(updated, bigId, container);
    }
    return updated;
  }

  /** 
   * pinnedCollision => if we have one big circle,
   * push small circles away from it so they don't overlap.
   */
  function pinnedCollision(ballsArr, bigId, container) {
    let updated = [...ballsArr];
    const bigIndex = updated.findIndex((b) => b.id === bigId);
    if (bigIndex < 0) return updated;

    const bigBall = updated[bigIndex];
    const bigDiameter = getDiameters(container.offsetWidth, true);
    const rBig = bigDiameter / 2;

    for (let i = 0; i < updated.length; i++) {
      if (i === bigIndex) continue;

      const s = updated[i];
      const smallDiameter = getDiameters(container.offsetWidth, false);
      const rS = smallDiameter / 2;

      const dx = (s.x + rS) - (bigBall.x + rBig);
      const dy = (s.y + rS) - (bigBall.y + rBig);
      const distSq = dx * dx + dy * dy;
      const minDist = rBig + rS;

      if (distSq < minDist * minDist) {
        // Overlap => push small outward
        const dist = Math.sqrt(distSq) || 0.01;
        const overlap = minDist - dist;
        const ux = dx / dist;
        const uy = dy / dist;

        updated[i] = {
          ...s,
          x: s.x + overlap * ux,
          y: s.y + overlap * uy,
        };
      }
    }
    return updated;
  }

  /** 
   * resolveCollisions => single-pass collision among all pairs.
   * If one circle is big (pinned), we move the other only.
   * If both small, push half & half.
   */
  function resolveCollisions(ballsArr, bigId, container) {
    let updated = [...ballsArr];
    for (let i = 0; i < updated.length; i++) {
      for (let j = i + 1; j < updated.length; j++) {
        const A = updated[i];
        const B = updated[j];

        const isABig = A.id === bigId;
        const isBBig = B.id === bigId;

        const sizeA = getDiameters(container.offsetWidth, isABig);
        const sizeB = getDiameters(container.offsetWidth, isBBig);
        const rA = sizeA / 2;
        const rB = sizeB / 2;

        const axCenter = A.x + rA;
        const ayCenter = A.y + rA;
        const bxCenter = B.x + rB;
        const byCenter = B.y + rB;

        const dx = bxCenter - axCenter;
        const dy = byCenter - ayCenter;
        const distSq = dx * dx + dy * dy;
        const minDist = rA + rB;

        if (distSq < minDist * minDist) {
          // Overlap => push away
          const dist = Math.sqrt(distSq) || 0.01;
          const overlap = minDist - dist;
          const ux = dx / dist;
          const uy = dy / dist;

          if (isABig && isBBig) {
            // If two big circles (unlikely), push half & half
            const half = overlap / 2;
            updated[i] = {
              ...A,
              x: A.x - half * ux,
              y: A.y - half * uy,
            };
            updated[j] = {
              ...B,
              x: B.x + half * ux,
              y: B.y + half * uy,
            };
          } else if (isABig) {
            // A pinned => move B only
            updated[j] = {
              ...B,
              x: B.x + overlap * ux,
              y: B.y + overlap * uy,
            };
          } else if (isBBig) {
            // B pinned => move A only
            updated[i] = {
              ...A,
              x: A.x - overlap * ux,
              y: A.y - overlap * uy,
            };
          } else {
            // both small => push half & half
            const half = overlap / 2;
            updated[i] = {
              ...A,
              x: A.x - half * ux,
              y: A.y - half * uy,
            };
            updated[j] = {
              ...B,
              x: B.x + half * ux,
              y: B.y + half * uy,
            };
          }
        }
      }
    }
    return updated;
  }

  // Expand a circle => freeze
  function handleCircleClick(ball) {
    if (selectedBallId && selectedBallId !== ball.id) {
      return; // Another is already expanded
    }
    setSelectedBallId(ball.id);
    setIsStopped(true);

    // Immediately clamp so it doesn't overflow
    setBalls((prev) => {
      const container = containerRef.current;
      if (!container) return prev;

      const arr = [...prev];
      const idx = arr.findIndex((b) => b.id === ball.id);
      if (idx < 0) return arr;

      const bigDiameter = getDiameters(container.offsetWidth, true);
      let { x, y } = arr[idx];
      x = Math.min(Math.max(x, 0), container.offsetWidth - bigDiameter);
      y = Math.min(Math.max(y, 0), container.offsetHeight - bigDiameter);
      arr[idx] = { ...arr[idx], x, y };
      return arr;
    });
  }

  // Close by clicking outside
  function handleContainerClick() {
    if (selectedBallId != null) {
      setSelectedBallId(null);
      setIsStopped(false);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-gradient-to-b from-offwhite via-offwhite to-salmon"
      onClick={handleContainerClick}
    >
      {balls.map((ball) => {
        const container = containerRef.current;
        const isBig = ball.id === selectedBallId;

        // Decide this circle’s diameter based on container width
        const diameter =
          container ? getDiameters(container.offsetWidth, isBig) : 300;

        return (
          <motion.div
            key={ball.id}
            className="absolute rounded-full cursor-pointer flex items-center justify-center"
            style={{ backgroundColor: ball.color }}
            animate={{
              x: ball.x,
              y: ball.y,
              width: diameter,
              height: diameter,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            onClick={(e) => {
              e.stopPropagation();
              if (!isBig) {
                handleCircleClick(ball);
              }
            }}
          >
            {isBig && (
              <motion.div
                className="p-4 text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl sm:text-6xl font-bold mb-3">{ball.title}</h2>
                {/* <img
                  src={ball.image}
                  alt="Bubble content"
                  className="w-56 h-36 object-cover rounded mb-2 mx-auto"
                /> */}
                {/* <p className="text-base">{ball.question}</p> */}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
