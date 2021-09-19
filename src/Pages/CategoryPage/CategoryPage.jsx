import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../Redux/shop/shopSelector";
import ProductItem from "../../Components/ProductItem/ProductItem";

class CategoryPage extends Component {
  render() {
    const { categorySelect, match, categories } = this.props;

    console.log(categorySelect);

    console.log(match);

    console.log(categories?.map((category) => category.name));

    return (
      <div className="category-collection">
        <h1> Category collection</h1>
        <h3>{categorySelect?.name}</h3>

        {categorySelect?.products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categorySelect: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
