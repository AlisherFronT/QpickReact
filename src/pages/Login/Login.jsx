import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./login.scss";

const Login = () => {
    return (
        <div className='login'>
           <div className="login__card">
               <h2 className="login__title">Enter your Qpick ID information </h2>
               <form action="" className="login__form">
                   <TextField
                       placeholder='Enter your Login'
                       className='login'
                       id="standard-basic"
                       label="Login"
                       variant="outlined"
                   />

                   <TextField
                       placeholder='Enter your Password'
                       className='password'
                       id="standard-basic"
                       label="Password"
                       variant="outlined"
                   />

                   <Button className='button' variant="contained">Continue</Button>
               </form>
           </div>
        </div>
    )
};

export default Login;
