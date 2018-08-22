import React, { Component } from 'react';
import './ForgotPassword.css';
import '../../assets/fonts/fonts.css';

import ForgotPassFirstSection from './forgotPasswordMain/ForgotPassFirstSection';
import ForgotPassSecondSection from './forgotPasswordMain/ForgotPassSecondSection';

export default class ForgotPassword extends Component {
    render() {
      return (
        <div className="container-reset">
            <ForgotPassFirstSection />
            <ForgotPassSecondSection />
        </div> 
      );
    }
  }