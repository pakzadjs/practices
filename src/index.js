import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UsersContextProvider from "./context/UsersContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </BrowserRouter>
);
