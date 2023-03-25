import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./carditem.scss"

import Button from '@mui/material/Button';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'
import {MdOutlineShoppingCart} from "react-icons/md"
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {useNavigate} from "react-router-dom";
import {addProductInCart, deleteProductInCart} from "../../redux/reducers/basket";
import {addProductInFavorites, removeProductInFavorites} from "../../redux/reducers/favorites";

const CardItem = ({item}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const productsCart = useSelector(store => store.basket.productsInCart)
    const productInCart = productsCart.some(product => product.id === item.id)

    const productsFavorites = useSelector(store => store.favorites.productsInFavorites)
    const productInFavorites = productsFavorites.some(product => product.id === item.id)

    const addCart = () => {
        if (productInCart) {
            dispatch(deleteProductInCart(item.id))
        } else {
            dispatch( addProductInCart(item));
        }
    }

    const addFavorites = () => {
        if (productInFavorites) {
            dispatch(removeProductInFavorites(item.id))
        } else {
            dispatch(addProductInFavorites(item))
        }
    }

    return (
        <Card className='card'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            {
                productInFavorites ?
                    <span
                    style={{color: "#FFA542"}}
                    className="card__favorite"
                    onClick={() => addFavorites()}
                     >
                    <MdOutlineFavoriteBorder/>
                    </span>
                    :
                    <span
                    className="card__favorite"
                    onClick={() => addFavorites()}
                    >
                    <MdOutlineFavoriteBorder/>
                    </span>
            }
            <Image
                src={item.image}
                alt={item.image}
                className='card__img'
                onClick={() => navigate(`/product/${item.id}`)}
            />

            <Stack>
                <CardBody>
                    <Heading className='card__title'>{item.title}</Heading>
                </CardBody>

                <CardFooter className='card__bottom'>

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


                    <Text py='2' className='card__price'>
                            {item.price} $
                    </Text>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default CardItem;