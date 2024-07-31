import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientCarousel.css";

// Import images
import cleaningKit from "../images/bunbury.png";
import europcar from "../images/europcar.svg";
import goodguys from "../images/goodguys.svg";
import qantas from "../images/qantas.svg";
import snapfitness from "../images/snapfitness.jpg";
import medibank from "../images/medibank.svg";
import combank from "../images/commonwealth.png";
import bankwest from "../images/bankwest.webp";
import nabbank from "../images/nab-bank.jpg";
import cos from "../images/cos.png";
import anaconda from "../images/anaconda.jpg";
import spotlight from "../images/spotlight.png";

const clientLogos = [
  cleaningKit,
  medibank,
  europcar,
  cos,
  bankwest,
  goodguys,
  qantas,
  spotlight,
  combank,
  snapfitness,
  nabbank,
  anaconda,
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
  };

  return (
    <div className="carousel-container container">
      <div className="carousel-title">
        Our Happy <span className="comp-name">Clients</span>
      </div>
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="carousel-slide">
            <img src={logo} alt={`client-logo-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
