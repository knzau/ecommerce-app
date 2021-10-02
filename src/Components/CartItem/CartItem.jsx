import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../Redux/cart/cartActions";
import { currencyIcons } from "../Utils";
import Parse from "html-react-parser";
import SmallButton from "../SmallButton/SmallButton";

import { Wrapper } from "./CartItemStyles";

class CartItem extends Component {
  render() {
    const { item, currentCurrency, addItem, removeItem } = this.props;
    const { gallery, brand, name, quantity } = item;
    const imageUrl = gallery[0];
    const productPrice = item.prices?.find(
      (item) => item.currency === currentCurrency
    ).amount;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
