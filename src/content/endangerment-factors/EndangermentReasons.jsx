import React, { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

import hokkaidoLinguists from "../../assets/hokkaidoLinguists.jpg"
import ainuDictionary from "../../assets/ainuDictionary.jpg"
import ainuLanguageNest from "../../assets/ainuLanguageNest.jpg"
import ainuClasses from "../../assets/ainuClasses.jpg"
import ainuTv from "../../assets/ainuTv.jpg"


/** A small custom hook to detect desktop vs. mobile via screen width */
function useIsDesktop(minWidth = 1024) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= minWidth
  )

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= minWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [minWidth])

  return isDesktop
}

const cards = [
  {
    title: "Field Records",
    description:
      "Hokkaidō University AINU Project, Waseda U., Kyoto U., and the Endangered Languages Documentation Programme (ELDP) fund expeditions to record the last fluent speakers (audio, video, elicited narratives).",
    icon: "🌏",
    image: hokkaidoLinguists,
  },
  {
    title: "Lexicography & Corpora",
    description:
      "FRPAC maintains an online Ainu-Japanese-English dictionary. Linguists Refsing, Tamura, and Shibatani contribute updates and new information.",
    icon: "🏙️",
    image: ainuDictionary,
  },
  {
    title: "Community Language Nests",
    description:
      "A = Us Kor project in Shiraoi, Sapporo. An emmersive language nest, and a newer program in Asahikawa that put preschoolers together with elder speakers 4–5 days a week.",
    icon: "💼",
    image: ainuLanguageNest,
  },
  {
    title: "School & Adult Classes",
    description:
      "50-plus municipal boards (especially in eastern Hokkaidō) now offer after-school Ainu lessons. Also, Upopoy National Ainu Museum trains instructors to teach Ainu programatically and realistically.",
    icon: "🗣️",
    image: ainuClasses,
  },
  {
    title: "Media & Technology",
    description:
      "NHK‐FM monthly Ainu radio slot; AINU Times quarterly magazine; Indie devs (e.g., Ainu Today app) supported by the 2019 Ainu Promotion Act grants.",
    icon: "🔐",
    image: ainuTv,
  },
]

export const PreservationEfforts = () => {
  // Splits heading into separate words
  const text = "Efforts being made to preserve the language?".split(" ")

  // For the horizontal line reveal
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  // State for mobile tap/click
  const [activeIndex, setActiveIndex] = useState(null)

  // Detect if we are on desktop (>= 1024px)
  const isDesktop = useIsDesktop()

  return (
    <div className="relative w-full py-10 px-6 pt-40 text-center pb-0">
      {/* Animate each word in the heading */}
      <div className="mb-6">
        {text.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
          >
            {word + " "}
          </motion.span>
        ))}
      </div>

      {/* Horizontal line reveal */}
      <motion.div
        ref={ref}
        className="w-auto h-1 bg-maroon rounded-full mb-20 mx-auto"
        style={{ maxWidth: "600px" }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-screen-xl mx-auto mb-20">
        {cards.map((card, index) => {
          // For the "slide in" direction
          const direction = index % 2 === 0 ? -100 : 100

          // On mobile, tapping toggles the active card
          const handleClick = () => {
            // If we're on desktop, do nothing
            if (isDesktop) return
            setActiveIndex(activeIndex === index ? null : index)
          }

          // Are we "hover" or "rest"?
          // Desktop: if we hover, we'll see "hover" via whileHover
          // Mobile: if the card is activeIndex, it's "hover"
          const cardVariant = activeIndex === index ? "hover" : "rest"

          return (
            <motion.div
              key={index}
              className="relative w-full rounded-lg overflow-hidden"
              style={{ height: 500 }}
              initial={{ opacity: 0, x: direction * 2, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.175, 0.885, 0.32, 1.275],
                delay: index * 0.1,
              }}
              variants={{
                rest: {},
                hover: {},
              }}
              // 1) Desktop hover:
              //    If isDesktop => use whileHover
              whileHover={isDesktop ? "hover" : undefined}
              // 2) On mobile => click toggles
              onClick={handleClick}
              // 3) Animate depends on mobile state
              animate={cardVariant}
            >
              {/* Background Image */}
              <motion.img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 0.85 },
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Title (shown by default, hidden on hover) */}
              <motion.div
                className="absolute top-0 left-0 p-6 z-10 text-left"
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-red-400 text-6xl sm:text-8xl md:text-8xl lg:text-8xl font-bold">
                  {card.title}
                </h3>
              </motion.div>

              {/* Description (hidden by default, shown on hover) */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left bg-maroon rounded-tl-xl text-white"
                variants={{
                  rest: { opacity: 0, x: 40 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-md leading-snug">{card.description}</p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default PreservationEfforts
