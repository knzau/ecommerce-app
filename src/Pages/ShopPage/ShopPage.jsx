import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";

import { Route, Link, Redirect } from "react-router-dom";

import { selectCategories } from "../../Redux/shop/shopSelector";
import { selectCurrencies } from "../../Redux/currency/currencySelector";
import Logo from "../../svgs/Logo.svg";

import ShoppingCart from "../../svgs/ShoppingCart.svg";

import CategoryPage from "../CategoryPage/CategoryPage";
import CurrencySwitcher from "../../Components/CurrencySwitcher/CurrencySwitcher";

import styled from "styled-components";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryName: "",
      categoriesStateData: "",
    };
  }

  async componentDidMount() {
    if (this.props.categories) {
      this.setState({ categoriesStateData: this.props.categories });
    }
  }
  handleMenuClick = (categoryName) => {
    this.setState({ selectedCategoryName: categoryName });
  };

  render() {
    const { match, categories, currencies } = this.props;

    const initialCategoryName = this.props.categories?.map(
      (category) => category.name
    )[0];

    console.log(this.state.selectedCategoryName);
    console.log(currencies);

    return (
      <Wrapper>
        <header>
          <CategoriesMenu>
            {categories.map((category, index) => (
              <li
                className="category-link"
                key={index}
                onClick={() => this.handleMenuClick(category.name)}
              >
                <Link to={`${match.path}/${category.name}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </CategoriesMenu>
          <LogoWrapper>
            <img src={Logo} alt="Logo" />
          </LogoWrapper>
          {currencies ? <CurrencySwitcher currencies={currencies} /> : ""}
          <IconWrapper>
            <img src={ShoppingCart} alt="Logo" />
          </IconWrapper>
        </header>
        <Route
          exact
          path={`${match.path}/:categoryId`}
          render={(props) => <CategoryPage {...props} />}
        />
        <Route
          path={`${match.path}/:categoryId/:productId`}
          render={(props) => <ProductDescriptionPage {...props} />}
        />

        {this.state.selectedCategoryName ? (
          <Redirect
            from="/shop"
            to={`/shop/${this.state.selectedCategoryName}`}
          />
        ) : (
          <Redirect from="/shop" to={`/shop/${initialCategoryName}`} />
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  currencies: selectCurrencies(state),
});

export default connect(mapStateToProps)(ShopPage);

const Wrapper = styled.div`
  width: 100%;
  padding: 0 11.7rem;

  header {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 3.8rem;
  }

  .arrow-down {
    margin-left: 1rem;
    margin-bottom: 5px;
  }
`;

const CategoriesMenu = styled.ul`
  display: flex;
  li {
    list-style: none;
    &:not(:last-child) {
      margin-right: 3.2rem;
    }

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-transform: uppercase;

    a {
      color: var(--c-primary-dark);
      cursor: pointer;
      position: relative;

      ::after {
        content: "";
        display: flex;
        position: absolute;
        top: calc(100% + 30px);
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--c-primary);
        content: "";
        opacity: 0;
        -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
        -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
        transition: height 0.3s, opacity 0.3s, transform 0.3s;
        -webkit-transform: translateY(-5px);
        -moz-transform: translateY(-5px);
        transform: translateY(-5px);
      }
    }
    a:hover {
      color: var(--c-primary);
    }
    & a:hover::after,
    & a:focus::after,
    & a:active::after {
      height: 2px;
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      transform: translateY(0px);
    }
  }
`;
