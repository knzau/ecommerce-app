import React, { Component } from "react";
import { SmallButtonContainer } from "../SmallButton/SmallButtonStyles";

class Attributes extends Component {
  render() {
    const { displayValues, handleAttribute, selectedAttributes } = this.props;

    const getButtonStyle = (item) => {
      return selectedAttributes?.some(
        (eachAttr) => eachAttr.item.id === item.id
      )
        ? "black"
        : item.value;
    };
    const getAttributeLabel = (name, item) =>
      name !== "Color" ? item.displayValue : "";

    return (
      <>
        {displayValues.map((itemAttr) => (
          <div key={itemAttr.id} className="attributes-main__container">
            <p className="attributes-name">{itemAttr.name}:</p>
            <div className="attributes-wrapper">
              {itemAttr.items.map((item, index) => (
                <SmallButtonContainer
                  BigSquare
                  className={`${itemAttr.name.toLowerCase()}-box`}
                  key={index}
                  BackColor={getButtonStyle(item)}
                  onClick={() => {
                    handleAttribute(item)(itemAttr);
                  }}
                >
                  {getAttributeLabel(itemAttr.name, item)}
                </SmallButtonContainer>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Attributes;
