import React, { Component } from 'react';
import './Today.css';
import '../../assets/fonts/fonts.css';

export default class TodayProfile extends Component {
    render() {
      return (
        <div className="today__profile_info">
            <img src={ this.props.src } alt="profile img"/>
            <div className="today__name_edit">
                <p>{ this.props.name }</p>
                <a>Edit profile</a>
            </div> 
        </div>
      );
    }
  }