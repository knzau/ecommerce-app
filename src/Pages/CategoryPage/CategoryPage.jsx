import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../Redux/shop/shopSelector";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Wrapper } from "./CategoryPageStyles";

class CategoryPage extends Component {
  render() {
    const { categorySelect } = this.props;

    return (
      <Wrapper>
        <h2>{categorySelect.name}</h2>
        <div className="category-grid">
          {categorySelect.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categorySelect: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
