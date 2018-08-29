import React, { Component } from 'react';
import '../Header.css';
import '../../../../../assets/fonts/fonts.css';

import header__logo from '../../../../../assets/img/logo-light.png';

export default class HeaderLeft extends Component {
    render() {
      return (
        <div className="header__left">
            <img className="header__logo" src={ header__logo } alt="logo"/>
        </div>
      );
    }
  }