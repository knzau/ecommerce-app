import React, { Component } from "react";
import parse from "html-react-parser";
import CustomButton from "../../Components/CustomButton/CustomButton";
import styled from "styled-components";
import { medium_header } from "../../GlobalStyles";
import NotFound from "../../Components/NotFound/NotFound";
import SmallButton from "../../Components/SmallButton/SmallButton";
import { SmallButtonContainer } from "../../Components/SmallButton/SmallButtonStyles";

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      clickedProduct: "",
      isHovered: false,
    };
  }

  render() {
    const productItem = this.props.location.state;

    const handleOnHover = (e, index) => {
      const selectedProductImage = productItem.gallery[index];
      this.setState({ clickedProduct: selectedProductImage });
      this.setState({ isHovered: true });
    };

    const handleOnMouseLeave = (e, index) => {
      this.setState({ clickedProduct: "" });
      this.setState({ isHovered: false });
    };

    const displaySizeValues = productItem?.attributes.map((attribute) =>
      attribute.items.map((item) => item).map((item) => item.displayValue)
    );

    const attributeName = productItem?.attributes.map(
      (attribute) => attribute.name
    );
    console.log(productItem?.attributes.map((attribute) => attribute.name));

    return productItem ? (
      <Wrapper>
        <div className="img-wrapper">
          <div className="grid-images">
            {productItem.gallery.map((item, index) => (
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
            {this.state.clickedProduct ? (
              <img src={`${this.state.clickedProduct}`} alt="products" />
            ) : (
              <img src={productItem.gallery[0]} alt="products" />
            )}
          </div>
        </div>
        <div className="product-details__container">
          <p className="product_brand">{productItem.brand}</p>
          <p className="product_name">{productItem.name}</p>
          {attributeName[0] ? (
            <p className="medium_header-size">{attributeName[0]}:</p>
          ) : null}
          <div className="size-container">
            {displaySizeValues[0]?.map((itemAttr, index) => (
              <SmallButtonContainer className="product-size" key={index}>
                {itemAttr}
              </SmallButtonContainer>
            ))}
          </div>

          <span className="medium_header-price">Price: </span>
          <h4 className="product-price">$50.00</h4>

          <CustomButton>Add to cart</CustomButton>

          <div className="product-description">
            {parse(`${productItem.description}`)}
          </div>
        </div>
      </Wrapper>
    ) : (
      <NotFound />
    );
  }
}

export default ProductDescriptionPage;

const Wrapper = styled.div`
  display: flex;
  margin-top: 8.2rem;
  .img-wrapper {
    display: flex;
  }

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

  .product-details__container {
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
