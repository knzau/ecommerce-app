import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NotFound extends Component {
  render() {
    return (
      <Wrapper>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </Wrapper>
    );
  }
}

export default NotFound;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.7rem;
  }

  a {
    font-size: 2rem;
  }
`;
