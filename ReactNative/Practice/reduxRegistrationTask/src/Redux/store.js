// store file

import { combineReducers, createStore } from "redux";
import registrationFormReducer from "./Reducers/registrationReducer";

// combine reducer
// we can add multiple reducers also
const multipleReducers = combineReducers({
    registration: registrationFormReducer
})

const reduxStore = createStore(multipleReducers)

export default reduxStore



