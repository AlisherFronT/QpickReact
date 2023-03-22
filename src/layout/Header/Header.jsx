import React from 'react';
import {Link} from "react-router-dom";

import {SlBasket} from "react-icons/sl"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"

import './header.scss'
import Qpick from "../../assets/img/QPICK.png"
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux";
import {logOutAccount} from "../../redux/reducers/user";

const Header = () => {

    const {user} = useSelector((store) => store.user)

    const dispatch = useDispatch()

    return (
        <header className='header'>
            <div className="header__top">
                <Link to={'/'}>
                    <img src={Qpick} alt=""/>
                </Link>
                <div className="header__btns">
                    <Link to={'/basket'} className='header__basket'>
                        <SlBasket/>
                    </Link>

                    <Link to={'/favorites'} className='header__favs'>
                        <MdOutlineFavoriteBorder/>
                    </Link>

                    {
                        user.email.length ?
                            <p onClick={() =>
                                {dispatch(logOutAccount())
                                localStorage.removeItem('user')
                                }}
                                className='header__auth'>
                                 Exit
                             </p>
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