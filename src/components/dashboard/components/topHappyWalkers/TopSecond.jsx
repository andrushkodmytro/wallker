import React, { Component } from 'react';
import './TopHW.css';
import '../../../../assets/fonts/fonts.css';

import Calendar from './Calendar.jsx';

import arrow_down from '../../../../assets/img/arrow-down.png';

export default class TopSecond extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            today : "Today"
        }
    }
    
    render() {
        const { handleBtnClick } = this.props;
        const { today } = this.state;

      return (
        <div className="top__second">
            <button className="button__fav" onClick={ () => handleBtnClick('FAW') }>Favorites</button>
            {/* <div className="calendar">
                <p className="calendar__text">{ today }</p>
                <div className="arrow_down">
                    <img 
                        src={ arrow_down }
                        alt="arrow down"/>
                </div>
                <div className="hidden">
                    <Calendar />
                </div>
            </div> */}
            <Calendar />
        </div>    
      );
    }
  }