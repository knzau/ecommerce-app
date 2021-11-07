import React, { Component } from "react";
import { SmallButtonContainer } from "../SmallButton/SmallButtonStyles";

class Attributes extends Component {
  render() {
    const {
      displayValues,
      selectToggleAttribHidden,
      addAttributeItem,
      toggleAttributeItem,
    } = this.props;

    const handleAttribute = (item, e) => {
      if (item.id === e.target.value) {
      }
      toggleAttributeItem();
      addAttributeItem(item);
    };

    return (
      <>
        {displayValues.map((itemAttr) => (
          <div key={itemAttr.id} className="attributes-main__container">
            <p className="attributes-name">{itemAttr.name}:</p>

            {itemAttr.id === "Color" ? (
              <div className="attributes-wrapper">
                {itemAttr.items.map((item, index) => (
                  <SmallButtonContainer
                    BigSquare
                    className="color-box"
                    key={index}
                    BackColor={selectToggleAttribHidden ? "Black" : item.value}
                    onClick={() => {
                      handleAttribute(item);
                    }}
                  >
                    {item.displayValue}
                  </SmallButtonContainer>
                ))}
              </div>
            ) : (
              <div className="attributes-wrapper">
                {itemAttr.items.map((item, index) => (
                  <SmallButtonContainer
                    BigSquare
                    itemId={item.id}
                    BackColor={selectToggleAttribHidden ? "Black" : "White"}
                    className="attribute-box"
                    key={index}
                    onClick={() => handleAttribute(item)}
                  >
                    {item.displayValue}
                  </SmallButtonContainer>
                ))}
              </div>
            )}
          </div>
        ))}
      </>
    );
  }
}

export default Attributes;
