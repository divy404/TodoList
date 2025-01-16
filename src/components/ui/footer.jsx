import React from "react"; 
import { Link } from "react-router-dom"; 
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export function Footer() { 
  const currentYear = new Date().getFullYear();

  return ( 
    <footer className="w-full bg-gray-900 text-white py-4 px-6 sm:px-12 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 absolute bottom-0 left-0 mt-8"> 
      {/* Left Links */} 
      <div className="flex flex-col space-y-2 items-center md:items-start"> 
        <Link to="/" className="hover:text-gray-400 transition duration-200"> Home </Link> 
        <Link to="/about" className="hover:text-gray-400 transition duration-200"> About Us </Link> 
        <Link to="/contact" className="hover:text-gray-400 transition duration-200"> Contact </Link> 
      </div>

      {/* Center Text */}
      <div className="text-center">
        <p className="text-sm font-medium">
          &copy; {currentYear} All rights reserved by <span className="font-bold">ToDo</span>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <FaInstagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaDiscord className="w-6 h-6" />
            <span className="sr-only">Discord</span>
          </a>
        </div>
      </div>
    </footer>
  ); 
}

export default Footer;

