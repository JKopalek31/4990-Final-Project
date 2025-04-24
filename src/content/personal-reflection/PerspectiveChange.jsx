import React, { useState, useRef } from "react";
import { motion, useInView} from "framer-motion";

const carouselItems = [
  { id: 1, title: "Methodology", text:"This class was super engaging and very different from my other classes. Being presented content in a unique and memorable way embraces persistance of information.", bg: "bg-maroon" },
  { id: 2, title: "Content", text:"I liked the use of movies and other modern media to convery messages about language as they clearly demonstrated what we discussed in class.", bg: "bg-salmon" },
  { id: 3, title: "Collaboration", text:"I feel like I have improved my teamwork and presentation skills though the activities in class.", bg: "bg-maroon" },
  { id: 4, title: "Inclusivity", text:"I feel like I have learned a lot from this class both from a sociability and global citizens standpoint ", bg: "bg-salmon" },
];

export default function Perspective3DCarouselPinned() {
  const [rotation, setRotation] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const sliceAngle = 360 / carouselItems.length;
  const radius = 350;

  function handleDrag(e, info) {
    // Note: removed the negative sign to invert direction
    const rotateDelta = info.delta.x * 0.3;
    setRotation((prev) => prev + rotateDelta);
  }

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center p-4 mt-0 bg-gradient-to-b from-salmon via-salmon to-offwhite">
        <div className="h-auto ">
            <h1 className="text-7xl sm-text-8xl font-semibold mb-4 bg-gradient-to-r from-maroon via-maroon/90 to-maroon text-transparent bg-clip-text p-4">How Class Changed My Perspective</h1>
                <motion.div
                    ref={ref}
                    className="w-full h-1 bg-offwhite rounded-full mb-40 my-4 mx-auto"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                />

        </div>
            <div className="bg-salmon w-auto h-1 rounded-full"/>

      <div
        className="relative w-96 h-72"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="absolute w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
        >
          {carouselItems.map((item, idx) => {
            const angle = sliceAngle * idx;
            return (
                <div
                key={item.id}
                className={`
                    absolute w-72 h-48 flex flex-col
                    items-center justify-center text-white
                    rounded-xl
                    shadow-lg
                    ${item.bg}
            +       border-2 border-white/40
            +       shadow-[0_0_15px_3px_rgba(255,255,255,0.5)]
                `}
                style={{
                    transformStyle: "preserve-3d",
                    transform: `
                    rotateY(${angle}deg)
                    translateZ(${radius}px)
                    `,
                }}
                >
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-center mx-auto">{item.text}</p>
                </div>
            );
            })}

        </motion.div>
      </div>

      {/* <p className="text-gray-600 mt-8 text-center w-3/4">
        Drag <strong>left/right</strong> inside the box to spin. Now it goes the opposite direction.
      </p> */}
    </div>
  );
}
