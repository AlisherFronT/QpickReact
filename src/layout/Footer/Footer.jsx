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
                    <img src={Qpick} alt=""/>
                </div>
                <div className="footer__col-sec">
                    <Link to={'/favorites'} className='footer__link'>Избранное</Link>
                    <Link to={'/basket'} className='footer__link'>Корзина</Link>
                    <Link to={'/contacts'} className='footer__link'>Контакты</Link>
                </div>
                <div className="footer__col-third">
                    <Link className='footer__link'>Условия доставки</Link>
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