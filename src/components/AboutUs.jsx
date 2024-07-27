import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="container">
        <div className="text-center">
          <h1 className="aboutTitle"> ABOUT US </h1>
          <h2 className="aboutH2">
            <span className="comp-name">AP Cleaning</span> offers professional
            cleaning services for homes and commercial properties. Since 2020,
            we have expanded our service portfolio to offer a wide range of home
            services, including carpet cleaning, upholstery cleaning, area rug
            cleaning, tile & grout cleaning, wood floor cleaning, air duct
            cleaning, fire and water damage restoration services, and mold
            remediation in houses, schools, offices, and other commercial
            buildings.
          </h2>
          <h4 className="aboutH4">
            Our benefits combine a nationwide team of professional technicians
            with the care and customer service you'd expect from a local
            provider. Our customers receive service from experienced and
            knowledgeable technicians who utilize the best techniques in the
            industry and use the right equipment. With the convenience of
            scheduling seven days a week, you're sure to find a good time for
            your cleaning appointment with AP Facilities - a cleaning provider
            you can trust.
          </h4>
          <div className="slogan-about">A COMPANY YOU CAN TRUST</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
