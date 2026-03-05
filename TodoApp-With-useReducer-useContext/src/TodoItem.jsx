import React from 'react'
import { useContext } from 'react';
import TodoContext from './TodoContext';

export default function TodoItem({ todo }) {
  const {dispatch} = useContext(TodoContext);
  return (
    <div>
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' , cursor: 'pointer' }}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
                Delete
            </button>
        </li>
    </div>
  )
}


