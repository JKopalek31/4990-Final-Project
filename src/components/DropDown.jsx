import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ====== Editable Menu Items ======
const menuItems = [
  { id: 0, label: "Home", color: "#FF008C" },
  { id: 1, label: "About", color: "#D309E1" },
  { id: 2, label: "Services", color: "#9C1AFF" },
  { id: 3, label: "Projects", color: "#7700FF" },
  { id: 4, label: "Contact", color: "#4400FF" },
];

// ====== Main Component ======
export default function AnimatedSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="relative flex items-stretch w-full max-w-lg h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="w-[300px] relative"
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-[300px] bg-white z-0"
          variants={sidebarVariants}
          custom={height}
        />
        <motion.ul
          className="list-none p-6 absolute top-20 w-[230px] z-10 space-y-5"
          variants={navVariants}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </motion.ul>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </div>
  );
}

// ====== Menu Item ======
const MenuItem = ({ item }) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-4 cursor-pointer"
    >
      <div
        className="w-10 h-10 rounded-full"
        style={{ border: `2px solid ${item.color}` }}
      />
      <div
        className="h-5 rounded-md flex items-center"
        style={{ border: `2px solid ${item.color}`, width: "200px" }}
      >
        <span className="ml-2 text-sm font-semibold" style={{ color: item.color }}>
          {item.label}
        </span>
      </div>
    </motion.li>
  );
};

// ====== Menu Toggle Button ======
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-4 left-4 w-12 h-12 rounded-full bg-transparent z-20"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

// ====== Motion Variants ======
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// ====== useDimensions Hook ======
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
