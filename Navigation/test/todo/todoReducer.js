// types

import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from "../../Types/todo/todoTypes";

const initialState = {
    todos: []
}

export default function todosReducer(state = initialState, action){
    switch (action.type) {
      case GET_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          ),
        };
      case DELETE_TODO:
        // return {
        //   ...state,
        //   todos: state.todos.filter((todo) => todo.id !== action.payload),
        // };
        return {
          ...state, 
          todos: state.todos.filter()
        }

      default:
        return state;
    }
  };