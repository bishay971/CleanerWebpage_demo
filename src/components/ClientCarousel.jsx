import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientCarousel.css";

const clientLogos = [
  // Add the path to your images here
  "../../images/logos/bunbury.png",
  "../../images/logos/europcar.svg",
  "../../images/logos/goodguys.svg",
  "../../images/logos/qantas.svg",
  "../../images/logos/snapfitness.jpg",
  "../../images/logos/qantas.svg",
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
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
