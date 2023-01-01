import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ModalProvider from "./context/ModalContext/ModalContextProvider";
import "./index.css";
import { router } from "./router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ApolloProvider>
  </React.StrictMode>
);
