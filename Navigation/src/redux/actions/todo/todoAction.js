// Action
// import axios from "axios";
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../../types/todo/todoTypes";

const API_URL = 'https://dummyjson.com/todos'

export const getTodos = () => async (dispatch) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch({
      type: GET_TODOS,
      payload: data.todos,
    });
  };

  export function addTodo(newData){
    console.log("get from the dispatch method from user ---> ", newData)
    return async function(dispatch){

      const response = await fetch(`${API_URL}/${"add"}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify(todo),
            body: JSON.stringify({
              id: Date.now(), 
              todo: newData,
              completed: false,
              userId: 100,
            }),
          });
          console.log("response post fetch ----> ", response)
          const data = await response.json()
          console.log("response post fetch data ----> ", data)


      dispatch({ type: ADD_TODO, payload: data })
    }
  }

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
  console.log("from update action ---> ", id, updatedTodo)
  console.log("API ---> ", `${API_URL}/${id}`)

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      todo: updatedTodo,
    }),
  })
  console.log("response ---> ", response)
  const data = await response.json();
  console.log("data response ----> ", data)
  dispatch({
    type: UPDATE_TODO,
    payload: updatedTodo,
  })
}

export function deleteTodo(id){
  return async function(dispatch){
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    dispatch({ type: DELETE_TODO, payload: id })
  }
}

// export function getSecondApiProducts() {
//     return async (dispatch,getState)=>{
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         dispatch({ type: GET_SECOND_API_PRODUCTS, payload:  data.products });
//     }
// }
