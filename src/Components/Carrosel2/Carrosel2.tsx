import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carrosel2() {
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

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://img.freepik.com/fotos-premium/reciclagem-conceito-de-produtos-algodao-organico-reciclagem-pano-zero-residuos-materiais-cuidados-com-o-meio-ambiente-reutilizacao-renovavel-para-um-estilo-de-vida-sustentavel-reciclagem-icone-no-cabide_34048-2181.jpg?w=740" alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://blog.esferaenergia.com.br/_next/image?url=http%3A%2F%2Fesferaenergia.com.br%2Fwp-content%2Fuploads%2F2023%2F06%2Fdesenvolvimento-sustentavel.png&w=1920&q=75'/> </SwiperSlide>
        <SwiperSlide><img src='https://blog.stoodi.com.br/wp-content/uploads/2019/10/desenvolvimento-sustentavel-1.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='https://media.istockphoto.com/id/1403408732/pt/foto/cardboard-recycling-box-with-clothes.jpg?s=612x612&w=0&k=20&c=uFPFAcvOpuaARGAY99dpTF03lZZbQwodIvc8KteBlvg='/> </SwiperSlide>
        <SwiperSlide><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhTcLHPZ0P3g0cIF18yOVZOzcTMMpJheWX9XFPPwcO5iPH667i9Z0ieOKUgbcZnUhCJAjnLfduEwrgLBB9OU3QsvAoU685mg8pLhUHnGfzfgQtPssdL4ySl1cn7Ln4EdeXSfpNHN4lLyaG/s1600/folhas-em-tons-amarelo-laranja-vermelho-e-verde-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='https://origoenergia.com.br/blog/wp-content/uploads/2020/09/O-que-e-desenvolvimento-sustentavel-Origo-Energia-scaled-1.webp'/></SwiperSlide>
        <SwiperSlide> <img src="https://www.istockphoto.com/br/foto/o-conceito-de-desperd%C3%ADcio-zero-e-reciclagem-vista-superior-de-itens-ecol%C3%B3gicos-e-gm1426974319-471061483?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fpt%2Fphotos%2Fsearch%2Fprodutos%2520ecologicos%2F&utm_term=produtos+ecologicos" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://www.istockphoto.com/br/foto/sacos-e-artigos-de-vidro-do-algod%C3%A3o-para-a-compra-pl%C3%A1stica-livre-gm1164717545-320228939?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fpt%2Fphotos%2Fsearch%2Fprodutos%2520reciclav%25C3%25A9is%2F&utm_term=produtos+reciclav%C3%A9is" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://www.istockphoto.com/pt/foto/girl-folds-old-clothes-for-recycling-gm1365982693-436660598" alt="" /></SwiperSlide>
                
      </Swiper>
    </>
  );
}