import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../../Types/todo/todoTypes";

const API_URL = 'https://dummyjson.com/todos'

export const getTodos = () => async (dispatch) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch({
      type: GET_TODOS,
      payload: data.todos,
    });
  };

export const addTodo = (todo) => async (dispatch) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });
  const data = await response.json();
  dispatch({
    type: UPDATE_TODO,
    payload: data,
  });
};

// export const deleteTodo = (id) => async (dispatch) => {
//   await fetch(`${API_URL}/${id}`, {
//     method: 'DELETE',
//   });
//   // console.log()
//   dispatch({
//     type: DELETE_TODO,
//     payload: id,
//   });
// };

export const deleteTodo = (id) => async() => {
  fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(console.log); // 
}