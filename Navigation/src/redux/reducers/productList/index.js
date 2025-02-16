
const initialState = {
    cartItems: [],
    productList: [],
}

function productReducer(state = initialState, action){
    console.log("actions in reducer function ---> ", action)
    switch(action.type){
        case "UPDATE_LOADING": {
            const oldState = {...state}
            oldState.isLoading = action.value
            return oldState
        }

        case "UPDATE_ERROR": {
            const oldState = {...state}
            oldState.error = action.value
            return oldState
        }
        case "UPDATE_DATA": {
            const oldState = {...state}
            oldState.productList = action.value
            console.log("oldState product ---> ", oldState)
            return oldState
        }

        default: 
            return state
    }
}

export default productReducer