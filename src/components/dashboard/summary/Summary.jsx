import React, { Component } from 'react';
import './Summary.css';


export default class Summary extends Component {
    render() {
      const { text } = this.props;

      return (
        <div className="summary">
            <p className="summary__text">{ text }</p>
        </div>
      );
    }
}