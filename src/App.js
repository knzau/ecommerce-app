import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router";

//Apollo Libraries
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import {
  updateCollections,
  setCategoryMenu,
  setCategorySlug,
} from "./Redux/shop/shopActions";
import { updateCurrencies } from "./Redux/currency/currencyActions";
import { selectCartHidden } from "./Redux/cart/cartSelector";
import { selectCurrencies } from "./Redux/currency/currencySelector";
import { LOAD_PRODUCTS_AND_CURRENCIES } from "./GraphQL/Queries";
import {
  selectCategories,
  selectInitialCategorySlug,
} from "./Redux/shop/shopSelector";

import Header from "./Components/Header/Header";
import ShopPage from "./Pages/ShopPage/ShopPage";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

//Global CSS Styles
import GlobalStyles from "./GlobalStyles";
import CartPage from "./Pages/CartPage/CartPage";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

const ShopPageWithSpinner = LoadingSpinner(ShopPage);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: "",
      data: null,
      selectedCategoryName: "",
      initialCategoryId: "",
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { updateCollections, updateCurrencies, setCategorySlug } = this.props;

    try {
      const response = await client.query({
        query: LOAD_PRODUCTS_AND_CURRENCIES,
      });
      updateCollections(response.data.categories);
      updateCurrencies(response.data.currencies);
      setCategorySlug(response.data.categories);
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ error: error, isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleMenuClick = (categoryName) => {
    this.props.selectCategoryMenu(categoryName);
  };

  render() {
    const { isLoading, error } = this.state;
    const { match, categories, hidden, currencies } = this.props;

    if (error) {
      return <p>Error! {error}</p>;
    } else
      return (
        <ApolloProvider client={client}>
          <GlobalStyles />
          <Header
            categories={categories}
            match={match}
            hidden={hidden}
            currencies={currencies}
            handleMenuClick={this.handleMenuClick}
          />
          <Switch>
            <Redirect exact from="/" to="/shop" />
            <Route
              path="/shop"
              render={(props) => (
                <ShopPageWithSpinner isLoading={isLoading} {...props} />
              )}
            />

            <Route exact path="/cart" render={(props) => <CartPage />} />
          </Switch>
        </ApolloProvider>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (categoriesMap) =>
    dispatch(updateCollections(categoriesMap)),
  updateCurrencies: (currenciesData) =>
    dispatch(updateCurrencies(currenciesData)),
  setCategorySlug: (categoriesMap) => dispatch(setCategorySlug(categoriesMap)),
  selectCategoryMenu: (categoryName) => dispatch(setCategoryMenu(categoryName)),
});

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  currencies: selectCurrencies(state),
  hidden: selectCartHidden(state),
  initialCategoryId: selectInitialCategorySlug(state),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
