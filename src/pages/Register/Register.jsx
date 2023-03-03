import React from 'react';
import TextField from '@mui/material/TextField';
import "./register.scss";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

const Register = () => {
    return (
        <div className='register'>
            <div className="register__card">
                <h2 className='register__title'>Create your Qpick ID</h2>
                <Link className='register__link' to={'/login'}>Already have Qpick ID?</Link>
                <form action="" className="register__form">
                    <div className="register__form-info">
                        <TextField
                            placeholder='Enter your Name'
                            className='name'
                            id="standard-basic"
                            label="Name"
                            variant="outlined"
                        />
                        <TextField
                            placeholder='Enter your Surname'
                            className='surname'
                            id="standard-basic"
                            label="Surname"
                            variant="outlined"
                        />
                    </div>

                        <TextField
                            placeholder='Enter your Email'
                            className='email'
                            id="standard-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            placeholder='Enter your Login'
                            className='login'
                            id="standard-basic"
                            label="Login"
                            variant="outlined"
                        />

                    <TextField
                        placeholder='Enter your password'
                        className='password'
                        id="standard-basic"
                        label="Password"
                        variant="outlined"
                    />

                    <TextField
                        placeholder='Correct your password'
                        className='password'
                        id="standard-basic"
                        label="Correct password"
                        variant="outlined"
                    />

                    <Button className='button' variant="contained">Continue</Button>

                </form>
            </div>
        </div>
    )
};

export default Register;
