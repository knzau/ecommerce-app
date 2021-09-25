import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router";
import {
  selectCurrentCurrency,
  selectCurrencies,
  selectProductPrice,
} from "../../Redux/currency/currencySelector";
import { currencyIcons } from "../Utils";
import Parser from "html-react-parser";

class ProductCard extends Component {
  render() {
    const { product, match, history, currentCurrency, productPrice } =
      this.props;

    console.log(productPrice);
    return (
      <Wrapper
        onClick={() => {
          history.push({
            pathname: `${match.url}/:${product.id}`,
            state: product,
          });
          console.log(match.url);
        }}
      >
        <div className="product__img-wrapper">
          <img src={product.gallery[0]} className="product-img" alt="product" />
          <span className="background"></span>
        </div>
        <p className="product__name">{product.name}</p>
        <p className="product__price">
          {Parser(currencyIcons[currentCurrency])}&nbsp;
          {productPrice}
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

export default withRouter(connect(mapStateToProps)(ProductCard));

const Wrapper = styled.div`
  width: 386px;
  transition: height 0.3s, opacity 0.3s, all 0.3s;
  padding: 16px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  .product__img-wrapper {
    width: 354px;
    height: 330px;

    .product-img {
      width: 354px;
      height: 330px;
      object-fit: contain;
    }
  }

  .product__name {
    color: var(--colors-primary-dark);
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 2.4rem;
    text-transform: capitalize;
  }
  .product__price {
    font-family: Raleway;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
  }
`;
