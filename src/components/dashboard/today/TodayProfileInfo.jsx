import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Today.css';


export default class TodayProfile extends Component {
    render() {
      const { user } = this.props;

      return (
        <div className="today__profile_info">
            <img src={ this.props.src } alt="profile img"/>
            <div className="today__name_edit">
                <p>{ `${user.first_name} ${user.last_name}` }</p>
                <Link to="/dashboard/settings">Edit profile</Link>
            </div> 
        </div>
      );
    }
  }