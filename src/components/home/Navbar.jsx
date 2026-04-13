import "../../style/navBar.css";
import logo from "../../image/logo.jpeg";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Navbar(){
   const [isOpen, setIsOpen] = useState(false);

  return(
    <nav className="navbar">

      <div className="header">
        <img src={logo} alt="logo" />
        <h1>FARHAN KHAN</h1>
      </div>

  {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

<ul className={`nav-links ${isOpen ? 'show' : ''}`}>
  {/* Home and Contact use Link (for routing), others use 'a' (for section scrolling) */}
  <li><Link className="nav-item" to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
  <li><a className="nav-item" href="#about" onClick={() => setIsOpen(false)}>ABOUT</a></li>
  <li><a className="nav-item" href="#services" onClick={() => setIsOpen(false)}>SERVICE</a></li>
  <li><a className="nav-item" href="#skills" onClick={() => setIsOpen(false)}>SKILL</a></li>
  <li><a className="nav-item" href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a></li>
  <li><Link className="nav-item contact-btn" to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link></li>
</ul>


    </nav>
  );
}