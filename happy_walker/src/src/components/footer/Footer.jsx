import React, { Component } from 'react';
import './Footer.css';
import '../../assets/fonts/fonts.css';

import logo_lasoft from '../../assets/img/logo-lasoft.png';

export default class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <img src={ logo_lasoft } alt="logo lasoft"/>
        </div>
      );
    }
  }