import React from "react";
import "./ourLocation.css";

function OurLocations() {
  return (
    <div className="container-top">
      <div className="container">
        <div className="locationAll">
          <div className="img-australia">
            <img className="australia" src="../../images/australia.svg"></img>
          </div>
          <div className="location">
            <div className="titleLocation"></div>

            <div className="support-office">
              <h2 className="header-off">Support Office</h2>
              <h3 className="country">Australia</h3>
              <div class="state">
                <h4>Western Australia</h4>
                <p>
                  37A/35 camberwell street,
                  <br />
                  Beckenham, 6107, WA
                </p>
                <p>
                  <span className="label">T:</span> +61 0 4367 8275
                  <br />
                  <span className="label">E:</span> mail@apfacilities.com.au
                </p>
              </div>
            </div>
          </div>
          <div className="contactus">
            <div className="titleLocation">Operating Hours</div>
            <div className="support-office">
              <p className="header-white">Mon-Fri - 7am-8pm</p>
              <p className="header-white">Sat-Sun - 8am-4pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLocations;
