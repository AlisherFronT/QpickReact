
import React from 'react';

import "./register.scss";

const Register = () => {
    return (
        <div className='register'>
            <div className='register_wrapper'>
                <div className='register_wrapper_card'>
                    <h2>Регистрация</h2>
                    <form>
                        <div>
                            <input
                                type="text"
                                placeholder='Имя'
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Фамилия'
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Логин'
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder='Пароль'
                            />
                        </div>
                        <div>
                            <button type='submit'>
                                Вход
                            </button>
                        </div>
                        <a>У вас есть аккаунта?</a>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Register;
