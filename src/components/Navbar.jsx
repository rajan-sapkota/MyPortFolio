import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // For mobile menu icons
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // For sun and moon icons

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const [currentSection, setCurrentSection] = useState('home'); // Track current section for active link

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle smooth scrolling and updating current section
  const handleScroll = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Listen to scroll event to update current section
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element && element.getBoundingClientRect().top <= 0) {
          setCurrentSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Dark Mode Toggle Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode} // Dark mode toggle button
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              className="relative w-14 h-8 bg-gray-500 rounded-full transition-all duration-300 ease-in-out"
            >
              {/* Toggle Track */}
              <div
                className={`absolute inset-0.5 bg-gray-300 rounded-full transition-all duration-300 ease-in-out ${
                  isDarkMode ? 'bg-gray-900' : 'bg-gray-200'
                }`}
              ></div>

              {/* Toggle Button */}
              <div
                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 ease-in-out transform ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                {/* Sun or Moon icon */}
                {isDarkMode ? (
                  <MoonIcon className="w-6 h-6 text-yellow-500" />
                ) : (
                  <SunIcon className="w-6 h-6 text-yellow-500" />
                )}
              </div>
            </button>
          </div>

          {/* Centered Heading */}
          <div className="flex flex-1 justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-300 dark:to-green-400 transition-all duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-500 hover:rotate-3 hover:tracking-wide hover:shadow-2xl hover:shadow-blue-500 animate__animated animate__fadeIn">
              RAJAN
            </h1>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu} // Toggle the menu on click
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation - To the right */}
          <div className="hidden sm:block sm:ml-auto">
            <div className="flex space-x-4 pr-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    currentSection === item.id
                      ? 'bg-gray-900 text-white'
                      : 'text-blue-500 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Rendered conditionally */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={classNames(
                  currentSection === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-blue-500 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const navigation = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default Navbar;