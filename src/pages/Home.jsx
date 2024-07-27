import React from "react";

import Carousel from "../components/Carousel";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/ContactUs";
import ClientCarousel from "../components/ClientCarousel";
import CleaningLocations from "../components/CleaningLocations";
import Wcu from "../components/Wcu";

function Home() {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Section4 />
      <Section3 />

      <Wcu />
      <FAQComponent />
      <CleaningLocations />
      <ContactUs />
      <ClientCarousel />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Home;
