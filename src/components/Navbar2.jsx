import React, { useState } from "react";
import "./Navbar2.css";

const DropdownMenu = ({ show, links }) =>
  show ? (
    <ul className="dropdown-menu">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  ) : null;

const Navbar2 = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [qualityDropdown, setQualityDropdown] = useState(false);

  const servicesLinks = [
    { href: "/services/office-cleaning", text: "OFFICE CLEANING" },
    { href: "/services/carpet-cleaning", text: "CARPET CLEANING" },
    { href: "/services/window-cleaning", text: "WINDOW CLEANING" },
    {
      href: "/services/end-of-lease-construction-cleaning",
      text: "END OF LEASE/CONSTRUCTION CLEANING",
    },
    {
      href: "/services/commercial-industrial-cleaning",
      text: "COMMERCIAL & INDUSTRIAL CLEANING",
    },
    {
      href: "/services/gardening-landscaping",
      text: "GARDENING & LANDSCAPING",
    },
    {
      href: "/services/covid-cleaning-disinfection",
      text: "COVID-19 CLEANING & DISINFECTION",
    },
  ];

  const qualityLinks = [
    // Add links for QUALITY & SAFETY dropdown here
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <a href="/services">SERVICES</a>
            <DropdownMenu show={servicesDropdown} links={servicesLinks} />
          </li>
          <li>
            <a href="/portfolio">PORTFOLIO</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setQualityDropdown(true)}
            onMouseLeave={() => setQualityDropdown(false)}
          >
            <a href="/quality-safety">QUALITY & SAFETY</a>
            <DropdownMenu show={qualityDropdown} links={qualityLinks} />
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
          <li>
            <a href="/pay-invoice">PAY MY INVOICE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
