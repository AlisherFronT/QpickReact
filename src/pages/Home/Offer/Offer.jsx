import React from 'react'
import "./offer.scss"

import delivery from "../../../assets/img/delivery.png"
import support from "../../../assets/img/support.png"
import safety from "../../../assets/img/safety.png"


const Offer = () => {
  return (
    <section className='offer'>
        <div className="offer__row">
            <div className="row__item">
                <img src={delivery} alt="" className="row__img" />
                <h3 className="row__title">Fast Delivery</h3>
                <p className="row__text">Get your order as fast as you can</p>
            </div>
            <div className="row__item">
                <img src={support} alt="" className="row__img" />
                <h3 className="row__title">24/7 Customer Service</h3>
                <p className="row__text">Friendly customer support</p>
            </div>
            <div className="row__item">
                <img src={safety} alt="" className="row__img" />
                <h3 className="row__title">Safety</h3>
                <p className="row__text">All transactions are clear</p>
            </div>
        </div>
    </section>
  )
}

export default Offer