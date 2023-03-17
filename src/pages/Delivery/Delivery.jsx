import React from 'react';
import "./delivery.scss"

import { Accordion} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

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

                <div className="acc__container">
                    <Accordion className='accordion'>
                        <AccordionItem eventKey={"1"} className='item'>
                            <AccordionHeader className='header'> Header 1</AccordionHeader>
                            <AccordionBody>sk of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively ba</AccordionBody>
                        </AccordionItem>

                        <AccordionItem eventKey={"2"} className='item'>
                            <AccordionHeader> Header 2</AccordionHeader>
                            <AccordionBody>sk of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively ba</AccordionBody>
                        </AccordionItem>

                        <AccordionItem eventKey={"3"} className='item'>
                            <AccordionHeader> Header 3</AccordionHeader>
                            <AccordionBody>sk of the organization, in particular the course towards a socially oriented national project, requires us to systematically analyze the development model! Thus, the constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively ba</AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>


        </section>
    );
};

export default Delivery;