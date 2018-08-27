import React, { Component } from 'react';
import "./confirmEmail.css"

export default class ConfirmEmail extends Component {
  constructor(props){
    super(props);
    this.state={
        showMessageSend:false
    }
    this.changeMessage=()=>{
      this.setState({
        showMessageSend:!this.state.showMessageSend
      })
    }

}
  render() {
    const Message=<div class="message"><p>The email confirmation was resent to your email</p> </div>
    return (
      <div className="confirmEmail">
        <h1>
          THANKS FOR signing up
        </h1>
        <p>We have sent an email with an activation link to your email address. 
          In order to complete the sign-up process, please click the activation link.
        </p>
        <p>
          If you didn’t receive the activation email, click on the link below to resend it.
        </p>
        <a onClick={this.changeMessage}>Resend email confirmation</a>
        {this.state.showMessageSend?Message:""}
      </div>
    )
  }
}
