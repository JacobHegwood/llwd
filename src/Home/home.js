import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header
          className="header"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/long-leaf-web-design/image/upload/c_scale,w_1920/v1558304008/stock/pines_dfbsdp.jpg')"
          }}
        >
          <div className="header__logo" />
          <div className="header__header">
            Professional, <span className="header__header--orange">Local</span>{" "}
            Websites
          </div>
        </header>
        <main className="main">
          <h1 className="h1">Our Mission</h1>
          <div className="contentbox">
            <p>
              Create a stunning, functional web presence to drive customers to
              your business or educate the audience of your organization, and do
              so at an affordable price; that’s our mission. This company was
              created to grow businesses and organizations in the pinebelt,
              because we understand the importance of a strong local economy.
            </p>
            <p>
              Whether you're looking to boost your business, establish a web
              presence, or update your web presence, we want to help.
            </p>
          </div>
        </main>
        <Link to="/services">
          <button className="button">Continue...</button>
        </Link>
      </div>
    );
  }
}
