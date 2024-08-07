import React from "react";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

import ClientCarousel from "../components/ClientCarousel";

function Development() {
  return (
    <div>
      <h1 className="carpet_cleaning"></h1>
      <ContactUs />

      <ClientCarousel />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Development;
