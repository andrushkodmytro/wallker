import axios from "axios";
// axios.defaults.baseURL = "https://a-prod-backend-happy-walker.herokuapp.com"; 
axios.defaults.baseURL = "https://a-qa-backend-happy-walker.herokuapp.com";

//  action для sign up форми
  export function formChangeActionSignUp(value,stateName){
    return{
      type:"FORM_CHANGE_ACTION_SIGN_UP",
      payload:value,
      propChange:stateName
    
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
    axios.post("/users/sign_in",user,{withCredentials: true})
      .then(function(response) {
        console.log(response)
        if(response.status===230){ 
          dispatch(getUser())
        }        
      })
      .catch(function(error) {
        dispatch(goLogIn("400"))
      });
  }
  // action для реєстрації
  export const signUpAction=(user)=> dispatch => {
    return axios.post("/users/register",user,{withCredentials: true})
     .then(function(response) {
       console.log(response)
        if(response.status===201){
          dispatch( goSignUp("201"))
        }      
      }     
    )
      .catch(function(error) {
        console.log(error);
      
      })
}


  export const confirmEmail=(confirm)=> dispatch => {
    return axios.post("/users/confirm_email",confirm,{withCredentials: true})
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
    return axios.get("/users/me",{withCredentials: true})
     .then(function(response) {
       console.log(response)
        if(response.status===200){
          dispatch( loginUser(response.data))
          dispatch(goLogIn("230"))
        }      
      }     
    )
      .catch(function(error) {
        console.log(error);
      
      })
  }


  export function goLogIn(value){
    return{
      type:"LOGIN",
      payload:value
    }
  } 
  export function loginUser(user){
    return{
      type:"LOGIN_USER",
      payload:user
    }
  }
  export function goSignUp(value){
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
  