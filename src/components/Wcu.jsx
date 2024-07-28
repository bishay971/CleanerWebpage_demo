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
      question: "How often should I schedule a professional cleaning? ",
      answer:
        "The frequency of professional cleaning depends on your specific needs. However, most of our customers choose weekly or bi-weekly services to maintain a clean and healthy living environment.",
    },
    {
      question: "How can I schedule a cleaning service?",
      answer:
        "You can easily schedule a cleaning service by contacting us through our website, giving us a call, or sending us an email. We will arrange a convenient time for you.",
    },
    {
      question: "Do you offer services for commercial properties?",
      answer:
        "Yes, we offer professional cleaning services for both residential and commercial properties.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer:
        "No, you don't need to be home during the cleaning. You can provide us with access to your property and we'll ensure it's secure once the cleaning is complete.",
    },
    {
      question: "What if i need to report a problem ?",
      answer:
        "We provide you with your very own Account Manager who is your dedicated point of contact. Any problems, just get in touch and they will take care of everything for you.",
    },
    {
      question: "How are your cleaners vetted?",
      answer:
        "All of our prospective cleaners are asked to provide proof of identification and home address. They are also police and DBS checked, and references are sought to verify their experience and work ethic.",
    },
  ];

  return (
    <div className="faq-whole">
      <div className="container">
        <div className="line"></div>
        <div className="faq-container">
          <h2>Frequently asked Questions</h2>
          {faqData.map((item, index) => (
            <WcuItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wcu;
