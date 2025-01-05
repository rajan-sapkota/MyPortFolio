import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // For sun and moon icons

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`bottom-0 z-50 shadow-md transition-all duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`} // Apply dark mode or light mode background and text color
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Footer Content */}
          <div className="flex flex-1 justify-center">
            <p className="text-lg font-semibold">
              &copy; {new Date().getFullYear()} RAJAN SAPKOTA. All Rights Reserved.
            </p>
          </div>
          
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
