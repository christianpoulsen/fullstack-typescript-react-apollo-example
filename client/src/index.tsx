import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "http://localhost:4000/",
});

const client = new ApolloClient({
    cache,
    link,
});

cache.writeData({
    data: {
        productItems: [],
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById("root") as HTMLElement);
