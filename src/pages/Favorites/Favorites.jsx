import React from "react";
import "./favorites.scss";

import CardItem from "../../components/CardItem/CardItem";
import { useSelector } from "react-redux";
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const Favorites = ({ item }) => {
  const productFavorite = useSelector(
    (store) => store.favorites.productsInFavorites
  );

  const navigate = useNavigate()

  return productFavorite.length ?  (
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
  ) :
      (
          <div className='empty__container'>
              <h2 className='empty__title'>Empty Favorites</h2>
              <Button
                  onClick={() => navigate("/catalog")}
                  className="empty__btn"
              >
                  Back to Catalog
              </Button>
          </div>
      )
};

export default Favorites;
