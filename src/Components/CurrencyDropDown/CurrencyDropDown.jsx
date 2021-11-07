import React, { Component } from "react";
import ArrowDown from "../../svgs/sweb_arrow_down.svg";
import ArrowUp from "../../svgs/sweb_arrow_up.svg";
import Parser from "html-react-parser";
import { currencyIcons } from "../Utils";
import { Wrapper } from "./CurrencyDropDownStyles";

class Dropdown extends Component {
  render() {
    const {
      currencies,
      selectDropDownOpen,
      handleSelect,
      selectedCurrency,
      setDropDownOpen,
    } = this.props;
    const title = Parser(`${currencyIcons[selectedCurrency]}`);

    return (
      <Wrapper>
        <button
          type="button"
          className="dd-header"
          onClick={() => setDropDownOpen()}
        >
          <div className="dd-header-title">{title}</div>
          {selectDropDownOpen ? (
            <img
              className="dd-currency-icon arrow-up"
              src={ArrowUp}
              alt="arrow-up"
            />
          ) : (
            <img
              className="dd-currency-icon arrow-down "
              src={ArrowDown}
              alt="arrow-down"
            />
          )}
        </button>
        {selectDropDownOpen && (
          <div className="dd-list" role="list">
            {currencies.map((currency, index) => (
              <button
                type="button"
                className="dd-list-item"
                key={index}
                onClick={(e) => {
                  handleSelect(e);
                }}
              >
                {Parser(currencyIcons[currency])} <span>{currency}</span>
              </button>
            ))}
          </div>
        )}
      </Wrapper>
    );
  }
}

export default Dropdown;
