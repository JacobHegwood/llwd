import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav/nav";

import Home from "./Home/home";
import Services from "./Services/services";
import About from "./About/about";

export default class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    );
  }
}
