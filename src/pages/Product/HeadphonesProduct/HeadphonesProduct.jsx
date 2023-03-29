import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  MdOutlineFavoriteBorder,
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
} from "react-icons/md";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import {
  battery,
  caseb,
  sound,
  waterproof,
} from "../../../assets/icons/headphones/headphones";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInCart,
  deleteProductInCart,
} from "../../../redux/reducers/basket";
import {
  addProductInFavorites,
  removeProductInFavorites,
} from "../../../redux/reducers/favorites";

import store from "../../../redux/index"

const HeadphonesProduct = ({ headphones }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productsCart = useSelector((store) => store.basket.productsInCart);
  const productInCart = productsCart.some(
    (product) => product.id === headphones.id
  );
  const productsFavorites = useSelector(
    (store) => store.favorites.productsInFavorites
  );
  const productInFavorites = productsFavorites.some(
    (product) => product.id === headphones.id
  );

  const addCart = () => {
    if (productInCart) {
      dispatch(deleteProductInCart(headphones.id));
    } else {
      const isUserLoggedIn = !!store.getState().user.user.login;
      if (isUserLoggedIn) {
        dispatch(addProductInCart(headphones));
      } else {
        setIsDialogOpen(true);
      }
    }
  };
  const addFavorites = () => {
    if (productInFavorites) {
      dispatch(removeProductInFavorites(headphones.id));
    } else {
      dispatch(addProductInFavorites(headphones));
    }
  };
  return (
    <section className="product">
      <div className="product__container">
        <div className="product__container-left">
          <img
            src={headphones.image}
            alt={headphones.title}
            className="product__img"
          />
          <div className="product__btns">
            {productInCart ? (
              <Button
                className="card__btn-remove"
                variant="outlined"
                startIcon={<MdOutlineRemoveShoppingCart />}
                onClick={() => addCart()}
              >
                Remove
              </Button>
            ) : (
              <Button
                className="card__btn-add"
                variant="outlined"
                startIcon={<MdOutlineShoppingCart />}
                onClick={() => addCart()}
              >
                Add to Cart
              </Button>
            )}

             <Dialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          >
            <DialogTitle>You are not logged in</DialogTitle>
            <DialogContent>
              <p>Please log in or sign up to add products to your cart.</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => navigate("/login")}>Log In</Button>
              <Button onClick={() => navigate("/register")}>Sign Up</Button>
            </DialogActions>
          </Dialog>

            {productInFavorites ? (
              <Button
                onClick={() => addFavorites()}
                variant="outlined"
                startIcon={<MdOutlineFavoriteBorder />}
                className="product__btn-favorites"
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => addFavorites()}
                variant="outlined"
                startIcon={<MdOutlineFavoriteBorder />}
                className="product__btn-favorites"
              >
                Add to Favorites
              </Button>
            )}
          </div>
        </div>
        <div className="product__container-right">
          <h2 className="product__title">{headphones.title}</h2>
          <ul className="product__list">
            <div className="product__item">
              <img
                className="product__icon"
                src={sound}
                alt=""
              />
              <li className="product__text">{headphones.info.sound}</li>
            </div>
            <div className="product__item">
              <img
                className="product__icon"
                src={waterproof}
                alt=""
              />
              <li className="product__text">{headphones.info.waterproof}</li>
            </div>
            <div className="product__item">
              <img
                className="product__icon"
                src={battery}
                alt=""
              />
              <li className="product__text">{headphones.info.battery}</li>
            </div>
            <div className="product__item">
              <img
                className="product__icon"
                src={caseb}
                alt=""
              />
              <li className="product__text">{headphones.info.case}</li>
            </div>
          </ul>
          <p className="product__price"> Price: {headphones.price} $ </p>
        </div>
      </div>
    </section>
  );
};

export default HeadphonesProduct;
