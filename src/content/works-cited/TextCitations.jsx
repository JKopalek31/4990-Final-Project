import React from "react";
import LetterBounce from "../../components/LetterBounce";   // ← adjust the import path
import {TextCitationsBank} from "../../text/text.js"

/**
 * BouncingContents
 * -------------------------------------------------
 * props
 * ─ items         string[]   array of lines to render (required)
 * ─ startDelay    number s   delay before first line  [default 0]
 * ─ lineGap       number s   gap between lines        [default 0.4]
 * ─ stagger       number s   per‑letter gap (passed to LetterBounce) [default 0.05]
 * ─ className     string     extra classes for outer wrapper
 */
export default function TextCitations({
  startDelay = 0,
  lineGap = 0.4,
  stagger = 0.05,
}) {

  return (
    <div className="">
      {TextCitationsBank.map((line, idx) => (
        <LetterBounce
          key={idx}
          text={line}
          delay={startDelay + idx * lineGap}
          stagger={stagger}
          className="text-3xl text-slate-800 px-16 py-10 mx-auto"              /* one line per block */
        />
      ))}
    </div>
  );
}
