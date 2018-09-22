import axios from "axios";
// axios.defaults.baseURL = "https://a-prod-backend-happy-walker.herokuapp.com"; 
axios.defaults.baseURL = "https://a-qa-backend-happy-walker.herokuapp.com";
axios.defaults.withCredentials=true

export function settingsInput(val,nameInput){
    return{
      type:"SETTINGS_INPUT",
      payload:val,
      nameInput
    }
  }