import React, { Component } from "react";
import { connect } from "react-redux";

import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";
import ProductDetailsImages from "../../Components/ProductDetailsImages/ProductDetailsImages";
import ProductDescriptions from "../../Components/ProductDescriptions/ProductDescriptions";
import { currencyIcons } from "../../Components/Utils";
import { productPrice } from "../../Redux/shop/shopUtils";

import { Wrapper } from "./ProductDescriptionPageStyles";

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      hoveredImage: "",
      isHovered: false,
    };
  }

  render() {
    const { currentCurrency } = this.props;
    const product = this.props.location.state.product;
    const currencySign = currencyIcons[`${currentCurrency.toUpperCase()}`];
    const price = productPrice(product, currentCurrency);

    const attributeName = product.attributes.map((attribute) => attribute.name);

    const handleOnHover = (e, index) => {
      const targetImageUrl = product.gallery[index];
      this.setState({ isHovered: true, hoveredImage: targetImageUrl });
    };

    const handleOnMouseLeave = (e, index) => {
      this.setState({ isHovered: false });
    };

    const displaySizeValues = product.attributes.map((attribute) =>
      attribute.items.map((item) => item).map((item) => item.displayValue)
    );

    const displayValues = product.attributes.map((attribute) => attribute);
    console.log(displayValues.map((attr) => attr));
    return (
      <Wrapper>
        <ProductDetailsImages
          productDetails={product}
          handleOnMouseLeave={handleOnMouseLeave}
          hoveredImage={this.state.hoveredImage}
          handleOnHover={handleOnHover}
          isHover={this.state.isHovered}
        />
        <ProductDescriptions
          productDetails={product}
          displaySizeValues={displaySizeValues}
          displayValues={displayValues}
          attributeName={attributeName}
          productPrice={price}
          currentCurrency={currentCurrency}
          currencySign={currencySign}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps)(ProductDescriptionPage);
