import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer_left">
        <h2 className="logo">FARHAN KHAN</h2>
        <p>
          Building responsive and user-focused web applications with modern
          technologies.
        </p>
      </div>

      <div className="footer_center">
        <h3>NAVIGATION</h3>
        <ul>
          <li><Link className="footerBtn" to="/">HOME</Link></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICE</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><Link className="footerBtn" to="/contact">CONTACT US</Link></li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>CONTACT</h3>
        <p><FaEnvelope /> fk75120233@gmail.com</p>
        <p><FaPhone /> +92 323 2171866</p>
        <p><FaMapMarkerAlt /> Rawalpindi/Islamabad, Pakistan</p>
      </div>
    </footer>
  );
}