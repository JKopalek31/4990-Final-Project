import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

import { ContentHeader } from '../components/ContentHeader'
import AinuPopulationGraph from '../components/populationGraph';

import location from '../assets/ainuLocation.png'

export const LanguageProfile = () => {
  const headingRef = useRef(null);
    const isInView = useInView(headingRef, {
      once: false,
      threshold: 0
    })

  const locRef = useRef(null);
  const locInView = useInView(locRef, { 
    once: false, 
    threshold: 0.3
  })

  const grammarRef = useRef(null);
  const grammarInView = useInView(grammarRef, { 
    once: false, 
    threshold: 0 
  })

  const phoneticsRef = useRef(null);
  const phoneticsInView = useInView(phoneticsRef, {
     once: false, 
     threshold: 0 
    })

  const writingRef = useRef(null);
  const writingInView = useInView(writingRef, { 
    once: false, 
    threshold: 0 
  })

  const lingusitcRef = useRef(null);
  const linguisticInView = useInView(lingusitcRef, { 
    once: false, 
    threshold: 0 
  })

  const populationRef = useRef(null);
  const populationInView = useInView(populationRef, { 
    once: false, 
    threshold: 0
  })

  const popRef = useRef(null);
  const popInView = useInView(popRef, { 
    once: false, 
    threshold: 0
  })


  return (
    <section id="language-profile" className="h-auto bg-offwhite pt-10 mb-0">
        <ContentHeader
          image="https://picsum.photos/800/600?random=1"
          title="Language Profile"
          description="Explore the origins and traditions of the Ainu people."
        />
        <motion.h1
          ref={headingRef}
          className="px-4 py-6 mt-56 mb-4 text-center text-5xl text-slate-800 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Formally, the language is known as Ainu (アイヌ イタㇰ, Aynu Itak)
        </motion.h1>

        <motion.div
          ref={headingRef}
          className="w-auto h-1 bg-maroon rounded-full mb-4 mx-20"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        />

        {/* Map and location details */}
        <div className="grid grid-cols-2 h-auto mt-64 mb-0">
          <motion.div
                ref= {locRef}
                className="p-8 text-left bg-maroon h-auto"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: locInView ? 1 : 0, x: locInView ? 0 : -100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                >
                <h1 className="text-4xl text-bold text-white mb-4 mt-4">Traditionally, Ainu speakers can be found in</h1>
                <ul className="list-disc pl-10 list-inside text-lg text-white space-y-2">
                  <li><strong>Hokkaido (Northern Japan)</strong></li>
                  <li><strong>Sakhalin (now part of Russia)</strong></li>
                  <li><strong>Kuril Islands</strong></li>
                </ul>
                <h1 className="text-4xl text-bold text-white mt-4 mb-auto">But todays population mostly resides in Hokkaido </h1>
          </motion.div>

          <motion.div
          ref={locRef}
            className="bg-maroon px-1 py-1 text-center mb-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: locInView ? 1 : 0, x: locInView ? 0 : 100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >

            {/* <h1>IMG Goes here</h1> */}
            <img src={location} alt="Showcase" className="h-auto w-auto" />
            </motion.div>
          
        </div>

        <div className="mt-56 mb-56">
        <motion.div
          ref={populationRef}
          className=" px-96 py-6 mb-24  text-center rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: populationInView ? 1 : 0, y: populationInView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="px-4 py-6 mt-0 mb-4 text-center text-5xl text-slate-800 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: populationInView ? 1 : 0, y: populationInView ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2}}
            >
              How many Ainu are left?
            </motion.h1>
            <motion.div
              className="w-auto h-1 bg-maroon rounded-full mb-4 mx-20"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: populationInView ? 1 : 0, scaleX: populationInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-8 p-4">
            <div>
              <AinuPopulationGraph/>
            </div>
            <motion.h1
              ref={popRef}
              className="text-3xl font-bold text-slate-800 mx-auto m-40"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: popInView ? 1 : 0, x: popInView ? 0 : 100 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
            >
                According to UNESCO, there are only 9 native speakers left
            </motion.h1>
          </div>
        </div>

        <div className=" bg-offwhite mt-20">
          <div className="grid grid-cols-3">
            <motion.div
              className="w-1 h-auto bg-maroon rounded-full mt-2 mb-4 mx-96"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: linguisticInView ? 1 : 0, scaleX: linguisticInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />

            <motion.h1
              ref={lingusitcRef}
              className="text-5xl font-bold text-slate-800 items-center mb-6 mt-2 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: linguisticInView ? 1 : 0, y: linguisticInView ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            Linguistic Features
            </motion.h1>
            <motion.div
              className="w-1 h-auto bg-maroon rounded-full mt-2 mb-4 mx-24"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: linguisticInView ? 1 : 0, scaleX: linguisticInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />

          </div>

          <div className="grid grid-cols-3 gap-4 px-4 mt-16">
            <motion.div
                  ref={grammarRef}
                  className="bg-salmon px-4 py-6 text-center rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: grammarInView ? 1 : 0, x: grammarInView ? 0 : -100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                  <motion.h1
                      ref={grammarRef}
                      className="text-3xl font-bold text-slate-800 items-center mb-6 mt-2"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: grammarInView ? 1 : 0, y: grammarInView ? 0 : 30 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                  Grammar
                  <motion.div
                    ref={grammarRef}
                    className="w-auto h-1 bg-maroon rounded-full mt-2 mb-4 mx-20"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: grammarInView ? 1 : 0, scaleX: grammarInView ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  />
                  </motion.h1>
                  <ul className="list-disc pl-10 list-inside space-y-6 px-10 py-2 text-xl text-slate-600 text-left">
                    <li><strong>Ainu forms words and expresses grammatical relationships through the addition of various affixes. This structure allows for the building of complex words by attaching prefixes and suffixes to root words. ​</strong></li>
                    <li><strong>It typically follows a Subject-Object-Verb word order. ​</strong></li>
                    <li><strong>The language distinguishes between animate and inanimate nouns, which affects verb conjugation and agreement. ​​</strong></li>
                  </ul>
              </motion.div>
              <motion.div
                  ref={phoneticsRef}
                  className="bg-salmon px-4 py-6 text-center rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: phoneticsInView ? 1 : 0, y: phoneticsInView ? 0 : -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                      <motion.h1
                          ref={phoneticsRef}
                          className="text-3xl font-bold text-slate-800 items-center mb-6 mt-2"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: phoneticsInView ? 1 : 0, y: phoneticsInView ? 0 : 30 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                      Phonetics
                      <motion.div
                        ref={phoneticsRef}
                        className="w-auto h-1 bg-maroon rounded-full mt-2 mb-4 mx-20"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: grammarInView ? 1 : 0, scaleX: grammarInView ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                      />
                      </motion.h1>
                      <ul className="list-disc pl-10 list-inside space-y-6 px-10 py-2 text-xl text-slate-600 text-left">
                        <li><strong>Ainu employs a pitch accent system, where the pitch or intonation of a syllable can change the meaning of a word. ​</strong></li>
                        <li><strong>Syllables typically conform to a Consonant-Vowel (CV) structure, and syllable-initial vowels are often preceded by a glottal stop. ​</strong></li>
                      </ul>
                  </motion.div>
                  <motion.div
                      ref={writingRef}
                      className="bg-salmon px-4 py-6 text-center rounded-lg shadow-lg"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: writingInView ? 1 : 0, x: writingInView ? 0 : 100 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                      <motion.h1
                          ref={writingRef}
                          className="text-3xl font-bold text-slate-800 items-center mb-6 mt-2"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: writingInView ? 1 : 0, y: writingInView ? 0 : 30 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                      Writing System
                      <motion.div
                        ref={writingRef}
                        className="w-auto h-1 bg-maroon rounded-full mt-2 mb-4 mx-20"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: writingInView ? 1 : 0, scaleX: writingInView ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                      />
                      </motion.h1>
                      <ul className="list-disc pl-10 list-inside space-y-6 px-10 py-2 text-xl text-slate-600 text-left">
                        <li><strong>Katakana | A Japanese syllabary adapted for Ainu sounds, sometimes with additional characters to represent specific Ainu phonemes.</strong></li>
                        <li><strong>Latin Alphabet | Utilized in various publications and educational materials, often incorporating special characters to denote unique sounds.</strong></li>
                      </ul>
                  </motion.div>
                  <div className="h-44 bg-offwhite"/>
          </div>

        </div>



    </section>
  )
}
