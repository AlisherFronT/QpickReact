import React from 'react';
import './appleblock.scss'

import photo from "../../../assets/img/main.png"

const AppleBlock = () => {
    return (
        <section className='phone__block'>
            <div className="phone__block-wrapper">
                <div className="phone__block-info">
                    <h2 className="phone__block-title">New arrival</h2>
                    <p className="phone__block-desc">Our store to this day is a large and reliable supplier of Apple products today. In our assortment you will find a large collection of products that interest you. We can help you select the right equipment for your needs. We will also consider individual cases for each customer.</p>
                </div>

                <div className="phone__block-image">
                    <img className='phone__block-cover' src={photo} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default AppleBlock;