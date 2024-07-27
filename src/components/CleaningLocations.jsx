import React from "react";
import "./CleaningLocations.css";

const CleaningLocations = () => {
  return (
    <section className="cleaning-locations">
      <h1>Cleaning Service Locations around Australia</h1>
      <p>
        We now operate in all major suburbs in Sydney, Brisbane, Perth, Adelaide
        and Canberra. To find out more about availability in your location, just
        call our sales team.
      </p>

      <div className="location-grid">
        <div className="location-item">
          <img src="../images/logos/NSW.jpg" alt="sydney" />
          <p>Sydney, NSW</p>
        </div>
        <div className="location-item">
          <img src="../images/logos/QL.jpg" alt="brisbane" />
          <p>Brisbane, Queensland</p>
        </div>
        <div className="location-item">
          <img src="../images/logos/WA.jpg" alt="perth" />
          <p>Perth, WA</p>
        </div>
        <div className="location-item">
          <img src="../images/logos/ACT.webp" alt="Canberra" />
          <p>Canberra, ACT</p>
        </div>
        <div className="location-item">
          <img src="../images/logos/SA.jpg" alt="Adelaide" />
          <p>Adelaide, SA</p>
        </div>
      </div>
    </section>
  );
};

export default CleaningLocations;
