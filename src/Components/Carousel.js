import React, { useState, useEffect } from "react";
import { carouselData } from "./carouselData";


const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    return null
  };

  
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }
  
    const continuousRotate = setTimeout(function () { nextSlide()}, 5000);

    useEffect(() => { 
      return function cleanup(){
        clearTimeout(continuousRotate)
      }
    })

  return (
    <section className="carousel">
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
