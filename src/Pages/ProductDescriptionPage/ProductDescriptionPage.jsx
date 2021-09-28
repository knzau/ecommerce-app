import React, { Component } from "react";
import { connect } from "react-redux";

import { selectProductDetails } from "../../Redux/shop/shopSelector";
import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";
import ProductDetailsImages from "../../Components/ProductDetailsImages/ProductDetailsImages";
import ProductDescriptions from "../../Components/ProductDescriptions/ProductDescriptions";
import { Wrapper } from "./ProductDescriptionPageStyles";

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

    const handleOnHover = (e, index) => {
      const selectedProductImage = productDetails?.gallery[index];
      this.setState({ clickedProduct: selectedProductImage });
      this.setState({ isHovered: true });
    };

    const handleOnMouseLeave = (e, index) => {
      this.setState({ clickedProduct: "" });
      this.setState({ isHovered: false });
    };

    const displaySizeValues = productDetails?.attributes.map((attribute) =>
      attribute.items.map((item) => item).map((item) => item.displayValue)
    );

    const attributeName = productDetails?.attributes.map(
      (attribute) => attribute.name
    );

    const productPrice = productDetails.prices.find(
      (productPrice) => productPrice.currency === currentCurrency
    );

    return (
      <Wrapper>
        <ProductDetailsImages
          productDetails={productDetails}
          handleOnMouseLeave={handleOnMouseLeave}
          clickedProduct={this.state.clickedProduct}
          handleOnHover={handleOnHover}
        />
        <ProductDescriptions
          productDetails={productDetails}
          displaySizeValues={displaySizeValues}
          attributeName={attributeName}
          productPrice={productPrice.amount}
          currentCurrency={currentCurrency}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  productDetails: selectProductDetails(state),
  currentCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps)(ProductDescriptionPage);
