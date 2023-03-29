import React from "react";
import "./basket.scss";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import {
  decreaseQuantity,
  increaseQuantity,
  deleteProductInCart,
} from "../../redux/reducers/basket";
import Map from "../../components/Map/map";
import { useNavigate } from "react-router-dom";

const Basket = ({ item }) => {
  const productCart = useSelector((store) => store.basket.productsInCart);
  const total = useSelector((store) =>
    store.basket.productsInCart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
  );
  const quantity = useSelector((store) =>
    store.basket.productsInCart.reduce((acc, item) => acc + item.quantity, 0)
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const increaseClick = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  const decreaseClick = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  const deleteClick = (item) => {
    dispatch(deleteProductInCart(item.id));
  };

  return productCart.length ? (
    <div className="basket">
      <div className="basket__container">
        <h2 className="basket__title">Basket</h2>
        <div className="basket__columns">
          <div className="basket__first-column">
            {productCart.map((item) => (
              <div className="basket__product">
                <div className="basket__product-top">
                  <img
                    alt={item.title}
                    src={item.image}
                    className="basket__product-img"
                  />
                  <div className="basket__product-info">
                    <h2 className="basket__product-name">{item.title}</h2>
                    <p className="basket__product-price">{item.price}$</p>
                  </div>
                  <button
                    onClick={() => deleteClick(item)}
                    className="basket__product-delete"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>

                <div className="basket__product-bottom">
                  <div className="basket__product-quantity">
                    <button
                      onClick={() => decreaseClick(item)}
                      className="basket__product-minus"
                    >
                      <AiFillMinusCircle />
                    </button>
                    <div className="basket__product-quant">{item.quantity}</div>
                    <button
                      onClick={() => increaseClick(item)}
                      className="basket__product-plus"
                    >
                      <BsFillPlusCircleFill />
                    </button>
                  </div>
                  <div className="basket__product-total">{item.price}$</div>
                </div>
              </div>
            ))}

            <div className="basket__product-delivery">
              <h2 className="basket__product-delivery-title">Delivery</h2>
              <Map />
              <div className="basket__product-delivery-price">
                Delivery : 30 $
              </div>
            </div>
          </div>

          <div className="basket__second-column">
            <div className="basket__tip">
              <div className="basket__subtotal">
                <span>Total:</span>
                <span className="basket__amount">{total} $</span>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="basket__btn"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyBasket />
  );
};

export default Basket;
