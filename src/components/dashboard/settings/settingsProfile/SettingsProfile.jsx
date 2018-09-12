import React, { Component } from 'react';
import '../Settings.css';
import '../../../../assets/fonts/fonts.css';

import photo from '../../../../assets/img/rectangle-4.png';

export default class SettingsProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputLocation : "",
    }
  }
  handleChange = (e) => {
    this.setState({
      inputLocation: e.target.value
    })
  }
  
  handleSaveLocation = (e) => {
    e.preventDefault();
    console.log(this.state.inputLocation)
  }

    render() {
      const { user } = this.props;

      return (
        <div className="container_settings__profile">
            <div className="container_settings__profile-block">
              <div className="profile_text">
                <p>Profile</p>
              </div>
              <form className="form" onSubmit={this.handleSaveLocation}>
              <div className="inputs">
                <div className="first_name">
                  <label htmlFor="first_name" className="first_name__label">First&nbsp;Name</label>
                  <input name="first_name" className="first_name__input" type="text" value={ user.first_name }/>
                </div>
                <div className="last_name">
                  <label htmlFor="last_name" className="last_name__label">Last&nbsp;Name</label>
                  <input name="last_name" className="last_name__input" type="text" value={ user.last_name }/>
                </div>
                <div className="email">
                  <label htmlFor="email" className="email__label">Email</label>
                  <input name="email" className="emaill__input" type="email" value={ user.email }/>
                </div>
                <div className="location">
                  <label htmlFor="location" className="location__label">Location</label>
                  <input
                    name="location" 
                    id="autocomplete" 
                    className="location__input" 
                    type="text" 
                    onChange={ this.handleChange }
                    value={this.state.inputLocation} />
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
                  <input className="input_file" type="file" name="myfile" />
                </div>
                <p>Format: JPEG, PNG or GIF. Max size: 500K.</p>
              </div>
            </div>
            </form>
            <div className="save_block">
              <button 
                className="save_block__button" 
                type="submit"
                value="submit">Save</button>
            </div>
          </div>
        </div>
      );
    }
  }
