import React, { Component } from 'react';
import "./ErrorSignIn.css";

export default class ErrorSignIn extends Component {
  render() {
    return (
        <div className="error">
            <p>
                {this.props.emailError}
                {this.props.passwordError}
            </p>
        </div>
    )
  }
}
