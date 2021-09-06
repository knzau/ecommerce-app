import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPages } from "./Redux/shop/shopSelector";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { LOAD_PRODUCTS } from "./GraphQL/Queries";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
import { Route, Switch } from "react-router";
import { updateCollections } from "./Redux/shop/shopActions";

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
    };
  }
  componentDidMount() {
    const { updateCollections } = this.props;

    const fetchDataAsync = async (params) => {
      try {
        this.setState({ ...this.state, isFetching: true });
        const response = await client.query({ query: params });
        updateCollections(response.data.categories);
        this.setState({ isLoading: false });
        console.log(response.data.categories);
      } catch (error) {
        console.log(error);
        this.setState({ error: error, isLoading: false });
      } finally {
        this.setState({ isLoading: false });
      }
    };

    fetchDataAsync(LOAD_PRODUCTS);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </ApolloProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  productsArray: selectCollectionsForPages,
});
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
