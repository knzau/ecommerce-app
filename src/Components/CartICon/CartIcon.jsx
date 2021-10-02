import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingCart from "../../svgs/ShoppingCart.svg";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
import { selectCartItemsCount } from "../../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { IconWrapper } from "./CartIconStyles";

import { Wrapper } from "./CartIconStyles";

class CartIcon extends Component {
  render() {
    const { toggleCartHidden, itemCount } = this.props;
    return (
      <Wrapper onClick={toggleCartHidden}>
        <IconWrapper>
          <img src={ShoppingCart} alt="Logo" />
        </IconWrapper>
        {itemCount ? (
          <span className="item-count bounce-top">{itemCount}</span>
        ) : null}
      </Wrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
