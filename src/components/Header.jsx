import React from "react";
import "./Header.css"; // Import the CSS file

import logo from "../images/logo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="bottom-navbar">
          <div className="main-logo">
            <img src={logo} alt="AP Cleaning Logo" />
          </div>

          <div className="phone">
            <div className="phone-head">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              +61 0 4367 8275
            </div>
            <button className="book-now-head">BOOK NOW</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
