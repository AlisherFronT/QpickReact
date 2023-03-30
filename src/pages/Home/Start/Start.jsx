import React from 'react';
import "./start.scss"

import Button from '@mui/material/Button';
import "./start.scss"
import {useNavigate} from "react-router-dom";

const Start = () => {

    const navigate = useNavigate()

    return (
        <section className='start'>
            <div className="start__container">
                <div className="start__info">
                    <h2 className="start__title">Are you ready?</h2>
                    <p className="start__desc">in our assortment you will choose for yourself the smartphone, earphone, tablet and other things that are of interest to you. Let's get started!</p>
                    <Button onClick={() => navigate('/catalog')} variant="contained" className='start__btn'>
                      Check Catalog
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Start;