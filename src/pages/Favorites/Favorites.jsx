import React from "react";
import "./favorites.scss";

import CardItem from "../../components/CardItem/CardItem";
import { useSelector } from "react-redux";

const Favorites = ({ item }) => {
  const productFavorite = useSelector(
    (store) => store.favorites.productsInFavorites
  );

  return (
    <section className="favorites">
      <div className="favorites__container">
        <h2 className="favorites__title">Favorites</h2>
        <div className="favorites__row">
          {productFavorite.map((item) => (
            <CardItem item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
