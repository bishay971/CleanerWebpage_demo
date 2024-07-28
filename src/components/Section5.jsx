import React from "react";
import { Link } from "react-scroll";
import "./Section5.css";

function Section5() {
  return (
    <div className="section5-after-header-whole">
      <div className="section5-flex-container">
        <div className="section5-call-us">
          YOUR CLEAN AREA IS JUST A PHONE CALL AWAY
          <div className="section5-call-us-details">+61 0 4367 8275</div>
        </div>
        <Link
          to="contact-us"
          smooth={true}
          duration={500}
          className="book-now-button"
        >
          <button className="book-now-header">
            Call Us <span className="now">Now !</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Section5;
