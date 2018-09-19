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
            case "BUTTON_SIGN_UP":
            state={
                ...state,
                signUp:{
                    ...state.signUp,
                    button:action.payload
                }
            }
            break
            case "BUTTON_SIGN_IN":
            state={
                ...state,
                signIn:{
                    ...state.signIn,
                    button:action.payload
                }
            }
            break
            
        // case "LOGIN":
        // state={
        //     ...state,
        //     logIn:action.payload
        // }
        // break
        case "SIGN_UP":
        state={
            ...state,
            signUp:{
                ...state.signUp,
                signUpStatus:action.payload
            }
            
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
        case "SHOW_PASS":
        state={
            ...state,
            signUp:{
                ...state.signUp,
                passwordShow:action.payload
            }
            
        }
        break
        case "SHOW_PASS_SIGN_IN":
        state={
            ...state,
            signIn:{
                ...state.signIn,
                passwordShow:action.payload
            }
            
        }
        break
            default: return state
    }
    return state
}
export default reducer;
