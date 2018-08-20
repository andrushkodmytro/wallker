import initialState from "../store"
 const reducer=(state=initialState,action)=>{
    // console.log(action.propChange)

    switch(action.type){
        case "APPCHANGEVIEW":
            state={
                ...state,
                appView:action.payload
        
            }
            break;
        case "FORMERRORCHANGE":
            state={
                ...state,
                signUp:{
                    ...state.signUp,
                    [action.propChange]:action.payload
                }
            }
            break
        case "FORMSIGNIN":
            state={
                ...state,
                signIn:{
                    ...state.signIn,
                    [action.propChange]:action.payload
                }
            }
            break
    }
    return state
}
export default reducer;