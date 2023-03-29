import React, { useState } from "react";
import "./checkout.scss";

import InputMask from "react-input-mask";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { BsFillGeoAltFill } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { TbShoppingCartDiscount } from "react-icons/tb";

import Map from "../../components/Map/map";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/reducers/basket";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ item }) => {
  const [open, setOpen] = useState(false);

  const product = useSelector((store) => store.basket.productsInCart);
  const total = useSelector((store) =>
    store.basket.productsInCart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
  );

  const quantity = useSelector((store) => store.basket.quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(clearCart());
    navigate("/catalog");
    setOpen(false);
  };

  return (
    <section className="checkout">
      <div className="checkout__title">Checkout</div>
      <div className="checkout__container">
        <div className="checkout__left">
          <div className="checkout__left-top">
            <span className="checkout__left-title">Delivery</span>
            <span className="checkout__left-price">88$</span>
          </div>
          <Map />
          <div className="checkout__left-bottom">
            <BsFillGeoAltFill />
            <span>Delivery address</span>
          </div>
          <div className="checkout__form">
            <form className="form">
              <input
                required
                className="checkout__input"
                placeholder="City"
              />
              <input
                required
                className="checkout__input"
                placeholder="Street/Square"
              />
              <div className="input__info">
                <input
                  required
                  className="input__info-input"
                  placeholder="Apartment"
                />
                <input
                  required
                  className="input__info-input"
                  placeholder="Entrance"
                />
              </div>
              <input
                required
                className="checkout__input"
                placeholder="House"
              />
            </form>
          </div>
        </div>
        <div className="checkout__right">
          <div className="checkout__order">
            <span className="checkout__order-title">Order</span>
            {product.map((item) => (
              <div className="checkout__order-cart">
                <div className="checkout__order-info">
                  <span className="checkout__order-quantity">
                    {item.quantity}X
                  </span>
                  <span className="checkout__order-name">{item.title}</span>
                </div>
                <span className="checkout__order-price">{item.price} $</span>
              </div>
            ))}
            <div className="checkout__order-delivery">
              <span>Delivery</span>
              <span>88 $</span>
            </div>
            <div className="checkout__order-total">
              <span>Total:</span>
              <span>{total} $</span>
            </div>
          </div>
          <div className="checkout__payment">
            <div className="checkout__payment-title">Payment Method</div>
            <div className="checkout__payment-label">
              <RiVisaFill />
              <span>Visa</span>
            </div>
            <div className="checkout__payment-input">
              <TbShoppingCartDiscount />
              <input
                placeholder="Discount Promocode"
                className="checkout__payment-discount"
                type="text"
              />
            </div>
          </div>
          <div className="checkout__phone">
            <span className="checkout__phone-title">Number</span>
            <InputMask
              mask={`+\\9\\96(999)99-99-99`}
              className="checkout__phone-input"
              placeholder="+996 ___-__-__-__"
            />
          </div>
          <Button
            className="checkout__btn"
            variant="contained"
            onClick={handleClickOpen}
          >
            Finish
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>Thank you for your order!</DialogTitle>
            <DialogContent>
              <p>Your order has been placed successfully.</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button>More</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
