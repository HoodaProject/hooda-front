import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando Font Awesome
import 'tailwindcss/tailwind.css'; // Importando Tailwind CSS


interface CarouselItem {
  src: string;
  alt: string;
}

const items: CarouselItem[] = [
  { src: 'https://blog.esferaenergia.com.br/_next/image?url=http%3A%2F%2Fesferaenergia.com.br%2Fwp-content%2Fuploads%2F2023%2F06%2Fdesenvolvimento-sustentavel.png&w=1920&q=75', alt: 'Item 1' },
  { src: 'https://blog.stoodi.com.br/wp-content/uploads/2019/10/desenvolvimento-sustentavel-1.jpg', alt: 'Item 2' },
  { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhTcLHPZ0P3g0cIF18yOVZOzcTMMpJheWX9XFPPwcO5iPH667i9Z0ieOKUgbcZnUhCJAjnLfduEwrgLBB9OU3QsvAoU685mg8pLhUHnGfzfgQtPssdL4ySl1cn7Ln4EdeXSfpNHN4lLyaG/s1600/folhas-em-tons-amarelo-laranja-vermelho-e-verde-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg', alt: 'Item 3' },
  { src: 'https://origoenergia.com.br/blog/wp-content/uploads/2020/09/O-que-e-desenvolvimento-sustentavel-Origo-Energia-scaled-1.webp', alt: 'Item 4' }
]; 

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeItem = (step: number) => {
    const newIndex = (currentIndex + step + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-[60vh]">
      <div className="carousel mx-auto mt-5 grid grid-cols-3 relative px-8 md:w-[85%] h-[80%]">
        <div className="carousel-left scale-y-[0.7] h-full">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`carousel-item h-full ${index === (currentIndex - 1 + items.length) % items.length ? '' : 'hidden'}`}
            />
          ))}
        </div>
        <div className="carousel-center scale-y-[0.9] scale-x-[1.7] z-10 translate-y-4 h-full">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`carousel-item h-full ${index === currentIndex ? '' : 'hidden'}`}
            />
          ))}
        </div>
        <div className="carousel-right scale-y-[0.7] h-full">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`carousel-item h-full ${index === (currentIndex + 1) % items.length ? '' : 'hidden'}`}
            />
          ))}
        </div>
        <span className="absolute top-1/2 left-1 cursor-pointer" onClick={() => changeItem(-1)}>
          <i className="fa-solid fa-arrow-left text-3xl text-gray-600"></i>
        </span>
        <span className="absolute top-1/2 right-1 cursor-pointer" onClick={() => changeItem(1)}>
          <i className="fa-solid fa-arrow-right text-3xl text-gray-600"></i>
        </span>
      </div>
      <div id="indicators" className="absolute flex gap-4 bottom-10 left-1/2 -translate-x-1/2">
        {items.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-md border-2 border-gray-600 ${index === currentIndex ? 'bg-gray-600' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
