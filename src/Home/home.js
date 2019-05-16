import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header
          className="header"
          style={{
            backgroundImage:
              "url('https://nr2mx6024.codesandbox.io/stock/pines.jpg')"
          }}
        >
          <div className="header__logo" />
          <div className="header__header">
            Professional, <span className="header__header--orange">Local</span>{" "}
            Websites
          </div>
        </header>
        <main className="main" />
      </div>
    );
  }
}
