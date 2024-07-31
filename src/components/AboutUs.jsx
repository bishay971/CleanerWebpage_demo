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
              cleaning services for all kind of professional sectors. Since
              2020, we have expanded our service portfolio to offer a wide range
              of cleaning services, including carpet cleaning, floor cleaning,
              strata cleaning, window cleaning, washroom cleaning, car detailing
              in medical facilities, schools, offices, and other commercial
              buildings.
            </h2>
            <h4 className="aboutH4">
              Our benefits combine a nationwide team of professional technicians
              with the care and customer service you'd expect from a local
              provider. Our customers receive service from experienced and
              knowledgeable technicians who utilize the best techniques in the
              industry and use the right equipment. With the convenience of
              scheduling seven days a week, you're sure to find a good time for
              your cleaning appointment with{" "}
              <span className="comp-name">AP Cleaning</span> - a cleaning
              provider you can trust.
            </h4>
            <div className="slogan-about">A COMPANY YOU CAN TRUST</div>
          </div>

          <div className="image-grid">
            <div className="stats-container">
              <div className="stat-item">
                <h2>100+</h2>
                <h3>Happy Clients</h3>
                <p>Over hundred commercial clients satisfied.</p>
              </div>
              <div className="stat-item">
                <h2>30+</h2>
                <h3>Amazing Staff</h3>
                <p>A professional team ready to help your business.</p>
              </div>
              <div className="stat-item">
                <h2>400+</h2>
                <h3>Projects Completed</h3>
                <p>Successfully completed projects across industries.</p>
              </div>
              <div className="stat-item">
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
