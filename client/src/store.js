import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer, topProductReducer} from './reducers/productReducers'
import {cartListReducer} from './reducers/cartReducers'
import {userLoginReducer, userRegisterReducer, userDetailsReducer} from './reducers/userReducers'
import {alertListReducer} from './reducers/alertReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    topRatedProduct: topProductReducer,
    cart: cartListReducer,
    siteSettings: (state = {}) => state,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    alerts: alertListReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    siteSettings: {
        websiteCurreny: 'R',
    },
    cart: {
        cartItems: cartItemsFromStorage
    },
    userLogin: {
        userInfo: userFromStorage
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store