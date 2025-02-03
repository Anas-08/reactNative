// import of combined reducers
import { combineReducers, createStore } from 'redux';
import productListReducer from './src/combineReducers/productListReducer';
import wishlistReducer, {  wishlistAddItem, wishlistRemoveItem } from './src/combineReducers/wishlistReducer';
import cartReducer, { addCartItem, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from './src/combineReducers/cartReducer';

// it will automatically create the object, like we did for the initial object (when we have done allReducerAtOneFile)
const reducer = combineReducers({
   product: productListReducer,
   cart: cartReducer,
   wishlist: wishlistReducer,
})

  // create store
  const reduxStore = createStore(reducer);
  console.log(reduxStore)
    reduxStore.subscribe(()=> console.log(reduxStore.getState()))

   // CartItem
   reduxStore.dispatch(addCartItem(1));
   reduxStore.dispatch(addCartItem(10));
   reduxStore.dispatch(addCartItem(2));
   reduxStore.dispatch(removeCartItem(1));
   reduxStore.dispatch(increaseCartItemQuantity(2)) // quantity 2
   reduxStore.dispatch(increaseCartItemQuantity(2)) // quantity 3
   reduxStore.dispatch(decreaseCartItemQuantity(2)) // quantity 2
   reduxStore.dispatch(decreaseCartItemQuantity(2)) // quantity 1
   reduxStore.dispatch(decreaseCartItemQuantity(2)) // item will be removed from cart

   reduxStore.dispatch(wishlistAddItem(1));
   reduxStore.dispatch(wishlistAddItem(2));
   reduxStore.dispatch(wishlistRemoveItem(1));
  