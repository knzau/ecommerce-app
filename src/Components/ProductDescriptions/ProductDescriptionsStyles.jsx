import styled from "styled-components";
import { medium_header } from "../../GlobalStyles";

export const DescriptionContainer = styled.div`
  margin-left: 10rem;

  .product_brand {
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 1.6rem;
  }
  .product_name {
    font-size: 3rem;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
  }

  .product_type {
    font-family: Raleway;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }

  .medium_header-size {
    ${medium_header};
    font-size: 1.8rem;
    margin-top: 4.3rem;
    margin-bottom: 8px;
  }
  .size-container {
    display: flex;
    margin-bottom: 4rem;
  }
  .product-size {
    &:not(:last-child) {
      margin-right: 1.2rem;
    }
  }
  .medium_header-price {
    ${medium_header};
    font-size: 2.4rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .product-price {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .product-description {
    margin-top: 4rem;
    max-width: 292px;
    * {
      font-family: Roboto;
      font-size: 16px;
      line-height: 159.96%;
      color: var(--c-primary-dark);
    }
  }
`;
