import React from "react";
import "./style.css";

export const UserLogin = (): JSX.Element => {
  return (
    <div className="user-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group-background">
            <img
              className="shape-with-text"
              alt="Shape with text"
              src="https://c.animaapp.com/HnSOxlFQ/img/shape-with-text.svg"
            />
            <div className="gradient-overlay" />
            <div className="gradient-overlay-top" />
          </div>
          <div className="box-user-password" />
          <div className="group-forgot">
            <div className="overlap-group">
              <div className="box-forgot" />
              <div className="text-wrapper">Forgot Password</div>
              <img
                className="icon-question-circle"
                alt="Icon question circle"
                src="https://c.animaapp.com/HnSOxlFQ/img/---icon--question-circle-@2x.png"
              />
            </div>
          </div>
          <div className="group-user">
            <img className="line-user" alt="Line user" src="https://c.animaapp.com/HnSOxlFQ/img/lineuser.svg" />
            <div className="div">
              <div className="text-wrapper-2">email id</div>
              <img
                className="icon-mail"
                alt="Icon mail"
                src="https://c.animaapp.com/HnSOxlFQ/img/---icon--mail-@2x.png"
              />
            </div>
          </div>
          <div className="group-password">
            <img className="line-PW" alt="Line PW" src="https://c.animaapp.com/HnSOxlFQ/img/lineuser.svg" />
            <div className="overlap-2">
              <div className="text-wrapper-3">password</div>
              <img
                className="icon-lock"
                alt="Icon lock"
                src="https://c.animaapp.com/HnSOxlFQ/img/---icon--lock-@2x.png"
              />
            </div>
          </div>
          <div className="group-brand">
            <img
              className="icon-user-circle"
              alt="Icon user circle"
              src="https://c.animaapp.com/HnSOxlFQ/img/---icon--user-circle-@2x.png"
            />
            <img className="logo" alt="Logo" src="https://c.animaapp.com/HnSOxlFQ/img/logo.png" />
          </div>
          <div className="group-login-button">
            <div className="overlap-3">
              <div className="box-login" />
              <div className="text-wrapper-4">LOGIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
