import {LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUESTL, REGISTER_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUESTL, USER_DETAILS_SUCCESS} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_REQUESTL:
            return {
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const userDetailsReducer = (state = { user: {}}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUESTL:
            return {
                ...state, loading: true
            }
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const userUpdateDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUESTL:
            return {
                loading: true
            }
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
