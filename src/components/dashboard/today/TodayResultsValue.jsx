import React, { Component } from 'react';
import './Today.css';
import '../../../assets/fonts/fonts.css';

export default class TodayResultsValue extends Component {
    render() {
      const { user } = this.props;
      
      return (
        <div className="steps">
            <img src={ this.props.src } alt="graphic"/>
            <div className="info">
                <p className="count_value">{ user }</p>
                <p className="info__steps">{ this.props.info }</p>
            </div>
        </div>
      );
    }
  }