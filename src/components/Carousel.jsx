import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const slides = [
  {
    image: "../../images/people.jpg", // Replace with your image path
    title: "AP Facilities",
    description:
      "Providing service excellence to our communities with care and passion. It’s About You.",
    buttonText: "Read more",
  },
  {
    image: "../../images/cleaning-kit.jpg", // Replace with your image path
    title: "Committed to Quality",
    description: "Ensuring the highest standards in every task we undertake.",
    buttonText: "Learn more",
  },
  {
    image: "../../images/cleaning-person.jpeg", // Replace with your image path
    title: "Dedicated Team",
    description: "Our team is passionate and dedicated to serving you.",
    buttonText: "Join us ",
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
