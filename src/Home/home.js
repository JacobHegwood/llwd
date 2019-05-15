import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="header header--home">
          <div className="header__logo" />
          <div className="header__header">
            We Do <span className="header__header--orange">Websites</span>
          </div>
        </header>
        <main className="main" />
      </div>
    );
  }
}
