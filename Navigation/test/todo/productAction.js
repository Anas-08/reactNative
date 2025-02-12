// type
import { GET_PRODUCTS } from "../../Types/product/productTypes"
// import { GET_SECOND_API_PRODUCTS } from "../../Types/secondApiProduct/secondApiProductType";

// product action ( thunk function with function returning ) using fetch
export function getProducts() {
    return async (dispatch,getState)=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch({ type: GET_PRODUCTS, payload:  data });
    }
}

// export function getSecondApiProducts() {
//     return async (dispatch,getState)=>{
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         dispatch({ type: GET_SECOND_API_PRODUCTS, payload:  data });
//     }
// }
