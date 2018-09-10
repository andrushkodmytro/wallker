import React, { Component } from 'react';
import './Header.css';
import '../../../assets/fonts/fonts.css';

import HeaderLeft from './headerMain/HeaderLeft';
import HeaderRight from './headerMain/HeaderRight';

export default class Header extends Component {
    render() {
      return (
        <header className="header">
            <HeaderLeft />
            <HeaderRight name="Effie" />
        </header>
      );
    }
  }