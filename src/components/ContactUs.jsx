import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    officeSqMeter: "",
    typeOfCleaning: "",
    frequency: "",
    streetAddress: "",
    zipCode: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlp2zrb",
        "template_j44xav6",
        e.target,
        "t4fRZ7NNaNMdtxwwe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      officeSqMeter: "",
      typeOfCleaning: "",
      frequency: "",
      streetAddress: "",
      zipCode: "",
    });
  };

  return (
    <div id="contact-us" className="form-all">
      <div className="form-all-line"></div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>REQUEST A QUOTE</h2>
        <div className="form-inner">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name:"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address:"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number:"
            required
          />
          <input
            type="text"
            name="officeSqMeter"
            value={formData.officeSqMeter}
            onChange={handleChange}
            placeholder="Office Sq Meter:"
            required
          />
          <div className="dropdowns">
            <select
              name="typeOfCleaning"
              value={formData.typeOfCleaning}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Type of cleaning
              </option>
              <option value="regular">Regular</option>
              <option value="deep">Deep</option>
              <option value="special">Special</option>
            </select>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Frequency
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            required
          />
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="ZIP / Postal Code"
            required
          />
          <button type="submit">REQUEST A QUOTE</button>
        </div>
      </form>
      {showPopup && (
        <div className="popup">
          Your request has been submitted. Our team will reach out to you soon.
        </div>
      )}
    </div>
  );
};

export default FormComponent;
