import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUESTL, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT, USER_DETAILS_FAIL, USER_DETAILS_REQUESTL, USER_DETAILS_SUCCESS} from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST})
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/v1/users/login', {email, password},config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_REQUESTL})
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/v1/users/', {email, password, name},config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const logout = () => async (dispatch) => {
    dispatch({type: LOGOUT})
    localStorage.removeItem('userInfo')
}

export const getUser = (id) => async (dispatch, getState) => {

    const {userLogin: { userInfo }} = getState()

    try {
        dispatch({type: USER_DETAILS_REQUESTL})
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/v1/users/${id}`,config)
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const updateUser = (name, email, password) => async (dispatch, getState) => {

    const {userLogin: { userInfo }} = getState()
    
    try {
        dispatch({type: REGISTER_REQUESTL})
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put('/api/v1/users/', {email, password, name}, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}