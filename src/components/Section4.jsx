import React from "react";
import "./Section4.css";

import office_cleaning from "../images/office_clean.jpeg";
import people from "../images/people.jpg";
import kit from "../images/cleaning-kit.jpg";
import phonecall from "../images/phone-call.jpg";

const sections = [
  {
    title: "Safe & Eco-friendly",
    iconClass: "safe-eco",
    text: "We strictly use natural and safe solutions and techniques, prioritizing the health of you, your family, and the environment.",
    image: kit,
  },
  {
    title: "Streamlined Booking",
    iconClass: "streamlined-booking",
    text: "With an easy, efficient booking process, we flexibly align our maid services with your busy timetable for each appointment.",
    image: phonecall,
  },
  {
    title: "Customer-oriented",
    iconClass: "customer-oriented",
    text: "Our friendly office staff is always available to answer questions, and our on-site crew collaborates with you for optimal results.",
    image: people,
  },
  {
    title: "High Quality of Work",
    iconClass: "high-quality",
    text: "We are committed to upholding our strict standards, all to guarantee the superior quality of the cleaning service we deliver.",
    image: office_cleaning,
  },
];

const Section4 = () => {
  return (
    <div className="section4-container">
      {sections.map((section, index) => (
        <div className="section4-card" key={index}>
          <div className="section4-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="section4-item">
            <div className={`section4-icon ${section.iconClass}`}></div>
            <h3 className="section4-title">{section.title}</h3>
            <p>{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section4;
