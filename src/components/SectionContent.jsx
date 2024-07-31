import React from "react";
import "./SectionContent.css";

import cost_effective from "../images/cost-effective.svg";
import customize from "../images/customize.svg";
import eco_friendly from "../images/eco-friendly.svg";
import professional from "../images/professional.svg";

const SectionContent = () => {
  return (
    <div className="why-dnd-container">
      <div className="container">
        <h1 className="wcu-heading">
          Why Choose <span className="comp-name">AP Cleaning</span> ?
        </h1>
        <div className="features-container">
          <div className="feature-card">
            <div className="icon equipment"></div>
            <h2 className="wcu-h2">PROFESSIONAL</h2>
            <p className="section-p">
              Our team is composed of trained professionals who adhere to the
              highest standards of cleanliness and reliability.
            </p>
            <ul className="section-ul">
              <li>Best equipment & pricing</li>
              <li>Expert Team</li>
              <li>Quality service</li>
              <li>Trained professionals</li>
              <li>Fully licensed and trained</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="icon staff"></div>
            <h2 className="wcu-h2">CUSTOMIZABLE</h2>
            <p className="section-p">
              We offer customizable cleaning plans tailored to fit your specific
              requirements and schedule, ensuring minimal disruption to your
              daily operations.
            </p>
            <ul className="section-ul">
              <li>Free Assessment & Quote</li>
              <li>Tailored Solutions</li>
              <li>Personalized Plans</li>
              <li>Available 24/7</li>
              <li>Your Needs First</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="icon value"></div>
            <h2 className="wcu-h2">SOCIAL RESPONSIBILITY</h2>
            <p className="section-p">
              We embrace diversity and support the communities we serve,
              fostering inclusion and contributing to societal growth through
              cultural celebration and Indigenous support.
            </p>
            <ul className="section-ul">
              <li>Diverse Workforce</li>
              <li>Cultural Celebration</li>
              <li>Community Inclusion</li>
              <li>Indigenous Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
