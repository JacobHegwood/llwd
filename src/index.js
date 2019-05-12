import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./sass/main.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// FIRST RENDER IS OF A FUNCTIONAL COMPONENT WHICH CONTAINS
// A BROWSER ROUTER, SWITCH, AND MAIN '/' ROUTE TO OUR APP

const routes = (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routes, rootElement);
