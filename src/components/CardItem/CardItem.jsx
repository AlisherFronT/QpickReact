import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./carditem.scss"

import {AiOutlineHeart} from "react-icons/ai";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'
import {SlBasket} from "react-icons/sl"


const CardItem = ({item}) => {

    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/products').then(({data}) => setCardInfo(data.info))
    }, []);



    return (
        <Card className='card'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={item.image}
                alt={item.image}
                className='card__img'
            />

            <Stack>
                <CardBody>
                    <Heading className='card__title'>{item.title}</Heading>

                    <ul py='2' className='card__info'>
                        <li>{item.info.chip}</li>
                        <li> {item.info.memory}</li>
                        <li>{item.info.ssd}</li>
                        <li> {item.info.display}</li>
                        <li>{item.info.usb}</li>
                        <li>{item.info.adapter}</li>
                        <li>{item.info.keyboard}</li>
                    </ul>
                </CardBody>

                <CardFooter className='card__bottom'>
                    <Button className='card__btn' colorScheme='messenger'><SlBasket/> Add to cart</Button>

                    <Text py='2' className='card__price'>
                        $ {item.price}
                    </Text>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default CardItem;