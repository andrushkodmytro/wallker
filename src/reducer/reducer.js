import initialState from "../store/initialStateToReducer"
 const reducer=(state=initialState,action)=>{
    

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
        case "LOGIN":
        state={
            ...state,
            logIn:action.payload
            
        }
        break
            default: return state
    }
    return state
}
export default reducer;
