import React, {useEffect, useState} from 'react';
import "./headphonesswiper.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import CardItem from "../../../components/CardItem/CardItem";
import axios from "axios";

const HeadphonesSwiper = ({item}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/products')
            .then(({data}) => {
                const headphoneList = data.filter(product => product.type === 'headphones')
                setProducts(headphoneList)
            })
    }, []);

    return (
        <div className="headphone__row">
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                className="mySwiper"
            >
                {
                    products.map((item) => (
                        <SwiperSlide>
                            <CardItem item={item} key={item.id}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeadphonesSwiper;