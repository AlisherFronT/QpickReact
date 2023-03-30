import React from 'react'
import "./arrivals.scss"

const Arrivals = () => {
  return (
    <section className='arrivals'>
        <div className="arrivals__container">
            <div className="arrivals__left"></div>
            <div className="arrivals__right">
                <div className="arrivals__airpods">
                    <h1 className="arrivals__airpods-text">AirPods</h1>
                </div>
                <div className="arrivals__ipad">
                <h1 className="arrivals__ipad-text">Ipad Pro</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Arrivals