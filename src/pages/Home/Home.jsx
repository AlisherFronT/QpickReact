import React from 'react';


import HomeSwiper from "./HomeSwiper/HomeSwiper";
import slides from "../../assets/sliders/sliders.json"

import './home.scss'
import AppleBlock from "./AppleBlock/AppleBlock";
import Advanteges from "./Advanteges/Advanteges";

const Home = () => {
    return (
        <main className='main'>
            <HomeSwiper slides={slides}/>
            <AppleBlock/>
            <Advanteges/>
        </main>
    );
};

export default Home;