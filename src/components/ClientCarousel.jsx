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

const clientLogos = [
  cleaningKit,
  europcar,
  goodguys,
  qantas,
  snapfitness,
  qantas,
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
