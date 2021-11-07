import React, { Component } from "react";
import { connect } from "react-redux";
import CurrencyDropDown from "../CurrencyDropDown/CurrencyDropDown";

import {
  setCurrency,
  setDropDownOpen,
} from "../../Redux/currency/currencyActions";
import {
  selectCurrencies,
  selectCurrentCurrency,
  selectDropDownOpen,
} from "../../Redux/currency/currencySelector";

import { Wrapper } from "./CurrencySwitcherStyles";

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.dropDown = React.createRef();
  }

  componentDidMount() {
    // Adding a click event listener
    document.addEventListener("click", this.handleOutsideClick);
  }

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  handleSelect(e) {
    const { setCurrency, setDropDownOpen } = this.props;
    console.log(setCurrency);
    console.log(setDropDownOpen);
    setCurrency(e.target.innerText);
    setDropDownOpen();
  }

  render() {
    return (
      <Wrapper ref={this.dropDown}>
        <CurrencyDropDown
          handleSelect={this.handleSelect}
          currencies={this.props.currencies}
          selectedCurrency={this.props.selectedCurrency}
          selectDropDownOpen={this.props.selectDropDownOpen}
          setDropDownOpen={this.props.setDropDownOpen}
        />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (selectedCurrency) => dispatch(setCurrency(selectedCurrency)),
  setDropDownOpen: () => dispatch(setDropDownOpen()),
});

const mapStateToProps = (state) => ({
  selectedCurrency: selectCurrentCurrency(state),
  currencies: selectCurrencies(state),
  selectDropDownOpen: selectDropDownOpen(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);

// <select value={this.state.value} onChange={this.handleSelect}>
//   {this.props.currencies.map((currency, index) => (
//     <option value={currency} key={index}>
//       {currency} {Parser(currencyIcons[currency])}
//     </option>
//   ))}
// </select>;
