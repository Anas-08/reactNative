// we need to remove the "...state" because the initial is [] empty array not an object (don't need in return also return {} X )

// if we write pattern in this way we called it as duck patterns

// action type
const CART_ADD_ITEM = 'cart/addCartItem'
const CART_REMOVE_ITEM = 'cart/removeCartItem'
const CART_INCREASE_QUANTITY = 'cart/increaseCartQuantity'
const CART_DECREASE_QUANTITY = 'cart/decreaseCartQuantity'

// action function creator
export function addCartItem(product){
    return {
        type: CART_ADD_ITEM, 
        payload: product
    }
}
export function removeCartItem(productId){
    return {
        type: CART_REMOVE_ITEM, 
        payload: {productId}
    }
}
export function increaseCartItemQuantity(productId){
    return {
        type: CART_INCREASE_QUANTITY, 
        payload: {productId}
    }
}
export function decreaseCartItemQuantity(productId){
    return {
        type: CART_DECREASE_QUANTITY, 
        payload: {productId}
    }
}


// reducer function
export default function(state = [], action){
    switch (action.type) {
        case CART_ADD_ITEM:
          // return { ...state, cart: [...state.cart, action.payload] }
          let existingItem = state.find((cartItem) => cartItem.productId === action.payload.productId )
          if(existingItem){
              return state.map((cartItem) => ( cartItem.productId === existingItem.productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem )  )
            }
            return [...state, { ...action.payload, quantity: 1} ];

        case CART_REMOVE_ITEM:
          return state.filter(
              cartItem => cartItem.productId !== action.payload.productId,
            );
           
        case CART_INCREASE_QUANTITY:
         const productExist = state.some((cartItem) => cartItem.productId === action.payload.productId)
          if(!productExist){
              console.log("product not exist in cart.")
              return state
          }
          return state.map((cartItem) => cartItem.productId === action.payload.productId 
              ? { ...cartItem, quantity: cartItem.quantity + 1 } 
              : cartItem
              );
          
        case CART_DECREASE_QUANTITY:
              return  state.map((cartItem) => cartItem.productId === action.payload.productId 
                  ? { ...cartItem, quantity: cartItem.quantity - 1 } 
                  : cartItem
                  ).filter((cartItem) => cartItem.quantity > 0 );
            
        default : 
            return state
    }    

}