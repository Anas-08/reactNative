// store file

import { applyMiddleware, combineReducers, createStore } from "redux";
import registrationFormReducer from "./Reducers/registration/registrationReducer"
import productReducer from "./Reducers/product/productReducer";
import {thunk} from "redux-thunk";
import { apiMiddleware, fetchSecondProductsMiddleware } from "./middleware/productApiMiddleware";
import secondApiProductReducer from "./Reducers/secondApiProduct/secondApiProduct";
import todosReducer from "./Reducers/todo/todoReducer";


console.log("thunk ---> ", thunk )


const rootReducers = combineReducers({
    registration: registrationFormReducer,
    product: productReducer,
    secondProduct: secondApiProductReducer,
    todos: todosReducer,
})

// const reduxStore = createStore(rootReducers, applyMiddleware(thunk, apiMiddleware))
const reduxStore = createStore(rootReducers, applyMiddleware(thunk))

export default reduxStore

