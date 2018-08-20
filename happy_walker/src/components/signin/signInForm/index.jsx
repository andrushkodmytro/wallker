import React, { Component } from 'react';
import Error from "../errorSignIn";
import {connect} from "react-redux";
import {formSignIn} from "../../../action";
import {inputHandler,resetValidationSignIn} from "../form_handler";

class Form extends Component {
    constructor(props){
        super(props);

        this.inputHandler=inputHandler.bind(this)
        this.resetValidation=resetValidationSignIn
        this.submitHandler=(e)=>{
            let target=e.target;
            e.preventDefault();
            target.submit.value="SIGNING IN..."
            target.submit.style.opacity= 0.5;
            setTimeout(()=>{
                this.emailValidation(target);
                this.passwordValidation(target);
                target.submit.style.opacity= 1;
                target.submit.value="SIGN IN";
                if(this.props.state.emailValid&&this.props.state.passwordValid){
                    this.props.formSignIn(true,"formValid")
                    alert("You are sign in")
                    this.resetValidation();
                  }        
            },3000)
            
        }
        this.errorShow=(name,error,textError)=>{
            name.style.border="1px solid #d0021b";
            this.props.formSignIn(textError,error)
            this.props.formSignIn(true,"showError")
        }
        this.errorHide=(name,error)=>{
            name.style.border="none";
            this.props.formSignIn("",[error])
        }
        this.emailValidation=function(form){
            this.errorHide(form.email,"emailError")
            if(this.props.state.email==="") return this.errorShow(form.email,"emailError","emailError","Email or login is required!")
            if((/[^\w@-_\.]/g).test(this.props.state.email)===true){
              this.errorShow(form.email,"emailError","Wrong email/password. Try again or click Forgot password to reset it.")
              return
            }
            else {
                this.props.formSignIn(true,"emailValid")
                return
            }
        }
        this.passwordValidation=function(form){
            this.errorHide(form.password,"passwordError")
            if(this.props.state.password==="") return this.errorShow(form.password,"passwordError","Password is required!")
            if((/[^\w]/g).test(this.props.state.password)===true){
              this.errorShow(form.password,"Wrong email/password. Try again or click Forgot password to reset it.")
              return
            }
            else{
                this.props.formSignIn(true,"passwordValid")
            }
        }
    }
    render() {
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN IN</h1>
            {this.props.state.emailError||this.props.state.passwordError?<Error emailError={this.props.state.emailError} passwordError={this.props.state.passwordError}/>:""}
            <div className="inputElem">
                <label htmlFor="email">Email or nickname</label>
                <input type="email" name="email" value={this.props.state.email} onChange={this.inputHandler} />
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password<span>*</span></label>
              <input type="password" name="password" value={this.props.state.password} onChange={this.inputHandler}/>
            </div>
            <div className="remember">
                <div className="check">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">Remember me</label>
                </div>
                <p>Forgot password?</p>
            </div>
            <input type="submit" value="SIGN IN" name="submit"/>
            <div className="signup">
                <p>Don’t have an account? </p>
                <a onClick={this.props.handler}>Sign up</a>
            </div>
        </form>
    )
  }
}

const mapStateToProps=(state)=>{
    return{
        state:state.signIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        formSignIn: (error,nameError) => {
            dispatch(formSignIn(error,nameError));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)