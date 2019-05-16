import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <header className="header header--services">
          <div className="header__logo" />
          <div className="header__header">
            What <span className="header__header--orange">We Do</span>
          </div>
        </header>
        <main className="main">
          <div className="card">
            <div className="card__header">Complete Web Design Services</div>
            <div className="card__header card__header--price">$367</div>
            <li className="card__bullet">Price Point A</li>
            <li className="card__bullet">Price Point B</li>
            <li className="card__bullet">Price Point C</li>
            <button className="button">Select</button>
          </div>
          <div className="card">
            <div className="card__header">$467</div>
            <li className="card__bullet">Price Point A</li>
            <li className="card__bullet">Price Point B</li>
            <li className="card__bullet">Price Point C</li>
          </div>
        </main>
      </div>
    );
  }
}
