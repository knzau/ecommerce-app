import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import parse from "html-react-parser";
import {
  selectCurrentCurrency,
  selectCurrencies,
} from "../../Redux/currency/currencySelector";

import { currencyIcons } from "../Utils";
import { productPrice } from "../../Redux/shop/shopUtils";

import { openProductDetail } from "../../Redux/shop/shopActions";

import { Wrapper } from "./ProductCardStyles";

class ProductCard extends Component {
  render() {
    const { product, match, history, currentCurrency } = this.props;
    const price = productPrice(product, currentCurrency);
    const currencySign = currencyIcons[`${currentCurrency.toUpperCase()}`];

    return (
      <Wrapper
        onClick={() => {
          openProductDetail(product);
          history.push({
            pathname: `${match.url}/${product.id}`,
            state: { product: product, price: price },
          });
        }}
      >
        <div className="product__img-wrapper">
          <img src={product.gallery[0]} className="product-img" alt="product" />
          <span className="background"></span>
        </div>
        <p className="product__name">{product.name}</p>
        <p className="product__price">
          {parse(`${currencySign}`)} &nbsp; {price}
        </p>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentCurrency: selectCurrentCurrency(state),
  currencies: selectCurrencies(state),
});

const mapDispatchToProps = (dispatch) => ({
  openProductDetail: (product) => dispatch(openProductDetail(product)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductCard)
);
