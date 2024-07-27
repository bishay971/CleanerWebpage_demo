import React, { useState } from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="whole-section">
      <div className="container">
        <div className="contents-for">
          <div className="welcome-to">
            <h1>Welcome to the AP Cleaning Facilities</h1>
            <ul>
              <li>Housekeepers you can trust</li>
              <li>Expert Cleaners</li>
              <li>Modern tools and techniques</li>
              <li>Safety</li>
            </ul>
          </div>
          <div className="satisfaction">
            <img className="guarantee" src="../../images/guarantee.png"></img>
          </div>
          <div className="why-choose-us">
            <h2>Why choose us?</h2>
            <div className="dropdown">
              <div className="dropdown-header" onClick={() => handleToggle(1)}>
                <span>Customer Solutions</span>
                <span>{openDropdown === 1 ? "-" : "+"}</span>
              </div>
              {openDropdown === 1 && (
                <div className="dropdown-content">
                  <p>Customer Solutions content...</p>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={() => handleToggle(2)}>
                <span>Social Responsibility</span>
                <span>{openDropdown === 2 ? "-" : "+"}</span>
              </div>
              {openDropdown === 2 && (
                <div className="dropdown-content">
                  <p>Social Responsibility content...</p>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-header" onClick={() => handleToggle(3)}>
                <span>Intelligent Business</span>
                <span>{openDropdown === 3 ? "-" : "+"}</span>
              </div>
              {openDropdown === 3 && (
                <div className="dropdown-content">
                  <p>
                    Our service delivery is backed by a robust, integrated
                    technological platform. We prioritise continual development
                    of leading technology, industry standards, and best
                    practices to ensure top-notch performance. Our people are
                    equipped with a range of tools that enable access to
                    internal information and business intelligence both on and
                    off-site. By providing access to analytical tools and a
                    network for sharing intelligence, we link our people,
                    places, and processes through the Assetlink Way. These
                    efforts reinforce our commitment to providing high-quality
                    services to our clients.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
