import React, { Component } from 'react';
import ErrorSpan from "../errorSignUp/ErrorSignUp";
import {connect} from "react-redux";
import {formErrorChange} from "../../../action/actions"
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
  // Обробник події Submit
    this.submitHandler=(e)=>{
      e.preventDefault();
      const target=e.target;
      target.submit.value="SIGNING UP";
      target.submit.style.opacity= 0.5;
     
      this.passwordValidation(target);
      this.nickNameValidation(target);
      this.firstNameValidation(target);
      this.lastNameValidation(target);
      this.emailValidation(target);
      
      setTimeout(()=>{
        const {nickNameValid,firstNameValid,lastNameValid,emailValid,passwordValid}=this.props.state
        console.log(nickNameValid,firstNameValid,lastNameValid,emailValid,passwordValid)
        target.submit.style.opacity= 1;
        target.submit.value="SIGN UP";
        // this.props.formErrorChange("","password");
        if(nickNameValid && firstNameValid && lastNameValid && emailValid && passwordValid){
          this.props.formErrorChange(true,"formValid")
          alert("You are sign up")
          this.resetValidation();
          this.props.history.push("/signup/confirm")
        }
        
      },1000)
    }
    
    
}
  render() {
    let {nickName,firstName,lastName,email,password}=this.props.state
    return (
        <form onSubmit={this.submitHandler}  noValidate className="signUp">
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
            <input type="submit"
              value="SIGN UP"
              name="submit" 
              disabled={!nickName||!firstName||!lastName||!email||!password}
            />
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

