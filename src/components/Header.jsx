import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Import the logo image

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" fixed top-0 w-full bg-darkBackground bg-opacity-20 backdrop-blur-md text-lightGray z-50 shadow-lg">
      <div className="flex justify-between items-center h-16 px-8">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img className="h-12 w-50" src={logo} alt="Logo" />
        </div>

        {/* Center - Tabs Container (hidden on mobile) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <nav className="flex space-x-8">
            <a href="#" className="text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">Ask Anything</a>
            <a href="#" className="text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">About Me</a>
            <a href="#" className="text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">Projects</a>
          </nav>
        </div>

        {/* Right - Contact Button */}
        <div className="hidden md:flex items-center">
          <button className="block text-skyBlue border border-skyBlue px-3 py-2 rounded-full text-center hover:bg-skyBlue hover:text-darkBackground transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-skyBlue focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1">
          <a href="#" className="block text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">Ask Anything</a>
          <a href="#" className="block text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">About Me</a>
          <a href="#" className="block text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">Projects</a>
          <button className="block text-skyBlue border border-skyBlue px-3 py-2 rounded-full text-center hover:bg-skyBlue hover:text-darkBackground transition duration-300">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
