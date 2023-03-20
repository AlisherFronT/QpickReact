import React, {useEffect, useState} from 'react';
import "./product.scss"

import {useParams} from "react-router-dom";
import axios from "axios"

import Button from '@mui/material/Button';
import {SlBasket} from "react-icons/sl";

const Product = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:8080/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => console.log('Error!'))
    }, [])


    if (JSON.stringify(product) === '{}') {
        return (
            /* Надо доавить компоненту Not Found */
            <h2>Ошибка!</h2>
        )
    } else {
        return (
            <section className='product'>
                <div className="product__container">
                    <div className="product__container-left">
                        <img src={product.image} alt={product.title} className="product__img"/>
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
                        <h2 className="product__title">{product.title}</h2>
                        <ul className="product__list">
                            <li className="product__item">Item 1</li>
                        </ul>
                        <p className="product__price">{product.price}</p>
                    </div>
                </div>
            </section>
        );
    }


};

export default Product;