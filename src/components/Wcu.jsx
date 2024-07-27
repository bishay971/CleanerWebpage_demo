import React, { useState } from "react";
import "./Wcu.css";

const WcuItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Wcu = () => {
  const faqData = [
    {
      question: "Professional and Reliable Service",
      answer:
        "Our team is composed of trained professionals who adhere to the highest standards of \
        cleanliness and reliability. We ensure your office environment is spotless, providing a welcoming and productive workspace.",
    },
    {
      question: "Customizable Cleaning Plans",
      answer:
        "We understand that every office has unique needs. That's why we offer customizable cleaning plans tailored to fit your specific \
        requirements and schedule, ensuring minimal disruption to your daily operations.",
    },
    {
      question: "Eco-Friendly Cleaning Products",
      answer:
        "We are committed to sustainability and the health of your employees. Our cleaning products are eco-friendly and non-toxic, \
        providing a safe and healthy environment while minimizing our environmental footprint.",
    },
    {
      question: "Competitive Pricing and Excellent Value:",
      answer:
        "We offer competitive pricing without compromising on quality. Our services provide excellent value, ensuring you \
        receive top-notch cleaning services that meet your budget and exceed your expectations.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Why Choose Us</h2>
      {faqData.map((item, index) => (
        <WcuItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Wcu;
