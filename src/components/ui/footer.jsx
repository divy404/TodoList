import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute bottom-0 left-0 w-full bg-gray-900 text-white py-4 px-6 sm:px-12 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
      {/* Left Links */}
      <div className="flex flex-col space-y-2 items-center md:items-start">
        <Link to="/" className="hover:text-gray-400 transition duration-200">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition duration-200">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-gray-400 transition duration-200">
          Contact
        </Link>
      </div>

      {/* Center Text */}
      <div className="text-center">
        <p className="text-sm font-medium">
          &copy; {currentYear} All rights reserved by <span className="font-bold">ToDo</span>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 justify-center">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/600px-X_logo_2023.svg.png"
            alt="Twitter"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200"
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
            className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200"
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
            className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
