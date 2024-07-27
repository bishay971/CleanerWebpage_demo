import React from "react";
import "./FAQComponent.css";

const FAQComponent = () => {
  return (
    <div className="all-container">
      <div className="faq-container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-item">
          <h3>How often should I schedule a professional cleaning?</h3>
          <p>
            The frequency of professional cleaning depends on your specific
            needs. However, most of our customers choose weekly or bi-weekly
            services to maintain a clean and healthy living environment.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do you treat stains?</h3>
          <p>
            As stated above, each stain is different and requires a different
            approach. Some stains can be removed simply by going over them with
            the hot water extraction, and some require a more robust cleaning
            solution.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you offer services for commercial properties?</h3>
          <p>
            Yes, we offer professional cleaning services for both residential
            and commercial properties.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you use eco-friendly cleaning products?</h3>
          <p>
            Yes, we prioritize the use of eco-friendly and non-toxic cleaning
            products to ensure a safe and healthy environment for our customers
            and staff.
          </p>
        </div>
        <div className="faq-item">
          <h3>Is Stain Removal Included in General Cleaning?</h3>
          <p>
            Stains are different and will require different approaches. Some
            stains are removed in basic steam cleaning, but some will require
            deep cleaning and more robust cleaning supplies.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do I need to be home during the cleaning?</h3>
          <p>
            No, you don't need to be home during the cleaning. You can provide
            us with access to your property and we'll ensure it's secure once
            the cleaning is complete.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I book a service for a specific time?</h3>
          <p>
            Yes, you can schedule a cleaning service for a specific time that
            best fits your routine.
          </p>
        </div>
        <div className="faq-footer">
          EVERYTHING YOU NEED FOR GOOD & CLEAN RESULTS
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
