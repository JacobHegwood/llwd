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
          <h1 className="h1">Packages We Offer :</h1>
          <div className="cardholder">
            <div className="card">
              <div className="card__header">Website Design Package</div>
              <div className="card__header card__header--price">$697</div>
              <li className="card__bullet">
                Custom Graphic Design (Logos, Banners, etc. )
              </li>
              <li className="card__bullet">Custom Website Design</li>
              <li className="card__bullet">Custom Domain Name</li>
              <li className="card__bullet">
                One Hour Monthly Website Maintenance
              </li>
              <button className="button">Start</button>
            </div>
            <div className="card">
              <div className="card__header">Social Media Package</div>
              <div className="card__header card__header--price">$797</div>
              <li className="card__bullet">
                Custom Graphic Design (Logos, Banners, etc. )
              </li>
              <li className="card__bullet">Custom Website Design</li>
              <li className="card__bullet">Custom Domain Name</li>
              <li className="card__bullet">
                One Hour Monthly Website Maintenance
              </li>
              <li className="card__bullet">Facebook Page Creation</li>
              <li className="card__bullet">Instagram Account Creation</li>
              <button className="button">Start</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
