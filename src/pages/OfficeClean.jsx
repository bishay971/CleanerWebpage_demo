import React from "react";
import "./OfficeClean.css";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function OfficeClean() {
  return (
    <div>
      <div className="container">
        <div className="office-cleaning">
          <h1>OFFICE CLEANING SERVICE</h1>
          <div className="border"></div>
          <p>
            At <span className="comp-name">AP Cleaning</span> , we understand
            the importance of a clean and organized workspace. Our office
            cleaning services are designed to create a spotless, hygienic, and
            welcoming environment for your employees and clients. We tailor our
            cleaning solutions to meet your specific needs, ensuring a pristine
            office that promotes productivity and well-being.
          </p>
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Daily Office Cleaning:</strong> Routine cleaning to
              maintain a tidy and fresh workspace.
            </li>
            <li>
              <strong>Deep Cleaning:</strong> Thorough cleaning of all areas,
              including carpets, upholstery, and hard-to-reach spots.
            </li>
            <li>
              <strong>Window Cleaning:</strong> Sparkling clean windows for a
              bright and clear view.
            </li>
            <li>
              <strong>Restroom Sanitization:</strong> Ensuring restrooms are
              hygienic and stocked with supplies.
            </li>
            <li>
              <strong>Floor Care:</strong> Sweeping, mopping, and vacuuming
              floors, with specialized treatments for different floor types.
            </li>
            <li>
              <strong>Trash Removal:</strong> Regular disposal of trash and
              recycling materials.
            </li>
            <li>
              <strong>Disinfection Services:</strong> Enhanced disinfection for
              high-touch surfaces to prevent the spread of germs.
            </li>
          </ul>
        </div>
      </div>
      <ContactUs />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default OfficeClean;
