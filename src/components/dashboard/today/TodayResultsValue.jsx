import React, { Component } from 'react';
import './Today.css';


export default class TodayResultsValue extends Component {
    render() {
      const { data } = this.props;
      
      return (
        <div className="steps">
            <img src={ this.props.src } alt="graphic"/>
            <div className="info">
                <p className="count_value">{ data }</p>
                <p className="info__steps">{ this.props.info }</p>
            </div>
        </div>
      );
    }
  }