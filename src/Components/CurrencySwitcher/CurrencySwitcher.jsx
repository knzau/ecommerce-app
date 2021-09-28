import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { currencyIcons } from "../Utils";

import { setCurrency } from "../../Redux/currency/currencyActions";
import Parser from "html-react-parser";

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

    return (
      <Select value={this.state.value} onChange={this.handleSelect}>
        {this.props.currencies.map((currency, index) => (
          <option value={currency} key={index}>
            {currency} {Parser(currencyIcons[currency])}
          </option>
        ))}
      </Select>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (selectedCurrency) => dispatch(setCurrency(selectedCurrency)),
});

export default connect(null, mapDispatchToProps)(CurrencySwitcher);

const Select = styled.select`
  background: var(--c-white);
  border: none;
  min-width: 114px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  outline: none;

  option {
    color: black;
    background: white;
    width: 100%;
    font-size: 18px;
    font-style: normal;
    cursor: pointer;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    height: 39px;
    padding: 5px 3px;
    outline: none;
  }
`;
