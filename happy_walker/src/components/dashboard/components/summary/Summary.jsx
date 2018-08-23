import React, { Component } from 'react';
import './Summary.css';
import '../../../../assets/fonts1/fonts.css';

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