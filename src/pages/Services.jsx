import React from "react";
import "./Services.css";

import office_clean from "../images/office_clean.jpeg";
import people from "../images/people.jpg";
import strata from "../images/strata_clean.jpg";
import car_detail from "../images/car-detail.jpg";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import ClientCarousel from "../components/ClientCarousel";

function Services() {
  return (
    <div>
      <div className="whole-page">
        <div className="container">
          <div className="service-cleaning">
            <h1>Our Services</h1>
            <div className="border-1"></div>

            {/* Image Section */}
            <div className="image-section-services">
              <img src={strata} alt="Service 1" />
              <img src={car_detail} alt="Service 2" />
              <img src={office_clean} alt="Service 3" />
              <img src={people} alt="Service 4" />
            </div>

            <ul className="service-clean-ul">
              <li>
                <strong>Office Cleaning:</strong> We ensure a tidy and fresh
                workspace with services like dusting, vacuuming, window
                cleaning, and waste disposal.
              </li>
              <li>
                <strong>Gym Cleaning:</strong> Maintain a clean and hygienic
                environment with deep cleaning of equipment, sanitization of
                surfaces, and floor care.
              </li>
              <li>
                <strong>Retail Properties Cleaning:</strong> Enhance the appeal
                of your retail space with services including floor care,
                dusting, window cleaning, and restocking supplies.
              </li>
              <li>
                <strong>Schools and Aged Care:</strong> Create a safe and clean
                environment with daily cleaning routines, sanitization of
                high-touch areas, and thorough disinfection.
              </li>
              <li>
                <strong>Medical Centres:</strong> Focused on hygiene and safety,
                we provide meticulous cleaning with disinfection of all
                surfaces, including waiting areas and examination rooms.
              </li>
              <li>
                <strong>Airport Lounges:</strong> Ensure a clean and welcoming
                space for travelers with services like carpet cleaning, dusting,
                and waste management.
              </li>
              <li>
                <strong>Car Detailing:</strong> Comprehensive car cleaning,
                including interior vacuuming, upholstery cleaning, window
                washing, and exterior polishing.
              </li>
            </ul>
            <h2 className="clean-h2-service">OUR SERVICES INCLUDE</h2>
            <ul className="clean-class-service">
              <li>Rubbish Removal</li>
              <li>Desk Cleaning</li>
              <li>Disinfect Restroom, Kitchen, and Telephone Handsets</li>
              <li>Mopping</li>
              <li>Spot Clean - Including Finger Marks Removal from Glass</li>
              <li>Spotless Main Entrance</li>
              <li>Hard Floor Stripping & Sealing</li>
              <li>Recycling</li>
              <li>Car Park Sweeping and Maintenance</li>
              <li>Window Cleaning</li>
              <li>Graffiti Removal</li>
              <li>Dusting</li>
              <li>Vacuuming & Carpet Cleaning</li>
              <li>Collection of Trash</li>
              <li>Lunchroom Cleaning</li>
              <li>Wiping</li>
              <li>Thoroughly Clean All Toilet Areas</li>
              <li>Recycling</li>
              <li>Pressure Cleaning</li>
            </ul>
          </div>
        </div>
        <ContactUs />
        <ClientCarousel />
        <OurLocations />
        <Footer />
      </div>
    </div>
  );
}

export default Services;
