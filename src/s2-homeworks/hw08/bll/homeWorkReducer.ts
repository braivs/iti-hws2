import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            let stateCopy = [...state]
            stateCopy.sort((a, b) => b.name > a.name ? -1 : 1)
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
