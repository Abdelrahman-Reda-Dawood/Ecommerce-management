import React, { useState } from 'react';

import img1 from '../../../assets/register1.png';
import img2 from '../../../assets/register2.png';
import img3 from '../../../assets/register3.png';

const slides = [img1, img2, img3];

function RegisterIndex() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <img
        src={slides[currentIndex]}
        alt=""
        className="w-screen"
      />
      <div className="flex flex-col absolute bottom-9 self-center">
        <div className="flex flex-col justify-center  items-center  text-white ">
          <h1 className="font-bold text-3xl">Easy payment process</h1>
          <h3 className="text-neutral-400 w-72 text-center leading-5 break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officiis similique fuga? Lorem ipsum dolor sit
          </h3>
          <div className="flex flex-row mt-4 ">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <div
                  className={`mx-3 rounded-full h-2 w-2 ${
                    slideIndex === currentIndex
                      ? 'bg-green-400'
                      : 'bg-gray-500'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterIndex;
