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

        default: return state
    }
    return state
}
export default settingsReducer