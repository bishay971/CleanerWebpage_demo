import React from "react";
import "./OfficeClean.css";
import office_clean from "../images/office_clean.jpeg";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ClientCarousel from "../components/ClientCarousel";

function OfficeClean() {
  return (
    <div className="whole-page">
      <div className="container">
        <div className="office-cleaning">
          <h1>OFFICE CLEANING SERVICE</h1>
          <div className="border-1"></div>
          <div className="content">
            <div className="description-class">
              <p>
                At <span className="comp-name">AP Cleaning</span>, our expert
                office cleaning team offers a hassle-free solution to
                maintaining a professional atmosphere in your workplace, day in
                and day out. Whether you're in a small office building or a
                large multi-storey complex,{" "}
                <span className="comp-name">AP Cleaning</span> has the resources
                and expertise to get the job done right the first time. Our
                regular office cleaning services include general and thorough
                cleaning tasks on a daily, weekly, or monthly basis, tailored to
                meet your specific needs. <br />
                In a highly competitive commercial cleaning market, we avoid
                offering low-cost quotes just to secure contracts. Instead, we
                provide realistic quotes that reflect the high standards we
                maintain in all our cleaning services. Our office cleaning
                services cover a wide range of tasks including rubbish removal,
                dusting, desk cleaning, trash collection, toilet cleaning,
                lunchroom cleaning, hard floor stripping, sealing, and more. We
                specialize in delivering custom-made cleaning solutions to
                commercial properties across Perth, with a focus on efficiency
                and complete customer satisfaction.
                <br />
                At <span className="comp-name">AP Cleaning</span>, we are
                committed to innovation and environmental responsibility. We
                continuously develop new technologies to meet market demands and
                maintain long-term relationships with our clients. Our cleaning
                methodologies are designed to suit your business needs,
                incorporating environmentally friendly practices, from
                traditional cleaning methods to alternative microfiber and
                waterless technologies.
              </p>
            </div>
            <div className="image-clean-office">
              <img src={office_clean} alt="Office Cleaning" />
            </div>
          </div>

          <h2 className="clean-h2">OUR SERVICES INCLUDE</h2>
          <ul className="clean-class">
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
  );
}

export default OfficeClean;
