

import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="top-bar">
        <div className="contact-info">
          <FaEnvelope className="icon" />
          <a href="mailto:gee.office11@gmail.com">
            gee.office11@gmail.com
          </a>
        </div>

        <div className="contact-info">
          <FaPhoneAlt className="icon" />
          <a href="tel:01673947370">
            01673-947370
          </a>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <Link to="/contact">
            <button className="nav-contact-btn">Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;