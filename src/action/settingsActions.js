import axios from "axios";
import {loginUser} from "../action/actions"
axios.defaults.baseURL = "https://a-prod-backend-happy-walker.herokuapp.com"; 
// axios.defaults.baseURL = "https://a-qa-backend-happy-walker.herokuapp.com";
axios.defaults.withCredentials=true

export function settingsInput(val,nameInput){
    return{
      type:"SETTINGS_INPUT",
      payload:val,
      nameInput
    }
  }

  export const updateProfile=(user)=> dispatch => {
    return axios.post("/users/me",user)
      .then(function(res) {
        console.log(res)
        if(res.status===201){
          dispatch(settingStatus(201))
          dispatch(loginUser(user))

        }
      
        
      }     
    )
      .catch(function(error) {
        if(error.response.status===400){
          
        }
       
        
      })
  }
  export const uploadPhoto=(photo)=> dispatch => {
    return axios.post("/users/upload_photo",photo)
      .then(function(res) {
        console.log(res)
        if(res.status===200){
          dispatch(loginUser(res.data))
          dispatch(settingStatus(200))
        }
      
        
      }     
    )
      .catch(function(error) {
       
        
      })
  }
 
  export function settingStatus(status){
    return{
      type:"SETTINGS_STATUS",
      payload:status
    }
  }
  export function showPhoto(photo){
    return{
      type:"SHOW_PHOTO",
      payload:photo
    }
  }
  export function changeEmailStatus(status){
    return{
      type:"CHANGE_EMAIL_STATUS",
      payload:status
    }
  }
  export const changeEmail=(confirm)=> dispatch => {
    return axios.post("/users/change_email",confirm)
      .then(function(response) {
        console.log(response)
        if(response.status===201){
          dispatch(changeEmailStatus(201))
        }      
      }     
    )
      .catch(function(error) {
        console.log(error);
      
      })
  }
  export function changePassInput(val,nameInput){
    return{
      type:"CHANGE_PASS_INPUT",
      payload:val,
      nameInput
    }
  }
  export function showChangePass(val,passName){
    return{
      type:"SHOW_CHANGE_PASS",
      payload:val,
      passName
    }
  }
  export const changePass=(pass)=> dispatch => {
    return axios.post("/users/change_password",pass)
      .then(function(res) {
        console.log(res)
        if(res.status===201){
          dispatch(changePassStatus(201))

        }
      
        
      }     
    )
      .catch(function(error) {
        if(error.response.status===401){
          dispatch(changePassStatus(401))
        }
        else if(error.response.status===444){
          dispatch(changePassStatus(444))
        }
       
        
      })
  }
  export function changePassStatus(status){
    return{
      type:"CHANGE_PASS_STATUS",
      payload:status
    }
  }