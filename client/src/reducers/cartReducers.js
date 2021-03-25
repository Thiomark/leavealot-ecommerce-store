import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'

export const cartListReducer = (state = {cartItems: []}, action) => {

    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const doesItemExiost = state.cartItems.find(x => x._id === item._id)
            if(doesItemExiost){
                return {
                    ...state, 
                    cartItems: state.cartItems.map(x => x._id === item._id ? item : x)
                }
            }else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            const itemsInCart = state.cartItems.filter(x => x._id !== action.payload._id)
            return {
                ...state,
                cartItems: itemsInCart
            }
        default:
            return state;
    }
}
