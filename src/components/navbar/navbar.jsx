import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import "./navbar.css";

// SideNavbar component handles the display and behavior of a side navigation bar
export const SideNavbar = () => {
  // State for tracking the currently active navigation link
  const [activeNav, setActiveNav] = useState('#');
  // State for tracking the menu open/close status on mobile devices
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger menu button for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation menu */}
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#"
          onClick={() => { setActiveNav('#'); setMenuOpen(false); }}
          className={activeNav === '#' ? 'active' : ''}
        >
          <Typography>
            Home
          </Typography>
        </a>
        <a href="#about"
          onClick={() => { setActiveNav('#about'); setMenuOpen(false); }}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <Typography>
            About
          </Typography>
        </a>
        <a href="#edu" 
          onClick={() => { setActiveNav('#edu'); setMenuOpen(false); }}
          className={activeNav === '#edu' ? 'active' : ''}
        >
          <Typography>
            Edu/Exp
          </Typography>
        </a>
        <a href="#projects" 
          onClick={() => { setActiveNav('#projects'); setMenuOpen(false); }}
          className={activeNav === '#projects' ? 'active' : ''}
        >
          <Typography>
            Projects
          </Typography>
        </a>
        <a href="#contact"
          onClick={() => { setActiveNav('#contact'); setMenuOpen(false); }}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <Typography>
            Contact
          </Typography>
        </a>
      </nav>
    </>
  );
};
