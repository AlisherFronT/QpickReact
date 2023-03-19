import React from 'react';
import "./catalog.scss"

import "swiper/css";

import CatalogSwiper from "./CatalogSwiper/CatalogSwiper";
import slides from "../../assets/sliders/sliders.json"

import HeadphonesSwiper from "./HeadphonesSwiper/HeadphonesSwiper";
import MacBooksSwiper from "./MacBooksSwiper/MacBooksSwiper";
import IphoneSwiper from "./IphoneSwiper/IphoneSwiper";


const Catalog = () => {
    return (
        <section className='catalog'>
            <CatalogSwiper slides={slides}/>
            <div className="catalog__container">
                <h2 className="catalog__title">Our Catalog</h2>

                <h2 className="catalog__list-title">Headphones</h2>
                <HeadphonesSwiper/>

                <h2 className="catalog__list-title">MacBooks</h2>
                <MacBooksSwiper/>

                <h2 className="catalog__list-title">Iphones</h2>
                <IphoneSwiper/>

            </div>
        </section>
    );
};

export default Catalog;

