import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryCollection from "../../Components/CategoryCollection/CategoryCollection";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { selectCategory } from "../../Redux/shop/shopSelector";

class CategoryPage extends Component {
  render() {
    const { category } = this.props;

    console.log(category);
    const { match } = this.props;
    console.log(match.params);

    return category ? (
      <div className="category-page">
        <h3>{category.name}</h3>
        <CategoryCollection products={category.products} />

        <h2>Category Page</h2>
      </div>
    ) : (
      <div>
        <span>Products not found</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
