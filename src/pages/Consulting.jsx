import React from "react";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Consulting() {
  return (
    <div>
      <h1 className="consulting">Commercial Cleaning</h1>
      <ContactUs />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Consulting;
