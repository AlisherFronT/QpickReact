import React from 'react';
import Button from "@mui/material/Button";

import {MdOutlineFavoriteBorder, MdOutlineRemoveShoppingCart, MdOutlineShoppingCart} from "react-icons/md"

import {adapter, camera, display, keyboard, memory, ssd, usb} from "../../../assets/icons/macbook/macbook";
import {useDispatch, useSelector} from "react-redux";
import {addProductInCart, deleteProductInCart} from "../../../redux/reducers/basket";
import {addProductInFavorites, removeProductInFavorites} from "../../../redux/reducers/favorites";

const MacBookProduct = ({macbook}) => {

    const dispatch = useDispatch()

    const productsCart = useSelector(store => store.basket.productsInCart)
    const productInCart = productsCart.some(product => product.id === macbook.id)
    const productsFavorites = useSelector(store => store.favorites.productsInFavorites)
    const productInFavorites = productsFavorites.some(product => product.id === macbook.id)

    const addCart = () => {
        if (productInCart) {
            dispatch(deleteProductInCart(macbook.id))
        } else {
            dispatch( addProductInCart(macbook));
        }
    }

    const addFavorites = () => {
        if (productInFavorites) {
            dispatch(removeProductInFavorites(macbook.id))
        } else {
            dispatch(addProductInFavorites(macbook))
        }
    }
    return (
        <section className='product'>
            <div className="product__container">
                <div className="product__container-left">
                    <img src={macbook.image} alt={macbook.title} className="product__img"/>
                    <div className="product__btns">
                        {
                            productInCart ?
                                <Button  className='card__btn-remove' variant="outlined" startIcon={<MdOutlineRemoveShoppingCart />} onClick={() => addCart()}>
                                    Remove
                                </Button>
                                :
                                <Button className='card__btn-add' variant="outlined" startIcon={<MdOutlineShoppingCart />} onClick={() => addCart()}>
                                    Add to Cart
                                </Button>
                        }

                        {
                            productInFavorites ?
                                <Button onClick={() => addFavorites()}  variant="outlined" startIcon={<MdOutlineFavoriteBorder />} className='product__btn-favorites'>
                                    Remove
                                </Button>
                                :
                                <Button onClick={() => addFavorites()} variant="outlined" startIcon={<MdOutlineFavoriteBorder />} className='product__btn-favorites'>
                                    Add to Favorites
                                </Button>
                        }

                    </div>
                </div>
                <div className="product__container-right">
                    <h2 className="product__title">{macbook.title}</h2>
                    <ul className="product__list">
                        <div className="product__item">
                            <img className='product__icon' src={memory} alt=""/>
                            <li className='product__text'>{macbook.info.memory}</li>
                        </div>
                        <div className="product__item">
                            <img className='product__icon' src={ssd} alt=""/>
                            <li className='product__text'>{macbook.info.ssd}</li>
                        </div>
                        <div className="product__item">
                            <img className='product__icon' src={display} alt=""/>
                            <li className='product__text'>{macbook.info.display}</li>
                        </div>
                        <div className="product__item">
                            <img className='product__icon' src={camera} alt=""/>
                            <li className='product__text'>{macbook.info.camera}</li>
                        </div>
                        <div className="product__item">
                            <img className='product__icon' src={usb} alt=""/>
                            <li className='product__text'>{macbook.info.usb}</li>
                        </div>
                        <div className="product__item">
                            <img className='product__icon' src={adapter} alt=""/>
                            <li className='product__text'>{macbook.info.adapter}</li>
                        </div>
                        <div className="product__item">
                            <img className='product__icon' src={keyboard} alt=""/>
                            <li className='product__text'>{macbook.info.keyboard}</li>
                        </div>
                    </ul>
                    <p className="product__price"> Price: {macbook.price} $ </p>
                </div>
            </div>
        </section>
    );
};

export default MacBookProduct;