import React from 'react';
import "./basket.scss"

import {RiDeleteBin6Line} from "react-icons/ri"
import map from "../../assets/img/map.png"
import {BsFillPlusCircleFill} from "react-icons/bs"
import {AiFillMinusCircle} from 'react-icons/ai'
import {useSelector} from "react-redux";
import EmptyBasket from "./EmptyBasket/EmptyBasket";

const Basket = ({item}) => {

    const productCart = useSelector(store => store.basket.productsInCart)

    return productCart.length ?  (
        <div className='basket'>
            <div className="basket__container">
                <h2 className="basket__title">Basket</h2>
                <div className="basket__columns">
                    <div className="basket__first-column">

                        {
                            productCart.map((item) => (
                                <div className="basket__product">
                                    <div className="basket__product-top">
                                        <img src={item.image} className="basket__product-img"/>
                                        <div className="basket__product-info">
                                            <h2 className="basket__product-name">{item.title}</h2>
                                            <p className="basket__product-price">{item.price}$</p>
                                        </div>
                                        <button className='basket__product-delete'>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>

                                    <div className="basket__product-bottom">
                                        <div className="basket__product-quantity">
                                            <button className="basket__product-minus">
                                                <AiFillMinusCircle/>
                                            </button>
                                            <div className="basket__product-quant">1</div>
                                            <button className="basket__product-plus">
                                                <BsFillPlusCircleFill/>
                                            </button>
                                        </div>
                                        <div className="basket__product-total">{item.price}$</div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="basket__product-delivery">
                            <h2 className="basket__product-delivery-title">Delivery</h2>
                            <img className="basket__product-delivery-map" src={map} alt=""/>
                            <div className="basket__product-delivery-price">Delivery : 30 $</div>
                        </div>
                    </div>

                    <div className="basket__second-column">
                        <div className="basket__tip">
                            <div className="basket__subtotal">
                                <span>Total:</span>
                                <span className="basket__amount">150 $</span>
                            </div>
                        </div>
                        <button className='basket__btn'>Перейти к оформлению</button>


                    </div>
                </div>

            </div>
        </div>
    ) : (
        <EmptyBasket/>
    );
};

export default Basket;