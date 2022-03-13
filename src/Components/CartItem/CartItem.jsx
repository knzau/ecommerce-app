import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  toggleAttributeItem,
  addAttributeItem,
} from "../../Redux/cart/cartActions";
import {
  selectCartItems,
  selectToggleAttribHidden,
} from "../../Redux/cart/cartSelector";
import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";
import { currencyIcons } from "../Utils";
import Parse from "html-react-parser";
import SmallButton from "../SmallButton/SmallButton";

import { Wrapper } from "./CartItemStyles";

class CartItem extends Component {
  render() {
    const {
      item,
      currentCurrency,
      addItem,
      removeItem,
      cartItems,
      selectedCurrency,
    } = this.props;
    const { gallery, brand, name, quantity } = item;
    const productPrice = item.prices?.find((item) =>
      item.currency.includes(selectedCurrency)
    ).amount;

    console.log(cartItems);

    return item ? (
      <Wrapper>
        <div className="right_wrapper">
          <span className="name">{brand}</span>
          <span className="brand name">{name}</span>
          <span className="cart-price">
            {Parse(currencyIcons[currentCurrency])}&nbsp;
            {productPrice}
          </span>

          {cartItems.selectedAttributes?.map((attribute) => (
            <SmallButton SmallSquare className="cartDownBtn" key={attribute.id}>
              {attribute.value}
            </SmallButton>
          ))}
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
            <img src={gallery ? gallery[0] : ""} alt="item-img" />
          </div>
        </div>
      </Wrapper>
    ) : null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  toggleAttributeItem: () => dispatch(toggleAttributeItem()),
  addAttributeItem: (item) => dispatch(addAttributeItem(item)),
});

const mapStateToProps = (state) => ({
  selectedCurrency: selectCurrentCurrency(state),
  cartItems: selectCartItems(state),
  selectToggleAttribHidden: selectToggleAttribHidden(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
