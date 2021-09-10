import React, { Component } from "react";
import styled from "styled-components";
import parse from "html-react-parser";

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <Wrapper>
        <h1>{product.category}</h1>
        <h1>{product.name}</h1>
        {parse(product.description)}
      </Wrapper>
    );
  }
}

export default ProductItem;

const Wrapper = styled.div`
  h1 {
    color: #000;
  }
`;
