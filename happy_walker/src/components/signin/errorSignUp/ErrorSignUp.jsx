import React, { Component } from 'react';
import "./ErrorSignUp.css"

export default class ErrorSpan extends Component {
  render() {
    return (
        <span className="span__error">{this.props.error}</span>
    )
  }
}
