"use client";

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.JPG",
  "/images/carousel-3.JPG",
  "/images/carousel-4.JPG",
  "/images/carousel-5.JPG",
  "/images/carousel-6.JPG",
  "/images/carousel-7.jpg",
  "/images/carousel-8.jpg",
  "/images/carousel-9.JPG",
  "/images/carousel-10.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-auto">
      <div className="h-auto w-screen m-auto relative group">
        <div
          style={{ backgroundImage: `url(${images[currentIndex]})`, height: '50vw' }}
          className="w-full rounded bg-cover bg-center shadow-lg"
        >
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-8 translate-y-[-50%] text-2xl p-1 bg-black/50 text-white hover:scale-110 ease-in duration-300 cursor-pointer">
            <BsChevronCompactLeft size={40} onClick={prevSlide} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-[-32px] text-2xl p-1 bg-black/50 text-white hover:scale-110 ease-in duration-300 cursor-pointer">
            <BsChevronCompactRight size={40} onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {images.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-xs md:text-xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
