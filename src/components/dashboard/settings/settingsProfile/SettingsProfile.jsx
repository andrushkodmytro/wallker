import React, { Component } from 'react';
import '../Settings.css';
import '../../../../assets/fonts/fonts.css';
import {connect} from "react-redux";
import {settingsInput,updateProfile,settingStatus, uploadPhoto, showPhoto} from "../../../../action/settingsActions"

// import photo from '../../../../assets/img/avatar.png';

 class SettingsProfile extends Component {
  constructor(props) {
    super(props)
    this.inputHandler=this.inputHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
    this.inputHandlerFile=this.inputHandlerFile.bind(this)
    
  }

  
  submitHandler(e){
    e.preventDefault();
    let target=e.target
    let user={
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      email: target.email.value
    }
    let data=document.getElementsByName("myfile")[0].files[0]
    let photo=new FormData()
    photo.append('image', data)
    console.log(photo)
    console.log(target.myfile.value)
    this.props.updateProfile(user)
    this.props.uploadPhoto(photo)
  }

  

  inputHandler(e){
    const name=e.target.name;
    const value=e.target.value;
    this.props.settingsInput(value,[name])
    
  }
  inputHandlerFile(e){
    this.props.showPhoto(URL.createObjectURL(e.target.files[0]))
  }

  componentDidMount(){
    this.props.settingsInput(this.props.user.first_name,"firstName")
    this.props.settingsInput(this.props.user.last_name,"lastName")
    this.props.settingsInput(this.props.user.email,"email")
    // this.props.settingsInput(this.props.user.image,"image")
  }
  componentWillReceiveProps({state}){
    if(state.status===201){
      this.props.settingStatus("")
    }
  }

    render() {
      const { firstName, lastName, email } = this.props.state;
      
      console.log(this.props)
      return (
        <div className="container_settings__profile">
            <div className="container_settings__profile-block">
              <div className="profile_text">
                <p>Profile</p>
              </div>
              <form className="form" encType="multipart/form-data" onSubmit={this.submitHandler}>
              <div className="inputs">
                <div className="first_name">
                  <label htmlFor="first_name" className="first_name__label">First&nbsp;Name</label>
                  <input name="firstName" className="first_name__input" type="text" value={firstName} onChange={this.inputHandler}/>
                </div>
                <div className="last_name">
                  <label htmlFor="last_name" className="last_name__label">Last&nbsp;Name</label>
                  <input name="lastName" className="last_name__input" type="text" value={ lastName } onChange={this.inputHandler}/>
                </div>
                <div className="email">
                  <label htmlFor="email" className="email__label">Email</label>
                  <input name="email" className="emaill__input" type="email" value={ email } onChange={this.inputHandler}/>
                </div>
                <div className="location">
                  <label htmlFor="location" className="location__label">Location</label>
                  <input name="location" id="autocomplete" className="location__input" type="text"/>
                </div>
            </div>
            <div className="photo_upload">
              <div className="photo_upload__photo">
                <img src={ this.props.state.photo || `https://${this.props.user.image}` } alt="account"/>
              </div>
              <div className="photo_upload__details">
                <label className="photo__label">Your&nbsp;Photo</label>
                <div className="button_file">
                  <button className="button_photo">Upload</button>
                  <input className="input_file" type="file" name="myfile" id="avatar" onChange={this.inputHandlerFile}/>
                </div>
                <p>Format: JPEG, PNG or GIF. Max size: 500K.</p>
              </div>
            </div>
           
            <div className="save_block">
              <button 
                className="save_block__button" 
                type="submit"
                value="submit">Save</button>
            </div>
            </form>
          </div>
        </div>
      );
    }
  }
const mapStateToProps=(state)=>{
    return{
        state:state.settingsReducer.settings,
        user:state.reducer.user
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      settingsInput:(val,nameInput)=>{
        dispatch(settingsInput(val,nameInput))
      },
      updateProfile:(user)=>{
        dispatch(updateProfile(user))
      },
      settingStatus:(status)=>{
        dispatch(settingStatus(status))
      },
      uploadPhoto:(photo)=>{
        dispatch(uploadPhoto(photo))
      },
      showPhoto:(photo)=>{
        dispatch(showPhoto(photo))
      }
    }
  }

  export default connect (mapStateToProps,mapDispatchToProps)(SettingsProfile)
