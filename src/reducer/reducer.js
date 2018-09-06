import initialState from "../store/initialStateToReducer"
 const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "FORM_CHANGE_ACTION_SIGN_UP":
            state={
                ...state,
                signUp:{
                    ...state.signUp,
                    [action.propChange]:action.payload
                }
            }
            break
        case "FORM_CHANGE_ACTION_SIGN_IN":
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
        case "SIGN_UP":
        state={
            ...state,
            signUpStatus:action.payload
        }
        break
        case "LOGIN_USER":
        state={
            ...state,
            user:{
                ...action.payload
            }
            
        }
        break
            default: return state
    }
    return state
}
export default reducer;
