import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink
          exact
          to="/"
          className="nav nav__link"
          activeClassName="nav__link--active"
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className="nav nav__link"
          activeClassName="nav__link--active"
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className="nav nav__link"
          activeClassName="nav__link--active"
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="nav nav__link"
          activeClassName="nav__link--active"
        >
          Contact
        </NavLink>
      </nav>
    );
  }
}
