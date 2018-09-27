import React, { Component } from 'react';
import './TopHW.css';


// import Calendar from './Calendar.jsx';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import arrow_down from '../../../assets/img/arrow-down.png';

export default class TopSecond extends Component {
    render() {
        const { handleBtnClick } = this.props;
        const today = "Today";

      return (
        <div className="top__second">
            <button className="button__fav" onClick={ () => handleBtnClick('FAW') }>Favorites</button>
            {/* <Calendar /> */}
            <div className="calendar">
                <p className="calendar__text">{ today }</p>
                <div className="arrow_down">
                    <img 
                        src={ arrow_down }
                        alt="arrow down"/>
                </div>
                <div className="hidden">
                    <DayPicker />
                </div>
            </div>
        </div>    
      );
    }
  }