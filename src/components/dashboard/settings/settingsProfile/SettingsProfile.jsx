import React, { Component } from 'react';
import '../Settings.css';
import '../../../../assets/fonts/fonts.css';
import {connect} from "react-redux";
import {settingsInput,updateProfile,settingStatus, uploadPhoto, showPhoto} from "../../../../action/settingsActions"
import {validateEmail} from "../../../signin/formHandler/formHandler"
import Error from "../../../signin/errorSignUp/ErrorSignUp"

// import photo from '../../../../assets/img/avatar.png';

 class SettingsProfile extends Component {
  constructor(props) {
    super(props)
    this.inputHandler=this.inputHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
    this.inputHandlerFile=this.inputHandlerFile.bind(this)
    this.firstNameValidation=this.firstNameValidation.bind(this)
    this.lastNameValidation=this.lastNameValidation.bind(this)
    this.errorShow=this.errorShow.bind(this)
    this.errorHide=this.errorHide.bind(this)
    this.emailValidation=this.emailValidation.bind(this)
    this.validateEmail=validateEmail.bind(this)

  }
  submitHandler(e){
    e.preventDefault();
    this._messageSucces.style.visibility="hidden"
    const { firstName, lastName,email
      // ,firstNameError,lastNameError,emailError 
    } = this.props.state;
    const { first_name, last_name } = this.props.user;

    let target=e.target
    
    let user={
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      email: target.email.value
    }

    let data=document.getElementsByName("myfile")[0].files[0]
    let photo=new FormData()
    photo.append('image', data)
    Promise.all([this.firstNameValidation(target),this.lastNameValidation(target),this.emailValidation(target)])
    .then(res=>{
      if(firstName!==first_name|| lastName!==last_name||email!==this.props.user.email ){
      //   if(!firstNameError&&!lastNameError&&!emailError)
        this.props.updateProfile(user)
      }
    })
    .catch(error=>console.log(error))
    
    
    if(data&&data.type.match("image*")){
      this.props.uploadPhoto(photo)
    }
    
  }
  inputHandler(e){
    const name=e.target.name;
    const value=e.target.value;
    this.props.settingsInput(value,[name])
    
  }
  inputHandlerFile(e){
    let data=e.target.files[0]
    if(data.type.match("image*")){
      this.props.showPhoto(URL.createObjectURL(data))
    }
    else alert("Wrong")
  
  }
  errorShow(name,error,textError){
    this.props.settingsInput(textError,error)
    name.style.border="1px solid #d0021b";
    return
  }
  errorHide(name,error){
    name.style.border="none";
    this.props.settingsInput("",[error])
    return
  }
  // Валідація firstName
 firstNameValidation(form){
   return new Promise((resolve,reject)=>{
    this.errorHide(form.firstName,"firstNameError");
    if(this.props.state.firstName.length<2||this.props.state.firstName.length>30){
      this.errorShow(form.firstName,"firstNameError","First name should be between 2 and 30 characters")
      reject()
    }
    else if((/[^A-Za-z]/g).test(this.props.state.firstName)===true){
      this.errorShow(form.firstName,"firstNameError","Must contain only letters","firstNameError")
      reject()
    }
    else {
      this.errorHide(form.firstName,"firstNameError");
      resolve()
  
    }
   })
 
}
// Валідація lastName
lastNameValidation (form) {
  return new Promise((resolve,reject)=>{
    this.errorHide(form.lastName, "lastNameError");
    if (this.props.state.lastName.length < 2 || this.props.state.lastName.length > 30) {
      this.errorShow(form.lastName, "lastNameError", "Last name should be between 2 and 30 characters")
      reject()
    }
    else if ((/[^A-Za-z]/g).test(this.props.state.lastName)===true) {
      this.errorShow(form.lastName, "lastNameError", "Must contain only letters","lastNameError")
      reject()
    }
    else {
      this.errorHide(form.lastName, "lastNameError");
      resolve()

    }
  })
  
}
emailValidation(form){
  return new Promise((resolve,reject)=>{
    this.errorHide(form.email, "emailError");
    if (!this.validateEmail(this.props.state.email)) {
      this.errorShow(form.email, "emailError", "Enter correct email");
      reject()
    }
    else {
      this.errorHide(form.email, "emailError");
      resolve()

    }
  })
} 
componentDidMount(){
  this._messageSucces.style.visibility="hidden"
}
  componentWillMount(){
    this.props.settingsInput(this.props.user.first_name,"firstName")
    this.props.settingsInput(this.props.user.last_name,"lastName")
    this.props.settingsInput(this.props.user.email,"email")
    this.props.settingsInput(this.props.user.image,"image")
    this.props.settingsInput("","firstNameError")
    this.props.settingsInput("","lastNameError")
    this.props.settingsInput("","emailError")
   
  }
  componentWillReceiveProps({state}){
    if(state.status===201){
      this.props.settingStatus("")
      this._messageSucces.style.visibility="visible"
    }
  }

    render() {
      const { firstName, lastName,email , image, firstNameError, lastNameError, emailError} = this.props.state;

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
                  <input name="firstName" className="first_name__input" maxLength="30" type="text" value={firstName} onChange={this.inputHandler}/>
                  <Error error={firstNameError}/>
                </div>
                <div className="last_name">
                  <label htmlFor="last_name" className="last_name__label">Last&nbsp;Name</label>
                  <input name="lastName" className="last_name__input" maxLength="30" type="text" value={ lastName } onChange={this.inputHandler}/>
                  <Error error={lastNameError}/>
                </div>
                <div className="email">
                  <label htmlFor="email" className="email__label">Email</label>
                  <input name="email" className="emaill__input" maxLength="129" type="email" value={ email } onChange={this.inputHandler}/>
                  <Error error={emailError}/>
                </div>
                <div className="location">
                  <label htmlFor="location" className="location__label">Location</label>
                  <input name="location" id="autocomplete" className="location__input" type="text"/>
                </div>
            </div>
            <div className="photo_upload">
              <div className="photo_upload__photo">
                <img src={ this.props.state.photo || ` https://${image}` } alt="account"/>
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
            <span className="message_succes" ref={node=>{this._messageSucces=node}}>Profile updated successfully</span>
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
