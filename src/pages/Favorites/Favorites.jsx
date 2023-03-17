import React from 'react';
import "./favorites.scss"

import Card from "../../components/Card/Card";

const Favorites = () => {
    return (
        <section className='favorites'>
            <div className="favorites__container">
                <h2 className="favorites__title">Favorites</h2>
                <div className="favorites__row">
                    <Card/>
                </div>
            </div>
        </section>
    );
};

export default Favorites;