import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./carditem.scss"

import Button from '@mui/material/Button';
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
                src={item.image}
                alt={item.image}
                className='card__img'
            />

            <Stack>
                <CardBody>
                    <Heading className='card__title'>{item.title}</Heading>
                </CardBody>

                <CardFooter className='card__bottom'>
                    <Button variant="outlined" startIcon={<SlBasket />}>
                        Add to Cart
                    </Button>

                    <Text py='2' className='card__price'>
                        $ {item.price}
                    </Text>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default CardItem;