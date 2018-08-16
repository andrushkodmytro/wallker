import React, { Component } from 'react';
import "./style.css";

export default class ErrorSignIn extends Component {
  render() {
    return (
        <div className="error">
            <p>
                {this.props.error}
            </p>
        </div>
    )
  }
}
