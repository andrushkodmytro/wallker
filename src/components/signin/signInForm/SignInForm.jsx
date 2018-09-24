import React, { Component } from 'react';
import Error from "../errorSignIn/ErrorSignIn";
import { connect } from "react-redux";
import { signInAction, formChangeActionSignIn,getUser,showPassSignIn,buttonSignIn, signInStatus } from "../../../action/actions";
import { inputHandler,resetValidationSignIn, validateEmail} from "../formHandler/formHandler";
import { Link } from "react-router-dom";
import "../signinPage/SignInPage.css";

import { GoogleLogin } from 'react-google-login';

import ShowPass from "../../../assets/img/password2.png";
import HidePass from "../../../assets/img/password1.png";

class Form extends Component {
    constructor(props){
        super(props);
        this.getDashboard=()=>{this.props.history.push('/dashboard')}
        this.inputHandler=inputHandler.bind(this)
        this.resetValidation=resetValidationSignIn

        
        this.submitHandler=(e)=>{
            let target=e.target;
            e.preventDefault();
            this.emailValidation(target);
            this.passwordValidation(target);
            target.submit.style.opacity= 1;
            target.submit.value="SIGN IN";
            if( this.emailValidation(target) && this.passwordValidation(target)){
                this.props.formChangeActionSignIn(true,"formValid")
                const user={username_or_email:target.email.value,password:target.password.value};
                this.props.buttonSignIn("SIGNING IN...")
                 target.submit.style.opacity= 0.5;
                this.props.getSignIn(user)             
            }
        }
       
        this.errorShow=(name,error,textError)=>{
            name.style.border="1px solid #d0021b";
            this.props.formChangeActionSignIn(textError,error)
            this.props.formChangeActionSignIn(true,"showError")
        }
        this.errorHide=(name,error)=>{
            name.style.border="none";
            this.props.formChangeActionSignIn("",[error])
        }
        this.emailValidation=function(form){
            // eslint-disable-next-line
            var email=validateEmail(this.props.state.email)
            var nickname=((/[^\w]/g).test(this.props.state.email)===true)
            if(this.props.state.error==="") {
                this.errorShow(form.email,"emailError")
                return false
            }
            else if (this.props.state.email.length < 2 || this.props.state.email.length > 129) {
                this.errorShow(form.email,"emailError","Nickname should be between 2 and 16 characters. ")
                return 
              }
            // eslint-disable-next-line
           else if( !email&&nickname) {
              
                this.errorShow(form.email,"emailError","Wrong email/password. Try again or click Forgot password to reset it. ")
                
             return false
            
           }
            else {
                this.props.formChangeActionSignIn(true,"emailValid")
                return true
            }
        }
        this.passwordValidation=function(form){
            if(this.props.state.error==="")  this.errorShow(form.password,"passwordError")
           else if (this.props.state.password.length < 8 || this.props.state.password.length > 16) {
                this.errorShow(form.password,"passwordError","Password should be between 8 and 16 characters. ")
                return 
              }
           else if((/[^\w]/g).test(this.props.state.password)===true){
              this.errorShow(form.password,"Wrong email/password. Try again or click Forgot password to reset it. ")
              return false
            }
            else{
                this.props.formChangeActionSignIn(true,"passwordValid")
                return true
            }
        }
    }
    componentWillMount(){
        this.props.signInStatus("") 
    }
    componentWillReceiveProps({state}){
        if(state.status===200){
            this.resetValidation();
            // this.props.signInStatus("")
            this.getDashboard()        
            
        }
        if(state.status===400){
            this.props.logInAction("")
            this.resetValidation();
            alert("login or email is incorect")
        }
    }
    componentDidMount(){
        this.resetValidation();
    }
    
    render() {
        const responseGoogle = (response) => {
            console.log(response);
            //const session= this.props.state.reducer.session;
            // this.props.inputSession(response.profileObj.familyName,'firstName');
            // this.props.inputSession(response.profileObj.givenName,'lastName');
            // this.props.inputSession(response.profileObj.email,'email');
            // this.props.inputSession(response.profileObj.imageUrl,'image');
            
            //window.location.replace('/dashboard');
            //переробити коли бекенд доробить з гуглом то саме
            if(response.googleId){
                this.props.history.push("/dashboard");
            }
        }

        // console.log(this.props)
        let {email,password,passwordShow,button,emailError,passwordError,error}=this.props.state
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN IN</h1>
            {emailError||passwordError||error?<Error emailError={this.props.state.emailError||error}  passwordError={this.props.state.passwordError}/>:""}
            <div className="inputElem">
                <label htmlFor="email">Email or nickname</label>
                <input type="email" name="email" maxLength="129" value={this.props.state.email} onChange={this.inputHandler} />
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password</label>
              <input type={passwordShow?"text":"password"} 
                maxLength="16"
                name="password" 
                value={this.props.state.password}
                onChange={this.inputHandler}/>
                  <img  alt="show_pass" src={passwordShow?HidePass: ShowPass} 
                onClick={()=>this.props.showPassSignIn(!passwordShow)}/>
            </div>
            <div className="remember">
                <div className="check">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">Remember me</label>
                </div>

                <Link to="/forgot">Forgot password?</Link>  
            </div>
            <input type="submit" 
                value={button}
                name="submit"
                disabled={!email||!password}/>
            <div className="google_button"><GoogleLogin
              clientId="772503025939-f349nuolhdsqqbrmrvr8mn5kjqb2g9lf.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
            </div>
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
        state:state.reducer.signIn,
        logIn:state.reducer.logIn,
        user:state.reducer.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        formChangeActionSignIn: (error,nameError) => {
            dispatch(formChangeActionSignIn(error,nameError));
        },
        getSignIn: (user) => {
            dispatch(signInAction(user));
        },
        // logInAction:(value)=>{
        //     dispatch(goLogIn(value))
        // },
        getUser:()=>{
            dispatch(getUser())
        },
        showPassSignIn:(val)=>{
            dispatch(showPassSignIn(val))
        },
        buttonSignIn:(val)=>{
            dispatch(buttonSignIn(val))
        },
        signInStatus:(status)=>{
            dispatch(signInStatus(status))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)