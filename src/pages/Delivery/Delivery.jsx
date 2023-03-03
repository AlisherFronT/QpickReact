import React from 'react';
import "./delivery.scss"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

const Delivery = () => {
    return (
        <section className='delivery'>
            <div className="delivery__container">

                <div className="service">
                    <h2 className="service__title">Terms of Service </h2>
                    <p className="service__desc">The task of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively balanced innovations?</p>
                </div>

                <div className="dostavka">
                    <h2 className="dostavka__title">Delivery terms</h2>
                    <p className="dostavka__desc">The task of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively balanced innovations?</p>
                </div>

                <div className="return">
                    <h2 className="return__title">
                        Return conditions</h2>
                    <p className="return__desc">The task of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively balanced innovations?</p>
                </div>

            </div>

            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default Delivery;