import axios from "axios"
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
    axios.post("http://localhost:8080/sign_in",user)
      .then(function(response) {
        console.log(response);
        if(response.data[0]._id){
          dispatch(goLogIn("200"))
          console.log(response.data[0])
          dispatch(loginUser(response.data[0]))
        }        
      })
      .catch(function(error) {
        dispatch(goLogIn("400"))
      });
  }
  // action для реєстрації
  // export const signUpAction=(user)=> dispatch => {
  //   return axios.post("http://localhost:8000/users/register",user)
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

  export const signUpAction=(user)=> dispatch => {
    return axios.post("https://b-qa-backend-happy-walker.herokuapp.com/users",user)
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

  export const getUser=(id)=> dispatch => {
    return axios.get(`http://localhost:8000/users/${id}`)
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
  