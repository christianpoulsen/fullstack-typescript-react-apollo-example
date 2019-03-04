import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query productList {
    products {
      name
      price
      quantity
    }
  }
`;
