import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router";
import {
  selectCategories,
  selectCategory,
} from "../../Redux/shop/shopSelector";
// import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

import CategoryCollection from "../../Components/CategoryCollection/CategoryCollection";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CategoryPage from "../CategoryPage/CategoryPage";

// const CategoryCollectionWithSpinner = LoadingSpinner(CategoryCollection);
class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  render() {
    console.log(this.props);

    const { category, selectCategories, categoryIndex, categoryName, match } =
      this.props;
    console.log(match);
    console.log(category);
    console.log(categoryIndex);
    console.log(selectCategories);

    // const { isLoading, error } = this.props;

    return (
      <div className="product-listing-page">
        <h3>shop</h3>
        <Route path={`${match.path}`} component={CategoryCollection} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectCategories: selectCategories(state),
});

export default connect(mapStateToProps)(ProductListingPage);
