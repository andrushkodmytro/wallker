import React, { Component } from 'react';
import "./style.css";

export default class ErrorSignIn extends Component {
  render() {
    return (
        <div className="error">
            <p>
                Wrong email/password. Try again or click Forgot password to reset it.
            </p>
        </div>
    )
  }
}
