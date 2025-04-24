import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const LinguisticFeatures = () => {
  const lingusitcRef = useRef(null);
  const linguisticInView = useInView(lingusitcRef, { once: false, threshold: 0 });

  const grammarRef = useRef(null);
  const grammarInView = useInView(grammarRef, { once: false, threshold: 0 });

  const phoneticsRef = useRef(null);
  const phoneticsInView = useInView(phoneticsRef, { once: false, threshold: 0 });

  const writingRef = useRef(null);
  const writingInView = useInView(writingRef, { once: false, threshold: 0 });

  return (
    <div className="bg-offwhite mt-20">
      {/*
        Title row: 1 column on mobile, 3 columns on md+,
        so the maroon bars & title can stack on small screens
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
        {/* Left vertical bar (motion div) */}
        <motion.div
            className="
                bg-maroon rounded-full
                /* Mobile: horizontal bar => 80% wide, 1px tall */
                w-[65%] h-1

                /* Desktop: vertical bar => 1px wide, 80% tall */
                md:w-1 md:h-[80%]

                /* center-aligned */
                mx-auto md:mx-auto

                /* Additional spacing if desired */
                mt-2 mb-4
            "
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />

        {/* Main Title */}
        <motion.h1
          ref={lingusitcRef}
          className="
            text-center
            font-bold text-slate-800 
            mb-6 mt-2
            text-4xl   /* bigger base size for mobile */
            sm:text-5xl
            md:text-6xl
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: linguisticInView ? 1 : 0, y: linguisticInView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Linguistic Features
        </motion.h1>

        {/* Right vertical bar (motion div) */}
        <motion.div
             className="
             bg-maroon rounded-full
             /* Mobile: horizontal bar => 80% wide, 1px tall */
             w-[65%] h-1

             /* Desktop: vertical bar => 1px wide, 80% tall */
             md:w-1 md:h-[80%]

             /* center-aligned */
             mx-auto md:mx-auto

             /* Additional spacing if desired */
             mt-2 mb-4
         "
         initial={{ opacity: 0, scaleX: 0 }}
         animate={{ opacity: 1, scaleX: 1 }}
         transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
         />
      </div>

      {/*
        Cards: stacked on mobile (cols=1), 
        side-by-side on md+ (cols=3).
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-8">
        {/* Grammar Card */}
        <motion.div
          ref={grammarRef}
          className="bg-salmon px-4 py-6 text-center rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: grammarInView ? 1 : 0, x: grammarInView ? 0 : -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="
              font-bold text-slate-800 mb-6 mt-2
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: grammarInView ? 1 : 0, y: grammarInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Grammar
            <motion.div
                // className="
                    className="
                    w-auto h-1 bg-maroon rounded-full
                    mt-2 mb-4
                    mx-auto md:mx-20
                "
                
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </motion.h1>
          <ul className="
            list-disc list-inside space-y-6
            px-4 sm:px-8 py-2
            text-lg sm:text-xl md:text-2xl text-slate-600 text-left
          ">
            <li>
              <strong>
                {/* Ainu forms words and expresses grammatical relationships via affixes... */}
                Polysynthetic & agglutinative morphology. Verbs may incorporate nouns/adverbs and take long strings of derivational affixes (causative, applicative, passive, reflexive, reciprocal).
              </strong>
            </li>
            <li>
              <strong>
                Verbs obligatorily carry agreement prefixes (or suffix ‑as) indexing both subject and object. A direct‑inverse system surfaces: prefixes vary according to a person hierarchy
                {/* Typically follows Subject-Object-Verb word order. */}
              </strong>
            </li>
            <li>
              <strong>
                {/* Distinguishes animate/inanimate nouns, affecting verb conjugation. */}
                Syntax Strictly head‑final: SOV order; genitive‑before‑noun; postpositions; sub‑clauses precede main clause. Polar questions add particle "ya" or rising intonation.

              </strong>
            </li>
          </ul>
        </motion.div>

        {/* Phonetics Card */}
        <motion.div
          ref={phoneticsRef}
          className="bg-salmon px-4 py-6 text-center rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: phoneticsInView ? 1 : 0, y: phoneticsInView ? 0 : -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="
              font-bold text-slate-800 mb-6 mt-2
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: phoneticsInView ? 1 : 0, y: phoneticsInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Phonetics
            <motion.div
              className="
                w-auto h-1 bg-maroon rounded-full
                mt-2 mb-4
                mx-auto md:mx-20
              "
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: phoneticsInView ? 1 : 0, scaleX: phoneticsInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </motion.h1>
          <ul className="
            list-disc list-inside space-y-6
            px-4 sm:px-8 py-2
            text-lg sm:text-xl md:text-2xl text-slate-600 text-left
          ">
            <li>
              <strong>
                {/* Ainu employs a pitch accent system; pitch changes can alter word meaning.  */}
                5 vowels (i e a u o) and 12 consonants (p t k c s h ), glottal stop ( r m n w y).
              </strong>
            </li>
            <li>
              <strong>
                {/* Syllables generally follow a Consonant-Vowel (CV) pattern... */}

                (C)V(C); no consonant clusters. Glottal stop routinely inserted before vowel‑initial words.
              </strong>
            </li>
            <li>
              <strong>
                Pitch‑accent: one high tone per word—typically on first heavy syllable or second light syllable; unaccented clitics keep host’s melody. 
              </strong>
            </li>
            <li>
              <strong>
                Final codas restricted to (k, s, t, n, m, r, p); "h" allowed word‑finally only in Sakhalin variety.
              </strong>
            </li>
          </ul>
        </motion.div>

        {/* Writing System Card */}
        <motion.div
          ref={writingRef}
          className="bg-salmon px-4 py-6 text-center rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: writingInView ? 1 : 0, x: writingInView ? 0 : 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="
              font-bold text-slate-800 mb-6 mt-2
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: writingInView ? 1 : 0, y: writingInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Writing System
            <motion.div
              className="
                w-auto h-1 bg-maroon rounded-full
                mt-2 mb-4
                mx-auto md:mx-20
              "
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: writingInView ? 1 : 0, scaleX: writingInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </motion.h1>
          <ul className="
            list-disc list-inside space-y-6
            px-4 sm:px-8 py-2
            text-lg sm:text-xl md:text-2xl text-slate-600 text-left
          ">
            <li>
              <strong>
                Katakana | A Japanese syllabary adapted for Ainu sounds...
              </strong>
            </li>
            <li>
              <strong>
                Latin Alphabet | Often with special characters for unique Ainu phonemes.
              </strong>
            </li>
            <li>
              <strong>
                Early missionaries (John Batchelor, 1880s) devised bespoke Roman orthographies; Though the 1800-1900's, texts exist in both Roman and katakana. Unicode now supports the full Ainu katakana block. 
              </strong>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Extra spacer */}
      <div className="h-44 bg-offwhite" />
    </div>
  );
};
