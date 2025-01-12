"use client";
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import WavyBackground from "../components/ui/wavy-background"; 
import NavbarDemo from "../components/ui/navbar-menu"; 
import Footer from "../components/ui/footer"; 
import { Link } from "react-router-dom"; 

// Lazy load the World component
const World = lazy(() =>
  import("../components/ui/globe").then((m) => ({ default: m.World }))
);

const GlobeDemo = () => {
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
      <Suspense fallback={<div className="text-white">Loading Globe...</div>}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </Suspense>
    </div>
  );
};

const Homepage = () => (
  <div className="relative h-screen w-screen overflow-hidden">
    {/* Navbar */}
    <NavbarDemo />

    {/* Wavy Background */}
    <div className="absolute inset-0 z-0">
      <WavyBackground className="max-w-4xl mx-auto pb-40" />
    </div>

    {/* Text Content */}
    <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10 text-right flex flex-col items-end px-4">
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

      <Link
        to="/login"
        className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold text-base sm:text-lg rounded-full border-2 border-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-black hover:border-transparent transition-all duration-300 shadow-md"
      >
        Get Started
      </Link>
    </div>

    {/* Globe */}
    <GlobeDemo />

    {/* Footer */}
    <Footer />
  </div>
);

export default Homepage;
