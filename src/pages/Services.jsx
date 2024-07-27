import React from "react";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Services() {
  return (
    <div>
      <div className="container">
        <div className="office-cleaning">
          <h1>Our Services</h1>
          <div className="border"></div>
          <ul>
            <li>
              <strong>Office Cleaning:</strong> Routine cleaning to maintain a
              tidy and fresh workspace.
            </li>
            <li>
              <strong>Carpet Cleaning</strong> Thorough cleaning of all areas,
              including carpets, upholstery, and hard-to-reach spots.
            </li>
            <li>
              <strong>Gym Cleaning</strong> Sparkling clean windows for a bright
              and clear view.
            </li>
            <li>
              <strong>Strata Cleaning</strong> Ensuring restrooms are hygienic
              and stocked with supplies.
            </li>
            <li>
              <strong>Car Detailing</strong> Sweeping, mopping, and vacuuming
              floors, with specialized treatments for different floor types.
            </li>
            <li>
              <strong>Pubs and restaurants Cleaning</strong> Regular disposal of
              trash and recycling materials.
            </li>
            <li>
              <strong>Sports Centers</strong> Enhanced disinfection for
              high-touch surfaces to prevent the spread of germs.
            </li>
            <li>
              <strong>Health Care and Child Care</strong> Enhanced disinfection
              for high-touch surfaces to prevent the spread of germs.
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

export default Services;
