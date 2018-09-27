import axios from "axios";
axios.defaults.baseURL = "https://a-prod-backend-happy-walker.herokuapp.com"; 
// axios.defaults.baseURL = "https://a-qa-backend-happy-walker.herokuapp.com";
axios.defaults.withCredentials=true


export const forgotPassword=(email)=> dispatch => {
    return axios.post("/users/forgot_password",email,{withCredentials: true})
      .then(function(res) {
        console.log(res)
        if(res.status===202){
          dispatch(forgotPassStatus(202))
        }
        else if(res.status===200){
          dispatch(forgotPassStatus(200))
        }
        
      }     
    )
      .catch(function(error) {
       
        if(error.response.status===400){
          dispatch(forgotPassStatus(400))
        }
      
      })
  }
  export function forgotPassStatus(status){
    return{
      type:"FORGOT_PASS_STATUS",
      payload:status
    }
  }
  export function forgotPassInput(val){
    return{
      type:"FORGOT_PASS",
      payload:val
    }
  }
  export const resetPassword=(email)=> dispatch => {
    return axios.post("/users/reset_password",email,{withCredentials: true})
      .then((res)=>{
        console.log(res)
        if(res.status===201){
          dispatch(resetPassStatus(201))
        }
      }     
    )
      .catch(function(error) {
        if(error.response.status===400){
          dispatch(resetPassStatus(400))
        }
        else if(error.response.status===406){
          dispatch(resetPassStatus(406))
        }
        else if(error.response.status===444){
          dispatch(resetPassStatus(444))
          
        }
      
      })
  }
  //  action для sign in форми
export function formChangeActionResetPassword(value,stateName){
    return{
      type:"FORM_CHANGE_ACTION_RESET_PASSWORD",
      payload:value,
      propChange:stateName
    }
  }
  export function showPassResetPassword(val,inputName){
    return{
      type:"SHOW_PASS_RESET_PASSWORD",
      payload:val,
      inputName
    }
  }
  export function buttonResetPass(val){
    return{
      type:"BUTTON_RESET_PASS",
      payload:val
    }
  }
  export function buttonForgotPass(val){
    return{
      type:"BUTTON_FORGOT_PASS",
      payload:val
    }
  }
  export function showError(val){
    return{
      type:"FORGOT_PASS_ERROR",
      payload:val
    }
  }
  export function resetPassStatus(status){
    return{
      type:"RESET_PASS_STATUS",
      payload:status
    }
  }

  
  