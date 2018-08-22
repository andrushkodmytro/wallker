import React, { Component } from 'react';
import '../ForgotPassword.css';
import '../../../assets/fonts/fonts.css';

import background_image from '../../../assets/img/rectangle-copy.png';

export default class ForgotPassword extends Component {
    render() {
      return (
        <div className="section-second">
            <img src={ background_image } alt="background"/>
        </div> 
      );
    }
  }