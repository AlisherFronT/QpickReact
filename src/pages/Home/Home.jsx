import React from 'react';

import './home.scss'
import AppleBlock from "./AppleBlock/AppleBlock";
import Advanteges from "./Advanteges/Advanteges";
import Start from "./Start/Start";

const Home = () => {
    return (
        <main className='main'>
            <AppleBlock/>
            <Advanteges/>
            <Start/>
        </main>
    );
};

export default Home;