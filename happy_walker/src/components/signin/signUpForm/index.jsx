import React, { Component } from 'react';
import ErrorSpan from "../errorSignUp";
import {connect} from "react-redux";
import {formErrorChange} from "../../../action"
import {resetValidation,errorShow,errorHide,validateEmail,nickNameValidation,firstNameValidation,lastNameValidation,
  emailValidation,passwordValidation,inputHandler} from "../form_handler";

 class SignUpForm extends Component {
  constructor(props){
    super(props)
  // Обробник події Submit
    this.submitHandler=(e)=>{
      e.preventDefault();
      let target=e.target;
      target.submit.value="SIGNING UP";
      target.submit.style.opacity= 0.5;
      setTimeout(()=>{
        this.nickNameValidation(target);
        this.firstNameValidation(target);
        this.lastNameValidation(target);
        this.emailValidation(target);
        this.passwordValidation(target);
        target.submit.style.opacity= 1;
        target.submit.value="SIGN UP";
        this.props.formErrorChange("","password");
        if(this.props.state.nickNameValid&&this.props.state.firstNameValid&&this.props.state.lastNameValid&&this.props.state.emailValid&&this.props.state.passwordValid){
          this.props.formErrorChange(true,"formValid")
          alert("You are sign up")
          this.resetValidation();
        }
      },3000)
    }
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

}
  render() {
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN UP</h1>
            <div className="inputElem">
              <label htmlFor="nickName">nickName <span>*</span></label>
              <input type="text" name="nickName" value={this.props.state.nickName} onChange={this.inputHandler}/>
            {this.props.state.nickNameError?<ErrorSpan error={this.props.state.nickNameError}/>:""}
           </div> 
           <div className="inputElem">
              <label htmlFor="firstName">First name <span>*</span></label>
              <input type="text" name="firstName" value={this.props.state.firstName} onChange={this.inputHandler}/>
              {this.props.state.firstNameError?<ErrorSpan error={this.props.state.firstNameError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="lastName">Last name<span>*</span></label>
              <input type="text" name="lastName"value={this.props.state.lastName} onChange={this.inputHandler}/>
              {this.props.state.lastNameError?<ErrorSpan error={this.props.state.lastNameError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" name="email" value={this.props.state.email} onChange={this.inputHandler}/>
              {this.props.state.emailError?<ErrorSpan error={this.props.state.emailError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password<span>*</span></label>
              <input type="password" name="password" value={this.props.state.password} onChange={this.inputHandler}/>
              {this.props.state.passwordError?<ErrorSpan error={this.props.state.passwordError}/>:""}
            </div>
            <input type="submit" value="SIGN UP" name="submit"/>
        </form>
    )
  }
  
}
const mapStateToProps=(state)=>{
  return{
    state:state.reducer.signUp
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    formErrorChange: (error,nameError) => {
      dispatch(formErrorChange(error,nameError));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)

