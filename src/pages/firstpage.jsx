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
                  <h1>Pouya Teimoury</h1>
                  <h2>Software Engineer</h2>
                  <h3>Iran / Shiraz</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  className="imagePouya"
                  style={{ width: 480, height: 480 }}
                  src={pouya}
                />
              </div>
            </div>
          </div>
          <div className="buttonDown">
            <button
              type="button"
              class="btn btn-primary btn-circle btn-xl"
              onClick={() => this.props.onChange("about")}
            >
              <i class="fa fa-arrow-down fa-3x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
