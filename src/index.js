import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.querySelector("#root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
