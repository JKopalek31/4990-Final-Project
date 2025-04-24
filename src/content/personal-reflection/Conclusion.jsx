import React from "react";
// import fisherCartoon from "../../assets/fisherCartoon.png";
// import fisherCartoon from "../../assets/fisherLandscape.jpg";
import fisherCartoon from '../../assets/FisherCartoonGpt.png'


import Cloud from "../../components/Cloud";


export default function Conclusion() {
  return (
    <div className="relative min-h-screen w-full">
      {/* 
        1) The gradient overlay:
           - "absolute inset-0" covers the entire parent
           - "bg-gradient-to-b from-zinc-900 via-zinc-900/85 to-red-600" is the gradient
           - "opacity-80" makes it semi-translucent so we can still see content underneath
           - "z-50" puts it on top of everything, and "pointer-events-none" makes it non-interactive
      */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/85 to-zinc-800 opacity-0 z-50 pointer-events-none" /> */}
      {/* 
        2) The actual content goes below the overlay.
           If you want the gradient to fully obscure the image, remove "opacity-80".
      */}
      <div className="relative z-0">
        {/* Clouds near the top */}
        <div className="pb-0 bg-gradient-to-b from-[#18182b] to-blue-950">
          <Cloud />
        </div>

        <div className="h-96 w-full bg-gradient-to-b from-blue-950 to-blue-950/80" />

        {/* The bottom section with the fisherCartoon image */}
        <div className="relative min-h-[120vh] bg-gradient-to-b from-blue-950/80 via-red-400 to-blue-950 backdrop-opacity-90">
          <div className=" h-auto w-auto">
            <img
              src={fisherCartoon}
              alt="Example placeholder"
              className="absolute bottom-0 w-full h-auto mb-0"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-black to-black/95 h-40"/>
      </div>
    </div>
  );
}

