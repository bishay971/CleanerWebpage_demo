import React from "react";
import "./SectionContent.css";

import cost_effective from "../images/cost-effective.svg";
import customize from "../images/customize.svg";
import eco_friendly from "../images/eco-friendly.svg";
import professional from "../images/professional.svg";

// const sections = [
//   {
//     image: professional,
//     title: "PROFESSIONAL AND RELIABLE SERVICE",
//     text: `Our team is composed of trained professionals who adhere to the highest standards of cleanliness and reliability. We ensure your office environment is spotless, providing a welcoming and productive workspace.`,
//   },
//   {
//     image: customize,
//     title: "CUSTOMIZABLE CLEANING PLANS",
//     text: `We understand that every office has unique needs. That's why we offer customizable cleaning plans tailored to fit your specific requirements and schedule, ensuring minimal disruption to your daily operations.`,
//   },
//   {
//     image: eco_friendly,
//     title: "ECO-FRIENDLY CLEANING PRODUCTS",
//     text: `We are committed to sustainability and the health of your employees. Our cleaning products are eco-friendly and non-toxic, providing a safe and healthy environment while minimizing our environmental footprint.`,
//   },
//   {
//     image: cost_effective,
//     title: "COMPETITIVE PRICING AND EXCELLENT VALUE",
//     text: `We offer competitive pricing without compromising on quality. Our services provide excellent value, ensuring you receive top-notch cleaning services that meet your budget and exceed your expectations.`,
//   },
// ];

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
              <li>DND uses the Drymatic rapid heat drying system</li>
              <li>Commercial grade carpet cleaning</li>
              <li>Mould detection cameras</li>
              <li>Mould particle counter</li>
              <li>Full PP with respirators</li>
              <li>Eco-friendly products</li>
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
              <li>All certified in water & mould cleaning</li>
              <li>ISO certified to handle damage at scale</li>
              <li>Trained In Pre-safety inspection (SWIM)</li>
              <li>Nationally police cleared</li>
              <li>Fully licensed & trained</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="icon value"></div>
            <h2 className="wcu-h2">COMPETITIVE PRICING</h2>
            <p className="section-p">
              We offer competitive pricing without compromising on quality..
            </p>
            <ul className="section-ul">
              <li>Free Assessment & Quote</li>
              <li>Independent hygeniest reports</li>
              <li>Documented equipment readings</li>
              <li>Thorough outcome reports</li>
              <li>Best equipment & pricing</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
