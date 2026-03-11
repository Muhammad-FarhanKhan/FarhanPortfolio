import "../../style/App.css";
import logo from "../../image/logo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    
    <nav className="navbar">

      <div className="header">
        <img src={logo} alt="logo" />
        <h1>FARHAN KHAN</h1>
      </div>

      {/* Hamburger icon */}
      <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "navLinks showMenu" : "navLinks"}>
        <li><Link className="navBtn" to="/">HOME</Link></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICE</a></li>
        <li><a href="#skills">SKILL</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><Link className="navBtn" to="/contact">CONTACT US</Link></li>
      </ul>

    </nav>
  );
}