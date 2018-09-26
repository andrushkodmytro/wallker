import React, { Component } from 'react';
import {connect} from "react-redux"
import {changePassInput, showChangePass, changePass, changePassStatus} from "../../../../action/settingsActions"
import Error from "../../../signin/errorSignUp/ErrorSignUp"
import '../Settings.css';
import '../../../../assets/fonts/fonts.css';
import ShowPass from "../../../../assets/img/password2.png";
import HidePass from "../../../../assets/img/password1.png";

class SettingsPassword extends Component {
  constructor(props){
    super(props)
    this.inputHandler=this.inputHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
    this.passwordValidation=this.passwordValidation.bind(this)
    this.errorShow=this.errorShow.bind(this)
    this.errorHide=this.errorHide.bind(this)
  }
  inputHandler(e){
    const name=e.target.name;
    const value=e.target.value;
    this.props.changePassInput(value,[name])
  }
  submitHandler(e){
    e.preventDefault()
    this._messageSucces.style.visibility="hidden"
    Promise.all([this.passwordValidation(this._currentPass,"currentPassError"),this.passwordValidation(this._newPass,"newPassError"),
      this.passwordValidation(this._confirmPass,"confirmPassError")])
      .then(res=>{
        console.log(this._newPass)
        console.log(this._confirmPass)
        if(this._newPass.value!==this._confirmPass.value){
          this.errorShow(this._newPass,"newPassError","Passwords doesn’t match")
          this.errorShow(this._confirmPass,"confirmPassError","Passwords doesn’t match")
          return
        }
        const{currentPass, newPass, confirmPass}=this.props.state
        let pass={
        old_password: currentPass,
        new_password: newPass,
        repeat_password: confirmPass
        }
        this.props.changePass(pass)
      })
      .catch(err=>console.log("Error"))

    
  }
  errorShow(name,error,textError){
    this.props.changePassInput(textError,error)
    name.style.border="1px solid #d0021b";
    return
  }
  errorHide(name,error){
    name.style.border="none";
    this.props.changePassInput("",[error])
    return
  }
  passwordValidation(tag,error){
    this.errorHide(tag,error)
    return new Promise((resolve, reject)=>{
      if((/[^\w]/g).test(tag.value)===true){
         this.errorShow(tag,error,"Must contain only letters and numbers","passwordError")
         reject() 
       }
       else if (tag.value.length < 8 || tag.value.length > 16) {
        this.errorShow(tag,error,"Password should be between 8 and 16 characters. ")
        reject() 
      }
       else{
           resolve()
       }
    })
   
}
componentDidMount(){
  this._messageSucces.style.visibility="hidden"
}
  componentWillMount(){
    this.props.changePassStatus("")
    this.props.changePassInput("","currentPass")
    this.props.changePassInput("","newPass")
    this.props.changePassInput("","confirmPass")
  }
  componentWillReceiveProps({state}){
    if(state.status===201){
      this.props.changePassStatus("")
      this.props.changePassInput("","currentPass")
      this.props.changePassInput("","newPass")
      this.props.changePassInput("","confirmPass")
      this._messageSucces.style.visibility="visible"
    }
    else if(state.status===401){
      this.errorShow(this._currentPass,"Current password is incorrect","currentPassError")
      this.props.changePassInput("Current password is incorrect","currentPassError")
      this.props.changePassStatus("")
    }
    else if(state.status===444){
      this.errorShow(this._newPass,"Passwords doesn’t match","newPassError")
      this.errorShow(this._confirmPass,"Passwords doesn’t match","confirmPassError")
      this.props.changePassInput("Current password is incorrect","currentPassError")
      this.props.changePassStatus("")
    }
  }
    render() {
      const {currentPass,newPass,confirmPass,currentPassShow,newPassShow,
        confirmPassShow,currentPassError,newPassError,confirmPassError}=this.props.state
      return (
        <div className="container_settings__password">
            <form className="container_settings__password-block" onSubmit={this.submitHandler}>
              <div className="profile_text">
                  <p>Password</p>
              </div>
                <div className="inputs">
                  <div className="current_password inputElem">
                    <label className="password__label">Current&nbsp;Password</label>
                    <input className="password__input"
                    type={currentPassShow?"text":"password"} 
                    name="currentPass" 
                    maxLength="16"
                    value={currentPass}
                    ref={(node)=>{this._currentPass=node}}
                    onChange={this.inputHandler}/>
                    <Error error={currentPassError}/>
                    <img  alt="show_pass" src={currentPassShow?HidePass: ShowPass} 
                    onClick={()=>this.props.showChangePass(!currentPassShow,"currentPassShow")}/>
                  </div>
                  <div className="new_password inputElem">
                    <label className="password__label">New&nbsp;Password</label>
                    <input className="password__input"
                    type={newPassShow?"text":"password"} 
                     name="newPass" 
                     maxLength="16"
                     value={newPass}
                     ref={(node)=>{this._newPass=node}}
                    onChange={this.inputHandler}/>
                     <Error error={newPassError} />
                     <img  alt="show_pass" src={newPassShow?HidePass: ShowPass}
                     onClick={()=>this.props.showChangePass(!newPassShow,"newPassShow")} />
                  </div>
                  <div className="confirm_password inputElem">
                  <label className="password__label">Confirm&nbsp;New&nbsp;Password</label>
                  <input className="password__input" 
                  type={confirmPassShow?"text":"password"} 
                  name="confirmPass" 
                  maxLength="16"
                  value={confirmPass}
                  ref={(node)=>{this._confirmPass=node}}
                   onChange={this.inputHandler}/>
                    <Error error={confirmPassError}/>
                   <img  alt="show_pass" src={confirmPassShow?HidePass: ShowPass} 
                   onClick={()=>this.props.showChangePass(!confirmPassShow,"confirmPassShow")}/>
                </div>
                </div>
                <div className="change_block">
                <span className="message_succes" ref={node=>{this._messageSucces=node}}>Password changed successfully</span>
              <button className="change_block__button"
              disabled={!currentPass&&!newPass&&!confirmPass}
              type="submit">Change</button>
            </div>
            </form>
        </div>
      );
    }
  }
  const mapStateToProps=(state)=>{
    return{
        state:state.settingsReducer.changePass,
        
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      changePassInput:(val,nameInput)=>{
        dispatch(changePassInput(val,nameInput))
      },
      showChangePass:(val,passName)=>{
        dispatch(showChangePass(val,passName))
      },
      changePass:(pass)=>{
        dispatch(changePass(pass))
      },
      changePassStatus:(status)=>{
        dispatch(changePassStatus(status))
      }
    }
  }

  export default connect (mapStateToProps,mapDispatchToProps)(SettingsPassword)
