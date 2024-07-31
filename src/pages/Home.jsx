import React from "react";

import Carousel from "../components/Carousel";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import OurLocations from "../components/ourLocations";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import FAQComponent from "../components/FAQComponent";
import ContactUs from "../components/ContactUs";
import ClientCarousel from "../components/ClientCarousel";
import CleaningLocations from "../components/CleaningLocations";
import Wcu from "../components/Wcu";
import SectionContent from "../components/SectionContent";
import ServicesComponent from "../components/ServicesComponent";
import AfterHeader from "../components/AfterHeader";
import BookNow from "../components/BookNow";

function Home() {
  return (
    <div>
      <Carousel />
      <AfterHeader />
      <ServicesComponent />

      <SectionContent />
      <AboutUs />
      <Section5 />

      <Section4 />
      <BookNow />
      <CleaningLocations />
      <Wcu />

      <ContactUs />
      <ClientCarousel />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default Home;
