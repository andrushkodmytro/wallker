export default {
  
        // Показує повідомлення з відповідною помилкою
    errorShow:(name,error,textError)=>{
        name.style.border="1px solid #d0021b";
        this.setState({[error]:textError});
        return
      },
  
  
      // Ховає повідомлення про помилку
      errorHide:(name,error)=>{
        name.style.border="none";
        this.setState({[error]:""});
        return
      },
  
  
  
      // Валідація email
      validateEmail:(email)=> {
        var re = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.-]{2,6})$/;
        return re.test(String(email).toLowerCase());
        
    },
  
  
  
      // Валідація nickname
      nickNameValidation:(form)=>{
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
      },
  
  
          // Валідація firstName
      firstNameValidation:function(form){
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
      },
  
  
          // Валідація lastName
      lastNameValidation= function (form) {
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
      },
  
          // Валідація email
      emailValidation:function(form){
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
      },
        // Валідація password
      passwordValidation:function(form){
        this.errorHide(form.password, "passwordError");
        if (this.state.password === "") return this.errorShow(form.password, ["passwordError"], "This field is required!")
        if (this.state.password.length < 8 || this.state.password.length > 16) {
          this.errorShow(form.password, "passwordError", "Password should be between 8 and 16 characters")
          return
        }
        if ((/[^A-zА-я0-9]/g).test(this.state.password) === true) {
          form.password.style.border = "1px solid #d0021b";
          this.setState({ passwordError: "Must contain only letters" });
          return;
        }
        else {
          this.setState({passwordValid:true})
          return
        }
      },
      // Привязує input  до state
      inputHandler:(e)=>{
        console.log(e.target.name);
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
        [name]: value
        })
      }
    
  }


    