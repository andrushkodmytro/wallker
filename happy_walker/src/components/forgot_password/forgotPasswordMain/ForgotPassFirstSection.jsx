import React, { Component } from 'react';
import '../ForgotPassword.css';
import {Link} from "react-router-dom";
import '../../../assets/fonts/fonts.css';

export default class ForgotPassword extends Component {
    render() {
        const withoutButton = <div>
                                <p className="form__text">We have sent you an email with reset <br></br> instructions. If the email does not arrive soon, <br></br> check your spam folder.</p>
                            </div>;
      return (
        <div className="section-first">
            <form className="form">
                <p className="form__title">Password reset</p>
                    <div className="hidd">
                        <p className="form__text">Enter your email below to receive your <br></br>password instructions</p>
                        <div className="email">
                                <label className="email__label">Email</label>
                                <input className="email__input" type="email"/>
                        </div>
                        <div className="button">
                            <button className="button__send" type="submit" onClick={ this.handleClickButton }>Send password</button>
                        </div>
                    </div>
                <Link  to="signin">Back to Sign in</Link>
            </form>
        </div>
      );
    }
  }