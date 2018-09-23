import React, { Component } from 'react';
import "./ForgotPass.css";
import {Link, Route} from "react-router-dom";
import Error from "../errorSignUp/ErrorSignUp"
import {validateEmail} from "../formHandler/formHandler"
import {forgotPassword,forgotPassInput,forgotPassStatus,buttonForgotPass,showError} from "../../../action/forgotResetAction"
import {connect} from "react-redux";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.inputHandler=this.inputHandler.bind(this)
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
        this.error=this.error.bind(this)
    }
    onSubmitHandler(e){
        e.preventDefault()
        if( validateEmail(this.props.state.email)){
            this.props.buttonForgotPass("SENDING PASSWORD...")
            this.props.forgotPassword({email:this.props.state.email})
        }
        else{
            this.error()
        }
    }
    inputHandler(e){
        let email=e.target.value;
        this.props.forgotPassInput(email)

    }
    error(){
        this.props.showError(true)
        let input=document.getElementsByClassName("email__input")
        input[0].style.border="1px solid #d0021b"
    }
    componentWillReceiveProps({state}){
       if(state.status===202){
            this.props.forgotPassStatus("")
            this.props.buttonForgotPass("SEND PASSWORD")
            this.props.history.push("/forgot/reset")
       }
       else if(state.status===200||state.status===400){
        this.props.forgotPassStatus("")
        this.props.buttonForgotPass("SEND PASSWORD")
        this.error()
       }    
    }
    componentWillMount(){
        this.props.forgotPassInput("")
        this.props.forgotPassStatus("")
        this.props.buttonForgotPass("SEND PASSWORD")
        this.props.forgotPassInput("")
        this.props.showError(false)
    }
    render() {
        let {button,email,error}=this.props.state
        const reset = <div>
            <p className="form__text">We have sent you an email with reset <br>
            </br> instructions. If the email does not arrive soon, <br></br> check your spam folder.</p>
        </div>;
        const mainText=(
            <div className="hidd">
                <p className="form__text">Enter your email below to receive your <br></br>password instructions</p>
                <div className="email_forgot_pass">
                    <label className="email__label">Email</label>
                    <input className="email__input" type="email" value={email} maxLength="129" onChange={this.inputHandler}/>
                    { error? <Error error="Enter correct email address."/>:""}
                </div>
                <div className="button">
                <   input className="button__send" name="submit" type="submit" value={button}/>
                </div>
            </div>
        )
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
const mapStateToProps=state=>{
    return{
        state:state.forgotResetReducer.forgotPass
    }
    
}
const mapDispatchToProps=dispatch=>{
    return{
        forgotPassword:(email)=>{
            dispatch(forgotPassword(email))
        },
        forgotPassInput:(val)=>{
            dispatch(forgotPassInput(val))
        },
        forgotPassStatus:(status)=>{
            dispatch(forgotPassStatus(status))
        },
        buttonForgotPass:(val)=>{
            dispatch(buttonForgotPass(val))
        },
        showError:(val)=>{
            dispatch(showError(val))
        }
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword)
