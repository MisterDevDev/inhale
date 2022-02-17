import React, { useEffect, useState } from "react";
import { carouselData } from "./carouselData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    return null
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    return null
  };

  
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  setTimeout(function () { nextSlide()}, 5000); 


    console.log(current)

  return (
    <section className="carousel">
      {/* <FaArrowAltCircleLeft className="left-arrow" onClick={() => prevSlide()} />
      <FaArrowAltCircleRight className="right-arrow" onClick={() => nextSlide()} /> */}
      {carouselData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
                <div className="imgContainer">
              <img
                src={slide.img}
                alt="Inhale Image"
                className="carousel-img"
              />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
