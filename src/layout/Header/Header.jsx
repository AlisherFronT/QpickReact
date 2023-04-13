import React from 'react';
import {Link} from "react-router-dom";


import {MdOutlineShoppingCart} from "react-icons/md"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {IoMdSettings} from"react-icons/io"
import {RxExit} from "react-icons/rx"

import './header.scss'
import Qpick from "../../assets/img/QPICK.png"
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux";
import {logOutAccount} from "../../redux/reducers/user";

const Header = () => {

    const {user} = useSelector((store) => store.user)

    const dispatch = useDispatch()

    const productBasketCount = useSelector(store => store.basket.productsInCart)

    const productFavoritesCount = useSelector(store => store.favorites.productsInFavorites)

    return (
        <header className='header'>
            <div className="header__top">
                <Link to={'/'}>
                    <img src={Qpick} alt=""/>
                </Link>
                <div className="header__btns">

                    <div className="header__basket">
                        <Link to={'/basket'} className='header__basket-icon'>
                            {
                                productBasketCount.length > 0 ?  <span className='header__basket-count'>{productBasketCount.length}</span> : null
                            }
                            <MdOutlineShoppingCart/>
                        </Link>
                    </div>

                    <div className="header__favorites">
                        <Link to={'/favorites'} className='header__favorites-icon'>
                            {
                                productFavoritesCount.length > 0 ? <span className="header__favorites-count">{productFavoritesCount.length}</span> : null
                            }
                            <MdOutlineFavoriteBorder/>
                        </Link>
                    </div>



                    {
                        user.email.length ?
                            <div onClick={() =>
                                {dispatch(logOutAccount())
                                localStorage.removeItem('user')
                                }}
                                className='header__auth'>
                                {user.login}
                                    <RxExit/>
                             </div>
                            :
                            <Link to={'/register'}  className='header__auth'>
                                <AiOutlineUser/>
                             </Link>
                    }


                </div>
            </div>
        </header>
    );
};

export default Header;