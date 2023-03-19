import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import './catalogswiper.scss'
import "swiper/css/pagination";
import "swiper/css/navigation";


const CatalogSwiper = ({slides}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination, Navigation]}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <div className="swiper__container">
                        <div className="swiper__info">
                            <h2 className='swiper__info-title'>{slide.title}</h2>
                            <p className='swiper__info-desc'>{slide.desc}</p>
                            <button className='swiper__btn'>Discover</button>
                        </div>
                        <div className="swiper__img">
                            <img className='image' src={slide.image} alt={slide.title}/>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CatalogSwiper;