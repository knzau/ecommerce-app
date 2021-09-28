import styled from "styled-components";

export const Wrapper = styled.div`
  width: 386px;
  transition: height 0.3s, opacity 0.3s, all 0.3s;
  padding: 16px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  .product__img-wrapper {
    width: 354px;
    height: 330px;

    .product-img {
      width: 354px;
      height: 330px;
      object-fit: contain;
    }
  }

  .product__name {
    color: var(--colors-primary-dark);
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 2.4rem;
    text-transform: capitalize;
  }
  .product__price {
    font-family: Raleway;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
  }
`;
