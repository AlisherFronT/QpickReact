import React, {useEffect, useState} from 'react';
import "./product.scss"

import {useParams} from "react-router-dom";
import axios from "axios"

import HeadphonesProduct from "./HeadphonesProduct/HeadphonesProduct";
import IphoneProduct from "./IphoneProduct/IphoneProduct";
import MacBookProduct from "./MacBookProduct/MacBookProduct";

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
            <MacBookProduct macbook={productInfo}/>
        );
    } else if (productInfo.type === 'headphones') {
        return (
            <HeadphonesProduct headphones={productInfo}/>
        )
    } else if (productInfo.type === 'phone') {
        return (
           <IphoneProduct phone={productInfo}/>
        )
    }
};
export default Product;

