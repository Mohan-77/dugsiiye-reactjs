import React, { useReducer } from 'react'
import { initialState, reducer } from './reducer'
import TodoContext from './TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';




function TodoApp() {

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {/* Your components go here */}
      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default TodoApp