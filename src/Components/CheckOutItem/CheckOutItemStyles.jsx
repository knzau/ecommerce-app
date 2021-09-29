import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 4.1rem;
  justify-content: space-between;
  border-top: 1px solid var(--c-gray);
  padding-top: 2rem;

  .left_wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;

    .brand {
      font-size: 30px;
      font-weight: 600;
      line-height: 26px;
    }
    .name {
      font-size: 30px;
      font-weight: 400;
      line-height: 27px;
      margin-top: 1.6rem;
      margin-bottom: 1.2rem;
    }

    .cart-price {
      font-size: 24px;
      font-weight: 700;
      line-height: 27px;
    }

    .attr-container {
      display: flex;
      margin-top: 1.2rem;

      & > div {
        margin-right: 1.2rem;
      }
    }
  }
  .right_wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .image-wrap {
    width: 141px;
    height: 185px;
    margin-left: 1.8rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .quantityContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .quantity {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 25.6px;
    }
  }

  .cartDownBtn {
    margin-top: 0;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 1rem;
    color: var(--c-primary-dark);
    font-weight: 700;

    .price {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 160%;
    }
  }
`;
