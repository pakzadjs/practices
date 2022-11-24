import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import UsersContextProvider from "./store/UsersContextProvider";
import CartContextProvider from "./store/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </UsersContextProvider>
);
