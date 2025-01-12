"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Transition configuration for animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
export const MenuItem = ({ activePath, itemPath, to, children, isMenuOpen }) => {
  const isActive = activePath === itemPath;

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`cursor-pointer ${isMenuOpen ? "bg-black text-white" : "text-neutral-700 dark:text-neutral-200"} 
          ${isActive ? "font-bold text-black dark:text-white border-b-2 border-blue-500" : "hover:opacity-90"}`}
      >
        <Link to={to}>{children}</Link>
      </motion.div>
    </div>
  );
};

// Menu Component
export const Menu = ({ children }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};

// NavbarDemo Component
export function NavbarDemo() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="relative w-full flex items-center justify-center mt-4">
      <Navbar activePath={currentPath} />
    </div>
  );
}

// Navbar Component
function Navbar({ activePath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Example theme detection, adjust according to your implementation
    const isDark = document.body.classList.contains('dark');
    setIsDarkTheme(isDark);
  }, []);

  return (
    <div
      className={`fixed top-4 inset-x-0 mx-auto z-50 px-4 w-full sm:w-3/4 md:w-1/2 ${
        isSmallScreen ? "left-4 w-auto" : ""
      }`}
    >
      <style jsx>{`
        .hamburger {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          background: none;
          border: none;
          padding: 0;
          box-shadow: none;
        }

        .hamburger div {
          width: 24px;
          height: 3px;
          background-color: white; /* Always white */
        }

        .menu {
          display: ${isMenuOpen ? "block" : "none"};
          position: absolute;
          top: 50px;
          left: 0;
          background-color: white;
          border: 1px solid black;
          padding: 10px;
        }
      `}</style>

      {isSmallScreen ? (
        <>
          <button className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
          {isMenuOpen && (
            <div className="menu">
              <MenuItem activePath={activePath} itemPath="/" to="/" isMenuOpen={isMenuOpen}>
                Home
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/about" to="/about" isMenuOpen={isMenuOpen}>
                About Us
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/contact" to="/contact" isMenuOpen={isMenuOpen}>
                Contact
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/login" to="/login" isMenuOpen={isMenuOpen}>
                Login
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/register" to="/register" isMenuOpen={isMenuOpen}>
                Register
              </MenuItem>
            </div>
          )}
        </>
      ) : (
        <Menu>
          <MenuItem activePath={activePath} itemPath="/" to="/" isMenuOpen={isMenuOpen}>
            Home
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/about" to="/about" isMenuOpen={isMenuOpen}>
            About Us
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/contact" to="/contact" isMenuOpen={isMenuOpen}>
            Contact
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/login" to="/login" isMenuOpen={isMenuOpen}>
            Login
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/register" to="/register" isMenuOpen={isMenuOpen}>
            Register
          </MenuItem>
        </Menu>
      )}
    </div>
  );
}

export default NavbarDemo;
