import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyIcons } from "../Utils";
import { setCurrency } from "../../Redux/currency/currencyActions";
import Parser from "html-react-parser";
import { Wrapper } from "./CurrencySwitcherStyles";

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "usd" };
    this.handleSelect = this.handleSelect.bind(this);
  }
  currencies = this.props;

  handleSelect(e) {
    const selected = e.target.value;
    this.setState({ value: selected });
    this.props.setCurrency(selected);
  }

  render() {
    console.log(this.props);
    console.log(this.state.value);
    const defaultCurrency = Parser(
      `${currencyIcons[this.state.value.toUpperCase()]}`
    );
    console.log(defaultCurrency);
    return (
      <Wrapper>
        <select value={defaultCurrency} onChange={this.handleSelect}>
          {this.props.currencies.map((currency, index) => (
            <option value={currency} key={index}>
              {currency} {Parser(currencyIcons[currency])}
            </option>
          ))}
        </select>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (selectedCurrency) => dispatch(setCurrency(selectedCurrency)),
});

export default connect(null, mapDispatchToProps)(CurrencySwitcher);
