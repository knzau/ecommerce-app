import React, { Component } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { selectCategory } from "../../Redux/shop/shopSelector";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styled from "styled-components";

class CategoryPage extends Component {
  render() {
    const { categorySelect, match } = this.props;

    console.log(categorySelect);

    return (
      <Wrapper>
        <h2>{categorySelect?.name}</h2>
        <div className="category-grid">
          {categorySelect?.products.map((product, index) => (
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

const Wrapper = styled.div`
  h2 {
    text-transform: Capitalize;
    font-size: 42px;
    line-height: 67px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 8rem;
  }

  .category-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 386px));
    grid-template-rows: auto;
    gap: 40px;
    margin-top: 8.762rem;
  }
`;
