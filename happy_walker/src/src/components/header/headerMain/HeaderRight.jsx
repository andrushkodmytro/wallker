import React, { Component } from 'react';
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
                <img className="header__photo" src={ header__photo } alt="header img"/>
            </div>
            <div>
                <p className="header__hello">Hi, { this.props.name }!</p>
            </div>
            <div>
                <a><img className="header__settings" src={ header__settings } alt="settings"/></a>
            </div>
            <div>
                <a><img className="header__sign-out" src={ header__signout } alt="signout"/></a>
            </div>
        </div>
      );
    }
  }