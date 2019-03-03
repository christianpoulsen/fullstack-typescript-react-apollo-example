import React, { Component } from "react";

import "./App.css";
import CatalogueCard from "./components/CatalogueCard/CatalogueCard";
import ProductAdder from "./components/ProductAdder/ProductAdder";

const logo = require("./logo.svg");

class App extends Component {
  render() {
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
        <h3>Add a new product</h3>
        <ProductAdder />
        <h3>Catalogue</h3>
        <CatalogueCard />
      </div>

    );
  }
}

export default App;
