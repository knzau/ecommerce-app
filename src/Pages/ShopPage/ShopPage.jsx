import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

import { updateCollections } from "../../Redux/shop/shopActions";

const ProductListingPageWithSpinner = LoadingSpinner(ProductListingPage);

class ShopPage extends Component {
  render() {
    const { match } = this.props;
    const { isLoading } = this.props;
    return (
      <div className="shop-page">
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ProductListingPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <h1>Shop Page</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
