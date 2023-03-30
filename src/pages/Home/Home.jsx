import React from 'react';

import './home.scss'
import AppleBlock from "./AppleBlock/AppleBlock";
import Start from "./Start/Start";
import Offer from './Offer/Offer';
import Arrivals from './Arrivals/Arrivals';

const Home = () => {
    return (
        <main className='main'>
            <AppleBlock/>
            <Arrivals/>
            <Start/>
            <Offer/>
        </main>
    );
};

export default Home;