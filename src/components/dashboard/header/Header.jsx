import React, { Component } from 'react';
import './Header.css';
import '../../../assets/fonts/fonts.css';

import HeaderLeft from './headerMain/HeaderLeft';
import HeaderRight from './headerMain/HeaderRight';

export default class Header extends Component {
    render() {
      const { user } = this.props;

      return (
        <header className="header">
            <HeaderLeft />
            <HeaderRight user={ user } />
        </header>
      );
    }
  }