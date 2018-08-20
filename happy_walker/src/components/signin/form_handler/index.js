  export const resetValidation=function(){
    console.log(this)
    this.props.formErrorChange("","nickName")
    this.props.formErrorChange("","firstName")
    this.props.formErrorChange("","lastName")
    this.props.formErrorChange("","email")
    this.props.formErrorChange("","password")
    this.props.formErrorChange("","nickNameError")
    this.props.formErrorChange("","firstNameError")
    this.props.formErrorChange("","lastNameError")
    this.props.formErrorChange("","emailError")
    this.props.formErrorChange("","passwordError")
    this.props.formErrorChange(false,"firstNameValid")
    this.props.formErrorChange(false,"lastNameValid")
    this.props.formErrorChange(false,"emailValid")
    this.props.formErrorChange(false,"passwordValid")
    this.props.formErrorChange(false,"formValid")
    this.props.formErrorChange(false,"showError")

  }

// Показує повідомлення з відповідною помилкою
export const  errorShow=function(name,error,textError){
    this.props.formErrorChange(textError,error)
    name.style.border="1px solid #d0021b";
    return
  }
   // Ховає повідомлення про помилку
  export const errorHide=function(name,error){
    name.style.border="none";
    this.props.formErrorChange("",[error])
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
  if(this.props.state.nickName==="") return this.errorShow(form.nickName,"nickNameError","This field is required!")
  if(this.props.state.nickName.length<3||this.props.state.nickName.length>16){
    this.errorShow(form.nickName,"nickNameError","Nickname should be between 3 and 16 characters")
    return
  }
  if((/[^\w]/g).test(this.props.state.nickName)===true){
    this.errorShow(form.nickName,"nickNameError","Must contain only letters and numbers","nickNameError")
    return
  }
  else {
    this.props.formErrorChange(true,"nickNameValid")
  }
}

 // Валідація firstName
 export const firstNameValidation=function(form){
  this.errorHide(form.firstName,"firstNameError");
  if(this.props.state.firstName==="") return this.errorShow(form.firstName,"firstNameError","This field is required!")
  if(this.props.state.firstName.length<3||this.props.state.firstName.length>16){
    this.errorShow(form.firstName,"firstNameError","First name should be between 3 and 16 characters")
    return
  }
  if((/[^a-zа-я]/g).test(this.props.state.firstName)===true){
    this.errorShow(form.firstName,"firstNameError","Must contain only letters","firstNameError")
    return
  }
  else {
    this.props.formErrorChange(true,"firstNameValid")
    return
  }
}

// Валідація lastName
export const lastNameValidation = function (form) {
  this.errorHide(form.lastName, "lastNameError");
  if (this.props.state.lastName === "") return this.errorShow(form.lastName, "lastNameError", "This field is required!")
  if (this.props.state.lastName.length < 3 || this.props.state.lastName.length > 16) {
    this.errorShow(form.lastName, "lastNameError", "First name should be between 3 and 16 characters")
    return
  }
  if ((/[^a-zа-я]/g).test(this.props.state.lastName)===true) {
    this.errorShow(form.lastName, "lastNameError", "Must contain only letters","lastNameError")
    return
  }
  else {
    this.props.formErrorChange(true,"lastNameValid")
    return
  }
}
    // Валідація email
    export const emailValidation=function(form){
      this.errorHide(form.email, "emailError");

      if (this.props.state.email === "") return this.errorShow(form.email, "emailError", "This field is required!")
      if (!this.validateEmail(this.props.state.email)) {
        this.errorShow(form.email, "emailError", "Enter correct email");
        return
      }
      else {
        this.props.formErrorChange(true,"emailValid")
        return
      }
    } 
    // Валідація password
    export const passwordValidation=function(form){
      this.errorHide(form.password, "passwordError");
      if (this.props.state.password === "") return this.errorShow(form.password, "passwordError", "This field is required!")
      if (this.props.state.password.length < 8 || this.props.state.password.length > 16) {
        this.errorShow(form.password, "passwordError", "Password should be between 8 and 16 characters")
        return
      }
      if ((/[^A-Za-z]/g).test(this.props.state.password) === true) {
        this.errorShow(form.password, "passwordError", "Must contain only letters","passwordError")
        return;
      }
      else {
        this.props.formErrorChange(true,"passwordValid")
        return
      }
    }
    // Привязує input  до state
  export const inputHandler=function(e){
    console.log(this)
      const name=e.target.name;
      const value=e.target.value;
      this.props.formErrorChange? this.props.formErrorChange(value,[name]):this.props.formSignIn(value,[name])
    }
    export const resetValidationSignIn=function(){
      console.log('Hello')
      this.props.formSignIn("","email")
      this.props.formSignIn("","emailError")
      this.props.formSignIn("","passwordError")
      this.props.formSignIn("","password")
      this.props.formSignIn(false, "emailValid")
      this.props.formSignIn(false, "passwordValid")
      this.props.formSignIn(false, "showError")
      this.props.formSignIn(false, "formValid")


    }

