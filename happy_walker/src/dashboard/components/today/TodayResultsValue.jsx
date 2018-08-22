import React, { Component } from 'react';
import './Today.css';
import '../../assets/fonts/fonts.css';

export default class TodayResultsValue extends Component {
    render() {
      return (
        <div className="steps">
            <img src={ this.props.src } alt="graphic"/>
            <div className="info">
                <p className="count_value">{ this.props.value }</p>
                <p className="info__steps">{ this.props.info }</p>
            </div>
        </div>
      );
    }
  }