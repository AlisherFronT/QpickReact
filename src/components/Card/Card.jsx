import React from 'react';
import "./card.scss"

import {AiOutlineHeart} from "react-icons/ai";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {SlBasket} from "react-icons/sl"

const Card = ({item}) => {
    return (
        <div className="card">
            <button className='favorite__icon'>
                <AiOutlineHeart/>
            </button>
            <img className='card__img' src={item.image} alt=""/>
            <div className="card__info">
                <h3 className="card__name">{item.title}</h3>
                <p className="card__price">{item.price} $</p>
            </div>
            <Button rightIcon={<SlBasket />} colorScheme='blue' variant='outline' className='basket__icon'>
                Add to Cart
            </Button>
        </div>
    );
};

export default Card;