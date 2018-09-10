import React, { Component } from 'react';
import '../Header.css';
import '../../../../assets/fonts/fonts.css';
import {Link} from "react-router-dom";
import header__logo from "../../../../assets/img/logo-light.png";

export default class HeaderLeft extends Component {
    render() {
      return (
        <div className="header__left">
          <Link to="/">\
            <img className="header__logo" src={ header__logo } alt="logo"/>
          </Link>
            
        </div>
      );
    }
  }