import React, { Component } from 'react';
// import Error from "../errorSignIn/ErrorSignIn";
import { connect } from "react-redux";
import {resetPassword,buttonResetPass, showPassResetPassword, formChangeActionResetPassword,resetPassStatus} from "../../../action/forgotResetAction"
import { resetValidationSignIn } from "../formHandler/formHandler";
import "../signinPage/SignInPage.css";
import Error from "../errorSignUp/ErrorSignUp"
import ShowPass from "../../../assets/img/password2.png";
import HidePass from "../../../assets/img/password1.png";

class Form extends Component {
    constructor(props){
        super(props);
        this.submitHandler=this.submitHandler.bind(this)
        this.errorShow=this.errorShow.bind(this)
        this.inputHandler=this.inputHandler.bind(this)
        this.resetValidation=resetValidationSignIn.bind(this)
        this.errorHide=this.errorHide.bind(this)
        this.passwordValidation=this.passwordValidation.bind(this)
        this.confirmPasswordValidation=this.confirmPasswordValidation.bind(this)
        this.reset=this.reset.bind(this)
        this.getDashboard=()=>{}
    }
    submitHandler(e){
        let target=e.target;
        e.preventDefault();
        this.passwordValidation(target);
        this.confirmPasswordValidation(target);
        if(this.props.state.password!==this.props.state.confirmPassword) {
            this.errorShow(target.password,"passwordError","Passwords doesn’t match")
            this.errorShow(target.confirmPassword,"confirmPasswordError","Passwords doesn’t match")
        }
       else  if( this.passwordValidation(target) && this.confirmPasswordValidation(target)){
            const passwordNew=
            {
                "uid": this.props.state.uid,
                "token": this.props.state.token,
                "password": this.props.state.password,
                "repeat_password": this.props.state.confirmPassword
              }
            this.props.buttonResetPass("SAVING...")
            target.submit.style.opacity= 0.5;
            this.props.resetPassword(passwordNew)     
        }
    }
    errorShow(name,error,textError){
        name.style.border="1px solid #d0021b";
        this.props.formChangeActionResetPassword(textError,error)
        
    }
    errorHide=(name,error)=>{
        name.style.border="none";
        this.props.formChangeActionResetPassword("",[error])
    }
    inputHandler(e){
        const name=e.target.name;
        const value=e.target.value;
        this.props.formChangeActionResetPassword(value,[name])
    }
    passwordValidation=function(form){
        if(this.props.state.error==="") this.errorHide(form.password,"passwordError")
        if (this.props.state.password.length < 8 || this.props.state.password.length > 16) {
            this.errorShow(form.password,"passwordError","Password should be between 8 and 16 characters. ")
            return 
          }
        if((/[^\w]/g).test(this.props.state.password)===true){
          this.errorShow(form.password,"passwordError","Must contain only letters and numbers")
          return false
        }
        else {
            return true
        }
    }
    reset(){
        this.props.resetPassStatus("")
        this.props.formChangeActionResetPassword("","uid")
        this.props.formChangeActionResetPassword("","token")
        this.props.formChangeActionResetPassword("","password")
        this.props.formChangeActionResetPassword("","confirmPassword")
        this.props.formChangeActionResetPassword("SAVE","button")
    }
    confirmPasswordValidation=function(form){
        if(this.props.state.error==="")  this.errorHide(form.confirmPassword,"confirmPasswordError")
        if (this.props.state.confirmPassword.length < 8 || this.props.state.confirmPassword.length > 16) {
            this.errorShow(form.confirmPassword,"confirmPasswordError","Password should be between 8 and 16 characters. ")
            return false
          }
        if((/[^\w]/g).test(this.props.state.password)===true){
          this.errorShow(form.confirmPassword,"confirmPasswordError","Must contain only letters and numbers" )
          return false
        }
        else{
            return true
        }
    }
    componentWillMount(){
        this.props.formChangeActionResetPassword("","uid")
        this.props.formChangeActionResetPassword("","token")
    }
    componentDidMount(){

        var regexp = /uid=([\d]+).token=(.+)/;
        var url=this.props.location.search.match(regexp)
        if(url===null) return
        else{
            let uid=+url[1]
            let token=url[2]
            this.props.formChangeActionResetPassword(uid,"uid")
            this.props.formChangeActionResetPassword(token,"token")
             } 
        }
        componentWillReceiveProps({state}){
            var pass=document.getElementsByName("password")[0]
            var confirmPass=document.getElementsByName("confirmPassword")[0]
          
            if(state.status===201){
                this.reset()
                this.props.history.push('/signin')
            }
            else if(state.status===400){
                this.reset()
                this.errorShow(pass,"passwordError","Input errors" )
                this.errorShow(confirmPass,"confirmPasswordError","Input errors" )
            }
            else if(state.status===406){
                // errorShow()
            }
            else if(state.status===444){
                this.reset()
                this.errorShow(pass,"passwordError","Passwords doesn’t match" )
                this.errorShow(confirmPass,"confirmPasswordError","Passwords doesn’t match" )
            }
        }
       
    render() {

        console.log(this.props)
        let {password,confirmPassword,passwordError,confirmPasswordError,passwordShow,confirmPasswordShow,button}=this.props.state
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>NEW PASSWORD</h1>
            {/* {passwordError||confirmPasswordError?<Error emailError={passwordError}  passwordError={confirmPasswordError}/>:""} */}
            <div className="inputElem">
                <label htmlFor="password">Password</label>
                <input type={passwordShow?"text":"password"}
                name="password" maxLength="16"
                value={password} 
                onChange={this.inputHandler} />
                <Error error={passwordError}/>
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
                <Error error={confirmPasswordError}/>
                <img  alt="show_pass" src={confirmPasswordShow?HidePass: ShowPass} 
                onClick={()=>this.props.showPassResetPassword(!confirmPasswordShow,"confirmPasswordShow")}/>
            </div>
            <input type="submit" 
                value={button}
                name="submit"
                disabled={!password||!confirmPassword}/>
        </form>
    )
  }
}

const mapStateToProps=(state)=>{
    return{
        state:state.forgotResetReducer.resetPassword,
        
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
        },
        resetPassword:(pass)=>{
            dispatch(resetPassword(pass))
        },
        resetPassStatus:(status)=>{
            dispatch(resetPassStatus(status))
        }
        
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)