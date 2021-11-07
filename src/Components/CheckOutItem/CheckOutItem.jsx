import React, { Component } from "react";
import { connect } from "react-redux";
import Parse from "html-react-parser";
import { currencyIcons, displayAttrValues } from "../Utils";
import { selectCartItems } from "../../Redux/cart/cartSelector";
import { addItem, removeItem } from "../../Redux/cart/cartActions";
import { productPrice } from "../../Redux/shop/shopUtils";
import SmallButton from "../SmallButton/SmallButton";
import { SmallButtonContainer } from "../SmallButton/SmallButtonStyles";

import { Wrapper } from "./CheckOutItemStyles";

class CheckOutItem extends Component {
  render() {
    const { item, currentCurrency, addItem, removeItem } = this.props;
    const { gallery, brand, name, quantity } = item;
    const imageUrl = gallery[0];

    const price = productPrice(item, currentCurrency);
    const attrValues = displayAttrValues(item);
    return (
      <Wrapper>
        <div className="left_wrapper">
          <span className="brand">{brand}</span>
          <span className="name">{name}</span>
          <span className="cart-price">
            {Parse(currencyIcons[currentCurrency])}
            {price}
          </span>
          <div className="attr-container">
            {attrValues[0]?.map((itemAttr, index) => (
              <SmallButtonContainer
                BigSquare
                className="color-box"
                BackColor={itemAttr.value}
                key={index}
              >
                {itemAttr}
              </SmallButtonContainer>
            ))}
          </div>
        </div>
        <div className="right_wrapper">
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutItem);
