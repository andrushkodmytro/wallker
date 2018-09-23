import settingsState from "../store/settingsState"

const settingsReducer=(state=settingsState,action)=>{
    switch(action.type){
        case "SETTINGS_INPUT":
        state={
            ...state,
            settings:{
                ...state.settings,
                [action.nameInput]:action.payload
            }
        }

        break
        case "SETTINGS_STATUS":
        state={
            ...state,
            settings:{
                ...state.settings,
                status:action.payload
            }
        }

        break
        case "SHOW_PHOTO":
        state={
            ...state,
            settings:{
                ...state.settings,
                photo:action.payload
            }
        }

        break
        case "CHANGE_EMAIL_STATUS":
        state={
            ...state,
            settings:{
                ...state.settings,
                changePassStatus:action.payload
            }
            
        }
        break

        default: return state
    }
    return state
}
export default settingsReducer