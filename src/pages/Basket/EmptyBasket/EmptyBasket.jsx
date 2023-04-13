import React from "react";

import "./emptybasket.scss";
import empty from "../../../assets/img/empty.png"
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EmptyBasket = () => {
  const navigate = useNavigate();

  return (
    <div className="empty__basket">
      <div className="empty__basket-container">
        <img
          src={empty}
          alt=""
          className="empty__basket-img"
        />
        <h2 className="empty__basket-title">Your basket is empty!</h2>
        <p className="empty__basket-subtitle">Go and add some products :D</p>
        <Button
          onClick={() => navigate("/catalog")}
          className="empty__basket-btn"
        >
          Back to Catalog
        </Button>
      </div>
    </div>
  );
};

export default EmptyBasket;
