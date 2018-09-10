import React, { Component } from 'react';
import './Today.css';
import '../../../assets/fonts/fonts.css';

import TodayResultsValue from './TodayResultsValue.jsx';

import first_data from '../../../assets/img/first-data.png';
import second_data from '../../../assets/img/second-data.png';
import third_data from '../../../assets/img/third-data.png';

export default class TodayResults extends Component {
    render() {
      return (
        <div className="results">
            <TodayResultsValue 
              src={first_data} 
              value="9,593" 
              info="steps"/>
            <TodayResultsValue 
              src={second_data} 
              value="7,42 km" 
              info="distance"/>
            <TodayResultsValue 
              src={third_data} 
              value="482" 
              info="kcal"/>
        </div>
      );
    }
  }