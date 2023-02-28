
import React from 'react';

import "./login.scss";

const Login = () => {
    return (
        <div className='login'>
            <div className='login_wrapper'>
                <div className='login_wrapper_card'>
                    <h2>Авторизация</h2>
                    <form>
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
                        <a>У вас нет аккаунта? Создайте аккаунт</a>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
