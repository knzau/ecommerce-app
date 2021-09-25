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

import { updateCollections, updateCurrencies } from "./Redux/shop/shopActions";
import { LOAD_PRODUCTS_AND_CURRENCIES } from "./GraphQL/Queries";
import { selectCategories } from "./Redux/shop/shopSelector";
import ShopPage from "./Pages/ShopPage/ShopPage";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage/ProductDescriptionPage";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

//Global CSS Styles
import GlobalStyles from "./GlobalStyles";

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
      isToggleOn: true,
    };
  }

  handleClick = (e) => {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
    console.log("clicked!!");
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { updateCollections, updateCurrencies } = this.props;

    try {
      const response = await client.query({
        query: LOAD_PRODUCTS_AND_CURRENCIES,
      });
      updateCollections(response.data.categories);
      updateCurrencies(response.data.currencies);
      this.setState({ isLoading: false });
      console.log(response.data);
    } catch (error) {
      this.setState({ error: error, isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { categories, match } = this.props;
    const { isLoading, error } = this.state;
    console.log(categories);

    if (error) {
      <p>Error! {error}</p>;
    } else
      return (
        <ApolloProvider client={client}>
          <GlobalStyles />

          <Switch>
            <Route
              path="/shop"
              render={(props) => (
                <ShopPageWithSpinner {...props} isLoading={isLoading} />
              )}
            />

            <Redirect from="/" to="/shop/" />
          </Switch>
        </ApolloProvider>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
  updateCurrencies: (currenciesData) =>
    dispatch(updateCurrencies(currenciesData)),
});

const mapStateToProps = (state, ownProps) => ({
  categories: selectCategories(state),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
