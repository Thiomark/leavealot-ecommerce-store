import {ADD_ALERT, REMOVE_ALERT} from '../constants/alertConstants'
import { v4 as uuidv4 } from 'uuid';

export const addAlert = (errorMessage, errorType) => async (dispatch) => {
    const _id = uuidv4()
    dispatch({
        type: ADD_ALERT,
        payload: {errorMessage, errorType, _id}
    })
    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: _id
        })
    }, 5000);
}
