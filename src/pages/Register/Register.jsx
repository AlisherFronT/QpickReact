import React from 'react';
import "./register.scss";
import { useForm } from "react-hook-form";

import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

const Register = () => {

    const {
        register,
        reset,
        handleSubmit,
        getValues,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})


    return (
        <div className='register'>
            <div className="register__card">
                <h2 className='register__title'>Create your Qpick ID</h2>
                <Link className='register__link' to={'/login'}>Already have Qpick ID?</Link>

                <form action="" className="register__form" noValidate>
                    <div className="register__form-info">
                        <label htmlFor="" className="register__label">
                            <TextField
                                {...register('name', {
                                    required: {
                                        message: 'Enter your name',
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Maximum length 20 characters',
                                        value: 20,
                                    },
                                    minLength: {
                                        message: 'Minimum length 3 characters',
                                        value: 3,
                                    },
                                })}
                                placeholder='Enter your Name'
                                className='name'
                                id="standard-basic"
                                label="Name"
                                variant="outlined"
                            />

                            <p className='register__error'>
                                {errors.name && errors.name.message}
                            </p>
                        </label>

                        <label htmlFor="" className="register__label">
                            <TextField
                                {...register('surname', {
                                    required: {
                                        message: 'Enter a last name',
                                        value: true,
                                    },
                                    maxLength: {
                                        message: 'Maximum length 20 characters',
                                        value: 20,
                                    },
                                    minLength: {
                                        message: 'Minimum length 3 characters',
                                        value: 3,
                                    },
                                })}
                                placeholder='Enter your Surname'
                                className='surname'
                                id="standard-basic"
                                label="Surname"
                                variant="outlined"
                            />
                            <p className='register__error'>
                                {errors.surname && errors.surname.message}
                            </p>
                        </label>

                    </div>

                    <label htmlFor="" className="register__label">
                        <TextField
                            {...register('email',{
                                required: {
                                    message: 'Имя обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    message: 'Минимум 10 символа',
                                    value: 10
                                },
                                pattern: {
                                    message: 'Напишите правильно свой email',
                                    value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                }

                            })}
                            placeholder='Enter your Email'
                            className='email'
                            id="standard-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <p className='register__error'>
                            {errors.email && errors.email.message}
                        </p>
                    </label>

                    <label htmlFor="" className="register__label">
                        <TextField
                            {...register('login', {
                                required: {
                                    message: 'Enter a login',
                                    value: true,
                                },
                                minLength: {
                                    message: 'Minimum length 3 characters',
                                    value: 3,
                                },
                            })}
                            placeholder='Enter your Login'
                            className='login'
                            id="standard-basic"
                            label="Login"
                            variant="outlined"
                        />
                        <p className='register__error'>
                            {errors.login && errors.login.message}
                        </p>
                    </label>

                    <label htmlFor="" className="register__label">
                        <TextField
                            {...register('password', {
                                required: {
                                    message: 'Enter a password',
                                    value: true,
                                },
                                maxLength: {
                                    message: 'Maximum length 20 characters',
                                    value: 20,
                                },
                                minLength: {
                                    message: 'Minimum length 8 characters',
                                    value: 8,
                                },
                                pattern: {
                                    message: 'Enter your password correctly',
                                    value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                                },
                            })}
                            placeholder='Enter your password'
                            className='password'
                            id="standard-basic"
                            label="Password"
                            variant="outlined"
                            type='password'
                        />
                        <p className='register__error'>
                            {errors.password && errors.password.message}
                        </p>
                    </label>

                    <label htmlFor="" className="register__label">
                        <TextField
                            {...register('passwordAgain', {
                                required: {
                                    message: 'Repeat password',
                                    value: true,
                                },
                                validate: v => {
                                    if (getValues('password') !== v) {
                                        return 'Your passwords do no match'
                                    }
                                },
                            })}
                            placeholder='Correct your password'
                            className='password'
                            id="standard-basic"
                            label="Correct password"
                            variant="outlined"
                            type='password'
                        />
                        <p className='register__error'>
                            {errors.passwordAgain && errors.passwordAgain.message}
                        </p>
                    </label>


                    <Button className='button' variant="contained">Continue</Button>

                </form>
            </div>
        </div>
    )
};

export default Register;
