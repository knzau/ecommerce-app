import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 32.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  top: 8rem;
  right: 8.125%;
  z-index: 5;
  overflow: hidden;
  transition: all ease 0.3s;

  &:after {
    transform: scaleY(1);
  }

  .total-items {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;

    & > span {
      font-weight: 400;
    }
  }
  .cart-items {
    display: flex;
    flex-direction: column;
    top: 5rem;
    /* overflow-y: auto !important; */
  }

  .total-price_wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.5rem;

    & span {
      font-size: 1.6rem;
      line-height: 25.6px;

      &:first-child {
        font-weight: 500;
      }
    }
    .total-price {
      font-weight: 700;
    }
  }

  .empty-message {
    font-size: 1.8rem;
    margin: 5rem auto;
  }

  .btns-wrapper {
    display: flex;
  }
  .view-cart_btn {
    margin-right: 1.2rem;
    width: 50%;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 16.8px;
    font-family: "Raleway", sans-serif;
  }
  .checkout-btn {
    width: 50%;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 16.8px;
    font-family: "Raleway", sans-serif;
  }
`;
