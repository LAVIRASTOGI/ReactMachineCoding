import React, { useState } from "react";
import image1 from "./images/image1.avif";
import image2 from "./images/image2.avif";
import image3 from "./images/image3.avif";
import image4 from "./images/image4.avif";
const images = [image1, image2, image3, image4];
function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="flex gap-4 justify-center pt-8 pb-8 ">
      <button className="" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.354 3.646a.5.5 0 0 1 .707 0l8 8a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.707-.708L15.293 11 8.354 4.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div
        className=" w-screen h-auto md:w-custom-lg md:h-custom-lg shadow-lg shadow-gray-500"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full h-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button className="" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.354 3.646a.5.5 0 0 1 .707 0l8 8a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.707-.708L15.293 11 8.354 4.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ImageSlider;
