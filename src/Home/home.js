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
          <button className="button">See Our Services</button>
        </Link>
        <main className="main">
          <h1 className="h1">About Us</h1>
          <div className="contentbox">
            <p>
              We are a group of highly trained web designer/developers in the
              pinebelt. We boast the latest technologies and custom built,
              professional designs at an affordable price. We aren't your
              typical run-of-the-mill web design company based out of a foreign
              country. Those companies typically start you off with a base price
              of $400 and quickly charge you for every little thing such as
              logos, banners, SEO, and revisions, only to find you're getting
              another low quality "cookie cutter" website at the end. We don't
              nickel and dime people, our price is our price because we know you
              are looking for hasle-free quality and someone to be accountable
              for their work.
            </p>
          </div>
        </main>
      </div>
    );
  }
}
