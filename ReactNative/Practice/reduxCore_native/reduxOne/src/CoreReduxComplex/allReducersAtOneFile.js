// -> it is a test file of how the reducer function work with multiple values in initial state,
// and also the working of store methods(getState, dispatch)
// -> copy all in app.js and run
// -> if we want to write the multiple reducers, go to the combine reducer folder (main logic how it work's with different state)

import {createStore} from 'redux';
import {productList} from './src/CoreReduxComplex/productList';

// initial state
const initialState = {
    product: productList,
    cart: [],
    wishlist: [],
  };

  // reducer function
  function productReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case 'cart/addCartItem':
        // return { ...state, cart: [...state.cart, action.payload] }
        return {...state, cart: [...state.cart, action.payload]}

      case 'cart/removeCartItem':
        return {
          ...state,
          cart: state.cart.filter(
            cartItem => cartItem.productId !== action.payload.productId,
          ),
        }

      case 'cart/increaseCartQuantity':
       const productExist = state.cart.some((cartItem) => cartItem.productId === action.payload.productId)
        if(!productExist){
            console.log("product not exist in cart.")
            return state
        }
        return {
            ...state, 
            cart: state.cart.map((cartItem) => cartItem.productId === action.payload.productId 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
            )
        }

        case "cart/decreaseCartQuantity":
            return {
                ...state, 
                cart: state.cart.map((cartItem) => cartItem.productId === action.payload.productId 
                ? { ...cartItem, quantity: cartItem.quantity - 1 } 
                : cartItem
                ).filter((cartItem) => cartItem.quantity > 0 )
            }

        case "wishlist/addItem":
            return {...state, wishlist: [...state.wishlist, action.payload]}

        case "wishlist/removeItem":
            return {
                ...state,
                wishlist: state.wishlist.filter( wishlistItem => wishlistItem.productId !== action.payload.productId)
            }

       default:
        return state;
    }
  }

  // create store
  const reduxStore = createStore(productReducer);

  // store function (getState, subscribe, dispatch)
  reduxStore.subscribe(() => {
    console.log(reduxStore.getState());
  });

  // addCartItem
  reduxStore.dispatch({type: 'cart/addCartItem', payload: {productId: 1, quantity: 1}});
  reduxStore.dispatch({
    type: 'cart/addCartItem',
    payload: {productId: 2, quantity: 1},
  });
  reduxStore.dispatch({
    type: 'cart/addCartItem',
    payload: {productId: 3, quantity: 1},
  });
  reduxStore.dispatch({type: 'cart/removeCartItem', payload: {productId: 2}});
  reduxStore.dispatch({
    type: 'cart/increaseCartQuantity',
    payload: {productId: 3},
  });
  reduxStore.dispatch({
    type: 'cart/increaseCartQuantity',
    payload: {productId: 12},
  });
  reduxStore.dispatch({
    type: 'cart/increaseCartQuantity',
    payload: {productId: 3},
  });
  reduxStore.dispatch({
    type: 'cart/decreaseCartQuantity',
    payload: {productId: 3},
  });
  reduxStore.dispatch({
    type: 'cart/decreaseCartQuantity',
    payload: {productId: 3},
  });
  reduxStore.dispatch({
    type: 'cart/decreaseCartQuantity',
    payload: {productId: 3},
  });
  reduxStore.dispatch({
    type: 'cart/decreaseCartQuantity',
    payload: {productId: 3},
  });
  reduxStore.dispatch({
    type: 'cart/decreaseCartQuantity',
    payload: {productId: 3},
  });
  
  reduxStore.dispatch({
    type: 'wishlist/addItem',
    payload: {productId: 3},
  });

  reduxStore.dispatch({
    type: 'wishlist/removeItem',
    payload: {productId: 3},
  });

  reduxStore.dispatch({
    type: 'wishlist/removeItem',
    payload: {productId: 3},
  });