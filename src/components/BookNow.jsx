import React from "react";
import { Link } from "react-scroll";
import "./BookNow.css";

function BookNow() {
  return (
    <div className="book-after-header-whole">
      <Link
        to="contact-us"
        smooth={true}
        duration={500}
        className="book-book-now-button"
      >
        <button className="book-book-now-header">Book Now !</button>
      </Link>
    </div>
  );
}

export default BookNow;
