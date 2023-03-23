import React, { Component } from "react";
import java from "../icons/java.png";
import python from "../icons/python.png";
import go from "../icons/go.png";
import c from "../icons/c.png";
import js from "../icons/js.png";
import flutter from "../icons/flutter.png";
import flask from "../icons/flask.png";
import gin from "../icons/gin.png";
import electron from "../icons/electron.png";
import react from "../icons/react.png";

class SecondPage extends Component {
  state = {};
  render() {
    return (
      <div className="aboutMeSection" ref={this.props.refrence}>
        <br />
        <br />
        <br />
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <div className="quote">
                <blockquote>
                  <p className="paragrapgh font-italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo ."
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="skils">
                <h1>Programing Languages :</h1>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="javaText">
                      <img
                        className="java"
                        style={{ width: 80, height: 80 }}
                        src={java}
                      />
                      <h3>Java</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="pythonText">
                      <img
                        className="python"
                        style={{ width: 80, height: 80 }}
                        src={python}
                      />
                      <h3>Python</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="goText">
                      <img
                        className="go"
                        style={{ width: 80, height: 80 }}
                        src={go}
                      />
                      <h3>Go</h3>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="cText">
                      <img
                        className="clang"
                        style={{ width: 80, height: 80 }}
                        src={c}
                      />
                      <h3>C</h3>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="jsText">
                      <img
                        className="js"
                        style={{ width: 80, height: 80 }}
                        src={js}
                      />
                      <h3>Javascript</h3>
                    </div>
                  </div>
                </div>
                <h2>Frameworks :</h2>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="flutterText">
                      <img
                        className="flutter"
                        style={{ width: 80, height: 80 }}
                        src={flutter}
                      />
                      <h3>Flutter</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="flaskText">
                      <img
                        className="flask"
                        style={{ width: 80, height: 80 }}
                        src={flask}
                      />
                      <h3>Flask</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="ginText">
                      <img
                        className="gin"
                        style={{ width: 80, height: 80 }}
                        src={gin}
                      />
                      <h3>Gin</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="electronText">
                      <img
                        className="electron"
                        style={{ width: 80, height: 80 }}
                        src={electron}
                      />
                      <h3>Electron</h3>
                    </div>
                  </div>
                  <div className="col-sm-1">
                    <div className="reactText">
                      <img
                        className="react"
                        style={{ width: 80, height: 80 }}
                        src={react}
                      />
                      <h3>React</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="buttonDown">
          <button
            type="button"
            className="btn btn-primary btn-circle btn-xl"
            onClick={() => this.props.onChange("contact")}
          >
            <i className="fa fa-arrow-down fa-3x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default SecondPage;
