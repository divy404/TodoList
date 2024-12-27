"use client";
import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./components/ui/wavy-background";
import { HoveredLink, Menu, MenuItem } from "./components/ui/navbar-menu";
import { cn } from "./lib/utils";

// Lazy load the World component
const World = lazy(() =>
  import("./components/ui/globe").then((m) => ({ default: m.World }))
);

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mt-4">
      <Navbar className="top-7" />
      <p className="text-black dark:text-white text-center">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 mx-auto z-50 px-4 w-full sm:w-3/4 md:w-1/2",
        className
      )}
    >
      <Menu setActive={setActive} className="flex flex-wrap gap-4 justify-center">
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <HoveredLink href="/about">About Us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <HoveredLink href="/contact">Contact</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Login">
          <HoveredLink href="/login">Login</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Register">
          <HoveredLink href="/register">Register</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: false,
    autoRotateSpeed: 0.5,
    interactive: true,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 w-4/5 md:w-1/2 lg:w-1/3 h-1/3 sm:h-2/3">
      <Suspense fallback={<div>Loading Globe...</div>}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </Suspense>
    </div>
  );
}

function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-4 left-4 z-20 flex items-center space-x-2"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
      <motion.h1
        className="text-lg sm:text-xl font-bold text-white"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        ToDo
      </motion.h1>
    </motion.div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute bottom-1 w-full bg-gray-900 text-white py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-11">
      {/* Left Links */}
      <div className="flex flex-col space-y-1 mb-4 md:mb-0">
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </div>

      {/* Center Text */}
      <div className="text-center mb-4 md:mb-0">
        <p className="text-sm font-medium">
          &copy; {currentYear} All rights reserved by ToDo
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/600px-X_logo_2023.svg.png"
            alt="Twitter"
            className="w-5 sm:w-6 h-5 sm:h-6 shadow-md hover:shadow-xl"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png"
            alt="Instagram"
            className="w-5 sm:w-6 h-5 sm:h-6 shadow-md hover:shadow-xl"
          />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
            alt="Discord"
            className="w-6 sm:w-8 h-6 shadow-md hover:shadow-xl"
          />
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Animated Logo */}
      <AnimatedLogo />

      {/* Navbar */}
      <NavbarDemo />

      {/* Wavy Background */}
      <div className="absolute inset-0 z-0">
        <WavyBackground className="max-w-4xl mx-auto pb-40" />
      </div>

      {/* Text Content */}
      <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10 text-right flex flex-col items-end px-4">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white font-sans mb-4"
        >
          <span className="hover:scale-110 transition-transform duration-300">
            Keep your world organised
          </span>
        </motion.h1>

        {/* Sub Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gradient from-blue-500 to-purple-500"
        >
          <span className="hover:text-blue-400 transition-colors duration-300">
            with your ToDo
          </span>
        </motion.h2>

        {/* Get Started Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold text-base sm:text-lg rounded-full border-2 border-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-black hover:border-transparent transition-all duration-300 shadow-md"
        >
          Get Started
        </motion.button>
      </div>

      {/* Globe */}
      <GlobeDemo />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
