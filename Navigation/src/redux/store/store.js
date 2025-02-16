import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";

// import registrationFormReducer from "./Reducers/registration/registrationReducer"
// import productReducer from "./Reducers/product/productReducer";
// import secondApiProductReducer from "./Reducers/secondApiProduct/secondApiProduct";

import todosReducer from "../reducers/todo/todoReducer";
import productReducer from "../reducers/productList";


console.log("thunk ---> ", thunk )


const rootReducers = combineReducers({
    // registration: registrationFormReducer,
    // product: productReducer,
    // secondProduct: secondApiProductReducer,
    todos: todosReducer,
    product: productReducer, 
    
})

// const reduxStore = createStore(rootReducers, applyMiddleware(thunk, apiMiddleware))
const reduxStore = createStore(rootReducers, applyMiddleware(thunk))

export default reduxStore