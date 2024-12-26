"use client";
import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { HoveredLink, Menu, MenuItem } from "./components/ui/navbar-menu";
import { cn } from "./lib/utils";

// Lazy load the World component
const World = lazy(() => import("./components/ui/globe").then((m) => ({ default: m.World })));

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-8" /> {/* Adjusted class to move navbar down */}
      <p className="text-black dark:text-white mt-4">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Welcome to Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <HoveredLink href="/about">Learn more about us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <HoveredLink href="/contact">Reach out to us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Login">
          <HoveredLink href="/login">Access your account</HoveredLink>
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
    autoRotate: false, // Make it interactive
    autoRotateSpeed: 0.5,
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
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1/3 h-1/2">
      <Suspense fallback={<div>Loading Globe...</div>}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Navbar */}
      <NavbarDemo />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision />
      </div>

      {/* Globe */}
      <GlobeDemo />

      {/* Text Content */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 text-right flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white font-sans tracking-tight mb-6">
          Keep your world organised with your <span className="text-gradient">TodoList.</span>
        </h2>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white font-semibold text-lg border-2 border-white rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-black hover:border-transparent transition-all duration-300 ease-in-out shadow-md"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}

export default App;




