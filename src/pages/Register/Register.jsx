import React from 'react';
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form";

import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

import "./register.scss"

const Register = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit=(data) => console.log(data)

    return (
        <div className='register'>
                <h2 className='register__title'>Create your own QPICK account</h2>
                <Link to={'/'} className='register__link'>Already have an account?</Link>

            <form action="" className='register__form'>
                <TextField
                    className='register__filed'
                    id="filled-basic"
                    label="Login"
                    variant="filled"
                    autoComplete='Login'
                />

                <TextField
                    className='register__filed'
                    id="filled-basic"
                    label="Login"
                    variant="filled"
                    autoComplete='Login'
                />

                <TextField
                    className='register__filed'
                    id="filled-basic"
                    label="Login"
                    variant="filled"
                    autoComplete='Login'
                />

            </form>

            <Button type='submit' className='register__btn' variant='contained'>Log In</Button>

        </div>
    );
};

export default Register;