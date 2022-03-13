import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 4.1rem;

  .right_wrapper {
    width: 50%;
    display: flex;
    margin-right: 1.2rem;
    flex-direction: column;

    & span {
      font-size: 16px;
      line-height: 26px;

      &:not(:last-child) {
        font-weight: 300;
      }
      &:last-child {
        font-weight: 500;
      }
    }
  }
  .left_wrapper {
    width: 50%;

    display: flex;
  }

  .quantityContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 137px;

    .quantity {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 25.6px;
    }
  }

  .attributes-main__container {
    margin-top: 1.7rem;
  }
  .cart-attributes-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .cartDownBtn {
    margin-top: 1rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 2.4rem;
      height: 2.4rem;
      font-size: 1.4rem;
      padding: 4px;
    }
  }

  .image-wrap {
    width: 105px;
    height: 137px;
    margin-left: 1.8rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 1rem;
    color: #3a3a3a;
    font-weight: 700;

    .price {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 160%;
    }
  }
`;
