  export const resetValidation=function(){
    this.props.formChangeActionSignUp("","nickName")
    this.props.formChangeActionSignUp("","firstName")
    this.props.formChangeActionSignUp("","lastName")
    this.props.formChangeActionSignUp("","email")
    this.props.formChangeActionSignUp("","password")
    this.props.formChangeActionSignUp("","nickNameError")
    this.props.formChangeActionSignUp("","firstNameError")
    this.props.formChangeActionSignUp("","lastNameError")
    this.props.formChangeActionSignUp("","emailError")
    this.props.formChangeActionSignUp("","passwordError")
    this.props.formChangeActionSignUp(false,"firstNameValid")
    this.props.formChangeActionSignUp(false,"lastNameValid")
    this.props.formChangeActionSignUp(false,"emailValid")
    this.props.formChangeActionSignUp(false,"passwordValid")
    this.props.formChangeActionSignUp(false,"formValid")
    this.props.formChangeActionSignUp(false,"showError")

  }

// Показує повідомлення з відповідною помилкою
export const  errorShow=function(name,error,textError){
    this.props.formChangeActionSignUp(textError,error)
    name.style.border="1px solid #d0021b";
    return
  }
   // Ховає повідомлення про помилку
  export const errorHide=function(name,error){
    name.style.border="none";
    this.props.formChangeActionSignUp("",[error])
    return
  }
// Валідація email
export const validateEmail=function(email) {
  var re = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.-]{2,6})$/;
  return re.test(String(email).toLowerCase());
  
}
 // Валідація nickname
export const  nickNameValidation=function(form){
  this.errorHide(form.nickName,"nickNameError");
  if(this.props.state.nickName.length<3||this.props.state.nickName.length>16){
    this.errorShow(form.nickName,"nickNameError","Nickname should be between 3 and 16 characters")
    return
  }
  if((/[^\w]/g).test(this.props.state.nickName)===true){
    this.errorShow(form.nickName,"nickNameError","Must contain only letters and numbers","nickNameError")
    return
  }
  else {
    this.props.formChangeActionSignUp(true,"nickNameValid")
    return true
    
  }
}

 // Валідація firstName
 export const firstNameValidation=function(form){
  this.errorHide(form.firstName,"firstNameError");
  if(this.props.state.firstName.length<3||this.props.state.firstName.length>16){
    this.errorShow(form.firstName,"firstNameError","First name should be between 3 and 16 characters")
    return
  }
  if((/[^a-zа-я]/g).test(this.props.state.firstName)===true){
    this.errorShow(form.firstName,"firstNameError","Must contain only letters","firstNameError")
    return
  }
  else {
    this.props.formChangeActionSignUp(true,"firstNameValid")
    return true

  }
}

// Валідація lastName
export const lastNameValidation = function (form) {
  this.errorHide(form.lastName, "lastNameError");
  if (this.props.state.lastName.length < 3 || this.props.state.lastName.length > 16) {
    this.errorShow(form.lastName, "lastNameError", "First name should be between 3 and 16 characters")
    return
  }
  if ((/[^a-zа-я]/g).test(this.props.state.lastName)===true) {
    this.errorShow(form.lastName, "lastNameError", "Must contain only letters","lastNameError")
    return
  }
  else {
    this.props.formChangeActionSignUp(true,"lastNameValid")
    return true

  }
}
    // Валідація email
    export const emailValidation=function(form){
      this.errorHide(form.email, "emailError");

      if (!this.validateEmail(this.props.state.email)) {
        this.errorShow(form.email, "emailError", "Enter correct email");
        return
      }
      else {
        this.props.formChangeActionSignUp(true,"emailValid")
        return true

      }
    } 
    // Валідація password
    export const passwordValidation=function(form){
      this.errorHide(form.password, "passwordError");
      if (this.props.state.password.length < 8 || this.props.state.password.length > 16) {
        this.errorShow(form.password, "passwordError", "Password should be between 8 and 16 characters")
        return
      }
      if ((/[^A-Za-z0-9]/g).test(this.props.state.password) === true) {
        this.errorShow(form.password, "passwordError", "Must contain only letters and numbers","passwordError")
        return;
      }
      else {
        this.props.formChangeActionSignUp(true,"passwordValid")
        return true

      }
    }
    // Привязує input  до state
  export const inputHandler=function(e){
   
      const name=e.target.name;
      const value=e.target.value;
      this.props.formChangeActionSignUp? this.props.formChangeActionSignUp(value,[name]):this.props.formChangeActionSignIn(value,[name])
    }
    export const resetValidationSignIn=function(){
      this.props.formChangeActionSignIn("","email")
      this.props.formChangeActionSignIn("","emailError")
      this.props.formChangeActionSignIn("","passwordError")
      this.props.formChangeActionSignIn("","password")
      this.props.formChangeActionSignIn(false, "emailValid")
      this.props.formChangeActionSignIn(false, "passwordValid")
      this.props.formChangeActionSignIn(false, "showError")
      this.props.formChangeActionSignIn(false, "formValid")


    }

