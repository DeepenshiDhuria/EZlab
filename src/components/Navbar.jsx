import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo with cursive V */}
      <div className="nav-logo">
        <span className="v-logo">V</span>Films
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#works" onClick={() => setMenuOpen(false)}>Their Stories</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Varnan</a></li>
      </ul>

      {/* CTA Button */}
      <button className="talk-btn">Let's Talk</button>
    </nav>
  );
};

export default Navbar;
