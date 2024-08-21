import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Importe Link se estiver usando React Router

export default function Carrosel2() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className="slide">
                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhTcLHPZ0P3g0cIF18yOVZOzcTMMpJheWX9XFPPwcO5iPH667i9Z0ieOKUgbcZnUhCJAjnLfduEwrgLBB9OU3QsvAoU685mg8pLhUHnGfzfgQtPssdL4ySl1cn7Ln4EdeXSfpNHN4lLyaG/s1600/folhas-em-tons-amarelo-laranja-vermelho-e-verde-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg' alt="" />
                <div className="text-overlay">
                    <h1 className="overlay-text font-Montserrat">O planeta agradece seu esforço.</h1>
                    <Link to={'https://github.com/rosdrigo'} className="slide-button">SAIBA+</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <img src='https://i.imgur.com/IaXaXVK.png' alt="" />
                <div className="text-overlay">
                    <h1 className="overlay-text font-Montserrat">Cada gesto conta na preservação.</h1>
                    <Link to={'https://github.com/rosdrigo'} className="slide-button">SAIBA+</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <img src='https://i.imgur.com/jYNhgmE.png' alt="" />
                <div className="text-overlay">
                    <h1 className="overlay-text font-Montserrat">A natureza não pode esperar.</h1>
                    <Link to={'https://github.com/rosdrigo'} className="slide-button">SAIBA+</Link>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
