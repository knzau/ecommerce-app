import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { withRouter } from "react-router-dom";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../Redux/cart/cartSelector";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/cart/cartSelector";
import { toggleCartHidden } from "../../Redux/cart/cartActions";

import { Wrapper } from "./CartDropDownStyles";
import SmallButton from "../SmallButton/SmallButton";

class CartDropDown extends Component {
  render() {
    const {
      cartItems,
      history,
      totalItems,
      toggleCartHidden,
      totalPrice,
      currentCurrency,
    } = this.props;

    console.log(totalPrice);
    console.log(currentCurrency);
    return (
      <Wrapper className="cart-dropdown">
        <h3 className="total-items">
          My Bag, <span>{totalItems} items</span>
        </h3>
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                item={cartItem}
                currentCurrency={currentCurrency}
              />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <div className="total-price_wrapper">
          <span className="medium-header">Total</span>
          <span className="total-price">{totalPrice}</span>
        </div>
        <div className="btns-wrapper">
          <SmallButton className="view-cart_btn">View Bag</SmallButton>
          <CustomButton
            onClick={() => {
              history.push("/cart");
              toggleCartHidden();
            }}
            className="checkout-btn"
          >
            checkout
          </CustomButton>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cartItems: selectCartItems(state),
  totalItems: selectCartItemsCount(state),
  totalPrice: selectCartTotal(ownProps.currentCurrency)(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
