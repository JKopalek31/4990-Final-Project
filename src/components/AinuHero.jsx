import React from "react";
import { ImageSlider } from "./ImageSlider";

export default function AinuHero() {
  return (
    <header
      className="
        relative min-h-screen w-full
        flex flex-col items-center justify-center text-center
        overflow-hidden
      "
    >
      {/* A) The slider behind everything */}
      <div className="absolute inset-0 z-0 w-full">
        <ImageSlider />
      </div>

      {/* B) Light overlay so text is readable */}
      {/* <div className="absolute inset-0 bg-black/5 z-10"></div> */}

      {/* C) Floating text with custom keyframes */}
      <style>
        {`
          @keyframes floatUpDownTitle {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-10px); }
          }
          @keyframes floatUpDownParagraph {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
          .float-up-down-title {
            animation: floatUpDownTitle 3s ease-in-out infinite;
          }
          .float-up-down-text-1 {
            animation: floatUpDownParagraph 4s ease-in-out infinite;
          }
          .float-up-down-text-2 {
            animation: floatUpDownParagraph 5s ease-in-out infinite;
          }
        `}
      </style>

      {/* D) Hero Content */}
      <div className="relative z-20 max-w-3xl px-4 py-8">
        {/* Title with a gradient from maroon to white */}
        <h1
          className="
            float-up-down-title
            text-9xl
            font-extrabold
            mb-4
            bg-gradient-to-r
            from-red-500
            via-salmon
            to-red-500
            bg-clip-text
            text-transparent
            show-xl
          "
        >
          Ainu
        </h1>

        {/* Paragraphs: plain text color, still floating */}
        <p
          className="
            float-up-down-text-1
            text-4xl
            mb-6
            text-pink-100
            text-bold
          "
        >
          The indigenous and endangered people of Japan
        </p>
        <p
          className="
            float-up-down-text-2
            text-4xl
            mb-6
            text-offwhite
          "
        >
          By Jett Kopalek
        </p>
      </div>

      {/* E) Off-white Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          preserveAspectRatio="none"
          viewBox="0 0 360 120"
          fill="#EEEBDD"
        >
          <path d="M0,40 C60,90 300,-30 360,40 L360,120 L0,120 Z" />
        </svg>
      </div>
    </header>
  );
}
