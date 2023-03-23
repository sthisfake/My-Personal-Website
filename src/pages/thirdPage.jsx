import React, { Component } from "react";
import email from "../icons/mail.png";
import phone from "../icons/phone.png";
import git from "../icons/git.png";
import telegram from "../icons/telegram.webp";

class ThirdPage extends Component {
  state = {};
  render() {
    return (
      <div className="contactPage" ref={this.props.refrence}>
        <br />
        <br />
        <br />
        <br />
        <div className="contactMe">
          <h1>You can contact me through this links</h1>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-4">
              <div className="stuff">
                <div className="mailText">
                  <h1>
                    <img
                      className="mail"
                      style={{ width: 80, height: 80 }}
                      src={email}
                    />
                    Email :
                  </h1>
                </div>

                <div className="phoneText">
                  <h1>
                    <img
                      className="phone"
                      style={{ width: 60, height: 60 }}
                      src={phone}
                    />
                    Phone :
                  </h1>
                </div>

                <div className="gitText">
                  <h1>
                    <img
                      className="git"
                      style={{ width: 60, height: 60 }}
                      src={git}
                    />
                    GitHub :
                  </h1>
                </div>

                <div className="telegramText">
                  <h1>
                    <img
                      className="telegram"
                      style={{ width: 60, height: 60 }}
                      src={telegram}
                    />
                    Telegram :
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-sm-10">rgergrg</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdPage;
