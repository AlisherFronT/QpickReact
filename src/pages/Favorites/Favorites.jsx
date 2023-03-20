import React from 'react';
import "./favorites.scss"

import CardItem from "../../components/CardItem/CardItem";

const Favorites = ({item}) => {
    return (
        <section className='favorites'>
            <div className="favorites__container">
                <h2 className="favorites__title">Favorites</h2>
                <div className="favorites__row">
                    <CardItem item={item}/>
                </div>
            </div>
        </section>
    );
};

export default Favorites;