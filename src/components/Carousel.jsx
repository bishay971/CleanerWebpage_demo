import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

import cleaningKit from "../images/office_clean.jpeg";
import people from "../images/strata_clean.jpg";
import cleaningPerson from "../images/carousel1.jpg";

const slides = [
  {
    image: people,
    title: "AP CLEANING",
    description:
      "Providing service excellence to our communities with care and passion. It’s About You.",
    buttonText: "Read more",
  },
  {
    image: cleaningKit,
    title: "COMMITTED TO QUALITY",
    description: "Ensuring the highest standards in every task we undertake.",
    buttonText: "Learn more",
  },
  {
    image: cleaningPerson,
    title: "DEDICATED TEAM",
    description: "Our team is passionate and dedicated to serving you.",
    buttonText: "Join us",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-content">
            <div className="text-section">
              <div className="background-opa"></div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <button className="read-more-btn">{slide.buttonText}</button>
            </div>
            <div className="image-section">
              <img
                className="d-block w-100 carousel-image"
                src={slide.image}
                alt={`Slide ${index}`}
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
