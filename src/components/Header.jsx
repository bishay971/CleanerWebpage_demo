import React from "react";
import "./Header.css"; // Import the CSS file

import { Link } from "react-scroll";
import { FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import logo from "../images/1rmbg.png";

const Header = () => {
  return (
    <nav className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-right">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-left">
          <a href="tel:+1234567890" className="phone-number">
            <FaPhone /> +61 0 4367 8275
          </a>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className="book-now-button"
          >
            <button className="book-now">Book Now</button>
          </Link>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
