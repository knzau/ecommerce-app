import React, { Component } from "react";
import ProductItem from "../../Components/ProductItem/ProductItem.jsx";

class CategoryCollection extends Component {
  render() {
    const { products } = this.props;
    console.log(products);

    return (
      <div className="category-collection">
        {products.map((product) => (
          <ProductItem key={products.id} product={product} />
        ))}
      </div>
    );
  }
}

export default CategoryCollection;
