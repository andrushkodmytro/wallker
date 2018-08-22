import React, { Component } from 'react';
import '../ForgotPassword.css';
import '../../../assets/fonts/fonts.css';

import logo from '../../../assets/img/logo.png';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onClickButton : false
        }

        this.handleClickButton = this.handleClickButton.bind(this);
    }
    
    handleClickButton() {
        this.setState ({
            onClickButton : true,
        });
    }
    render() {
        const withoutButton = <div>
                                <p className="form__text">We have sent you an email with reset <br></br> instructions. If the email does not arrive soon, <br></br> check your spam folder.</p>
                            </div>;
      return (
        <div className="section-first">
            <header>
                <img src={ logo } className="logo" alt="logo"/>
            </header>
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
                <a className="back-to">Back to Sign in</a>
            </form>
        </div>
      );
    }
  }