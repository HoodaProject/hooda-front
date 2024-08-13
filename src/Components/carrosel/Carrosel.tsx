import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  "https://www.designagogo.co.uk/wp-content/uploads/2022/08/blog-tailwind-1920x1920.jpg",
  "https://absarcs.info/how-to/install-tailwind-css//c1090e2c651cce9c7b348fd3d5155914.png",
  "https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png",
  "https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png"
];

const Carrosel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[400px] mx-auto">
      <div className="relative h-[350px] mx-auto">
        <div className="flex items-center justify-between absolute inset-0 px-14">
          <div className="flex-1 scale-y-70">
            <img className={`w-full h-full object-cover ${currentIndex === 0 ? '' : 'hidden'}`} src={images[0]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 1 ? '' : 'hidden'}`} src={images[1]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 2 ? '' : 'hidden'}`} src={images[2]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 3 ? '' : 'hidden'}`} src={images[3]} alt="" />
          </div>
          <div className="flex-1 scale-y-90 scale-x-170 z-10 translate-y-4">
            <img className={`w-full h-full object-cover ${currentIndex === 0 ? 'hidden' : ''}`} src={images[0]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 1 ? '' : 'hidden'}`} src={images[1]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 2 ? 'hidden' : ''}`} src={images[2]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 3 ? 'hidden' : ''}`} src={images[3]} alt="" />
          </div>
          <div className="flex-1 scale-y-70">
            <img className={`w-full h-full object-cover ${currentIndex === 0 ? 'hidden' : ''}`} src={images[0]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 1 ? 'hidden' : ''}`} src={images[1]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 2 ? '' : 'hidden'}`} src={images[2]} alt="" />
            <img className={`w-full h-full object-cover ${currentIndex === 3 ? 'hidden' : ''}`} src={images[3]} alt="" />
          </div>
        </div>
        <span className="absolute top-1/2 left-1 transform -translate-y-1/2 cursor-pointer" onClick={goToPrev}>
          <FaArrowLeft className="text-3xl text-gray-600" />
        </span>
        <span className="absolute top-1/2 right-1 transform -translate-y-1/2 cursor-pointer" onClick={goToNext}>
          <FaArrowRight className="text-3xl text-gray-600" />
        </span>
        <div id="indicators" className="absolute flex gap-4 bottom-10 left-1/2 transform -translate-x-1/2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-md border-2 border-gray-600 ${currentIndex === index ? 'bg-gray-600' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
