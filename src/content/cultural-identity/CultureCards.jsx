// import * as motion from "motion/react-client"

// import { motion } from "framer-motion";
import React, { useRef } from 'react'

// import React, { useRef } from "react"
// import { motion, useInView } from "framer-motion"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
// import RecordWithSoundBubble from "./CultureCardsTitle"



export default function CultureCards() {
    return (
        <div style={container}>
            {/* <RecordWithSoundBubble/> */}

            {food.map(([emoji, colorA, colorB, text], i) => (
                <Card i={i} emoji={emoji} colorA={colorA} colorB={colorB} text={text} key={emoji} />
            ))}
        </div>
    )
}

function Card({ emoji, colorA, colorB, text, i }) {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, {
      once: true,
      threshold: 0
    })
    const background = `linear-gradient(306deg, ${colorA}, ${colorB})`
    const isEven = i % 2 !== 0

    return (
        <motion.div
            className={`card-container-${i}`}
            style={{ ...cardContainer, marginTop: 40 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div
                style={{
                    display: "flex",
                    gap: 40,
                    alignItems: "center",
                    width: "100%",
                    flexDirection: isEven ? "row" : "row-reverse",
                    justifyContent: "space-between",
                }}
            >
                <motion.div
                    style={textBox}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p style={{ margin: 0 }}>{text}</p>
                </motion.div>

                <div style={{ position: "relative", width: 500, height: 520, overflow: "visible" }}>
                    <motion.div
                      ref={headingRef}
                      style={{ ...splash, background, zIndex: 0 }}
                      // initial={{ opacity: 0, y: 30 }}
                      // whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, amount: 0.4 }}
                      // exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* <motion.div
                      ref={headingRef}
                      style={{ ...splash, background }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.9  }}
                      transition={{ duration: 0.4, ease: "easeOut"}}
                    /> */}
                    <motion.div
                        style={{ ...card, position: "absolute", top: 0, left: 0, zIndex: 2 }}
                        variants={cardVariants}
                        className="card"
                    >
                        {emoji}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const cardVariants = {
    offscreen: {
        y: 120,
        opacity: 0,
        scale: 0.9,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
    // },
}

const container = {
    margin: "450px auto",
    maxWidth: 1400,
    paddingBottom: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingLeft: 80,
    paddingRight: 80,
  }

const cardContainer = {
    overflow: "visible",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 150,
    paddingBottom: 30,
    // marginBottom: -120,
    width: "100%",
    zIndex: 1,
    // background: "red",
}

const splash = {
    position: "absolute",
    top: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
    width: 500,
    height: 520,
    zIndex: 2,
    background:"rgba(0, 0, 0, 0.3)"
}

const card = {
    fontSize: 164,
    width: 420,
    height: 520,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
    zIndex: 1,
}

const textBox = {
    width: 600,
    minHeight: 300,
    backgroundColor: "transparent",
    color: "#1e293b",
    padding: 30,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    fontFamily: "sans-serif",
}
/**
 * ==============   Data   ================
 */

const food = [
    ["🍅", "#630000", "#EEEBDD", "Yukar: Epic poems about gods, heroes, and mythology"], // red-600 to red-400
    ["🍊", "#D8B6A4", "#EEEBDD", "Uepeker: Folk tales with morals or natural themes"], // orange-600 to yellow-300
    ["🍋", "#630000", "#EEEBDD", "Kamuy Yukar: Stories told from the perspective of deities or animals"], // yellow-400 to yellow-200
    ["🍐", "#D8B6A4", "#EEEBDD", "Upopo: Communal songs with rhythmic, repetitive patterns"], // lime-500 to green-200
    ["🍏", "#630000", "#EEEBDD", "Ainu radio programs & children’s books"], // green-500 to green-400
    ["🫐", "#D8B6A4", "#D8B6A4", "Language courses and museum events (e.g., Upopoy National Ainu Museum)"], // blue-500 to indigo-300
    // ["🍆", "#630000", "#EEEBDD"], // purple-600 to purple-300
    // ["🍇", "#EEEBDD", "#D8B6A4"], // violet-700 to fuchsia-500
]
