import React, { Component } from 'react';
import Error from "../errorSignIn/ErrorSignIn";
import { connect } from "react-redux";
import { formChangeActionResetPassword,showPassResetPassword,buttonResetPass } from "../../../action/actions";
import { resetValidationSignIn } from "../formHandler/formHandler";
import { Link } from "react-router-dom";
import "../signinPage/SignInPage.css";
import ShowPass from "../../../assets/img/password2.png";
import HidePass from "../../../assets/img/password1.png";

class Form extends Component {
    constructor(props){
        super(props);
        this.getDashboard=()=>{this.props.history.push('/dashboard')}
        this.inputHandler=this.inputHandler.bind(this)
        this.resetValidation=resetValidationSignIn
        
        this.submitHandler=(e)=>{
            let target=e.target;
            e.preventDefault();
            this.passwordValidation(target);
            this.confirmPasswordValidation(target);
            if( this.passwordValidation(target) && this.confirmPasswordValidation(target)){
                // const passwordNew={password:target.password.value,confirm_password:target.confirmPassword.value};
                this.props.buttonResetPass("SAVING...")
                target.submit.style.opacity= 0.5;
                alert("hello")             
            }
        }
       
        this.errorShow=(name,error,textError)=>{
            name.style.border="1px solid #d0021b";
            this.props.formChangeActionResetPassword(textError,error)
            this.props.formChangeActionResetPassword(true,"showError")
        }
        this.errorHide=(name,error)=>{
            name.style.border="none";
            this.props.formChangeActionResetPassword("",[error])
        }
        this.passwordValidation=function(form){
            if(this.props.state.error==="") this.errorHide(form.password,"emailError")
            if((/[^\w]/g).test(this.props.state.password)===true){
              this.errorShow(form.password,"passwordError","Wrong email. Try again or click Forgot password to reset it. ")
              return false
            }
            else {
                // this.props.formChangeActionSignIn(true,"emailValid")
                return true
            }
        }
        this.confirmPasswordValidation=function(form){
            if(this.props.state.error==="")  this.errorHide(form.confirmPassword,"passwordError")
            if (this.props.state.confirmPassword.length < 8 || this.props.state.confirmPassword.length > 16) {
                this.errorShow(form.confirmPassword,"confirmPasswordError","Password should be between 8 and 16 characters. ")
                return 
              }
            if((/[^\w]/g).test(this.props.state.password)===true){
              this.errorShow(form.confirmPassword,"Wrong email/password. Try again or click Forgot password to reset it. ")
              return false
            }
            else{
                // this.props.formChangeActionSignIn(true,"passwordValid")
                return true
            }
        }
    }
    inputHandler(e){
        const name=e.target.name;
        const value=e.target.value;
        this.props.formChangeActionResetPassword(value,[name])
    }
   
    
    render() {
       

        console.log(this.props)
        let {password,confirmPassword,passwordError,confirmPasswordError,passwordShow,confirmPasswordShow,button}=this.props.state
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>NEW PASSWORD</h1>
            {passwordError||confirmPasswordError?<Error emailError={passwordError}  passwordError={confirmPasswordError}/>:""}
            <div className="inputElem">
                <label htmlFor="password">Password</label>
                <input type={passwordShow?"text":"password"}
                 name="password" maxLength="129"
                  value={password} 
                  onChange={this.inputHandler} />
                <img  alt="show_pass" src={passwordShow?HidePass: ShowPass} 
                onClick={()=>this.props.showPassResetPassword(!passwordShow,"passwordShow")}/>
            </div>
            <div className="inputElem">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input type={confirmPasswordShow?"text":"password"} 
                maxLength="16"
                name="confirmPassword" 
                value={confirmPassword}
                onChange={this.inputHandler}/>
                <img  alt="show_pass" src={confirmPasswordShow?HidePass: ShowPass} 
                onClick={()=>this.props.showPassResetPassword(!confirmPasswordShow,"confirmPasswordShow")}/>
            </div>
            <input type="submit" 
                value={button}
                name="submit"
                disabled={!password||!confirmPassword}/>
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
        state:state.reducer.resetPassword
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        formChangeActionResetPassword: (error,nameError) => {
            dispatch(formChangeActionResetPassword(error,nameError));
        },
        showPassResetPassword:(val,inputName)=>{
            dispatch(showPassResetPassword(val,inputName))
        },
        buttonResetPass:(val)=>{
            dispatch(buttonResetPass(val))
        }
        
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)