import React, { Component } from 'react';
import './TopHW.css';
import './Callendar.css';
import './main.css';
import '../../../../assets/fonts/fonts.css';

export default class Calendar extends Component {
    render() {
      return (
        <div className="callendar">
                <form id="form" method="get">
                    <div id="date_range_picker" className="date_range_picker">
                        <div className="values">
                            <div className="value date_at">
                                <span className="date_at"></span>
                                <input id="date_at" className="date_at" type="hidden" />
                            </div>
                                <div className="value date_to">
                                <span className="date_to"></span>
                                <input id="date_to" className="date_to" type="hidden" />
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="calendar">
                            <div className="button button-prev"></div>
                            <div className="button button-next"></div>
                            <div className="calendar-container"></div>
                        </div>
                    </div>
                </form>
            </div>    
      );
    }
  }
  