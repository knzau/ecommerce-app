import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Redirect } from "react-router-dom";

import CategoryPage from "../CategoryPage/CategoryPage";
import NotFound from "../../Components/NotFound/NotFound";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import {
  selectCategories,
  setinitialCategoryName,
} from "../../Redux/shop/shopSelector";
import { selectCurrencies } from "../../Redux/currency/currencySelector";
import { selectCartHidden } from "../../Redux/cart/cartSelector";

import { Wrapper } from "./ShopPageStyles";

import Header from "../../Components/Header/Header";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryName: "",
      categoriesStateData: "",
      initialCategoryId: "",
    };
  }

  async componentDidMount() {
    const initialCategoryName = this.props.categories?.map(
      (category) => category.name
    )[0];

    if (this.props.categories) {
      this.setState({
        categoriesStateData: this.props.categories,
        initialCategoryId: initialCategoryName,
      });
    }
  }
  handleMenuClick = (categoryName) => {
    this.setState({
      selectedCategoryName: categoryName,
      initialCategoryId: categoryName,
    });
  };

  render() {
    const { match, categories, currencies, hidden } = this.props;
    console.log(this.state.initialCategoryId);
    const { initialCategoryId } = this.state;
    return (
      <Wrapper>
        <Header
          categories={categories}
          match={match}
          hidden={hidden}
          currencies={currencies}
          handleMenuClick={this.handleMenuClick}
        />
        {!hidden ? <div className="gray-container" /> : null}

        <Route
          exact
          path="/shop"
          render={() => {
            return initialCategoryId ? (
              <Redirect to={`/shop/${initialCategoryId}`} />
            ) : (
              <NotFound />
            );
          }}
        />
        <Route
          exact
          path={`${match.path}/:categoryId/`}
          render={(props) => <CategoryPage {...props} />}
        />
        <Route
          path={`/shop/:categoryId/:productId`}
          render={(props) => <ProductDescriptionPage {...props} />}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  firstCategory: setinitialCategoryName(state),
  categories: selectCategories(state),
  currencies: selectCurrencies(state),
  hidden: selectCartHidden(state),
});

export default withRouter(connect(mapStateToProps)(ShopPage));
