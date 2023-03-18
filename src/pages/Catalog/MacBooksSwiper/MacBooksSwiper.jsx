import React, {useEffect, useState} from 'react';
import "./macbookswiper.scss"

import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "../../../components/Card/Card";

const MacBooksSwiper = ({item}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/products')
            .then(({data}) => {
                const macbookList = data.filter(product => product.type === 'macbook');
                setProducts(macbookList)
            })
    }, []);

    return (
        <div className="macbook__row">
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                className="mySwiper"
            >
                {
                    products.map((item) => (
                        <SwiperSlide>
                            <Card item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default MacBooksSwiper;