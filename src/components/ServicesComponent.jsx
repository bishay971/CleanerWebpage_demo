import React from "react";
import "./ServicesComponent.css";
import { text } from "@fortawesome/fontawesome-svg-core";

import officephoto from "../images/cleaning-office.avif";

const CleaningServices = () => {
  const services = [
    {
      name: "REGULAR CLEANING",
      image: officephoto,
      icon: "🧹",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "CARPET CLEANING",
      image: officephoto,
      icon: "🧼",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "FLOOR & TILES",
      image: officephoto,
      icon: "🧽",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "PRESSURE WASHING",
      image: officephoto,
      icon: "💦",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "WINDOW CLEANING",
      image: officephoto,
      icon: "🪟",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "OFFICE CLEANING",
      image: officephoto,
      icon: "🏢",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "WASHROOM CLEANING",
      image: officephoto,
      icon: "🚽",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "BUILDING EXTERIORS",
      image: officephoto,
      icon: "🏗️",
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
  ];

  return (
    <div className="cleaning-services">
      <div className="container">
        <h1 className="servicesh1">
          <span className="comp-name">AP Cleaning</span> offers a full range of
          cleaning services.
        </h1>
        <p className="description">
          Our expertise includes the capabilities to service the special
          requirements for hospital theatres, CBD office buildings, retail,
          leisure facilities, education, aged care, 5-star hotels, industrial
          sites, food production clean room environments and the scheduling for
          24/7 facilities.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="all-photo">
                {/* <img className="service-image" src={service.image}></img> */}
              </div>
              <div className="all-services">
                <div className="service-icon">{service.icon}</div>
                <div className="service-name">{service.name}</div>
                <div className="service-text">{service.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;
