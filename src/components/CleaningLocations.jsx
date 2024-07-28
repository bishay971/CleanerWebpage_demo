import React from "react";
import "./CleaningLocations.css";

// Import images
import sydneyImage from "../images/logos/NSW.jpg";
import brisbaneImage from "../images/logos/QL.jpg";
import perthImage from "../images/logos/WA.jpg";
import canberraImage from "../images/logos/ACT.webp";
import adelaideImage from "../images/logos/SA.jpg";

const CleaningLocations = () => {
  return (
    <section className="cleaning-locations">
      <div className="container">
        <h1>Cleaning Service Locations around Australia</h1>
        <p>
          We now operate in all major suburbs in Sydney, Brisbane, Perth,
          Adelaide and Canberra. To find out more about availability in your
          location, just call our sales team.
        </p>

        <div className="location-grid">
          <div className="location-item">
            <img src={sydneyImage} alt="Sydney" />
            <p>Sydney, NSW</p>
          </div>
          <div className="location-item">
            <img src={brisbaneImage} alt="Brisbane" />
            <p>Brisbane, Queensland</p>
          </div>
          <div className="location-item">
            <img src={perthImage} alt="Perth" />
            <p>Perth, WA</p>
          </div>
          <div className="location-item">
            <img src={canberraImage} alt="Canberra" />
            <p>Canberra, ACT</p>
          </div>
          <div className="location-item">
            <img src={adelaideImage} alt="Adelaide" />
            <p>Adelaide, SA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningLocations;
