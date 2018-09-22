import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import './Header.css';


import HeaderLeft from './headerMain/HeaderLeft';
import HeaderRight from './headerMain/HeaderRight';

 class Header extends Component {
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
  export default  withRouter(Header)