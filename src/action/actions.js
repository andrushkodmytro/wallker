import axios from "axios";
import fetch from 'node-fetch';
import Cookies from 'universal-cookie';

var request = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 5000,
  headers: {
    // 'X-Custom-Header': 'foobar'
  // "accept": "application/json" , 
  "Content-Type": "application/json"
}
});

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
        if(response.status===230){
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
    // fetch('http://localhost:8000/users/register', { method: 'POST', body: JSON.stringify(user) })
    // .then(res => res.json())
    // .then(json => console.log(json));
}

  // export const signUpAction=(user)=> dispatch => {
  //   return axios.post("https://b-qa-backend-happy-walker.herokuapp.com/api/v1/users",user)
  //    .then(function(response) {
  //      console.log(response)
  //       if(response.status===201){
  //         dispatch( goSignUp("201"))
  //       }      
  //     }     
  //   )
  //     .catch(function(error) {
  //       console.log(error);
      
  //     })
  // }
  export const confirmEmail=(confirm)=> dispatch => {
    // return axios.post("http://localhost:8000/users/confirm_email",confirm)
    //  .then(function(response) {
    //    console.log(response)
    //     if(response.status===200){
    //       dispatch( loginUser(response.data))
    //     }      
    //   }     
    // )
    //   .catch(function(error) {
    //     console.log(error);
      
    //   })
    fetch('http://localhost:8000/users/confirm_email', { method: 'POST', body: JSON.stringify(confirm) })
    .then(res => res.json())
    .then(json => console.log(json));
  }

  export const getUser=(id)=> dispatch => {
    return axios.get(`http://localhost:8000/users/sign_in`)
     .then(function(response) {
       console.log(response)
       const cookies = new Cookies();
        cookies.set('sesionid', response.data, { path: '/' });
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
  