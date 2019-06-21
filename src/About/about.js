import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="header header--about">
          <div className="header__logo" />
          <div className="header__header">
            Who <span className="header__header--orange">We Are</span>
          </div>
        </div>
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
