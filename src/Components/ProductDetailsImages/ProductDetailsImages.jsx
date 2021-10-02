import React, { Component } from "react";

import { ImgWrapper } from "./ProductDetailsImagesStyles";

class ProductDetailsImages extends Component {
  render() {
    const {
      handleOnMouseLeave,
      handleOnHover,
      hoveredImage,
      isHover,
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
              onMouseOut={(e) => handleOnMouseLeave(e, index)}
            >
              <img src={item} alt="products" />
            </div>
          ))}
        </div>
        <div className="product-image__main">
          {isHover ? (
            <img src={`${hoveredImage}`} alt="products" />
          ) : (
            <img src={productDetails.gallery[0]} alt="products" />
          )}
        </div>
      </ImgWrapper>
    );
  }
}

export default ProductDetailsImages;
