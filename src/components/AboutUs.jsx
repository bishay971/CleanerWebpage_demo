import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="container">
        <div className="text-center">
          <div className="aboutus-grid">
            <h1 className="aboutTitle"> ABOUT US </h1>
            <h2 className="h2-case">
              WE HAVE ALL YOUR CLEANING REQUIREMENTS COVERED
            </h2>
            <h2 className="aboutH2">
              <span className="comp-name">AP Cleaning</span> offers professional
              cleaning services for homes and commercial properties. Since 2020,
              we have expanded our service portfolio to offer a wide range of
              home services, including carpet cleaning, upholstery cleaning,
              area rug cleaning, tile & grout cleaning, wood floor cleaning, air
              duct cleaning, fire and water damage restoration services, and
              mold remediation in houses, schools, offices, and other commercial
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

          <div className="image-grid">
            <div class="stats-container">
              <div class="stat-item">
                <h2>100+</h2>
                <h3>Happy Clients</h3>
                <p>Over hundred commercial clients satisfied.</p>
              </div>
              <div class="stat-item">
                <h2>20+</h2>
                <h3>Amazing Staff</h3>
                <p>A professional team ready to help your business.</p>
              </div>
              <div class="stat-item">
                <h2>500+</h2>
                <h3>Projects Completed</h3>
                <p>Successfully delivered projects across industries.</p>
              </div>
              <div class="stat-item">
                <h2>24/7</h2>
                <h3>Support</h3>
                <p>Round-the-clock assistance for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
