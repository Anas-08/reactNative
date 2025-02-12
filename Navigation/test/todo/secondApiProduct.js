// types
import { GET_SECOND_API_PRODUCTS,FETCH_PRODUCT_ERROR, FETCH_SECOND_PRODUCTS } from "../../Types/secondApiProduct/secondApiProductType"

// initial state
const inititalState = {
    secondProducts: [],
    loading: false,
    error: ''
}

// reducer function
function secondApiProductReducer(state = inititalState, action){
    switch(action.type){
        case FETCH_SECOND_PRODUCTS:
            return { 
                ...state, 
                loading: true }     

        case GET_SECOND_API_PRODUCTS: 
            return {  
                ...state, 
                secondProducts: action.payload, 
                loading: false, 
                error: '' }

        case FETCH_PRODUCT_ERROR:
            return { 
                ...state,
                loading: false, 
                error: action.payload || "something went wrong"  }

        default : 
            return state

        }
}

export default secondApiProductReducer