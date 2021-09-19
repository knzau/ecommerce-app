import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, Link, Redirect } from "react-router-dom";
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import {
  selectCategories,
  selectCategoryId,
} from "../../Redux/shop/shopSelector";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import CategoryPage from "../CategoryPage/CategoryPage";

const ProductListingPageWithSpinner = LoadingSpinner(ProductListingPage);

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

  render() {
    const initialCategoryName = this.props.categories?.map(
      (category) => category.name
    )[0];

    const { isLoading, match, categories } = this.props;

    console.log(match.path);
    console.log(categories);

    console.log(this.state.selectedCategoryName);

    return (
      <div className="shop-page">
        {categories?.map((category, index) => (
          <li className="category-link" key={index}>
            <Link to={`${match.path}/${category.name}`}>{category.name}</Link>
          </li>
        ))}
        {
          <Route
            path={`${match.path}/:categoryId`}
            render={(props) => (
              <CategoryPage categories={categories} {...props} />
            )}
          />
        }

        {<Redirect to={`${match.path}/${initialCategoryName}`} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
});

export default connect(mapStateToProps)(ShopPage);
