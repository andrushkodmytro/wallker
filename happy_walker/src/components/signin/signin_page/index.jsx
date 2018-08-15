import React, { Component } from 'react';
import SignInForm from "../signInForm";
import SignUpForm from "../signUpForm";
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
    }
    this.changSignUp=function(){
      this.setState({
        page:"SIGNUP"
      })
    }.bind(this)

  }
     
  render() {
    
    return (
      <div className="container__signin">
         <div className="signin">
            <div className="signin__logo">
                <img src="/assets/img/logo1.png" alt="Logo" onClick={this.props.handler}/>
            </div>
          <div className="form__container">
          {this.currentView()}

          </div>
        </div>
        <div className="section2">
            <img src="/assets/img/rectangle-copy.png" alt="walker"/>
        </div>
      </div>
    )
  }
}
