import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import OfficeClean from "./pages/OfficeClean";
import Products from "./pages/Products";
import Services from "./pages/Services";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import OurLocations from "./components/ourLocations";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import FAQComponent from "./components/FAQComponent";

function App() {
  return (
    <div className="desktop">
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/ourclients" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/officeclean" element={<OfficeClean />} />
          <Route path="/carpetclean" element={<Development />} />
          <Route path="/kitchenclean" element={<Design />} />
          <Route path="/commclean" element={<Consulting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
