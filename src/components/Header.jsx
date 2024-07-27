import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="top-navbar">
          <div className="hours">
            WE ARE OPEN MONDAY – FRIDAY <br />
            9am – 5pm
          </div>
          <div className="after-hours">After Hours +61 0 4367 8275</div>
        </div>
        <div className="bottom-navbar">
          <div className="main-logo">
            <div className="logo-name">
              <div className="main-title">
                <img src="../../images/logo.jpeg" alt="Orbit Group Logo" />
              </div>
            </div>
          </div>

          <div className="slogan"></div>

          <div className="content">
            <div className="contact">
              <div className="phone">
                <span role="img" aria-label="phone">
                  📞
                </span>{" "}
                +61 0 4367 8275
              </div>
              <button className="book-now">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
