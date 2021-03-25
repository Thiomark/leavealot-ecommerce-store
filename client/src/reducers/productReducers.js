import {PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, SINGLE_PRODUCT_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS, PRODUCT_TOP_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS} from '../constants/productConstants'

export const topProductReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_TOP_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_TOP_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_TOP_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const productDetailsReducer = (state = {product: {reviews: []}}, action) => {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return {
                loading: true,
                ...state
            }
        case SINGLE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case SINGLE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}