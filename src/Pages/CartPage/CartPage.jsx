import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/cart/cartSelector";

import styled from "styled-components";

import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem";
import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";
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

const mapStateToProps = (state, ownProps) => ({
  cartItems: selectCartItems(state),
  currentCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps)(CartPage);

const Wrapper = styled.div`
  padding: 0 8.125%;
  .page-header {
    font-family: Raleway;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    text-transform: uppercase;
    margin-top: 8rem;
    margin-bottom: 6rem;
  }
`;
