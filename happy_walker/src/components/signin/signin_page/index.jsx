import React, { Component } from 'react';
import SignInForm from "../signInForm";
import SignUpForm from "../signUpForm";
import Logo from "../../../assets/img/logo1.png";
import Backgroun from "../../../assets/img/rectangle-copy.png";
import ForgotPassword from "../forgot_password/ForgotPass";
import ConfirmEmail from "../confirmEmail/ConfirmEmail";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import "./style.css";

export default class Signin extends Component {   
  render() {
    return (
      <div className="container__signin">
        <div className="signin">
            <div className="signin__logo">
              <Link to="/">
                <img src={Logo} alt="Logo"/>
              </Link>
            </div>
          <div className="form__container">
            <Route path="/signin"component={SignInForm}/>
            <Route path="/forgot" component={ForgotPassword}/>
            <Route exact path="/signup" component={SignUpForm}/>
            <Route path="/signup/confirm" component={ConfirmEmail}/>
          </div>
        </div>
        <div className="section2">
            <img src={Backgroun} alt="walker"/>
        </div>
      </div>
    )
  }
}
