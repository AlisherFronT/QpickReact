import React from 'react';
import './appleblock.scss'

import Iphone from "../../../assets/img/iphone.jpg"

const AppleBlock = () => {
    return (
        <section className='phone__block'>
            <h2 className="phone__block-title">Our Store</h2>
            <div className="phone__block-desc">
                <img className='phone__block-image' src={Iphone} alt=""/>

                <div className="phone__block-info">
                    Our store to this day is a large and reliable supplier of Apple products today. In our assortment you will find a large collection of products that interest you. We can help you select the right equipment for your needs. We will also consider individual cases for each customer.</div>
                </div>
        </section>
    );
};

export default AppleBlock;