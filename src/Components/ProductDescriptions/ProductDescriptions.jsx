import React, { Component } from "react";
import { connect } from "react-redux";
import Parse from "html-react-parser";
import { addItem } from "../../Redux/cart/cartActions";
import { selectCartItems } from "../../Redux/cart/cartSelector";
import { SmallButtonContainer } from "../SmallButton/SmallButtonStyles";
import { currencyIcons } from "../Utils";
import CustomButton from "../CustomButton/CustomButton";
import { DescriptionContainer } from "./ProductDescriptionsStyles";

class ProductDescriptions extends Component {
  render() {
    const {
      productDetails,
      attributeName,
      displaySizeValues,
      productPrice,
      currentCurrency,
      addItem,
    } = this.props;

    console.log(this.props.cartItems);
    return (
      <DescriptionContainer>
        <p className="product_brand">{productDetails.brand}</p>
        <p className="product_name">{productDetails.name}</p>
        {attributeName[0] ? (
          <p className="medium_header-size">{attributeName[0]}:</p>
        ) : null}
        <div className="size-container">
          {displaySizeValues[0]?.map((itemAttr, index) => (
            <SmallButtonContainer
              BigSquare
              className="product-size"
              key={index}
            >
              {itemAttr}
            </SmallButtonContainer>
          ))}
        </div>
        <span className="medium_header-price">Price: </span>
        <h4 className="product-price">
          {Parse(currencyIcons[currentCurrency])} {productPrice}
        </h4>
        <CustomButton onClick={() => addItem(productDetails)}>
          Add to cart
        </CustomButton>

        <div className="product-description">
          {Parse(`${productDetails.description}`)}
        </div>
      </DescriptionContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptions);
