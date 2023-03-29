import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import "./carditem.scss";

import Button from "@mui/material/Button";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import store from "../../redux/index"

import {
  addProductInCart,
  deleteProductInCart,
} from "../../redux/reducers/basket";
import {
  addProductInFavorites,
  removeProductInFavorites,
} from "../../redux/reducers/favorites";

const CardItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const user = useSelector(selectUser);

  const productsCart = useSelector((store) => store.basket.productsInCart);
  const productInCart = productsCart.some((product) => product.id === item.id);

  const productsFavorites = useSelector(
    (store) => store.favorites.productsInFavorites
  );
  const productInFavorites = productsFavorites.some(
    (product) => product.id === item.id
  );

  const addCart = () => {
    if (productInCart) {
      dispatch(deleteProductInCart(item.id));
    } else {
      const isUserLoggedIn = !!store.getState().user.user.login;
      if (isUserLoggedIn) {
        dispatch(addProductInCart(item));
      } else {
        setIsDialogOpen(true);
      }
    }
  };

  const addFavorites = () => {
    if (productInFavorites) {
      dispatch(removeProductInFavorites(item.id));
    } else {
      dispatch(addProductInFavorites(item));
    }
  };

  return (
    <Card
      className="card"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      {productInFavorites ? (
        <span
          style={{ color: "#FFA542" }}
          className="card__favorite"
          onClick={() => addFavorites()}
        >
          <MdOutlineFavoriteBorder />
        </span>
      ) : (
        <span
          className="card__favorite"
          onClick={() => addFavorites()}
        >
          <MdOutlineFavoriteBorder />
        </span>
      )}
      <Image
        src={item.image}
        alt={item.image}
        className="card__img"
        onClick={() => navigate(`/product/${item.id}`)}
      />

      <Stack>
        <CardBody>
          <Heading className="card__title">{item.title}</Heading>
        </CardBody>

        <CardFooter className="card__bottom">
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

          <Text
            py="2"
            className="card__price"
          >
            {item.price} $
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CardItem;
