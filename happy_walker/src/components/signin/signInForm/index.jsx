import React, { Component } from 'react';
import Error from "../error";

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state={
            email:"",
            error:"",
            password:"",
            emailValid: false,
            passwordValid: false,
            formValid: false,
            showError:false
        }

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
                if(this.state.emailValid&&this.state.passwordValid){
                    this.setState({formValid:true});
                    alert("You are sign in")
                    this.resetValidation();
                  }        
            },3000)
            
        }
        this.errorShow=(name,textError)=>{
            name.style.border="1px solid #d0021b";
            this.setState({error:textError})
            this.setState({showError:true})
        }
        this.errorHide=(name)=>{
            name.style.border="none";
            this.setState({showError:false})

        }
        this.emailValidation=function(form){
            this.errorHide(form.email)
            if(this.state.email==="") return this.errorShow(form.email,"This field is required!")
            if((/[^\w@-_\.]/g).test(this.state.email)===true){
              this.errorShow(form.email,"Wrong email/password. Try again or click Forgot password to reset it.")
              return
            }
            else {
                this.setState({emailValid:true})
                return
            }
        }
        this.passwordValidation=function(form){
            this.errorHide(form.password)
            if(this.state.password==="") return this.errorShow(form.password,"This field is required!")
            if((/[^\w]/g).test(this.state.password)===true){
              this.errorShow(form.password,"Wrong email/password. Try again or click Forgot password to reset it.")
              return
            }
            else{
                this.setState({passwordValid:true})
            }
        }
        this.resetValidation=()=>{
            this.setState({nickName:"",
                email:"",
                password:"",
                emailError:"",
                passwordError:"",
                emailValid: false,
                passwordValid: false,
                formValid: false,
                showError:false})
    
        }

            this.inputHandler=(e)=>{
                const name=e.target.name;
                const value=e.target.value;
                this.setState({[name]: value})         
        }
    }
    render() {

    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN IN</h1>
            {this.state.showError?<Error error={this.state.error}/>:""}
            <div className="inputElem">
                <label htmlFor="email">Email or nickname</label>
                <input type="email" name="email" value={this.state.email} onChange={this.inputHandler} />
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password<span>*</span></label>
              <input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/>
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
