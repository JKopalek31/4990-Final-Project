import React, { useState } from "react"
import { motion } from "framer-motion"
import MotionTitle from "../../components/MotionTitle"
import PulsingBorderCardChildren from "../../components/PulsingBorderCardChildren"

/** 
 * FlippableCard: 
 * - On mobile (below `sm`), w-full/h-auto
 * - On sm+, fixes width & height
 * - 3D flip on tap/click
 */
function FlippableCard({ frontImage, frontTitle, backTitle, backContent }) {
  const [flipped, setFlipped] = useState(false)
  const handleFlip = () => setFlipped(!flipped)

  return (
    <div
      onClick={handleFlip}
      // Perspective on container
      style={{ perspective: "1000px" }}
      className="
        relative
        cursor-pointer
        w-full h-auto
        sm:w-full sm:h-[28rem]
        flex-shrink-0
      "
    >
      <div className="w-full h-1 sm:w-0 sm:h-0 bg-maroon my-8"/>
      <motion.div
        // This is your 3D wrapper
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* FRONT SIDE */}
        <div
          className="
            absolute
            inset-0
            w-full h-full
            backface-hidden
            rounded-3xl
            shadow-lg
            bg-gradient-to-tr
            from-salmon
            to-offwhite
            flex
            flex-col
            
          "
          style={{ minHeight: "100%" }}
        >
          <img
            src={frontImage}
            alt={frontTitle}
            className="
              w-full
              h-52
              sm:h-7/8
              object-cover
              rounded-t-2xl
            "
          />
          <div className="p-2 flex items-center justify-center">
            <h2 className="text-5xl sm:text-4xl font-bold text-center text-slate-800 leading-tight">
              {frontTitle}
            </h2>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="
            absolute
            inset-0
            w-full 
            h-52
            bg-white
            rounded-3xl
            shadow-lg
            rotate-y-180
            backface-hidden
            flex
            p-2
            flex-col
            border-4 
          border-maroon
          "
          style={{
            transform: "rotateY(180deg)",
            minHeight: "100%",
          }}
        >
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            {backTitle && (
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-maroon">
                {backTitle}
              </h3>
            )}
            <p className="text-base sm:text-lg text-slate-700 leading-snug">
              {backContent}
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center">
            Tap to flip
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function AinuCultureFlipShowcase() {
  const cards = [
    {
      frontImage: "https://picsum.photos/400/300?random=101",
      frontTitle: "Epic Poems (Yukar)",
      backTitle: "Heroic Narratives",
      backContent:
        "Stories of gods and ancestors forming the backbone of Ainu mythic heritage.",
    },
    {
      frontImage: "https://picsum.photos/400/300?random=102",
      frontTitle: "Folk Tales (Uepeker)",
      backTitle: "Moral Lessons",
      backContent:
        "Short, moral stories focusing on nature, animals, and everyday life in Ainu tradition.",
    },
    {
      frontImage: "https://picsum.photos/400/300?random=103",
      frontTitle: "Communal Songs (Upopo)",
      backTitle: "Repetitive Chants",
      backContent:
        "Performed in groups with repeated patterns, reflecting communal unity and identity.",
    },
    {
      frontImage: "https://picsum.photos/400/300?random=104",
      frontTitle: "Language Revival",
      backTitle: "Modern Efforts",
      backContent:
        "Radio programs, museum events, children's books fueling Ainu language revival.",
    },
    {
      frontImage: "https://picsum.photos/400/300?random=105",
      frontTitle: "🍏 Radio & Children’s Books",
      backTitle: "Media Initiatives",
      backContent:
        "Ainu radio programs along with children’s books, passing on language to younger generations.",
    },
    {
      frontImage: "https://picsum.photos/400/300?random=106",
      frontTitle: "🫐 Language Courses & Events",
      backTitle: "Community Hubs",
      backContent:
        "Classes and museum events (e.g., Upopoy National Ainu Museum) vital for Ainu language teaching.",
    },
  ]

  return (
    <div className="mt-40">
      <MotionTitle />

      <section className="py-10 bg-offwhite mb-40">
        <div className="max-w-screen-xl mx-auto px-2 text-center mt-16">
          {/* 1 column below sm (640px), 2 col at sm, 3 at lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-96 sm:gap-8 mx-auto mb-4">
            {cards.map((card, index) => {
              const fromLeft = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ x: fromLeft ? -80 : 80, opacity: 0, scale: 0.8 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FlippableCard
                    frontImage={card.frontImage}
                    frontTitle={card.frontTitle}
                    backTitle={card.backTitle}
                    backContent={card.backContent}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
