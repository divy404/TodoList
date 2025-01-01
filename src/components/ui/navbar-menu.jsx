"use client";
import React, { useState } from "react";
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
export const MenuItem = ({ activePath, itemPath, to, children }) => {
  const isActive = activePath === itemPath;

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-neutral-700 dark:text-neutral-200 ${
          isActive
            ? "font-bold text-black dark:text-white border-b-2 border-blue-500"
            : "hover:opacity-90"
        }`}
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
  const currentPath = location.pathname; // Get current path

  return (
    <div className="relative w-full flex items-center justify-center mt-4">
      <Navbar activePath={currentPath} className="top-7" />
    </div>
  );
}

// Navbar Component
function Navbar({ className, activePath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-4 inset-x-0 mx-auto z-50 px-4 w-full sm:w-3/4 md:w-1/2 ${className}`}
    >
      <Menu>
        {/* For larger screens, display the normal horizontal menu */}
        <div className="hidden md:flex space-x-4">
          <MenuItem activePath={activePath} itemPath="/" to="/">
            Home
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/about" to="/about">
            About Us
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/contact" to="/contact">
            Contact
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/login" to="/login">
            Login
          </MenuItem>
          <MenuItem activePath={activePath} itemPath="/register" to="/register">
            Register
          </MenuItem>
        </div>

        {/* For smaller screens, display the hamburger icon and dropdown */}
        <div className="md:hidden flex justify-between items-center">
          {/* Hamburger icon */}
          <div
            className="cursor-pointer flex flex-col space-y-1"
            onClick={toggleMenu}
          >
            <div className="w-6 h-1 bg-black dark:bg-white"></div>
            <div className="w-6 h-1 bg-black dark:bg-white"></div>
            <div className="w-6 h-1 bg-black dark:bg-white"></div>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-white dark:bg-black text-black dark:text-white p-4 shadow-lg rounded-lg w-48 space-y-4">
              <MenuItem activePath={activePath} itemPath="/" to="/">
                Home
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/about" to="/about">
                About Us
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/contact" to="/contact">
                Contact
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/login" to="/login">
                Login
              </MenuItem>
              <MenuItem activePath={activePath} itemPath="/register" to="/register">
                Register
              </MenuItem>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
}

export default NavbarDemo;

