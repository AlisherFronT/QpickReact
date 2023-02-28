import React from 'react';


import HomeSwiper from "./HomeSwiper/HomeSwiper";
import slides from "../../assets/sliders/sliders.json"

import './home.scss'

const Home = () => {
    return (
        <main className='main'>
            <HomeSwiper slides={slides}/>

        </main>
    );
};

export default Home;