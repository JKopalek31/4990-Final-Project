import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import ainuColonialization from "../../assets/ainuColonialization.jpg"
import ainuMigration from "../../assets/ainuMigration.webp"
import ainuMeiji from "../../assets/ainuMeiji.jpg"
import ainuJapan from "../../assets/ainuJapan.avif"
import ainuDisapearing from "../../assets/ainuDisapearing.jpg"

/** SAMPLE DATA */
const cardsData = [
  {
    title: "Colonization & Historical Oppression",
    description: "During Japan’s colonization of Hokkaido in the 19th century, Ainu people were systematically assimilated. The government banned Ainu cultural practices and prohibited the language in schools and public life.",
    image: ainuColonialization,
  },
  {
    title: "Migration & Urbanization",
    description: "As many Ainu families moved to urban centers, the pressure to conform intensified. In cities, there was little space for cultural preservation, and many Ainu concealed their identity due to discrimination.",
    image: ainuMigration,
  },
  {
    title: "Economic & Political Pressures",
    description: "For decades, policies prioritized economic assimilation over cultural preservation. Ainu people faced systemic discrimination, making Japanese fluency essential for access to jobs, education, and mobility.",
    image: ainuMeiji,
  },
  {
    title: "Language Shift to Dominant Languages",
    description: "Dominance of Japanese in public life led to language shift. As fewer used Ainu daily, intergenerational transmission broke down, and the language fell into disuse.",
    image: ainuJapan,
  },
  {
    title: "Diminishing Number of Speakers",
    description: "Local cultural centers, like Upopoy, offer classes. These programs help a new generation learn and engage with Ainu, supporting its revival.",
    image: ainuDisapearing,
  },
]

/** A MEMOIZED CARD GRID
 * Each card slides in from left or right, 
 * based on its index in the array.
 */
const CardGrid = React.memo(function CardGrid({ cards, onCardClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-screen-xl mx-auto justify-items-start">
      {cards.map((card, index) => {
        // If index is even => from the left; odd => from the right
        const initialX = index % 2 === 0 ? -100 : 100
        return (
          <motion.div
            key={index}
            // Start hidden off to the left/right
            initial={{ opacity: 0, x: initialX }}
            // Slide into view on scroll
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            // Adjust duration as you like
            transition={{ duration: 0.4 }}
            className="rounded-lg shadow-lg overflow-hidden w-full cursor-pointer relative"
            onClick={() => onCardClick(card)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative w-full h-[500px]">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 px-4 py-2 sm:px-6 sm:py-3 max-w-sm text-left">
                <h3 className="text-red-400 text-6xl sm:text-8xl font-semibold leading-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
})

/** MAIN COMPONENT:
 *  - Renders heading, line, memoized CardGrid
 *  - Scroll-lock on modal open
 */
export function PreservationEfforts() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  // Stash scroll offset to restore on close
  const scrollYRef = useRef(0)

  // Lock scroll on open, restore on close
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        scrollYRef.current = window.scrollY
        document.body.style.position = "fixed"
        document.body.style.top = `-${scrollYRef.current}px`
        document.body.style.left = "0"
        document.body.style.right = "0"
      })
    } else {
      requestAnimationFrame(() => {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.left = ""
        document.body.style.right = ""
        window.scrollTo(0, scrollYRef.current)
      })
    }
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
    }
  }, [isOpen])

  // For heading animation
  const text = "Why is this language endangered?".split(" ")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  // Handler for card click => open modal with that card
  const handleCardClick = (card) => {
    setActiveCard(card)
    setIsOpen(true)
  }

  return (
    <div className="relative w-full py-10 px-6 pt-40 text-center">
      {/* Word-by-word heading */}
      <div className="flex flex-wrap justify-center gap-2">
        {text.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: i * 0.05,
            }}
            className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>

      {/* Horizontal line reveal */}
      <motion.div
        ref={ref}
        className="w-auto h-1 bg-maroon rounded-full mb-16 mx-4 sm:mx-16 md:mx-32 my-6"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />

      {/* The memoized CardGrid => each card slides from left or right */}
      <CardGrid cards={cardsData} onCardClick={handleCardClick} />

      {/* AnimatePresence for the modal only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen p-4 sm:p-10">
              <motion.img
                src={activeCard?.image}
                alt={activeCard?.title}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl object-cover"
              />
              <motion.div
                className="text-white text-left max-w-xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              >
                <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold mb-4">
                  {activeCard?.title}
                </h2>
                <p className="text-base sm:text-xl opacity-80">
                  {activeCard?.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PreservationEfforts
