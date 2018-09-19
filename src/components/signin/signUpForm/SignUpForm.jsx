import React, { Component } from 'react';
import ErrorSpan from "../errorSignUp/ErrorSignUp";
import {connect} from "react-redux";
import ShowPass from "../../../assets/img/password2.png";
import HidePass from "../../../assets/img/password1.png"

import {formChangeActionSignUp,signUpAction,showPass,buttonSignUp,signUpStatusChange} from "../../../action/actions";
import {resetValidation,errorShow,errorHide,validateEmail,nickNameValidation,firstNameValidation,lastNameValidation,
  emailValidation,passwordValidation,inputHandler} from "../formHandler/formHandler"

 class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.resetValidation=resetValidation
    this.errorShow=errorShow
    this.errorHide=errorHide
    this.validateEmail=validateEmail
    this.nickNameValidation=nickNameValidation
    this.firstNameValidation=firstNameValidation
    this.lastNameValidation =lastNameValidation
    this.emailValidation=emailValidation
    this.passwordValidation=passwordValidation
    this.inputHandler = inputHandler.bind(this)

    this.resetValidation()

    //Показує password
    this.changePass=()=>{
      this.setState({passwordShow:"text"})
    }
  // Обробник події Submit
    this.submitHandler=(e)=>{
      e.preventDefault();
      const target=e.target;
      
      const {nickName,firstName,lastName,email,password}=this.props.state ;       
      this.nickNameValidation(target)
      this.firstNameValidation(target)
      this.lastNameValidation(target) 
      this.emailValidation(target)
      this.passwordValidation(target)


      if(this.nickNameValidation(target)
      &&      
        this.firstNameValidation(target)
      && 
        this.lastNameValidation(target) 
      && 
        this.emailValidation(target)
      && 
        this.passwordValidation(target)){
        const user={
          first_name:firstName ,
          last_name: lastName,
          username: nickName,
          email: email,
          password: password
        }
        this.props.buttonSignUp("SIGNING IN...")
        target.submit.style.opacity= 0.5;
        this.props.signUp(user)
      }
    }
}
componentWillReceiveProps(NewProps){
  console.log(NewProps)
  if(NewProps.state.signUpStatus==="201"){
    this.props.signUpStatusChange("")
    this.resetValidation();
    this.props.history.push("/signup/confirm")
  }
  if(NewProps.signUpStatus==="400"){
    this.props.signUpStatusChange("")
    this.resetValidation();
    alert("Nickname and email must be unique")
  }
 
}
  render() {
    let {nickName,firstName,lastName,email,password,passwordShow,button}=this.props.state
    return (
        <form onSubmit={this.submitHandler}  noValidate className="signUp">
            <h1>SIGN UP</h1>
            <div className="inputElem">
              <label htmlFor="nickName">nickName <span>*</span></label>
              <input type="text" maxLength="30" name="nickName" value={this.props.state.nickName} onChange={this.inputHandler}/>
            {this.props.state.nickNameError?<ErrorSpan error={this.props.state.nickNameError}/>:""}
           </div> 
           <div className="inputElem">
              <label htmlFor="firstName">First name <span>*</span></label>
              <input type="text" maxLength="30"  name="firstName" value={this.props.state.firstName} onChange={this.inputHandler}/>
              {this.props.state.firstNameError?<ErrorSpan error={this.props.state.firstNameError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="lastName">Last name <span>*</span></label>
              <input type="text" maxLength="30"  name="lastName"value={this.props.state.lastName} onChange={this.inputHandler}/>
              {this.props.state.lastNameError?<ErrorSpan error={this.props.state.lastNameError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" name="email" maxLength="129" value={this.props.state.email} onChange={this.inputHandler}/>
              {this.props.state.emailError?<ErrorSpan error={this.props.state.emailError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password <span>*</span></label>
              <input className="show_pass"
                type={passwordShow?"text":"password"}
                maxLength="16" 
                name="password" 
                value={this.props.state.password} 
                onChange={this.inputHandler}/>
                <img alt="show_pass" src={passwordShow?HidePass: ShowPass} 
                onClick={()=>this.props.showPass(!passwordShow)}/>
              {this.props.state.passwordError?<ErrorSpan error={this.props.state.passwordError}/>:""}
            </div>
            <input type="submit"
              value={button}
              name="submit" 
              disabled={!nickName||!firstName||!lastName||!email||!password}
            />
        </form>
    )
  }  
}
const mapStateToProps=(state)=>{
  return{
    state:state.reducer.signUp,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    formChangeActionSignUp: (error,nameError) => {
      dispatch(formChangeActionSignUp(error,nameError));
    },
    signUp: (user) => {
      dispatch(signUpAction(user));
    },
    signUpStatusChange:(status)=>{
      dispatch(signUpStatusChange(status))
    },
    showPass:(val)=>{
      dispatch(showPass(val))
    },
    buttonSignUp:(val)=>{
      dispatch(buttonSignUp(val))
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)

