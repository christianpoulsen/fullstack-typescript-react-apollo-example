import gql from "graphql-tag";
import React, { Component } from "react";
import { Query } from "react-apollo";

import "./App.css";
import ProductCard from "./components/ProductCard";

const logo = require("./logo.svg");

const GET_PRODUCTS = gql`
  query productList {
    products {
      name
      price
      quantity
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={GET_PRODUCTS}>
        {({ data, loading, error }) => {
          if (loading) {
            return <p>LOADING</p>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://www.apollographql.com/docs/tutorial/introduction.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Apollo Graphql
                </a>
              </header>
              <ProductCard products={data.products} />
            </div>
          );
        }}
      </Query>

    );
  }
}

export default App;
