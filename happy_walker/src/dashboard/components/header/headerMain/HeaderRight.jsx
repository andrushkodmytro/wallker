import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../Header.css';
import '../../../assets/fonts/fonts.css';

import header__photo from '../../../assets/img/oval-3-copy.png';
import header__settings from '../../../assets/img/settings.png';
import header__signout from '../../../assets/img/signout.png';

export default class HeaderRight extends Component {
    render() {
      return (
        <div className="header__right">
            <div>
                <Link to="/dashboard">  
                <img className="header__photo" src={ header__photo } alt="header img"/>
                </Link>
            </div>
            <div>
                <p className="header__hello">Hi, { this.props.name }!</p>
            </div>
            <div>
                <Link to="/dashboard/settings"><img className="header__settings" src={ header__settings } alt="settings"/></Link>
            </div>
            <div>
                <a><img className="header__sign-out" src={ header__signout } alt="signout"/></a>
            </div>
        </div>
      );
    }
  }