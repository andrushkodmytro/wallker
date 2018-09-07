import React, { Component } from 'react';
import '../Settings.css';
import '../../../../../assets/fonts/fonts.css';

import photo from '../../../../../assets/img/rectangle-4.png';

export default class SettingsProfile extends Component {
    render() {
      return (
        <div className="container_settings__profile">
            <div className="container_settings__profile-block">
              <div className="profile_text">
                <p>Profile</p>
              </div>
              <div className="inputs">
                <div className="first_name">
                  <label className="first_name__label">First&nbsp;Name</label>
                  <input className="first_name__input" type="text"/>
                </div>
                <div className="last_name">
                  <label className="last_name__label">Last&nbsp;Name</label>
                  <input className="last_name__input" type="text"/>
                </div>
                <div className="email">
                  <label className="email__label">Email</label>
                  <input className="emaill__input" type="email"/>
                </div>
                <div className="location">
                  <label className="location__label">Location</label>
                  <input className="location__input" type="text"/>
                </div>
            </div>
            <div className="photo_upload">
              <div className="photo_upload__photo">
                <img src={ photo } alt="account"/>
              </div>
              <div className="photo_upload__details">
                <label className="photo__label">Your&nbsp;Photo</label>
                <div className="button_file">
                  <button className="button_photo" >Upload</button>
                  <input type="file" name="myfile" />
                </div>
                <p>Format: JPEG, PNG or GIF. Max size: 500K.</p>
              </div>
            </div>
            <div className="save_block">
              <button className="save_block__button">Save</button>
            </div>
          </div>
        </div>
      );
    }
  }