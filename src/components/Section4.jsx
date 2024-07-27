import React from "react";
import "./Section4.css";

const Section4 = () => {
  return (
    <div className="section4-container">
      <div className="section4-content">
        <div className="section4-item">
          <div className="section4-icon safe-eco">
            {/* <img className="icon_img" src="../../images/eco.png"></img> */}
          </div>
          <h3>Safe & Eco-friendly</h3>
          <p>
            We strictly use natural and safe solutions and techniques,
            prioritizing the health of you, your family, and the environment.
          </p>
        </div>
        <div className="section4-item">
          <div className="section4-icon streamlined-booking">
            {/* <img className="icon_img" src="../../images/calender.png"></img> */}
          </div>
          <h3>Streamlined Booking</h3>
          <p>
            With an easy, efficient booking process, we flexibly align our maid
            services with your busy timetable for each appointment.
          </p>
        </div>
        <div className="section4-item">
          <div className="section4-icon customer-oriented">
            {/* <img className="icon_img" src="../../images/happy.png"></img> */}
          </div>
          <h3>Customer-oriented</h3>
          <p>
            Our friendly office staff is always available to answer questions,
            and our on-site crew collaborates with you for optimal results.
          </p>
        </div>
        <div className="section4-item">
          <div className="section4-icon high-quality">
            {/* <img className="icon_img" src="../../images/quality.png"></img> */}
          </div>
          <h3>High Quality of Work</h3>
          <p>
            We are committed to upholding our strict standards, all to guarantee
            the superior quality of the cleaning service we deliver.
          </p>
        </div>
      </div>
      <div className="section4-image">
        {/* <img src="path/to/your/image.png" alt="Cleaning Service" /> */}
      </div>
    </div>
  );
};

export default Section4;
