import { GET_SECOND_API_PRODUCTS, FETCH_PRODUCT_ERROR, FETCH_SECOND_PRODUCTS } from "../../Types/secondApiProduct/secondApiProductType";

// export const fetchSecondProducts = () => ({
//     type: FETCH_SECOND_PRODUCTS
// });

// export const getSecondApiProducts = (products) => ({
//     type: GET_SECOND_API_PRODUCTS,
//     payload: products
// });

// export const fetchProductError = (error) => ({
//     type: FETCH_PRODUCT_ERROR,
//     payload: error
// });

// export const fetchSecondProducts = () => {
//     console.log("fetchSecondProducts ---> ")
//     return {  type: FETCH_SECOND_PRODUCTS }
// }
// export const getSecondApiProducts = (products) => {
//     console.log("getSecondApiProducts ---> ", products)
//     return {  type: GET_SECOND_API_PRODUCTS, payload: products }
// }
// export const fetchProductError = (err) => {
//     console.log("fetchProductError ---> ", err)
//     return {  type: FETCH_PRODUCT_ERROR, payload: err }
// }


// simple call
export function getSecondApiProducts() {
    return async (dispatch,getState)=>{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        dispatch({ type: GET_SECOND_API_PRODUCTS, payload:  data.products });
    }
}

