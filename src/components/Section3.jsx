import React from "react";
import "./Section3.css";

const services = [
  {
    title: "Office Cleaning",
    iconClass: "office-icon",
    overlayClass: "image-office",
    text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
  },
  {
    title: "Gym Cleaning",
    iconClass: "gym-icon",
    overlayClass: "image-gym",
    text: "Our gym cleaning services focus on sanitizing and maintaining a healthy workout space. We handle equipment, floors, and all common areas to ensure a clean and safe environment for your clients.",
  },
  {
    title: "Commercial Cleaning",
    iconClass: "com-icon",
    overlayClass: "image-com",
    text: "Our commercial cleaning solutions cater to various business types. Whether it's a retail store, warehouse, or office building, we provide thorough cleaning and disinfection services tailored to your needs.",
  },
  {
    title: "Kitchen Cleaning",
    iconClass: "kitchen-icon",
    overlayClass: "image-kit",
    text: "Ensure your kitchen meets the highest standards of cleanliness with our specialized cleaning services. We focus on deep cleaning, sanitizing, and maintaining hygiene in food preparation areas.",
  },
  {
    title: "Strata Cleaning",
    iconClass: "strata-icon",
    overlayClass: "image-strat",
    text: "Our strata cleaning services are designed to keep communal areas in residential and commercial buildings pristine. We offer regular maintenance and deep cleaning to ensure a pleasant environment for all residents.",
  },
  {
    title: "Childcare Cleaning",
    iconClass: "child-icon",
    overlayClass: "image-child",
    text: "We provide specialized cleaning services for childcare facilities, ensuring a safe and hygienic environment for children. Our services include thorough disinfection and maintenance of all play and learning areas.",
  },
];

function Section3() {
  return (
    <div className="back">
      <h1 className="title-section">OUR PROFESSIONAL SERVICES</h1>
      <div className="container">
        <div className="services">
          {services.map((service, index) => (
            <div className="service-clean" key={index}>
              <div className="overlay_back"></div>
              <div className={`overlay ${service.overlayClass}`}></div>
              <div className={`section3-icon ${service.iconClass}`}></div>
              <div className="serviceTitle">{service.title}</div>
              <div className="serviceText">{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
