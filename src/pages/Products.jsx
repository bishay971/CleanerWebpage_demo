import React from "react";

import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import ClientCarousel from "../components/ClientCarousel";
function Products() {
  return (
    <div>
      <h1 className="ourclients">Our Clients</h1>

      <ClientCarousel />
      <ContactUs />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Products;
