import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header
          className="header"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/long-leaf-web-design/image/upload/v1558304008/stock/pines_dfbsdp.jpg')"
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
