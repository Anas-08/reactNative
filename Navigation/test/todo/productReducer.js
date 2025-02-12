// type
import { GET_PRODUCTS, GET_SECOND_API_PRODUCTS } from "../../Types/product/productTypes"

const initialState = {
    products: [],
    secondProducts: [],
}

// reducer function
function productReducer(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS: 
            return {  ...state, products: action.payload }
        case GET_SECOND_API_PRODUCTS: 
            return {  ...state, secondProducts: action.payload }
        default : 
            return state
    }
}

export default productReducer
