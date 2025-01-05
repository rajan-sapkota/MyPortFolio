import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Default to dark mode if stored
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');  // Add 'dark' to <html>
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');  // Remove 'dark' from <html>
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
<div id="top">
      {/* Navbar Component */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Sections */}
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
