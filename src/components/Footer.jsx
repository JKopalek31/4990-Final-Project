import React from "react";
import logo from "../assets/footerLogo.png"; // Adjust the path as needed
import showcase from "../assets/fisherShowcase.PNG"

export const Footer = () => {
  return (
    <footer className="bg-maroon text-gray-300 pt-16 pb-2 px-0 text-left">
      {/* <div className="max-w-(--breakpoint-lg) mx-auto flex flex-col space-y-2 items-start"> */}
      <div className="grid grid-cols-3">
        {/* Logo */}
        <div className="flex justify-center items-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-32 w-auto mb-2 object-contain"
        />
        </div>

        <div className="p-4">
        {/* Project Name */}
        <h2 className="text-lg font-semibold text-center text-slate-400">Ainu Language Preservation Project</h2>

        {/* Name */}
        <p className="text-sm text-center text-slate-400">By Jett Kopalek</p>

        {/* Email */}
        <p className="text-sm text-center text-slate-400">
          Contact:{" "}
          <a href="mailto:jtk01067@sjfc.edu" className="text-slate-400 hover:underline">
            jtk01067@sjfc.edu
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs mt-3 text-slate-400 text-center">
          © {new Date().getFullYear()} Ainu Language Project. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center items-center">
      <img 
          src={showcase} 
          alt="showcase" 
          className="h-32 w-auto mb-2 object-contain"
        />
      </div>
      </div>
    </footer>
  );
};
