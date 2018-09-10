import React, { Component } from 'react';
import './TopHW.css';
import '../../../assets/fonts/fonts.css';

import Calendar from './Calendar.jsx';


export default class TopSecond extends Component {
    
    render() {
        const { handleBtnClick } = this.props;

      return (
        <div className="top__second">
            <button className="button__fav" onClick={ () => handleBtnClick('FAW') }>Favorites</button>
            <Calendar />
        </div>    
      );
    }
  }