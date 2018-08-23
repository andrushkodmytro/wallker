import React, { Component } from 'react';
import './Today.css';
import '../../../../assets/fonts1/fonts.css';

import TodayProfileInfo from './TodayProfileInfo';

import profile_photo from '../../../../assets/img/oval-profile.png';

export default class TodayProfile extends Component {
    render() {
      return (
        <div className="today__profile">
            <div className="today__text_block">
                <p className="today__text">Today</p>
            </div>
            <TodayProfileInfo 
              src={ profile_photo } 
              name="Effie Robbins"/>
        </div>
      );
    }
  }