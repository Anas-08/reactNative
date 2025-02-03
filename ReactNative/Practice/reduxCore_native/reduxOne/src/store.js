// import of combined reducers
import { combineReducers, createStore } from 'redux';

import cartReducer from './combineReducers/cartReducer';
import wishlistReducer from './combineReducers/wishlistReducer';
import productListReducer from './combineReducers/productListReducer';
import arrayReducer from './combineReducers/arrayReducer';



// it will automatically create the object, like we did for the initial object (when we have done allReducerAtOneFile)
const reducer = combineReducers({
    product: productListReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    array: arrayReducer,
})

  // create store
  const reduxStore = createStore(reducer);

export default reduxStore