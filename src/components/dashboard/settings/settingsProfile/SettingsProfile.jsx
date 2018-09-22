import React, { Component } from 'react';
import '../Settings.css';
import '../../../../assets/fonts/fonts.css';
import {connect} from "react-redux";
import {settingsInput} from "../../../../action/settingsActions"

import photo from '../../../../assets/img/avatar.png';

 class SettingsProfile extends Component {
  constructor(props) {
    super(props)
    this.inputHandler=this.inputHandler.bind(this)
    this.state = {
      inputLocation : "",
    }
    // this.props.settingsInput(this.props.user.first_name,"firstName")
    // this.props.settingsInput(this.props.user.last_name,"lastName")
    // this.props.settingsInput(this.props.user.email,"email")
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
  inputHandler(e){
    const name=e.target.name;
    const value=e.target.value;
    this.props.settingsInput(value,[name])
    
  }
  componentDidMount(){
    
  }

    render() {
      const { firstName, lastName,email } = this.props.state;

      console.log(this.props)
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
                  <input name="first_name" className="first_name__input" type="text" value={firstName} onChange={this.inputHandler}/>
                </div>
                <div className="last_name">
                  <label htmlFor="last_name" className="last_name__label">Last&nbsp;Name</label>
                  <input name="last_name" className="last_name__input" type="text" value={ lastName } onChange={this.inputHandler}/>
                </div>
                <div className="email">
                  <label htmlFor="email" className="email__label">Email</label>
                  <input name="email" className="emaill__input" type="email" value={ email } onChange={this.inputHandler}/>
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
const mapStateToProps=(state)=>{
    return{
        state:state.settingsReducer,
        user:state.reducer.user
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      settingsInput:(val,nameInput)=>{
        dispatch(settingsInput(val,nameInput))
      }
    }
  }

  export default connect (mapStateToProps,mapDispatchToProps)(SettingsProfile)
