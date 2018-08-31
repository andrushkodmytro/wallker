import React, { Component } from 'react';
import Error from "../errorSignIn/ErrorSignIn";
import {connect} from "react-redux";
import {formSignIn,signInAction} from "../../../action/actions";
import {inputHandler,resetValidationSignIn} from "../formHandler/formHandler";
import {Link} from "react-router-dom";



class Form extends Component {
    constructor(props){
        super(props);
        this.getDashboard=()=>{this.props.history.push('/dashboard')}
        this.inputHandler=inputHandler.bind(this)
        this.resetValidation=resetValidationSignIn
        
        this.submitHandler=(e)=>{
            let target=e.target;
            e.preventDefault();
            // target.submit.value="SIGNING IN..."
            // target.submit.style.opacity= 0.5;
            this.emailValidation(target);
            this.passwordValidation(target);
            target.submit.style.opacity= 1;
            target.submit.value="SIGN IN";
            if( this.emailValidation(target) && this.passwordValidation(target)){
                this.props.formSignIn(true,"formValid")
                this.resetValidation();
                this.getDashboard()
                const user={email:target.email.value,password:target.password.value};
                this.props.getSignIn(user)
              }
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
                return true
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
                return true
            }
        }
    }
    render() {
        let {email,password}=this.props.state
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN IN</h1>
            {this.props.state.emailError||this.props.state.passwordError?<Error emailError={this.props.state.emailError} passwordError={this.props.state.passwordError}/>:""}
            <div className="inputElem">
                <label htmlFor="email">Email or nickname</label>
                <input type="email" name="email" value={this.props.state.email} onChange={this.inputHandler} />
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={this.props.state.password} onChange={this.inputHandler}/>
            </div>
            <div className="remember">
                <div className="check">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">Remember me</label>
                </div>

                <Link to="/forgot">Forgot password?</Link>
                
            </div>
            <input type="submit" 
                value="SIGN IN" 
                name="submit"
                disabled={!email||!password}/>
            <div className="signup">
                <p>Don’t have an account? </p>
                <Link to="/signup">Sign up</Link>
            </div>
        </form>
    )
  }
}

const mapStateToProps=(state)=>{
    return{
        state:state.reducer.signIn
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        formSignIn: (error,nameError) => {
            dispatch(formSignIn(error,nameError));
        },
        getSignIn: (user) => {
            dispatch(signInAction(user));
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)