import React, { Component } from "react";
import pouya from "../icons/pouya.png";

class FirstPage extends Component {
  state = {};
  render() {
    return (
      <div className="homeSection">
        <div className="comingDown">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="myName">
                  <div className="slide-left">
                    <h1>Pouya Teimoury</h1>
                  </div>
                  <div className="slide-left2">
                    <h2>Software Engineer</h2>
                    <h3>Iran / Shiraz</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="imageAnim">
                  <img
                    className="imagePouya"
                    style={{ width: 480, height: 480 }}
                    src={pouya}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="buttonDown">
            <button
              type="button"
              className="btn btn-primary btn-circle btn-xl raise"
              onClick={() => this.props.onChange("about")}
            >
              <i className="fa fa-arrow-down fa-3x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
