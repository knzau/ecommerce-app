import React from "react";
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
      data: [],
      error: "",
    };
  }
  componentDidMount() {
    const fetchDataAsync = async (params) => {
      try {
        this.setState({ ...this.state, isFetching: true });
        const response = await client.query({ query: params });
        this.setState({ data: response.data.categories, isLoading: false });
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
    const { data, isLoading, error } = this.state;
    console.log(data);
    return (
      <ApolloProvider client={client}>
        <ShopPage data={data} isLoading={isLoading} error={error} />
      </ApolloProvider>
    );
  }
}

export default App;
