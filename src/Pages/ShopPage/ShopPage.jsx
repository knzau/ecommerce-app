import React, { Component } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import { selectCategoryId } from "../../Redux/shop/shopSelector";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import CategoryPage from "../CategoryPage/CategoryPage";

const ProductListingPageWithSpinner = LoadingSpinner(ProductListingPage);

class ShopPage extends Component {
  render() {
    // const { products, name } = this.props.collection;

    const { isLoading, match } = this.props;

    console.log(match.path);
    return (
      <div className="shop-page">
        <h1>Shop page</h1>

        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => <CategoryPage {...props} />}
        />
      </div>
    );
  }
}

export default ShopPage;
