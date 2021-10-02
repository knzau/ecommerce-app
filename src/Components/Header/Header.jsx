import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../CartICon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCurrentCurrency } from "../../Redux/currency/currencySelector";
import Logo from "../../svgs/Logo.svg";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";

import { Wrapper, CategoriesMenu, LogoWrapper } from "./HeaderStyles";

class Header extends Component {
  render() {
    const { currencies, hidden, categories, currentCurrency } = this.props;
    return (
      <Wrapper>
        <CategoriesMenu>
          {categories.map((category, index) => (
            <li className="category-link" key={index}>
              <Link to={`/shop/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </CategoriesMenu>
        <LogoWrapper>
          <img src={Logo} alt="Logo" />
        </LogoWrapper>
        {currencies ? <CurrencySwitcher currencies={currencies} /> : ""}
        <CartIcon />
        {hidden ? null : <CartDropDown currentCurrency={currentCurrency} />}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: selectCurrentCurrency(state),
});

export default connect(mapStateToProps)(Header);
