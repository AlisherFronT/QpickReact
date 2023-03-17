import React, {useEffect, useState} from 'react';
import "./catalog.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CatalogSwiper from "./CatalogSwiper/CatalogSwiper";
import slides from "../../assets/sliders/sliders.json"
import Card from "../../components/Card/Card";
import axios from "axios";
import {AiOutlineHeart} from "react-icons/ai";
import {Button} from "@chakra-ui/react";
import {SlBasket} from "react-icons/sl";


const Catalog = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/products')
            .then(({data}) => {
                const headphoneList = data.filter(product => product.type === 'headphones')
                setProducts(headphoneList)
            })
    }, []);


    return (
        <section className='catalog'>
            <CatalogSwiper slides={slides}/>
            <div className="catalog__container">
                <h2 className="catalog__title">Our Catalog</h2>
                <h2 className="catalog__list-title">Headphones</h2>

                <div className="headphone__row">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
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
            </div>
        </section>
    );
};

export default Catalog;

