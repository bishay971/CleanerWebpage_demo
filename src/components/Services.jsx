import React from "react";
import "./Services.css"; // Make sure to create this CSS file

const Services = () => {
  return (
    <div className="services-container">
      <div className="service">
        <img src="/path-to-your-image1.png" alt="Experienced Staff" />
        <h3>EXPERIENCED STAFF</h3>
        <p>
          We have a dedicated and highly trained team of professional cleaners
          to handle all your cleaning needs
        </p>
      </div>
      <div className="service">
        <img src="/path-to-your-image2.png" alt="Cost Effective" />
        <h3>COST EFFECTIVE</h3>
        <p>Outstanding reputation for quality, cost efficiency and integrity</p>
      </div>
      <div className="service">
        <img src="/path-to-your-image3.png" alt="Fast & Reliable Service" />
        <h3>FAST & RELIABLE SERVICE</h3>
        <p>
          We ensure our clients receive the best service with every detail
          performed, complimented by our team of professionals
        </p>
      </div>
      <div className="service">
        <img src="/path-to-your-image4.png" alt="Performance Guaranteed" />
        <h3>PERFORMANCE GUARANTEED</h3>
        <p>
          We have an outstanding record with many well-known businesses
          throughout Perth.
        </p>
      </div>
      <div className="service">
        <img src="/path-to-your-image5.png" alt="Servicing All Areas" />
        <h3>SERVICING ALL AREAS</h3>
        <p>We proudly service Perth and other surrounding areas.</p>
      </div>
      <div className="service">
        <img src="/path-to-your-image6.png" alt="Free Annual Carpet Cleaning" />
        <h3>FREE ANNUAL CARPET CLEANING</h3>
        <p>Get in contact today to see if you qualify for this FREE service.</p>
      </div>
    </div>
  );
};

export default Services;
