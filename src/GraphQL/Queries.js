import { gql } from "@apollo/client";

export const LOAD_PRODUCTS_AND_CURRENCIES = gql`
  query AllProducts {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
    currencies
  }
`;
