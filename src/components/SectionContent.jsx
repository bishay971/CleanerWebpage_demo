import React from "react";
import "./SectionContent.css";

const sections = [
  {
    title: "PROFESSIONAL AND RELIABLE SERVICE",
    text: `Our team is composed of trained professionals who adhere to the highest standards of cleanliness and reliability. We ensure your office environment is spotless, providing a welcoming and productive workspace.`,
  },
  {
    title: "CUSTOMIZABLE CLEANING PLANS",
    text: `We understand that every office has unique needs. That's why we offer customizable cleaning plans tailored to fit your specific requirements and schedule, ensuring minimal disruption to your daily operations.`,
  },
  {
    title: "ECO-FRIENDLY CLEANING PRODUCTS",
    text: `We are committed to sustainability and the health of your employees. Our cleaning products are eco-friendly and non-toxic, providing a safe and healthy environment while minimizing our environmental footprint.`,
  },
  {
    title: "COMPETITIVE PRICING AND EXCELLENT VALUE",
    text: `AWe offer competitive pricing without compromising on quality. Our services provide excellent value, ensuring you receive top-notch cleaning services that meet your budget and exceed your expectations.`,
  },
];

function SectionContent() {
  return (
    <div className="section-content-whole">
      <div className="container">
        <div className="title">WHY CHOOSE US ?</div>
        <div className="section-content">
          {sections.map((section, index) => (
            <div className="content-block" key={index}>
              <h2 className="content-title">{section.title}</h2>
              <p className="content-text">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionContent;
