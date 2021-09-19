import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../Redux/shop/shopSelector";
import ProductItem from "../../Components/ProductItem/ProductItem.jsx";

class CategoryCollection extends Component {
  render() {
    const { categorySelect, match, categories } = this.props;

    console.log(categorySelect);
    console.log(categories);
    console.log(match);

    return (
      <div className="category-collection">
        <h1> Category collection</h1>

        {categorySelect?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categorySelect: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryCollection);
