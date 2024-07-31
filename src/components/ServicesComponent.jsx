import React from "react";
import "./ServicesComponent.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import {
  faHandHoldingMedical,
  faFaceSmile,
  faSchool,
  faUtensils,
  faPlane,
  faStore,
  faDumbbell,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import officephoto from "../images/cleaning-office.avif";

const CleaningServices = () => {
  const services = [
    {
      name: "HEALTH CARE FACILITIES",
      image: officephoto,
      icon: faHandHoldingMedical,
      text: "Maintain the highest standards of cleanliness and safety with our specialized healthcare cleaning services, ensuring a sterile and welcoming environment for patients and staff.",
    },
    {
      name: "AGE CARE FACILITIES",
      image: officephoto,
      icon: faFaceSmile,
      text: "Provide a clean, comfortable, and safe environment for residents with our tailored cleaning services, designed to meet the unique needs of aged care facilities.",
    },
    {
      name: "SCHOOL AND CHILD CARE",
      image: officephoto,
      icon: faSchool,
      text: "Promote a healthy learning environment with our thorough cleaning services, keeping schools and child care centers spotless and free of germs.",
    },
    {
      name: "RESTAURANTS AND PUBS",
      image: officephoto,
      icon: faUtensils,
      text: "Ensure your establishment is spotless and inviting with our dedicated cleaning services, tailored to meet the hygiene standards of the food and beverage industry.",
    },
    {
      name: "AIRPORT LOUNGES",
      image: officephoto,
      icon: faPlane,
      text: "Enhance the travel experience with our premium cleaning services for airport lounges, providing a clean and relaxing space for travelers.",
    },
    {
      name: "RETAIL STORES",
      image: officephoto,
      icon: faStore,
      text: "Keep your office spotless with our comprehensive cleaning services. From daily maintenance to deep disinfection, we ensure a hygienic and productive work environment.",
    },
    {
      name: "GYMS",
      image: officephoto,
      icon: faDumbbell,
      text: "Keep your fitness facility hygienic and fresh with our specialized cleaning services, promoting a safe and sanitary space for all members.",
    },
    {
      name: "CAR DETAILING",
      image: officephoto,
      icon: faCar,
      text: "Restore your vehicle’s shine with our comprehensive car detailing services, leaving it spotless and like new inside and out.",
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
          requirements for hospitals, CBD office buildings, retail, leisure
          facilities, education, aged care, restaurants, industrial sites and
          the scheduling for 24/7 facilities.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="all-photo">
                {/* <img className="service-image" src={service.image}></img> */}
              </div>
              <div className="all-services">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} className="highlight" />
                </div>
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
