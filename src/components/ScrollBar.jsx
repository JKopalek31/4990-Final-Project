"use client"

import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id, src, alt }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={src}
                    alt={alt}
                />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${id}`}</motion.h2>
        </section>
    )
}

export default function ScrollBar() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    const images = [
        { id: 1, src: "/photos/cityscape/1.jpg", alt: "A London skyscraper" },
        { id: 2, src: "/photos/cityscape/2.jpg", alt: "A London skyscraper" },
        { id: 3, src: "/photos/cityscape/3.jpg", alt: "A London skyscraper" },
        { id: 4, src: "/photos/cityscape/4.jpg", alt: "A London skyscraper" },
        { id: 5, src: "/photos/cityscape/5.jpg", alt: "A London skyscraper" },
    ]

    return (
        <div id="example">
            {images.map((image) => (
                <Image key={image.id} id={image.id} src={image.src} alt={image.alt} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
}

function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #4ff0b7;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #4ff0b7;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}