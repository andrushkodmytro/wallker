import React, { Component } from 'react';
import './Today.css';
import TodayProfileInfo from './TodayProfileInfo';

import profile_photo from '../../../assets/img/avatar.png';

export default class TodayProfile extends Component {
    render() {
      const { user } = this.props

      return (
        <div className="today__profile">
            <div className="today__text_block">
                <p className="today__text">Today</p>
            </div>
            <TodayProfileInfo 
              src={ profile_photo } 
              user={ user }/>
        </div>
      );
    }
  }