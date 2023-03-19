import React, {useEffect, useState} from 'react';
import "./iphoneswiper.scss"

import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import CardItem from "../../../components/CardItem/CardItem";

const IphoneSwiper = ({item}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/products')
            .then(({data}) => {
                const iphoneList = data.filter(product => product.type === 'phone');
                setProducts(iphoneList)
            })
    }, []);

    return (
        <div className="iphone__row">
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                className="mySwiper"
            >
                {
                    products.map((item) => (
                        <SwiperSlide>
                            <CardItem item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default IphoneSwiper;