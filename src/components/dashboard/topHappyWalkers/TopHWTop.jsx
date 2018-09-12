import React, { Component } from 'react';
import './TopHW.css';
import '../../../assets/fonts/fonts.css';

import TopFirst from './TopFirst.jsx';
import TopSecond from './TopSecond.jsx';

export default class TopHWTop extends Component {
    render() {
      const { handleBtnClick } = this.props;
      
      return (
        <div className="top">
            <TopFirst handleBtnClick={ handleBtnClick } />
            <TopSecond handleBtnClick={ handleBtnClick } />    
        </div>
      );
    }
  }