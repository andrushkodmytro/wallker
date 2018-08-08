import React, { Component } from 'react';
import "./style.css";

export default class Signin extends Component {
  render() {
      let handler=()=>{
          this.props.handler("Landing")
      }
    return (
      <div className="container__signin">
         <div className="signin">
            <div className="signin__logo">
                <img src="/assets/img/logo1.png" alt="Logo" onClick={handler}/>
            </div>
            <form action="#">
                <h1>SIGN IN</h1>
                <label for="email">Email or nickname</label>
                <input type="email" id="email" />
                <label for="password">Password</label>
                <input type="password" id="password"/>
                <div className="remember">
                    <div className="check">
                        <input type="checkbox" id="check"/>
                        <label for="check">Remember me</label>
                    </div>
                    <p>Forgot password?</p>
                </div>
                <input type="button" value="SIGN IN"/>
                <div className="signup">
                    <p>Don’t have an account? </p>
                    <a >Sign up</a>
                </div>
            </form>
        </div>
        <div className="section2">
            <img src="/assets/img/rectangle-copy.png" alt="walker"/>
        </div>
      </div>
    )
  }
}
