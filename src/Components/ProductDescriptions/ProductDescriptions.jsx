import React, { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import {
  addAttributeItem,
  addItem,
  toggleAttributeItem,
} from "../../Redux/cart/cartActions";
import Attributes from "../Attributes/Attributes";
import {
  selectCartItems,
  selectAttribItems,
  selectToggleAttribHidden,
} from "../../Redux/cart/cartSelector";

import CustomButton from "../CustomButton/CustomButton";
import { DescriptionContainer } from "./ProductDescriptionsStyles";

class ProductDescriptions extends Component {
  render() {
    const {
      productDetails,
      productPrice,
      currencySign,
      addItem,
      displayValues,
      addAttributeItem,
      cartAttribItems,
      toggleAttributeItem,
      selectToggleAttribHidden,
    } = this.props;

    const handleAddToCart = () => {
      if (!cartAttribItems) {
        return alert("Select Product Attributes");
      } else {
        return addItem(productDetails);
      }
    };

    return (
      <DescriptionContainer>
        <p className="product_brand">{productDetails.brand}</p>
        <p className="product_name">{productDetails.name}</p>

        <Attributes
          displayValues={displayValues}
          addAttributeItem={addAttributeItem}
          selectToggleAttribHidden={selectToggleAttribHidden}
          toggleAttributeItem={toggleAttributeItem}
        />

        <p className="medium_header-price">Price: </p>
        <h4 className="product-price">
          {parse(`${currencySign}`)} {productPrice}
        </h4>

        <CustomButton onClick={() => handleAddToCart()}>
          Add to cart
        </CustomButton>

        <div className="product-description">
          {parse(`${productDetails.description}`)}
        </div>
      </DescriptionContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartAttribItems: selectAttribItems(state),
  selectToggleAttribHidden: selectToggleAttribHidden(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleAttributeItem: () => dispatch(toggleAttributeItem()),
  addAttributeItem: (item) => dispatch(addAttributeItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptions);
