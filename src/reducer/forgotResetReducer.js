import forgotResetState from "../store/forgotResetState"

const forgotResetReducer=(state=forgotResetState,action)=>{
    switch(action.type){
        case  "FORGOT_SUCESS":
        state={
            ...state,
            forgotPass:{
                ...state.forgotPass,
                [action.field]:action.payload
            } 
        }
        break 
        case "FORM_CHANGE_ACTION_RESET_PASSWORD":
        state={
            ...state,
            resetPassword:{
                ...state.resetPassword,
                [action.propChange]:action.payload
            }
            
            
        }
        break
        case "SHOW_PASS_RESET_PASSWORD":
        state={
            ...state,
            resetPassword:{
                ...state.resetPassword,
                [action.inputName]:action.payload
            }
            
            
        }
        break
        case  "BUTTON_RESET_PASS":
        state={
            ...state,
            resetPassword:{
                ...state.resetPassword,
                button:action.payload
            }
            
            
        }
        break
        
        case  "FORGOT_PASS":
        state={
            ...state,
            forgotPass:{
            ...state.forgotPass,
            email:action.payload
            }
            
            
        }
        break
        case  "FORGOT_PASS_STATUS":
        state={
            ...state,
            forgotPass:{
            ...state.forgotPass,
            status:action.payload
            }
            
            
        }
        break
        case  "BUTTON_FORGOT_PASS":
        state={
            ...state,
            forgotPass:{
                ...state.forgotPass,
                button:action.payload
            } 
        }
        break
        case  "FORGOT_PASS_ERROR":
        state={
            ...state,
            forgotPass:{
                ...state.forgotPass,
                error:action.payload
            } 
        }
        break
        case  "RESET_PASS_STATUS":
        state={
            ...state,
            resetPassword:{
                ...state.resetPassword,
                status:action.payload
            } 
        }
        break
        
        
    default: return state
    }
    return state
}
export default forgotResetReducer