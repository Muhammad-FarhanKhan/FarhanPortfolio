import "../../style/navBar.css";
import logo from "../../image/logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar(){

  return(
    <nav className="navbar">

      <div className="header">
        <img src={logo} alt="logo" />
        <h1>FARHAN KHAN</h1>
      </div>

      <ul className="navLinks">
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