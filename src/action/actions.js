import axios from "axios";


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
    axios.post("http://localhost:8000/users/sign_in",user)
      .then(function(response) {
        console.log(response);
        const token =response.data.token
        if(response.status===230){
          var date = new Date(new Date().getTime() + 60 * 60 * 24 * 14 * 1000);
          document.cookie = `sessionid=${token}; path=/; expires=${date.toUTCString()}`;
          dispatch(goLogIn("230"))
          console.log(response.data)
          dispatch(loginUser(response.data[0]))
        }        
      })
      .catch(function(error) {
        dispatch(goLogIn("400"))
      });
  }
  // action для реєстрації
  export const signUpAction=(user)=> dispatch => {
    return axios.post("http://localhost:8000/users/register",user)
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
    return axios.post("http://localhost:8000/users/confirm_email",confirm)
     .then(function(response) {
       console.log(response)
        if(response.status===200){
          dispatch( loginUser(response.data))
        }      
      }     
    )
      .catch(function(error) {
        console.log(error);
      
      })
  }

  export const getUser=()=> dispatch => {
    return axios.get(`http://localhost:8000/users/95`)
     .then(function(response) {
       console.log(response)
        if(response.status===200){
          dispatch( loginUser(response.data))
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
  