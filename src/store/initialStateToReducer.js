export default{
    signUp:{
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
        nickNameValid:false,
        firstNameValid:false,
        lastNameValid:false, 
        emailValid: false, 
        passwordValid: false,
        formValid: false, 
        showError:false,
        passwordShow:false,
        button:"SIGN UP",
        signUpStatus:""

      },
    signIn:{
        email:"",
        emailError:"",
        passwordError:"",
        error:"", 
        password:"", 
        emailValid: false, 
        passwordValid: false,
        formValid: false,
        showError:false,
        passwordShow:false,
        button:"SIGN IN"
    },
    
    user:"",
    
    dashboard:{
        isFetching:true
    }
    


}