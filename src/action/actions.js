import axios from "axios"

export  function appChangeView(view) {
    return {
      type: "APPCHANGEVIEW",
      payload: view
    };
  }
  export function formErrorChange(error,nameError){
    return{
      type:"FORMERRORCHANGE",
      payload:error,
      propChange:nameError
    }
  }
  export function formSignIn(error,nameError){
    return{
      type:"FORMSIGNIN",
      payload:error,
      propChange:nameError
    }
  } 
  export const signInAction=(user)=> dispatch => {
    console.log(user)
    axios.post("https://httpbin.org/post",user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  export const signUpAction=(user)=> dispatch => {
    console.log(user)
    axios.post("https://httpbin.org/post",user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  