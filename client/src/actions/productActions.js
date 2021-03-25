import {PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS, SINGLE_PRODUCT_FAIL, PRODUCT_TOP_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS} from '../constants/productConstants'
import axios from 'axios'

export const getAllProducts = (keyword = '') => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get(`/api/v1/products?keyword=${keyword}`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const topProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_TOP_REQUEST})
        const {data} = await axios.get(`/api/v1/products/top`)
        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const getASingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({type: SINGLE_PRODUCT_REQUEST})
        const {data} = await axios.get(`/api/v1/products/${id}`)
        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

