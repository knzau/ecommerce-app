import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  selectCurrentCurrency,
  selectCurrencies,
  selectProductPrice,
} from "../../Redux/currency/currencySelector";
import { currencyIcons } from "../Utils";
import parse from "html-react-parser";
import { openProductDetail } from "../../Redux/shop/shopActions";

import { Wrapper } from "./ProductCardStyles";

class ProductCard extends Component {
  render() {
    const {
      product,
      match,
      history,
      currentCurrency,
      productPrice,
      setProductDetail,
    } = this.props;

    return (
      <Wrapper
        onClick={() => {
          setProductDetail(product);
          history.push({
            pathname: `${match.url}/${product.id}`,
            state: product,
          });
        }}
      >
        <div className="product__img-wrapper">
          <img src={product.gallery[0]} className="product-img" alt="product" />
          <span className="background"></span>
        </div>
        <p className="product__name">{product.name}</p>
        <p className="product__price">
          {parse(`${currencyIcons[currentCurrency]}`)} &nbsp; {productPrice}
        </p>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentCurrency: selectCurrentCurrency(state),
  currencies: selectCurrencies(state),
  productPrice: selectProductPrice(ownProps.product)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setProductDetail: (product) => dispatch(openProductDetail(product)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductCard)
);
