import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/cart/cartSelector";
import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem";
import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";

import { Wrapper } from "./CartPageStyles";
class CartPage extends Component {
  render() {
    const { cartItems, currentCurrency } = this.props;

    return (
      <Wrapper>
        <p className="page-header">cart</p>
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CheckOutItem
                key={cartItem.id}
                item={cartItem}
                currentCurrency={currentCurrency}
              />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  currentCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps)(CartPage);
