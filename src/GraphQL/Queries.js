import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query AllProducts {
    categories {
      name
      products {
        id
        name
        description
        category
        prices {
          currency
          amount
        }
      }
    }
  }
`;
