import React, { Component } from "react";
import java from "../icons/java.png";
import python from "../icons/python.png";
import go from "../icons/go.png";
import c from "../icons/c.png";
import js from "../icons/js.png";

class SecondPage extends Component {
  state = {};
  render() {
    return (
      <div className="aboutMeSection" ref={this.props.refrence}>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <blockquote class="blockquote p-5 rounded ">
                <p class="paragrapgh font-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo ."
                </p>
              </blockquote>
            </div>
            <div className="col-sm-6">
              <div className="skils">
                <h1>Programing Languages :</h1>
                <div className="row">
                  <div class="col-sm-3">
                    <img
                      className="java"
                      style={{ width: 80, height: 80 }}
                      src={java}
                    />
                  </div>
                  <div class="col-sm-3">
                    <img
                      className="java"
                      style={{ width: 80, height: 80 }}
                      src={python}
                    />
                  </div>
                  <div class="col-sm-3">
                    <img
                      className="java"
                      style={{ width: 80, height: 80 }}
                      src={go}
                    />
                  </div>
                  <div class="col-sm-3">
                    <img
                      className="java"
                      style={{ width: 80, height: 80 }}
                      src={c}
                    />
                  </div>
                  <div class="col-sm-3">
                    <img
                      className="java"
                      style={{ width: 80, height: 80 }}
                      src={js}
                    />
                  </div>
                </div>
                <h2>Frameworks :</h2>
              </div>
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
    );
  }
}

export default SecondPage;
