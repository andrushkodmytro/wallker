import React, { Component } from 'react';
import Error from "../errorSignIn/ErrorSignIn";
import { connect } from "react-redux";
import { signInAction, goLogIn, formChangeActionSignIn,getUser,showPassSignIn } from "../../../action/actions";
import { inputHandler,resetValidationSignIn } from "../formHandler/formHandler";
import { Link } from "react-router-dom";
import ShowPass from "../../../assets/img/password2.png";
import HidePass from "../../../assets/img/password1.png"



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
                this.props.formChangeActionSignIn(true,"formValid")
                // const user={username_or_email:target.email.value,password:target.password.value};
                // this.props.getSignIn(user)
                // this.props.getUser()
                this.props.history.push("/dashboard")

                
                
              }
        }
       
        this.errorShow=(name,error,textError)=>{
            name.style.border="1px solid #d0021b";
            this.props.formChangeActionSignIn(textError,error)
            this.props.formChangeActionSignIn(true,"showError")
        }
        this.errorHide=(name,error)=>{
            // console.log("Hello")

            name.style.border="none";
            this.props.formChangeActionSignIn("",[error])
        }
        this.emailValidation=function(form){
            this.errorHide(form.email,"emailError")
            // eslint-disable-next-line
            if((/[^\w]/g).test(this.props.state.email)===true){
              this.errorShow(form.email,"emailError","Wrong email. Try again or click Forgot password to reset it. ")
              return false
            }
            else {
                this.props.formChangeActionSignIn(true,"emailValid")
                return true
            }
        }
        this.passwordValidation=function(form){
            this.errorHide(form.password,"passwordError")
            if (this.props.state.password.length < 8 || this.props.state.password.length > 16) {
                this.errorShow(form.password,"passwordError","Password should be between 8 and 16 characters. ")
                return 
              }
            if((/[^\w]/g).test(this.props.state.password)===true){
              this.errorShow(form.password,"Wrong email/password. Try again or click Forgot password to reset it. ")
              return false
            }
            else{
                this.props.formChangeActionSignIn(true,"passwordValid")
                return true
            }
        }
    }
    componentDidMount(){ 
        this.resetValidation()    
       if( document.cookie.indexOf("sessionid")===0){
        this.props.getUser()
        this.props.history.push("/dashboard")       }
    }
    componentWillReceiveProps(NewProps){
        if(NewProps.logIn==="230"){
            this.resetValidation();
            this.props.logInAction("");
            // this.props.getUser()
            // this.getDashboard()
            
            
        }
        if(NewProps.logIn==="400"){
            this.props.logInAction("")
            this.resetValidation();
            alert("login or email is incorect")
        }
    }
    render() {
        console.log(this.props)
        let {email,password,passwordShow}=this.props.state
    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN IN</h1>
            {this.props.state.emailError||this.props.state.passwordError?<Error emailError={this.props.state.emailError} passwordError={this.props.state.passwordError}/>:""}
            <div className="inputElem">
                <label htmlFor="email">Email or nickname</label>
                <input type="email" name="email" maxLength="129" value={this.props.state.email} onChange={this.inputHandler} />
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password</label>
              <input type={passwordShow?"text":"password"} 
                name="password" 
                value={this.props.state.password}
                onChange={this.inputHandler}/>
                  <img src={passwordShow?HidePass: ShowPass} 
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
        logInAction:(value)=>{
            dispatch(goLogIn(value))
        },
        getUser:()=>{
            dispatch(getUser())
        },
        showPassSignIn:(val)=>{
            dispatch(showPassSignIn(val))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)