import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    const myStyle = {
      position: "fixed",
      width: "100%",
      top: "0",
      zIndex: "10",
    };
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={myStyle}
      >
        <a className="navbar-brand mx-3" href="/">
          Thunder - News App
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" target="_blanck" href="/">
                Thunder News
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blanck"
                href="https://ntrv3390.github.io/react-text-utils/"
              >
                TextUtils
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/Ntrv3390"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://linkedin.com/in/mohammed-puthawala"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIN
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
