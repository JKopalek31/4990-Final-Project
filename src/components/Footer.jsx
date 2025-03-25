import React from "react";
import logo from "../assets/footerLogo.png"; // Adjust the path as needed

export const Footer = () => {
  return (
    <footer className="bg-maroon text-gray-300 py-4 px-0 text-left">
      <div className="max-w-(--breakpoint-lg) mx-auto flex flex-col space-y-2 items-start">
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          className="h-12 w-auto mb-2 object-contain"
        />

        {/* Project Name */}
        <h2 className="text-lg font-semibold text-left text-slate-400">Ainu Language Preservation Project</h2>

        {/* Name */}
        <p className="text-sm text-left text-slate-400">By Jett Kopalek</p>

        {/* Email */}
        <p className="text-sm text-left text-slate-400">
          Contact:{" "}
          <a href="mailto:jtk01067@sjfc.edu" className="text-slate-400 hover:underline">
            jtk01067@sjfc.edu
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs mt-3 text-slate-400 text-left">
          © {new Date().getFullYear()} Ainu Language Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
