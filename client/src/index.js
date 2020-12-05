import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

