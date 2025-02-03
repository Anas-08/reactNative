  import { createStore } from 'redux'
  
  // initial state
    const initialState = {
        count: 0
    }

    // reducer function
    function counterReducer(state = initialState, action){
        switch(action.type){
            case "counter/increment": 
                return { state: state.count + 1 }    
            case "counter/decrement": 
                return { state: state.count ? state.count - 1 : state }
            case "counter/increaseBy":
                return { state: state.state + action.payload }
            case "counter/decreaseBy":
                return { state: state > 0 ? state.state - action.payload : state }
            default : return state
        }
    }

    // create store
    const reduxStore =  createStore(counterReducer)

    // store function (getState, subscribe, dispatch)
    reduxStore.subscribe(()=>{
        console.log(reduxStore.getState())
       
    })

   reduxStore.dispatch({type: "counter/increment"})
   reduxStore.dispatch({type: "counter/increaseBy", payload: 10})
   reduxStore.dispatch({type: "counter/decrement"})
   reduxStore.dispatch({type: "counter/decreaseBy", payload: 5})
//    unsubscribe()