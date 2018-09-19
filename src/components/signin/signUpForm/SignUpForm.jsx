import React, { Component } from 'react';
import ErrorSpan from "../errorSignUp/ErrorSignUp";
import {connect} from "react-redux";
import ShowPass from "../../../assets/img/password2.png";
import HidePass from "../../../assets/img/password1.png";

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import {formChangeActionSignUp,signUpAction,goSignUp,showPass} from "../../../action/actions";
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
      target.submit.value="SIGNING UP";
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
        
        this.props.signUp(user)
        
        // this.props.formChangeActionSignUp(true,"formValid")
        
        
        // this.props.history.push("/signup/confirm")
      }
    }
}
componentWillReceiveProps(NewProps){
  if(NewProps.signUpStatus==="201"){
    this.props.goSignUp("")
    this.resetValidation();
    this.props.history.push("/signup/confirm")
  }
  if(NewProps.signUpStatus==="400"){
    this.props.goSignUp("")
    this.resetValidation();
    alert("Nickname and email must be unique")
  }
 
}

  render() {
    const responseGoogle = (response) => {
      console.log(response);
      const session= this.props.state.reducer.session;
      this.props.inputSession(response.profileObj.familyName,'firstName');
      this.props.inputSession(response.profileObj.givenName,'lastName');
      this.props.inputSession(response.profileObj.email,'email');
      this.props.inputSession(response.profileObj.imageUrl,'image');
      
      // window.location.replace('/dashboard');
      //переробити коли бекенд доробить з гуглом то саме

    }
    const logout = "Success";
    let {nickName,firstName,lastName,email,password,passwordShow}=this.props.state
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
              value="SIGN UP"
              name="submit" 
              disabled={!nickName||!firstName||!lastName||!email||!password}
            />
            <GoogleLogin
              clientId="772503025939-f349nuolhdsqqbrmrvr8mn5kjqb2g9lf.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
        </form>
    )
  }  
}
const mapStateToProps=(state)=>{
  return{
    state:state.reducer.signUp,
    signUpStatus:state.reducer.signUpStatus
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
    goSignUp:(status)=>{
      dispatch(goSignUp(status))
    },
    showPass:(val)=>{
      dispatch(showPass(val))
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)

