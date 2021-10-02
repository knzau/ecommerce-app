import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyIcons } from "../Utils";
import { setCurrency } from "../../Redux/currency/currencyActions";
import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";
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
    return (
      <Wrapper>
        <select value={this.state.value} onChange={this.handleSelect}>
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

const mapStateToProps = (state) => ({
  selectedCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
