import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { selectCategories } from "../../Redux/shop/shopSelector";
// import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

import CategoryCollection from "../../Components/CategoryCollection/CategoryCollection";

// const CategoryCollectionWithSpinner = LoadingSpinner(CategoryCollection);
class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    console.log(this.props);
    const { categories } = this.props;
    const { data } = this.props;
    console.log(categories);

    // const { isLoading, error } = this.props;
    const { match } = this.props;

    console.log(categories.find((collection) => collection.name === "tech"));
    console.log(match.params);
    return (
      <div className="product-listing-page">
        <h1 className="collection-title"> Product Listing page</h1>
        <div className="collection-items">
          {categories?.map((category, index) => (
            <CategoryCollection key={index} category={category} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: selectCategories(state),
});

export default connect(mapStateToProps)(ProductListingPage);
