import React, { Component } from 'react';
import "./ForgotPass.css";
import {Link, Route} from "react-router-dom";
// import '../../assets/fonts/fonts.css';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler=function(e){
            e.preventDefault()
            e.target.submit.innerHTML="Sending..."
            this.props.history.push("/forgot/reset")
            alert("Hello");
            e.target.submit.innerHTML="Send password"

        }.bind(this)
    }
    
    
    render() {
        console.log(this.props.history)
        const reset = <div>
                                <p className="form__text">We have sent you an email with reset <br></br> instructions. If the email does not arrive soon, <br></br> check your spam folder.</p>
                            </div>;
        const mainText=<div className="hidd">
                            <p className="form__text">Enter your email below to receive your <br></br>password instructions</p>
                            <div className="email_forgot_pass">
                                    <label className="email__label">Email</label>
                                    <input className="email__input" type="email"/>
                            </div>
                            <div className="button">
                                <button className="button__send" name="submit" type="submit" >Send password</button>
                            </div>
                        </div>

        
      return (
            <form className="form_forgot" name="form" onSubmit={this.onSubmitHandler} noValidate>
                <p className="form__title">Password reset</p>
                <Route exact path="/forgot" render={()=>mainText}/>
                <Route path="/forgot/reset" render={()=>reset}/>


                    
                <Link  to="/signin" className="back_to">Back to Sign in</Link>
            </form>
      );
    }
  }