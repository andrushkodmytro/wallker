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