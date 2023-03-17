import React from 'react';
import "./contacts.scss"


import map from "../../assets/img/map.png";
import {BsFillGeoAltFill} from "react-icons/bs"
import {FaPhoneAlt} from "react-icons/fa"

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="contacts__container">
                <div className="contacts__columns">
                    <div className="contacts__first-block">
                        <h2 className="contacts__title">Our office</h2>
                        <img src={map} alt="" className="contacts__map"/>
                        <div className="contacts__address">
                            <BsFillGeoAltFill/>
                            <p>Аксай-3а, 62ф, Алматы, Казахстан
                                3 этаж 35 кабинет</p>
                        </div>
                    </div>


                    <div className="contacts__num">
                        <FaPhoneAlt/>
                        <p>+996 777 777 777</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;