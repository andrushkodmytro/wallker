import React, { Component } from 'react';
import '../Settings.css';
import '../../../../assets/fonts/fonts.css';;

export default class SettingsPassword extends Component {
    render() {
      return (
        <div className="container_settings__password">
            <div className="container_settings__password-block">
              <div className="profile_text">
                  <p>Password</p>
                </div>
                <div className="inputs">
                  <div className="current_password">
                    <label className="password__label">Current&nbsp;Password</label>
                    <input className="password__input" type="password"/>
                  </div>
                  <div className="new_password">
                    <label className="password__label">New&nbsp;Password</label>
                    <input className="password__input" type="password"/>
                  </div>
                  <div className="confirm_password">
                  <label className="password__label">Confirm&nbsp;New&nbsp;Password</label>
                  <input className="password__input" type="password"/>
                </div>
                </div>
                <div className="change_block">
              <button className="change_block__button">Change</button>
            </div>
            </div>
        </div>
      );
    }
  }