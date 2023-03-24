import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container" ref={this.props.refrence}>
        <div className="lineUnderNav">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navItemColor">
                  <ul className="navbar-nav">
                    <li
                      className="nav-item item-custom"
                      onClick={() => this.props.onChange("home")}
                    >
                      <a className="nav-link">Home</a>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => this.props.onChange("about")}
                    >
                      <a className="nav-link">About Me</a>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => this.props.onChange("contact")}
                    >
                      <a className="nav-link">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
