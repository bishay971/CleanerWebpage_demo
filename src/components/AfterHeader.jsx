import React from "react";
import { Link } from "react-scroll";
import "./AfterHeader.css";

function AfterHeader() {
  return (
    <div className="after-header-whole">
      <div className="flex-container">
        <div className="call-us">
          Call us for a cost estimate over the phone
          <div className="call-us-details">+61 0 4367 8275</div>
        </div>
        <Link
          to="contact-us"
          smooth={true}
          duration={500}
          className="book-now-button"
        >
          <button className="book-now-header">
            Order Service <span className="now">Now !</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AfterHeader;
