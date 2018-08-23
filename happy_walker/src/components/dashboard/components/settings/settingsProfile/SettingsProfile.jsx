import React, { Component } from 'react';
import '../Settings.css';
import '../../../../../assets/fonts1/fonts.css';

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
                <div class="first_name">
                  <label class="first_name__label">First&nbsp;Name</label>
                  <input class="first_name__input" type="text"/>
                </div>
                <div class="last_name">
                  <label class="last_name__label">Last&nbsp;Name</label>
                  <input class="last_name__input" type="text"/>
                </div>
                <div class="email">
                  <label class="email__label">Email</label>
                  <input class="emaill__input" type="email"/>
                </div>
                <div class="location">
                  <label class="location__label">Location</label>
                  <input class="location__input" type="text"/>
                </div>
            </div>
            <div className="photo_upload">
              <div className="photo_upload__photo">
                <img src={ photo } alt="account-photo"/>
              </div>
              <div className="photo_upload__details">
                <label class="photo__label">Your&nbsp;Photo</label>
                <div className="button_file">
                  <button class="button_photo" >Upload</button>
                  <input type="file" name="myfile" />
                </div>
                <p>Format: JPEG, PNG or GIF. Max size: 500K.</p>
              </div>
            </div>
            <div className="save_block">
              <button class="save_block__button">Save</button>
            </div>
          </div>
        </div>
      );
    }
  }