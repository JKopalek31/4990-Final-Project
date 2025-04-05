// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/fisherlogo.png";

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* 🔹 Fixed Navbar */}
//       {/* <nav className="fixed top-0 left-0 w-full bg-coffee z-50 px-6 py-3 flex items-center justify-between h-20"> */}
//       <nav className="fixed top-0 left-0 w-full bg-offwhite z-50 px-6 py-3 flex items-center justify-between h-20">

//         {/* Left: Logo */}
//         <div className="flex items-center space-x-6">
//           <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
//         </div>

//         {/* Right: Toggle Button */}
//         <div className="relative">
//           <button onClick={toggleNavbar} className="focus:outline-hidden">
//             {isOpen ? <X className="text-slate-800" size={32} /> : <Menu className="text-slate-800" size={32} />}
//           </button>

//           {/* 🔹 Dropdown Menu */}
//           <div
//             className={`absolute right-[-10px] top-[70px] w-64 bg-maroon text-offwhite rounded-lg shadow-lg z-100 transition-all duration-300 ${
//               isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
//             }`}
//           >
//             <div className="flex flex-col p-5 space-y-4 text-xl">
//               <Link to="language-profile" smooth={true} duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">Language Profile</Link>
//               <Link to="cultural-identity" smooth={true} duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">Cultural Identity</Link>
//               <Link to="endangerment-factors" smooth={true} duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">Endangerment Factors</Link>
//               <Link to="revitalization-efforts" smooth={true} duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">Revitalization Efforts</Link>
//               <Link to="personal-reflection" smooth={true} duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">Personal Reflection</Link>

//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };


import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/fisherlogo.png";



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // ⛔ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-offwhite z-50 px-6 py-3 flex items-center justify-between h-20">
      {/* Left: Logo */}
      <div className="flex items-center space-x-6">
        <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
      </div>

      {/* Right: Toggle Button + Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleNavbar} className="focus:outline-none">
          {isOpen ? <X className="text-slate-800" size={32} /> : <Menu className="text-slate-800" size={32} />}
        </button>

        <div
          className={`absolute right-[-10px] top-[70px] w-64 bg-maroon text-offwhite rounded-lg shadow-lg z-100 transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-5 space-y-4 text-xl">
            <Link to="language-profile" smooth duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">
              Language Profile
            </Link>
            <Link to="cultural-identity" smooth duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">
              Cultural Identity
            </Link>
            <Link to="endangerment-factors" smooth duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">
              Endangerment Factors
            </Link>
            <Link to="revitalization-efforts" smooth duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">
              Revitalization Efforts
            </Link>
            <Link to="personal-reflection" smooth duration={500} className="cursor-pointer hover:border border-offwhite p-3 rounded-sm">
              Personal Reflection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
