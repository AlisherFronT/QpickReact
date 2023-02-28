import React from 'react';
import "./advanteges.scss"

import Imac from "../../../assets/img/imac.jpg"

const Advanteges = () => {
    return (
        <section className='advantages__block'>
            <h2 className="advantages__block-title">Our Advantages</h2>
            <div className="advantages__block-desc">

                <div className="advantages__block-info">
                    Our store to this day is a large and reliable supplier of Apple products today. In our assortment you will find a large collection of products that interest you. We can help you select the right equipment for your needs. We will also consider individual cases for each customer.


                </div>
                <img className='advantages__block-image' src={Imac} alt=""/>
            </div>


        </section>
    );
};

export default Advanteges;