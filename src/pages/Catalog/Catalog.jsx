import React from 'react';

import CatalogSwiper from "./CatalogSwiper/CatalogSwiper";
import slides from "../../assets/sliders/sliders.json"


const Catalog = () => {
    return (
        <section className='catalog'>
            <CatalogSwiper slides={slides}/>
            
        </section>
    );
};

export default Catalog;