import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation addNewProduct($name: String!, $price: Float!, $quantity: Int) {
    addProduct(name: $name, price: $price, quantity: $quantity) {
        success
        message
        product {
            id
            name
            price
            quantity
        }
    }
  }
`;
