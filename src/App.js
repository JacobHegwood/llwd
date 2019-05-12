import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Nav from "./Nav/nav";

import Home from "./Home/home";
import Services from "./Services/services";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </div>
    );
  }
}
