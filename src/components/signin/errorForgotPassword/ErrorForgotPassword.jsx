import React, { Component } from 'react';
import "./ErrorForgotPassword.css"

export default class ErrorForgotPassword extends Component {
  render() {
    return (
        <span className="span__error_fp">{this.props.error}</span>
    )
  }
}
