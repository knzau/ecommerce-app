import React, { Component } from "react";
import styled from "styled-components";

class ProductDetailsImages extends Component {
  render() {
    const {
      handleOnMouseLeave,
      handleOnHover,
      clickedProduct,
      productDetails,
    } = this.props;
    return (
      <ImgWrapper>
        <div className="grid-images">
          {productDetails.gallery.map((item, index) => (
            <div
              className="product-img_wrap"
              key={index}
              onMouseOver={(e) => handleOnHover(e, index)}
              onMouseLeave={(e) => handleOnMouseLeave(e, index)}
            >
              <img src={item} alt="products" />
            </div>
          ))}
        </div>
        <div className="product-image__main">
          {clickedProduct ? (
            <img src={`${clickedProduct}`} alt="products" />
          ) : (
            <img src={productDetails.gallery[0]} alt="products" />
          )}
        </div>
      </ImgWrapper>
    );
  }
}

export default ProductDetailsImages;

const ImgWrapper = styled.div`
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
    width: 100%;

    background-size: cover;

    img {
      max-height: 511px;
      max-width: 610px;
      object-fit: contain;
    }
  }
`;
