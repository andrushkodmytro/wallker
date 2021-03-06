import React, { Component } from 'react';
import './Today.css';


import TodayResultsValue from './TodayResultsValue.jsx';

import first_data from '../../../assets/img/first-data.png';
import second_data from '../../../assets/img/second-data.png';
import third_data from '../../../assets/img/third-data.png';

export default class TodayResults extends Component {
    render() {
      const { user } = this.props;

      return (
        <div className="results">
            <TodayResultsValue 
              src={ first_data } 
              user={ user.steps } 
              info="steps"/>
            <TodayResultsValue 
              src={ second_data } 
              user={ user.distance } 
              info="distance"/>
            <TodayResultsValue 
              src={ third_data } 
              user={ user.kcal } 
              info="kcal"/>
        </div>
      );
    }
  }