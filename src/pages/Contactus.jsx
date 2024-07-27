import React from "react";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contactus() {
  return (
    <div>
      <h1 className="contactus">Contact Us</h1>
      <ContactUs />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Contactus;
