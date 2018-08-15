import React, { Component } from 'react';
import Error from "../error";

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state=({
            email:"",
            password:"",
            emailValid: false,
            passwordValid: false,
            formValid: false,
            showError:false
        })

        this.submitHandler=(e)=>{
            this.setState({showError:false})
            let target=e.target;
            e.preventDefault();
            target.submit.value="SIGNING IN";
            target.submit.style.opacity= 0.5;
            setTimeout(()=>{
                this.validation();
                target.submit.style.opacity= 1;
                target.submit.value="SIGN IN";        
            },3000)
            
        }

        this.validation=()=>{
            if(this.state.email===""||this.state.password==="")
            this.setState({showError:true})
        }

        this.inputHandler=(e)=>{
            console.log(e.target.name);
            const name=e.target.name;
            const value=e.target.value;
            this.setState({
            [name]: value
            })
        }         
    }
    render() {

    return (
        <form onSubmit={this.submitHandler} noValidate>
            <h1>SIGN IN</h1>
            {this.state.showError?<Error/>:""}
            <div className="inputElem">
            <label htmlFor="email">Email or nickname</label>
            <input type="email" name="email" value={this.state.email} onChange={this.inputHandler} />
            <div className="inputElem">
            </div>
            <label htmlFor="password">Password</label>
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
