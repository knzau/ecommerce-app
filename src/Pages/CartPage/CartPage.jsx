import React, { Component } from "react";
import styled from "styled-components";

class CartPage extends Component {
  render() {
    return (
      <Wrapper>
        <p className="page-header">cart</p>
      </Wrapper>
    );
  }
}

export default CartPage;

const Wrapper = styled.div`
  .page-header {
    font-family: Raleway;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    text-transform: uppercase;
  }
`;
