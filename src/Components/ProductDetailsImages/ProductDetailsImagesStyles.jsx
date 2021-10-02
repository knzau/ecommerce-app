import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: flex;

  .grid-images {
    display: flex;
    flex-direction: column;
    margin-right: 4rem;

    .product-img_wrap {
      margin-bottom: 3.2rem;
      cursor: pointer;

      img {
        width: 80px;
        height: 79px;
        object-fit: contain;
      }
    }
  }
  .product-image__main {
    height: 511px;
    width: 610px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
