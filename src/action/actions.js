import axios from "axios";
// axios.defaults.baseURL = "https://a-prod-backend-happy-walker.herokuapp.com"; 
axios.defaults.baseURL = "https://a-qa-backend-happy-walker.herokuapp.com";
axios.defaults.withCredentials=true

//  action для sign up форми
export function formChangeActionSignUp(value,stateName){
  return{
    type:"FORM_CHANGE_ACTION_SIGN_UP",
    payload:value,
    propChange:stateName
  
  }
}
// action for changing signup botton value
export function buttonSignUp(val){
  return{
    type:"BUTTON_SIGN_UP",
    payload:val
  }
}
// action for changing signin botton value
export function buttonSignIn(val){
  return{
    type:"BUTTON_SIGN_IN",
    payload:val
  }
}

//  action для sign in форми
export function formChangeActionSignIn(value,stateName){
  return{
    type:"FORM_CHANGE_ACTION_SIGN_IN",
    payload:value,
    propChange:stateName
  }
} 

export const signInAction=(user)=> dispatch => {
  axios.post("/users/sign_in",user)
    .then(function(response) {
      console.log(response)
      if(response.status===230){ 
        dispatch(getUser())
      }        
    })
    .catch(function(error) {
      if(error.response.status===432||error.response.status===467){
        dispatch(buttonSignIn("SIGN IN"))
        dispatch(formChangeActionSignIn("Invalid login or password. Please try again.","error"))
        let submit=document.getElementsByName("submit");
        let email=document.getElementsByName("email");
        let password=document.getElementsByName("password");
        submit[0].style.opacity=1;
        email[0].style.border="1px solid #d0021b";
        password[0].style.border="1px solid #d0021b";
      }
     else if(error.response.status===455){
      dispatch(buttonSignIn("SIGN IN"))
        dispatch(formChangeActionSignIn("Please verify your email address.","error"))
        let submit=document.getElementsByName("submit");
        let email=document.getElementsByName("email");
        let password=document.getElementsByName("password");
        submit[0].style.opacity=1;
        email[0].style.border="1px solid #d0021b";
        password[0].style.border="1px solid #d0021b";
     }
      // dispatch(goLogIn("400"))
    });
}
// action для реєстрації
export const signUpAction=(user)=> dispatch => {
  return axios.post("/users/register",user)
    .then(function(response) {
      console.log(response)
      if(response.status===201){
        dispatch( signUpStatusChange("201"))
      }
    }     
  )
    .catch(function(error) {
      if(error.response.status===460){
        dispatch( buttonSignUp("SIGN UP"))
        dispatch(formChangeActionSignUp("Username or email already exists","nickNameError"))
        dispatch(formChangeActionSignUp("Username or email already exists","emailError"))
        let Nickname=document.getElementsByName("nickName");
        let email=document.getElementsByName("email");
        let submit=document.getElementsByName("submit");
        Nickname[0].style.border="1px solid #d0021b"
        email[0].style.border="1px solid #d0021b";
        submit[0].style.opacity="1";
      }
        
      else console.log(error.response.status);
    
    })
}


export const confirmEmail=(confirm)=> dispatch => {
  return axios.post("/users/confirm_email",confirm)
    .then(function(response) {
      console.log(response)
      if(response.status===200){
        dispatch( getUser())
      }      
    }     
  )
    .catch(function(error) {
      console.log(error);
    
    })
}

export const getUser=()=> dispatch => {
  return axios.get(`/users/me`)
    .then(function(response) {
      console.log(response)
      if(response.status===200){
        dispatch( loginUser(response.data))
        dispatch(isFetching(false))
        dispatch(signInStatus(200))
      }      
    }     
  )
    .catch(function(error) {
      if(error.response.status===404){
        dispatch(isFetching(false))
        dispatch(signInStatus(404))
      }
    
    })
}
export const logOutAction=()=> dispatch => {
  return axios.get(`/users/logout`)
    .then(function(response) {
      console.log(response)
      if(response.status===200){
       dispatch(signInStatus(""))
      }      
    }     
  )
    .catch(function(error) {
      console.log(error);
    
    })
}
export function loginUser(user){
  return{
    type:"LOGIN_USER",
    payload:user
  }
}
export function signInStatus(status){
  return{
    type:"SIGN_IN_STATUS",
    payload:status
  }
}
export function signUpStatusChange(value){
  return{
    type:"SIGN_UP",
    payload:value
  }
} 
export function goConfirmEmail(value){
  return{
    type:"CONFIRM_EMAIL",
    payload:value
  }
} 

export function showPass(val){
  return{
    type:"SHOW_PASS",
    payload:val
  }
}

export function showPassSignIn(val){
  return{
    type:"SHOW_PASS_SIGN_IN",
    payload:val
  }
}
export function isFetching(val){
  return{
    type:"IS_FETCHING",
    payload:val
  }
}
export function changeEmailStatus(status){
  return{
    type:"CHANGE_EMAIL_STATUS",
    payload:status
  }
}