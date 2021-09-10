import React from "react";

import { connect } from "react-redux";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { LOAD_PRODUCTS } from "./GraphQL/Queries";

import ShopPage from "./Pages/ShopPage/ShopPage";

import { Route, Switch, Redirect } from "react-router";
import { updateCollections } from "./Redux/shop/shopActions";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: "",
      data: null,
    };
  }
  async componentDidMount() {
    this.setState({ isLoading: true });
    const { updateCollections } = this.props;

    try {
      const response = await client.query({ query: LOAD_PRODUCTS });
      updateCollections(response.data.categories);
      // this.setState({ data: response.data.categories, isLoading: false });
      console.log(response.data);
    } catch (error) {
      this.setState({ error: error, isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    console.log(this.state.data);

    const { isLoading, error } = this.state;

    return (
      <ApolloProvider client={client}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              isLoading ? <Redirect to="/shop" /> : <LoadingSpinner />
            }
          />
          <Route
            path="/shop"
            render={(props) => (
              <ShopPage
                isLoading={isLoading}
                error={error}
                data={this.state.data}
                {...props}
              />
            )}
          />
        </Switch>
      </ApolloProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(App);
