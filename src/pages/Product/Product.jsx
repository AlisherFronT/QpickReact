import React, {useEffect, useState} from 'react';
import "./product.scss"

import {useParams} from "react-router-dom";
import axios from "axios"

import Button from '@mui/material/Button';
import {SlBasket} from "react-icons/sl";

import {memory} from "../../assets/icons/macbook/macbook"
import {ssd} from "../../assets/icons/macbook/macbook";
import {camera} from "../../assets/icons/macbook/macbook"
import {usb} from "../../assets/icons/macbook/macbook"
import {adapter} from "../../assets/icons/macbook/macbook"
import {keyboard} from "../../assets/icons/macbook/macbook"
import {display} from "../../assets/icons/macbook/macbook"

import {waterproof} from "../../assets/icons/headphones/headphones"
import {caseb} from "../../assets/icons/headphones/headphones"
import {battery} from "../../assets/icons/headphones/headphones"
import {sound} from "../../assets/icons/headphones/headphones"

import {batteryB} from "../../assets/icons/phone/phone"
import {face} from "../../assets/icons/phone/phone"
import {connect} from "../../assets/icons/phone/phone"
import {displayB} from "../../assets/icons/phone/phone"
import {chip} from "../../assets/icons/phone/phone"


const Product = () => {
    const [productInfo, setProduct] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:8080/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => console.log('Error!'))
    }, [])


    if (JSON.stringify(productInfo ) === '{}') {
        return (
            /* Надо доавить компоненту Not Found */
            <h2>Ошибка!</h2>
        )
    } else if (productInfo.type === 'macbook') {
        return (
            <section className='product'>
                <div className="product__container">
                    <div className="product__container-left">
                        <img src={productInfo.image} alt={productInfo.title} className="product__img"/>
                        <div className="product__btns">
                            <Button variant="outlined" startIcon={<SlBasket />} className='product__btn-basket'>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" startIcon={<SlBasket />} className='product__btn-favorites'>
                                Add to Favorites
                            </Button>
                        </div>
                    </div>
                    <div className="product__container-right">
                        <h2 className="product__title">{productInfo.title}</h2>
                        <ul className="product__list">
                            <div className="product__item">
                                <img className='product__icon' src={memory} alt=""/>
                                <li className='product__text'>{productInfo.info.memory}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={ssd} alt=""/>
                                <li className='product__text'>{productInfo.info.ssd}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={display} alt=""/>
                                <li className='product__text'>{productInfo.info.display}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={camera} alt=""/>
                                <li className='product__text'>{productInfo.info.camera}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={usb} alt=""/>
                                <li className='product__text'>{productInfo.info.usb}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={adapter} alt=""/>
                                <li className='product__text'>{productInfo.info.adapter}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={keyboard} alt=""/>
                                <li className='product__text'>{productInfo.info.keyboard}</li>
                            </div>
                        </ul>
                        <p className="product__price">{productInfo.price} $ </p>
                    </div>
                </div>
            </section>
        );
    } else if (productInfo.type === 'headphones') {
        return (
            <section className='product'>
                <div className="product__container">
                    <div className="product__container-left">
                        <img src={productInfo.image} alt={productInfo.title} className="product__img"/>
                        <div className="product__btns">
                            <Button variant="outlined" startIcon={<SlBasket />} className='product__btn-basket'>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" startIcon={<SlBasket />} className='product__btn-favorites'>
                                Add to Favorites
                            </Button>
                        </div>
                    </div>
                    <div className="product__container-right">
                        <h2 className="product__title">{productInfo.title}</h2>
                        <ul className="product__list">
                            <div className="product__item">
                                <img className='product__icon' src={sound} alt=""/>
                                <li className='product__text'>{productInfo.info.sound}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={waterproof} alt=""/>
                                <li className='product__text'>{productInfo.info.waterproof}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={battery} alt=""/>
                                <li className='product__text'>{productInfo.info.battery}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={caseb} alt=""/>
                                <li className='product__text'>{productInfo.info.case}</li>
                            </div>
                        </ul>
                        <p className="product__price">{productInfo.price} $ </p>
                    </div>
                </div>
            </section>
        )
    } else if (productInfo.type === 'phone') {
        return (
            <section className='product'>
                <div className="product__container">
                    <div className="product__container-left">
                        <img src={productInfo.image} alt={productInfo.title} className="product__img"/>
                        <div className="product__btns">
                            <Button variant="outlined" startIcon={<SlBasket />} className='product__btn-basket'>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" startIcon={<SlBasket />} className='product__btn-favorites'>
                                Add to Favorites
                            </Button>
                        </div>
                    </div>
                    <div className="product__container-right">
                        <h2 className="product__title">{productInfo.title}</h2>
                        <ul className="product__list">
                            <div className="product__item">
                                <img className='product__icon' src={batteryB} alt=""/>
                                <li className='product__text'>{productInfo.info.battery}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={face} alt=""/>
                                <li className='product__text'>{productInfo.info.face}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={displayB} alt=""/>
                                <li className='product__text'>{productInfo.info.display}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={connect} alt=""/>
                                <li className='product__text'>{productInfo.info.connect}</li>
                            </div>
                            <div className="product__item">
                                <img className='product__icon' src={chip} alt=""/>
                                <li className='product__text'>{productInfo.info.chip}</li>
                            </div>
                        </ul>
                        <p className="product__price">{productInfo.price} $ </p>
                    </div>
                </div>
            </section>
        )
    }
};

export default Product;

// <li className="product__item">{productInfo.info.battery}</li>
// <li className="product__item"> {productInfo.info.face}</li>
// <li className="product__item">{productInfo.info.display}</li>
// <li className="product__item">{productInfo.info.connect}</li>
// <li className="product__item">{productInfo.info.chip}</li>