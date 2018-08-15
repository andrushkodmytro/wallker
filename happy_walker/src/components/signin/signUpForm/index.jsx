import React, { Component } from 'react';
import ErrorSpan from "../error_span";
// import HandlerForm from "../form_handler";

export default class SignUpForm extends Component {
  constructor(props){
    super(props)

    this.state=({
      nickName:"",
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      nickNameError:"",
      firstNameError:"",
      lastNameError:"",
      emailError:"",
      passwordError:"",
      firstNameValid:false,
      lastNameValid:false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      showError:false
    })
  // Обробник події Submit
    this.submitHandler=(e)=>{
      e.preventDefault();
      let target=e.target;
      target.submit.value="SIGNING UP";
      target.submit.style.opacity= 0.5;
      setTimeout(()=>{
        this.nickNameValidation(target);
        this.firstNameValidation(target);
        this.lastNameValidation(target);
        this.emailValidation(target);
        this.passwordValidation(target);
        target.submit.style.opacity= 1;
        target.submit.value="SIGN UP"; 
        this.setState({password:""});
        console.log(this.state.emailError)
        if(this.state.nickNameValid&&this.state.firstNameValid&&this.state.lastNameValid&&this.state.emailValid&&this.state.passwordValid){
          this.setState({formValid:true});
          alert("You are sign up")
          this.resetValidation();
        }
      },3000)
    }
    this.resetValidation=()=>{
      this.setState({nickName:"",
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      nickNameError:"",
      firstNameError:"",
      lastNameError:"",
      emailError:"",
      passwordError:"",
      firstNameValid:false,
      lastNameValid:false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      showError:false})
    }
  //  let {errorShow,errorHide,validateEmail,nickNameValidation,firstNameValidation,lastNameValidation,
  //     emailValidation,passwordValidation,inputHandler}=HandlerForm

    // Показує повідомлення з відповідною помилкою
    this.errorShow=(name,error,textError)=>{
      name.style.border="1px solid #d0021b";
      this.setState({[error]:textError});
      return
    }


    // Ховає повідомлення про помилку
    this.errorHide=(name,error)=>{
      name.style.border="none";
      this.setState({[error]:""});
      return
    }



    // Валідація email
    this.validateEmail=(email)=> {
      var re = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.-]{2,6})$/
      return re.test(String(email).toLowerCase());
      
  }



    // Валідація nickname
    this.nickNameValidation=function(form){
      this.errorHide(form.nickName,"nickNameError");
      if(this.state.nickName==="") return this.errorShow(form.nickName,["nickNameError"],"This field is required!")
      if(this.state.nickName.length<3||this.state.nickName.length>16){
        this.errorShow(form.nickName,"nickNameError","Nickname should be between 3 and 16 characters")
        return
      }
      if((/[^\w]/g).test(this.state.nickName)===true){
        console.log((/[^A-zА-я0-9]/g).test(this.state.nickName))
        form.nickName.style.border="1px solid #d0021b";
        this.setState({nickNameError:"Must contain only letters and numbers"});
        return
      }
      else {
        this.setState({nickNameValid:true})
      }
    }


        // Валідація firstName
    this.firstNameValidation=function(form){
      this.errorHide(form.firstName,"firstNameError");
      if(this.state.firstName==="") return this.errorShow(form.firstName,["firstNameError"],"This field is required!")
      if(this.state.firstName.length<3||this.state.firstName.length>16){
        this.errorShow(form.firstName,"firstNameError","First name should be between 3 and 16 characters")
        return
      }
      if((/[^a-zа-я]/g).test(this.state.firstName)===true){

        form.firstName.style.border="1px solid #d0021b";
        this.setState({firstNameError:"Must contain only letters"});
        return
      }
      else {
        this.setState({firstNameValid:true})
        return
      }
    }


        // Валідація lastName
    this.lastNameValidation = function (form) {
      this.errorHide(form.lastName, "lastNameError");
      if (this.state.lastName === "") return this.errorShow(form.lastName, ["lastNameError"], "This field is required!")
      if (this.state.lastName.length < 3 || this.state.lastName.length > 16) {
        this.errorShow(form.lastName, "lastNameError", "First name should be between 3 and 16 characters")
        return
      }
      if ((/[^a-zа-я]/g).test(this.state.lastName)===true) {
        form.lastName.style.border = "1px solid #d0021b";
        this.setState({ lastNameError: "Must contain only letters" });
        return
      }
      else {
        this.setState({lastNameValid:true})
        return
      }
    }

        // Валідація email
    this.emailValidation=function(form){
      this.errorHide(form.email, "emailError");

      if (this.state.email === "") return this.errorShow(form.email, ["emailError"], "This field is required!")
      if (!this.validateEmail(this.state.email)) {
        this.errorShow(form.email, "emailError", "Enter correct email");
        return
      }
      else {
        this.setState({emailValid:true})
        return
      }
    }
      // Валідація password
    this.passwordValidation=function(form){
      this.errorHide(form.password, "passwordError");
      if (this.state.password === "") return this.errorShow(form.password, ["passwordError"], "This field is required!")
      if (this.state.password.length < 8 || this.state.password.length > 16) {
        this.errorShow(form.password, "passwordError", "Password should be between 8 and 16 characters")
        return
      }
      if ((/[^A-Za-z]/g).test(this.state.password) === true) {
        form.password.style.border = "1px solid #d0021b";
        this.setState({ passwordError: "Must contain only letters" });
        return;
      }
      else {
        this.setState({passwordValid:true})
        return
      }
    }
    // Привязує input  до state
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
            <h1>SIGN UP</h1>
            <div className="inputElem">
              <label htmlFor="nickName">nickName <span>*</span></label>
              <input type="text" name="nickName" value={this.state.nickName} onChange={this.inputHandler}/>
            {this.state.nickNameError?<ErrorSpan error={this.state.nickNameError}/>:""}
           </div> 
           <div className="inputElem">
              <label htmlFor="firstName">First name <span>*</span></label>
              <input type="text" name="firstName" value={this.state.firstName} onChange={this.inputHandler}/>
              {this.state.firstNameError?<ErrorSpan error={this.state.firstNameError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="lastName">Last name<span>*</span></label>
              <input type="text" name="lastName"value={this.state.lastName} onChange={this.inputHandler}/>
              {this.state.lastNameError?<ErrorSpan error={this.state.lastNameError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" name="email" value={this.state.email} onChange={this.inputHandler}/>
              {this.state.emailError?<ErrorSpan error={this.state.emailError}/>:""}
            </div>
            <div className="inputElem">
              <label htmlFor="password">Password<span>*</span></label>
              <input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/>
              {this.state.passwordError?<ErrorSpan error={this.state.passwordError}/>:""}
            </div>
            <input type="submit" value="SIGN UP" name="submit"/>
        </form>
    )
  }
  
}
