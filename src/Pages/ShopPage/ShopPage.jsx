import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Redirect } from "react-router-dom";

import CategoryPage from "../CategoryPage/CategoryPage";
import NotFound from "../../Components/NotFound/NotFound";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import {
  selectCategories,
  selectInitialCategorySlug,
} from "../../Redux/shop/shopSelector";
import { selectCurrencies } from "../../Redux/currency/currencySelector";
import { selectCartHidden } from "../../Redux/cart/cartSelector";

import { Wrapper } from "./ShopPageStyles";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryName: "",
      categoriesStateData: "",
      initialCategoryId: "",
    };
  }

  render() {
    const { match, initialCategoryId } = this.props;

    return (
      <Wrapper>
        <Route
          exact
          path="/shop"
          render={() => {
            return initialCategoryId ? (
              <Redirect to={`/shop/${initialCategoryId}`} />
            ) : (
              <NotFound />
            );
          }}
        />
        <Route
          exact
          path={`${match.path}/:categoryId/`}
          render={(props) => <CategoryPage {...props} />}
        />
        <Route
          path={`/shop/:categoryId/:productId`}
          render={(props) => <ProductDescriptionPage {...props} />}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  currencies: selectCurrencies(state),
  hidden: selectCartHidden(state),
  initialCategoryId: selectInitialCategorySlug(state),
});

export default withRouter(connect(mapStateToProps)(ShopPage));
