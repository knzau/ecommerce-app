import React, { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { addItem } from "../../Redux/cart/cartActions";
import Attributes from "../Attributes/Attributes";
import {
  selectCartItems,
  selectAttribItems,
  selectToggleAttribHidden,
} from "../../Redux/cart/cartSelector";
import CustomButton from "../CustomButton/CustomButton";
import { DescriptionContainer } from "./ProductDescriptionsStyles";

class ProductDescriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributeTypes: this.props.defaultTypes,
      warning: false,
      cartClicked: false,
      success: false,
    };
  }

  render() {
    const {
      productDetails,
      productPrice,
      currencySign,
      addItem,
      displayValues,
      defaultTypes,
    } = this.props;

    const { success, warning, attributeItem, attributeTypes } = this.state;

    const isTypesSelected = attributeTypes.every(
      (eachType) => Object.keys(eachType.item).length > 0
    );

    const handleAddToCart = () => {
      this.setState({ warning: false, success: false });

      if (isTypesSelected === true) {
        const selectedProduct = {
          ...productDetails,
          attributes: attributeTypes,
        };
        addItem(selectedProduct);
        this.setState({ success: true, attributeTypes: defaultTypes });
      } else {
        this.setState({ warning: true });
      }
    };

    const addNewAttribItem = (newItem) => (selectedType) => {
      this.setState((prevState) => ({
        attributeTypes: prevState.attributeTypes.map((eachItem) =>
          eachItem.name === selectedType.id
            ? {
                ...eachItem,
                item: eachItem.item.id === newItem.id ? {} : newItem,
              }
            : eachItem
        ),
        warning: false,
        success: false,
      }));
    };

    const selectTypesLabel = `Please select ${attributeTypes
      .map((eachType) => eachType.name)
      .join(" , ")}`;

    return (
      <DescriptionContainer>
        <p className="product_brand">{productDetails.brand}</p>
        <p className="product_name">{productDetails.name}</p>

        <Attributes
          displayValues={displayValues}
          handleAttribute={addNewAttribItem}
          success={success}
          warning={warning}
          attributeItem={attributeItem}
          selectedAttributes={attributeTypes}
        />

        <p className="medium_header-price">Price: </p>
        <h4 className="product-price">
          {parse(`${currencySign}`)} {productPrice}
        </h4>

        <CustomButton onClick={() => handleAddToCart()} warning={warning}>
          {!success && !warning
            ? "Add to cart"
            : success
            ? "Added Product To Cart"
            : selectTypesLabel}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptions);
