import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="header header--home">
          <div className="header__header">
            Long Leaf <span className="header__header--orange">Web Design</span>
          </div>
        </header>
        <main className="main">Text</main>
      </div>
    );
  }
}
