import React, { Component } from 'react';
import "./ErrorSettings.css"

export default class ErrorSettings extends Component {
  render() {
    return (
        <span className="span__error_s">{this.props.error}</span>
    )
  }
}
