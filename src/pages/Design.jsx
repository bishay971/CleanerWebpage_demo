import React from "react";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import ClientCarousel from "../components/ClientCarousel";

function Design() {
  return (
    <div>
      <h1 className="kitchenclean"></h1>
      <ContactUs />
      <ClientCarousel />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Design;
