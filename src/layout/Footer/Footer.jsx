import React from 'react';
import {Link} from 'react-router-dom'
import "./footer.scss"

import Qpick from "../../assets/img/QPICK.png"
import {SlSocialVkontakte} from "react-icons/sl"
import {FiInstagram} from "react-icons/fi"
import {FaTelegramPlane} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__col-one">
                    <h2 className='footer__title'>QPICK</h2>
                </div>
                <div className="footer__col-sec">
                    <Link to={'/favorites'} className='footer__link'>Favorites</Link>
                    <Link to={'/basket'} className='footer__link'>Basket</Link>
                    <Link to={'/contacts'} className='footer__link'>Contacts</Link>
                </div>
                <div className="footer__col-third">
                    <Link to={'/delivery'} className='footer__link'>Delivery Terms</Link>
                    <Link to={'/catalog'} className='footer__link'>Catalog</Link>
                </div>
                <div className="footer__col-fourth">
                    <SlSocialVkontakte/>
                    <FiInstagram/>
                    <FaTelegramPlane/>
                    <ImWhatsapp/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;