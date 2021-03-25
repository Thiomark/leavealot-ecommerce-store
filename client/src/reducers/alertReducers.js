import {ADD_ALERT, REMOVE_ALERT} from '../constants/alertConstants'

export const alertListReducer = (state = {errorMessages: []}, action) => {

    switch (action.type) {
        case ADD_ALERT:
            return {
                ...state, 
                errorMessages: [...state.errorMessages, action.payload ]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                errorMessages: state.errorMessages.filter(alert =>  alert._id !== action.payload)
            }
        default:
            return state;
    }
}
