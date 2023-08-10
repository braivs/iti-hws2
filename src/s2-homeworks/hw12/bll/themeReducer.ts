const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: LoadingActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): LoadingActionType => ({ type: 'SET_THEME_ID', id }) // fix any

export type initStateType = {
    themeId: number
}

type LoadingActionType = {
    type: 'SET_THEME_ID'
    id: number
}
