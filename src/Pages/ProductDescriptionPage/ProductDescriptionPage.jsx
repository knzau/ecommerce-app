import React, { Component } from "react";
import { connect } from "react-redux";

import { selectProductDetails } from "../../Redux/shop/shopSelector";
import {
  selectCurrentCurrency,
  selectProductPrice,
} from "../../Redux/currency/currencySelector";
import ProductDetailsImages from "../../Components/ProductDetailsImages/ProductDetailsImages";
import ProductDescriptions from "../../Components/ProductDescriptions/ProductDescriptions";
import { currencyIcons } from "../../Components/Utils";
import { Wrapper } from "./ProductDescriptionPageStyles";
import { productPrice } from "../../Redux/shop/shopUtils";

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
    const { productDetails, currentCurrency } = this.props;

    const product = this.props.location.state.product;
    console.log(product);

    const currencySign = currencyIcons[`${currentCurrency.toUpperCase()}`];

    const handleOnHover = (e, index) => {
      const selectedProductImage = productDetails?.gallery[index];
      this.setState({ clickedProduct: selectedProductImage });
      this.setState({ isHovered: true });
    };

    const handleOnMouseLeave = (e, index) => {
      this.setState({ clickedProduct: "" });
      this.setState({ isHovered: false });
    };

    const displaySizeValues = product.attributes.map((attribute) =>
      attribute.items.map((item) => item).map((item) => item.displayValue)
    );

    const price = productPrice(productDetails, currentCurrency);

    const attributeName = product.attributes.map((attribute) => attribute.name);
    console.log(attributeName);
    console.log(price);

    return (
      <Wrapper>
        <ProductDetailsImages
          productDetails={product}
          handleOnMouseLeave={handleOnMouseLeave}
          clickedProduct={this.state.clickedProduct}
          handleOnHover={handleOnHover}
        />
        <ProductDescriptions
          productDetails={product}
          displaySizeValues={displaySizeValues}
          attributeName={attributeName}
          productPrice={price}
          currentCurrency={currentCurrency}
          currencySign={currencySign}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  productDetails: selectProductDetails(state),
  // price: selectProductPrice(ownProps.productDetails.prices)(state),
  currentCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps)(ProductDescriptionPage);
