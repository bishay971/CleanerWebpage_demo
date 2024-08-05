import React from "react";
import "./OfficeClean.css";
import office_clean from "../images/office_clean.jpeg";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ClientCarousel from "../components/ClientCarousel";

function Consulting() {
  return (
    <div className="whole-page">
      <div className="container">
        <div className="office-cleaning">
          <h1>COMMERCIAL CLEANING SERVICE</h1>
          <div className="border-1"></div>
          <div className="content">
            <div className="description-class">
              <p>
                At <span className="comp-name">AP Cleaning</span>, our expert
                commercial cleaning team offers a hassle-free solution to
                maintaining a pristine and professional atmosphere in your
                business premises, day in and day out. Whether you manage a
                school, aged care facility, child care center, gym, retail
                store, or any other commercial property, At{" "}
                <span className="comp-name">AP Cleaning</span> has the resources
                and expertise to get the job done right the first time. Our
                regular commercial cleaning services include general and
                thorough cleaning tasks on a daily, weekly, or monthly basis,
                tailored to meet your specific needs.
                <br />
                In a competitive commercial cleaning market, we prioritize
                quality over cutting corners. We offer fair and transparent
                quotes that reflect the superior standards we uphold across all
                our services. Our commercial cleaning services in Perth
                encompass a broad range of tasks, including rubbish removal,
                dusting, sanitization, trash collection, restroom maintenance,
                breakroom cleaning, hard floor care, and more. We excel at
                creating tailored cleaning solutions for commercial properties
                all around Australia, with an emphasis on efficiency and total
                customer satisfaction.
                <br />
              </p>
            </div>
            <div className="image-clean-office">
              <img src={office_clean} alt="Office Cleaning" />
            </div>
          </div>

          <h3 className="clean-h2">STRATA CLEANING</h3>
          <h3 className="clean-h2">MEDICAL CENTRE AND AGE CARE CLEANING</h3>
          <h3 className="clean-h2">SCHOOLS AND CHILDCARE</h3>
          <h3 className="clean-h2">RETAIL STORES</h3>
          <h3 className="clean-h2">GYMS</h3>
          <h3 className="clean-h2">RESTAURANTS AND PUBS</h3>
          <h3 className="clean-h2">AIRPORT LOUNGES</h3>
        </div>
      </div>
      <ContactUs />
      <ClientCarousel />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Consulting;
