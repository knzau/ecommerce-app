import React from "react";
import { connect } from "react-redux";

import { currencyIcons } from "../Utils";
import Parse from "html-react-parser";
import SmallButton from "../SmallButton/SmallButton";

import { Wrapper } from "./CartItemStyles";
import { addItem, removeItem } from "../../Redux/cart/cartActions";

const CartItem = ({ item, currentCurrency, price, addItem, removeItem }) => {
  const { gallery, brand, name, quantity } = item;
  const imageUrl = gallery[0];
  console.log(price);
  console.log(item);
  const productPrice = item.prices?.find(
    (item) => item.currency === currentCurrency
  ).amount;

  console.log(productPrice);
  return (
    <Wrapper>
      <div className="right_wrapper">
        <span className="name">{brand}</span>
        <span className="brand name">{name}</span>
        <span className="cart-price">
          {Parse(currencyIcons[currentCurrency])}
          {productPrice}
        </span>
      </div>
      <div className="left_wrapper">
        <div className="quantityContainer">
          <SmallButton
            SmallSquare
            className="cartDownBtn"
            onClick={() => addItem(item)}
          >
            +
          </SmallButton>
          <span className="quantity">{quantity}</span>
          <SmallButton
            SmallSquare
            className="cartDownBtn"
            onClick={() => removeItem(item)}
          >
            -
          </SmallButton>
        </div>

        <div className="image-wrap">
          <img src={imageUrl} alt="item-img" />
        </div>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
