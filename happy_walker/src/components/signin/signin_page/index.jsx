import React, { Component } from 'react';
import SignInForm from "../signInForm";
import SignUpForm from "../signUpForm";
import Logo from "../../../assets/img/logo1.png";
import Backgroun from "../../../assets/img/rectangle-copy.png";
import ForgotPassword from "../../forgot_password/forgotPasswordMain/ForgotPassFirstSection";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";


import "./style.css";

export default class Signin extends Component {
  constructor(props){
    super(props);
    this.state={page:"SIGNIN"};
    this.currentView=()=>{
      if(this.state.page==="SIGNIN")
      return <SignInForm handler={this.changSignUp}/>
      else if(this.state.page==="SIGNUP"){
        return <SignUpForm/>
      }
      else if(this.state.page==="ForgotPassword"){
        return  <ForgotPassword handler={this.props.appChangeView}/>
      }
    }
    this.changSignUp=function(){
      this.setState({
        page:"SIGNUP"
      })
    }.bind(this)

  }
     
  render() {
    console.log(this.props)
    return (
      <div className="container__signin">
         <div className="signin">
            <div className="signin__logo">
            <Link to="/">
            <img src={Logo} alt="Logo"/>

            </Link>
            </div>
          <div className="form__container">
          {/* {this.currentView()} */}

          <Route path="/signin"component={SignInForm}/>
          <Route path="/forgot" component={ForgotPassword}/>
          <Route path="/signup" component={SignUpForm}/>



          </div>
        </div>
        <div className="section2">
            <img src={Backgroun} alt="walker"/>
        </div>
      </div>
    )
  }
}
