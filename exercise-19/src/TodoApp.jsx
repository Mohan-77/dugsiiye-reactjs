import './TodoApp.css'
import { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import TodoContext from './TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}
export default TodoApp